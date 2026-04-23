export const SITE = {
  name: 'Digital Stackers',
  tagline: 'Data-driven digital marketing that compounds.',
  description: 'Full-service digital marketing agency — SEO, Paid Ads, Social, Branding, Web, Automation. We engineer growth that scales with your business.',
  url: 'https://digital-stackers.com',
  email: 'hello@digital-stackers.com',
  phone: '+92 315 411 4748',
  whatsapp: 'https://wa.me/923154114748',
  city: 'Karachi',
  country: 'Pakistan',
  address: 'Karachi, Pakistan',
  social: {
    linkedin: 'https://linkedin.com/company/digital-stackers',
    twitter: 'https://twitter.com/digitalstackers',
    instagram: 'https://instagram.com/digitalstackers',
    facebook: 'https://facebook.com/digitalstackers',
  },
  booking: 'https://wa.me/923154114748', // replace with Calendly later
};

export const STATS = [
  { value: '$24M+', label: 'Ad spend managed' },
  { value: '320+',  label: 'Clients scaled' },
  { value: '4.2x',  label: 'Avg return on ad spend' },
  { value: '12M+',  label: 'Qualified leads generated' },
];

export const HIGHLIGHTS = [
  { icon: '📈', title: 'Performance-first',  desc: 'Every campaign tied to revenue. Dashboards you can actually read.' },
  { icon: '🧪', title: 'A/B tested',          desc: 'We test creatives, landing pages, audiences — and kill what underperforms.' },
  { icon: '⚡', title: 'Fast deployment',      desc: 'Week 1 audit. Week 2 live. We don\'t drag.' },
  { icon: '🤝', title: 'Senior operators',    desc: 'Your account is run by a senior strategist — not an intern.' },
  { icon: '🔍', title: 'Transparent reporting', desc: 'Weekly Loom walkthroughs. Real-time dashboard access. No black boxes.' },
  { icon: '🌍', title: 'Global reach',         desc: 'Campaigns live across GCC, Europe, North America, APAC.' },
];

/* ═══════════════════════════════════════════════════════════════
 * SERVICES (7)
 * ═══════════════════════════════════════════════════════════════ */
