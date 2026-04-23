/**
 * POST /api/rebuild[?s=SECRET]
 * Triggered by Odoo on blog.post publish (blog_id = Digital Stackers).
 * Dispatches a GitHub Actions workflow that rebuilds and redeploys
 * the site — fresh Odoo blog content is baked in at build time.
 *
 * Env vars (Cloudflare Pages production):
 *   GITHUB_TOKEN     PAT with `repo` scope
 *   GITHUB_REPO      waqasriasatjutt/digital-stackers-website
 *   REBUILD_SECRET   shared secret (same value in the Odoo webhook URL)
 */

interface Env {
  GITHUB_TOKEN: string;
  GITHUB_REPO: string;
  REBUILD_SECRET: string;
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { 'Content-Type': 'application/json', ...CORS } });

export const onRequestOptions: PagesFunction<Env> = () =>
  new Response(null, { status: 204, headers: CORS });

export const onRequest: PagesFunction<Env> = async ({ request, env }) => {
  if (request.method !== 'POST' && request.method !== 'GET') {
    return json({ ok: false, error: 'Method not allowed' }, 405);
  }
  const url = new URL(request.url);
  const provided = url.searchParams.get('s') || request.headers.get('x-rebuild-secret') || '';
  if (!env.REBUILD_SECRET || provided !== env.REBUILD_SECRET) {
    return json({ ok: false, error: 'Forbidden' }, 403);
  }
  if (!env.GITHUB_TOKEN || !env.GITHUB_REPO) {
    return json({ ok: false, error: 'Server not configured' }, 500);
  }
  try {
    const r = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}/dispatches`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: 'application/vnd.github+json',
        'Content-Type': 'application/json',
        'User-Agent': 'ds-rebuild',
      },
      body: JSON.stringify({ event_type: 'odoo-blog-publish' }),
    });
    if (!r.ok) {
      const t = await r.text();
      return json({ ok: false, error: `GitHub ${r.status}: ${t.slice(0, 200)}` }, 502);
    }
    return json({ ok: true });
  } catch (e: any) {
    return json({ ok: false, error: e.message || 'Unknown error' }, 502);
  }
};