export const SERVICES = [
  {
    slug: 'seo',
    title: 'SEO',
    category: 'Growth',
    tagline: 'Rank for the queries that actually convert.',
    icon: '🔍',
    short: 'On-page, off-page, and technical SEO that compounds over 12+ months. We focus on commercial-intent keywords, not vanity traffic.',
    problems: [
      'Your traffic plateaued — or worse, declined after the latest core update',
      'You\'re ranking for keywords that don\'t drive revenue',
      'Technical issues (site speed, indexation, schema) are strangling your crawl budget',
      'Content is thin, duplicated, or AI-spam that Google already penalized',
    ],
    includes: [
      'Full technical audit (Core Web Vitals, crawlability, schema, internal links)',
      'Competitor gap analysis — where they rank, where you don\'t',
      'Commercial-intent keyword research (BOFU > MOFU > TOFU priority)',
      'On-page optimization: titles, meta, headings, internal linking',
      'Content strategy + editorial calendar (hub + spoke model)',
      'Link-building via digital PR and strategic partnerships',
      'Monthly reporting: rankings, traffic, conversions, revenue attribution',
    ],
    tools: ['Ahrefs', 'Semrush', 'Screaming Frog', 'GSC', 'GA4', 'Lighthouse'],
    deliverable: 'First-page rankings for 20+ commercial keywords in 6 months',
  },
  {
    slug: 'paid-ads',
    title: 'Paid Ads (PPC)',
    category: 'Growth',
    tagline: 'Google + Meta ads that return every dollar, and more.',
    icon: '🎯',
    short: 'Google Ads, Meta Ads, TikTok Ads, LinkedIn Ads — we build, test, and scale paid campaigns designed around your CAC and LTV targets.',
    problems: [
      'Your CPA keeps climbing, but conversions aren\'t',
      'You\'re burning budget on broad match and poor audience targeting',
      'Landing pages don\'t match ad intent — high click, low convert',
      'No proper attribution — you can\'t tell which campaign actually drove revenue',
    ],
    includes: [
      'Account audit + benchmark against your category',
      'Conversion tracking setup (GA4, Meta CAPI, server-side GTM)',
      'Full campaign build: search, performance max, display, retargeting',
      'Creative production (static + video) — in-house or with partners',
      'Landing page design matched to ad intent',
      'Weekly optimization + daily budget checks',
      'Monthly strategy call + revenue-attributed reporting',
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'TikTok Ads', 'LinkedIn Campaign Manager', 'Triple Whale', 'Hyros'],
    deliverable: '3x+ ROAS within 90 days — or we refund the management fee',
  },
  {
    slug: 'social-media',
    title: 'Social Media Marketing',
    category: 'Brand',
    tagline: 'Organic social that builds community, not just follower count.',
    icon: '📱',
    short: 'Instagram, LinkedIn, TikTok, X — organic social managed by real humans who understand each platform\'s algorithm and culture.',
    problems: [
      'You post when you remember, not when your audience is active',
      'Engagement is flat — reach but no conversion',
      'Content looks the same across platforms (and feels generic)',
      'No founder/personal brand presence — your competitors are winning on LinkedIn',
    ],
    includes: [
      'Platform audit + audience deep-dive',
      'Content pillars tied to business goals (authority, demand gen, conversion)',
      'Monthly content calendar + scripts',
      'Reels, TikToks, carousels — production + editing',
      'Community management (DMs, comments, lead replies)',
      'Founder thought-leadership on LinkedIn / X',
      'Weekly analytics + trend-riding playbook',
    ],
    tools: ['Later', 'Buffer', 'CapCut', 'Canva', 'Figma', 'Metricool'],
    deliverable: '3–5x engagement + qualified DM leads within 60 days',
  },
  {
    slug: 'web-development',
    title: 'Web Design & Development',
    category: 'Foundation',
    tagline: 'Fast, conversion-optimized websites that pay for themselves.',
    icon: '💻',
    short: 'Astro, Next.js, Webflow, WordPress — we build fast, SEO-ready sites designed around conversion, not just aesthetics.',
    problems: [
      'Your site takes 5+ seconds to load — bounces are killing SEO and ads',
      'Mobile experience is broken — 60% of users leave before scrolling',
      'No clear CTAs, so visitors never book or buy',
      'CMS is so hard to edit that marketing ends up never updating the site',
    ],
    includes: [
      'UX audit + wireframes',
      'Visual design (Figma) — brand-aligned, conversion-first',
      'Front-end build: Astro / Next.js / Webflow / WordPress',
      'Core Web Vitals optimization (target: all green)',
      'SEO foundation: schema, sitemap, OG, canonical',
      'Analytics + conversion tracking wired end-to-end',
      'CMS training + editable block library',
      '30-day post-launch support',
    ],
    tools: ['Astro', 'Next.js', 'Webflow', 'WordPress', 'Figma', 'Cloudflare', 'Vercel'],
    deliverable: 'Live site in 4–6 weeks, 90+ Lighthouse score, CMS your team can actually use',
  },
  {
    slug: 'branding',
    title: 'Branding & Creative',
    category: 'Brand',
    tagline: 'A brand that looks like a category leader from day one.',
    icon: '🎨',
    short: 'Logo, identity system, brand book, pitch decks, ad creatives — visual work that makes your business look twice its size.',
    problems: [
      'Your brand feels dated — competitors look 5 years ahead',
      'Every touchpoint (site, deck, ads) looks inconsistent',
      'No style guide, so every designer reinvents it',
      'Creatives for ads are produced ad-hoc and underperform',
    ],
    includes: [
      'Brand discovery workshop (positioning, tone, audience)',
      'Logo + visual identity (colors, typography, iconography)',
      'Brand guidelines document (PDF + Figma library)',
      'Pitch / sales deck template',
      'Social templates (stories, posts, reels)',
      'Ad creative library — static + video',
      'Rollout support across site, product, print',
    ],
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop', 'After Effects', 'Midjourney'],
    deliverable: 'Complete brand system in 3–4 weeks, reusable across every touchpoint',
  },
  {
    slug: 'marketing-automation',
    title: 'Marketing Automation / CRM',
    category: 'Operations',
    tagline: 'Workflows that nurture leads while you sleep.',
    icon: '⚙️',
    short: 'HubSpot, Odoo CRM, ActiveCampaign, Klaviyo — we design the workflows, not just install the tool.',
    problems: [
      'Leads fall through the cracks between marketing and sales',
      'No lead scoring — sales waste time on unqualified contacts',
      'Email sequences stopped at "welcome" — no nurture, no re-engagement',
      'Attribution is broken — you can\'t tell which channel drives closes',
    ],
    includes: [
      'CRM audit + data hygiene cleanup',
      'Lead scoring + routing rules',
      'Lifecycle stages + pipeline stages mapped',
      'Welcome + nurture + re-engagement email sequences',
      'SMS + WhatsApp automations',
      'Sales → marketing feedback loops',
      'Dashboards for lead velocity, cycle time, channel ROI',
    ],
    tools: ['HubSpot', 'Odoo CRM', 'ActiveCampaign', 'Klaviyo', 'Zapier', 'Make'],
    deliverable: 'Full funnel automated in 3 weeks — lead → MQL → SQL → customer',
  },
  {
    slug: 'email-marketing',
    title: 'Email Marketing',
    category: 'Growth',
    tagline: 'The highest-ROI channel you\'re probably under-using.',
    icon: '📧',
    short: 'Newsletter, promo, lifecycle, win-back — email programs that print money at $36+ per $1 spent.',
    problems: [
      'Open rates under 20%, clicks under 2%',
      'List is stale — no segmentation, no re-engagement',
      'Deliverability is tanking because of poor sender reputation',
      'No welcome series, no cart abandonment, no winback',
    ],
    includes: [
      'Deliverability audit + domain warmup (SPF, DKIM, DMARC)',
      'List segmentation by behavior, lifecycle, value',
      'Welcome series (5–7 emails)',
      'Cart abandonment / browse abandonment flows',
      'Winback + re-engagement flows',
      'Weekly broadcast strategy + calendar',
      'A/B testing subject lines, send times, offers',
    ],
    tools: ['Klaviyo', 'Mailchimp', 'Sendgrid', 'Postmark', 'HubSpot', 'ActiveCampaign'],
    deliverable: '30%+ open rate and $40+ revenue per recipient within 90 days',
  },
];

/* ═══════════════════════════════════════════════════════════════
 * CASE STUDIES (6 — sample/illustrative)
 * ═══════════════════════════════════════════════════════════════ */
export const CASE_STUDIES = [
  {
    slug: 'saas-paid-ads-scale',
    title: 'B2B SaaS — 5.8x ROAS on Google + LinkedIn in 4 months',
    industry: 'B2B SaaS',
    services: ['paid-ads', 'email-marketing', 'marketing-automation'],
    client: 'Mid-market project management SaaS',
    challenge: 'Plateaued at 12 MQLs/month from paid with a $180 CAC ceiling. Lead quality was poor — sales team was frustrated.',
    strategy: 'Rebuilt the funnel from the top: ICP-aligned landing pages, intent-based audience targeting, MQL scoring tied to product activity. Shifted from broad awareness to bottom-of-funnel commercial-intent keywords.',
    execution: 'Google Ads brand + category search + RLSA. LinkedIn ABM for top-100 accounts. Email nurture based on lead score. Weekly creative refresh.',
    metrics: [
      { k: 'ROAS',           v: '5.8x' },
      { k: 'MQL/month',      v: '87' },
      { k: 'CAC reduction',  v: '-64%' },
      { k: 'Sales velocity', v: '+3.2x' },
    ],
    duration: '4 months',
  },
  {
    slug: 'ecommerce-seo-growth',
    title: 'DTC eCommerce — 420% organic traffic growth in 9 months',
    industry: 'eCommerce / DTC',
    services: ['seo', 'web-development', 'email-marketing'],
    client: 'Beauty and skincare DTC brand',
    challenge: 'Relying 92% on paid ads. Organic search was less than 3k sessions/month. High dependency, low defensibility.',
    strategy: 'Hub-and-spoke content model around 4 commercial pillar topics. Technical SEO overhaul (Core Web Vitals, PLP/PDP schema). Strategic link acquisition via digital PR and founder-led content.',
    execution: 'Published 65 long-form articles. Refactored site to Astro for speed. Built 140+ quality backlinks. Structured data for every product + collection.',
    metrics: [
      { k: 'Organic sessions',  v: '3k → 15.6k' },
      { k: 'Keywords (top 10)', v: '28 → 412' },
      { k: 'Organic revenue',   v: '+640%' },
      { k: 'Paid dependency',   v: '92% → 51%' },
    ],
    duration: '9 months',
  },
  {
    slug: 'local-service-booked-calendar',
    title: 'Local service business — booked solid in 60 days',
    industry: 'Home services',
    services: ['seo', 'paid-ads', 'web-development'],
    client: 'HVAC contractor — 3 cities',
    challenge: '35% of calendar empty each week. Over-reliant on word-of-mouth. No website lead capture. Zero local SEO.',
    strategy: 'Local SEO (GBP optimization + citation cleanup + reviews), Google Local Services Ads, plus a conversion-optimized site with instant-quote form.',
    execution: 'Rebuilt GBP listings for 3 locations. Got 180+ reviews. Google LSA launched. New Astro site with area-specific landing pages + instant-quote.',
    metrics: [
      { k: 'Monthly leads',    v: '42 → 210' },
      { k: 'Cost per lead',    v: '$55 → $12' },
      { k: 'Calendar booked',  v: '65% → 96%' },
      { k: 'Review rating',    v: '4.1 → 4.9' },
    ],
    duration: '60 days',
  },
  {
    slug: 'b2b-brand-rebuild',
    title: 'Enterprise SaaS rebrand + new site — 2.4x inbound leads',
    industry: 'Enterprise SaaS',
    services: ['branding', 'web-development', 'seo'],
    client: 'Cybersecurity platform targeting Fortune 1000',
    challenge: 'Outdated brand. Website looked like a 2014 startup. Couldn\'t close mid-market deals because enterprise buyers didn\'t take them seriously.',
    strategy: 'Full rebrand (logo, identity, messaging framework) + new Next.js site designed around enterprise buyer journey. Solution-led positioning.',
    execution: 'Brand workshop, identity system, messaging framework. New site with industry-specific hub pages. Refreshed pitch deck + pitch materials.',
    metrics: [
      { k: 'Inbound leads',      v: '+240%' },
      { k: 'Enterprise deals',   v: '+380%' },
      { k: 'Brand perception',   v: 'Mature / trusted' },
      { k: 'Site bounce',        v: '64% → 29%' },
    ],
    duration: '12 weeks',
  },
  {
    slug: 'social-founder-led-growth',
    title: 'Founder-led LinkedIn — $4.1M pipeline from content',
    industry: 'Professional services',
    services: ['social-media', 'marketing-automation'],
    client: 'Management consultancy',
    challenge: 'Senior consultants had the expertise but zero social presence. Founder had 800 LinkedIn followers and no content engine.',
    strategy: 'Ghostwriting + content engine for founder + 3 senior partners. Focused on thought leadership tied to business pain points (not vanity).',
    execution: 'Daily LinkedIn posts (4–5x weekly), 2 long-form articles/month. Inbound DMs routed to CRM. Monthly founder webinar.',
    metrics: [
      { k: 'LinkedIn followers', v: '800 → 38k' },
      { k: 'Inbound DMs',        v: '1/mo → 65/mo' },
      { k: 'Pipeline',           v: '$4.1M in 12 months' },
      { k: 'Cost per lead',      v: '$0 (organic)' },
    ],
    duration: 'Ongoing (12 months)',
  },
  {
    slug: 'marketplace-automation',
    title: 'Online marketplace — automation saved 22 hrs/week',
    industry: 'Marketplace',
    services: ['marketing-automation', 'email-marketing'],
    client: 'B2B marketplace (vendors + buyers)',
    challenge: 'Team of 2 marketers manually running every email, nurture, and lead hand-off. Attribution was a spreadsheet. Leads rotting.',
    strategy: 'Moved to HubSpot + Klaviyo dual stack. Built 14 automated flows covering both sides of the marketplace (vendor onboarding + buyer nurture).',
    execution: '4-week sprint: lead scoring, lifecycle stages, 7 email flows, 2 SMS flows, MQL → SQL handoff. Dashboards for every stage.',
    metrics: [
      { k: 'Marketing time saved', v: '22 hrs/week' },
      { k: 'Lead response time',   v: '4h → 2min' },
      { k: 'Nurture conversion',   v: '+180%' },
      { k: 'Attribution clarity',  v: 'Full funnel' },
    ],
    duration: '4 weeks',
  },
];

/* ═══════════════════════════════════════════════════════════════
 * PRICING
 * ═══════════════════════════════════════════════════════════════ */
export const PRICING = [
  {
    name: 'Starter',
    price: 'From $1,500',
    period: '/month',
    desc: 'Single channel, tight focus. Ideal for small businesses just getting serious about marketing.',
    features: [
      '1 channel (SEO or Paid Ads or Social)',
      'Up to $5k/mo ad spend managed',
      'Weekly optimization',
      'Monthly strategy call',
      'Shared Slack channel',
    ],
    cta: 'Start small',
    highlight: false,
  },
  {
    name: 'Growth',
    price: 'From $3,800',
    period: '/month',
    desc: 'Multi-channel stack for businesses ready to scale. Our most popular package.',
    features: [
      '3 channels (any mix)',
      'Up to $25k/mo ad spend managed',
      'Landing page design included',
      'Bi-weekly strategy calls',
      'Real-time dashboard access',
      'Creative production (ads + social)',
    ],
    cta: 'Most popular',
    highlight: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    period: 'tailored scope',
    desc: 'Enterprise-grade full-funnel marketing. Dedicated team, weekly standups, CFO-ready reporting.',
    features: [
      'All channels + dedicated team',
      'Unlimited ad spend managed',
      'Full creative studio access',
      'Weekly strategy + standup',
      'CFO-ready attribution reporting',
      'CMO-as-a-service available',
    ],
    cta: 'Talk to us',
    highlight: false,
  },
];

/* ═══════════════════════════════════════════════════════════════
 * FAQS — SEO schema
 * ═══════════════════════════════════════════════════════════════ */
export const FAQS = [
  { q: 'How soon will we see results?', a: 'Paid ads: first results in 2–3 weeks (after conversion tracking + creative testing). SEO: 3–6 months for meaningful ranking lifts, 6–12 for compounding traffic. Email & automation: 2–4 weeks once flows are live. We report every week so you see the trajectory early.' },
  { q: 'What industries do you work with?', a: 'We\'ve delivered for SaaS (B2B + B2C), eCommerce / DTC, professional services, home services, marketplaces, and enterprise tech. If your customer journey can be measured, we can improve it.' },
  { q: 'Do you sign a long contract?', a: 'Our standard engagement is 3–6 months because that\'s how long compounding growth takes to show up. Month-to-month is available at a 20% premium. We don\'t do 12-month lock-ins.' },
  { q: 'Who actually runs my account — a senior or an intern?', a: 'Every account is run by a senior strategist with 5+ years in their specialty. We don\'t hand you off to interns after signing. You get the same person from kickoff to scale.' },
  { q: 'How do you report performance?', a: 'Real-time dashboards (Looker / custom BI) — you have 24/7 access. Plus weekly 5-minute Loom walkthroughs and a monthly 30-minute strategy call. Everything tied to revenue, not vanity metrics.' },
  { q: 'Do you manage ad spend directly, or go through our account?', a: 'Always your account, your credit card. We log in as marketing users — so if we ever part ways, you keep every campaign, pixel, and data point.' },
  { q: 'Can you work with our existing agency / in-house team?', a: 'Yes. We often work alongside in-house marketing teams — handling specific channels (paid, SEO, email) while they run brand and content. We\'re collaborative, not territorial.' },
  { q: 'What\'s your guarantee?', a: 'For paid ads: 3x ROAS within 90 days or we refund the management fee. For SEO: first-page rankings for 20+ target keywords in 6 months or we work free until we get there.' },
];

/* PROCESS */
export const PROCESS = [
  { n: 1, title: 'Discover',  desc: 'Free 30-min audit call. We map your current funnel, goals, and gaps — with real numbers.' },
  { n: 2, title: 'Strategize', desc: 'We write a 2-page growth plan: channels, budget, timeline, projected outcomes. You review before signing anything.' },
  { n: 3, title: 'Build',      desc: 'Week 1–2: tracking, creative, landing pages, automation flows — all engineered before we spend a dollar.' },
  { n: 4, title: 'Launch',     desc: 'Campaigns go live. Daily monitoring, weekly optimization, monthly strategy check-ins.' },
  { n: 5, title: 'Scale',      desc: 'What works gets 2x budget. What doesn\'t gets cut. We stay honest with data.' },
];

/* Logos row — placeholder client names; replace with real */
export const CLIENT_LOGOS = [
  'Meridian SaaS', 'Lumen DTC', 'Northbridge Capital', 'Apex Cyber', 'Rivet Marketplace', 'Halogen Agency', 'Stellar Health', 'Atlas Retail',
];
