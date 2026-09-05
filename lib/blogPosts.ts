export type BlogBodyBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  category: string
  metaDescription: string
  publishDate: string
  excerpt: string
  body: BlogBodyBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-often-should-you-cut-your-lawn-in-scotland',
    title: 'How Often Should You Really Get Your Lawn Cut in Scotland?',
    category: 'Grounds Maintenance',
    metaDescription:
      'How often your lawn needs cutting through a Scottish growing season, and why a scheduled visit beats an ad-hoc one-off.',
    publishDate: '2026-03-04',
    excerpt:
      'Scotland\'s wetter, cooler climate means grass grows on a different rhythm to the rest of the UK. Here is a realistic cutting schedule for the Central Belt, month by month.',
    body: [
      {
        type: 'paragraph',
        text: 'One of the most common questions we get asked, whether it\'s a domestic garden in Newton Mearns or a commercial site in Glasgow, is simple: how often does the grass actually need cut? The honest answer is that it changes through the year, and getting the timing right keeps a lawn healthier and looking better between visits.',
      },
      {
        type: 'heading',
        text: 'Spring (March to May)',
      },
      {
        type: 'paragraph',
        text: 'As the ground warms up and daylight hours increase, grass growth picks up quickly. Early spring cuts should be light, just taking the top off, to avoid stressing grass that\'s still establishing after winter. By late spring, most lawns across Glasgow and Edinburgh need cutting every one to two weeks.',
      },
      {
        type: 'heading',
        text: 'Summer (June to August)',
      },
      {
        type: 'paragraph',
        text: 'This is peak growing season. Weekly cuts are typical for a lawn that\'s meant to look sharp, especially for front gardens and commercial grounds where appearance matters. In drier spells it\'s worth raising the cutting height slightly so the grass can retain moisture.',
      },
      {
        type: 'heading',
        text: 'Autumn (September to November)',
      },
      {
        type: 'paragraph',
        text: 'Growth slows as temperatures drop, so cuts can stretch out to every two to three weeks. This is also a good time to clear fallen leaves and do a final tidy of hedges and borders before winter sets in.',
      },
      {
        type: 'heading',
        text: 'Winter (December to February)',
      },
      {
        type: 'paragraph',
        text: 'Grass growth largely stops in the Central Belt over winter, so regular cutting isn\'t usually needed. This is when attention shifts to gritting, snow clearance and de-icing instead, so paths and driveways stay safe and accessible.',
      },
      {
        type: 'paragraph',
        text: 'Whether you need a one-off tidy up or a regular scheduled visit throughout the growing season, we tailor grass cutting and grounds maintenance to your property across Glasgow, Edinburgh and Newton Mearns. Get in touch for a free, no-obligation quote.',
      },
    ],
  },
  {
    slug: 'composite-vs-timber-decking',
    title: 'Composite Decking vs Timber Decking: Which Suits Your Garden?',
    category: 'Fencing & Decking',
    metaDescription:
      'A practical comparison of composite decking and treated timber decking, covering maintenance, appearance and lifespan, to help you choose for your garden.',
    publishDate: '2026-04-15',
    excerpt:
      'Both composite and treated timber decking have their place. Here\'s what actually differs between them once the decking is down and in daily use.',
    body: [
      {
        type: 'paragraph',
        text: 'Decking is one of the most requested upgrades we install, whether as part of a full garden transformation or as a standalone project. The two main options are treated timber decking and composite decking, and the right choice depends on how much upkeep you want to take on and what look you\'re after.',
      },
      {
        type: 'heading',
        text: 'Treated timber decking',
      },
      {
        type: 'paragraph',
        text: 'Timber gives a warmer, more natural look and is usually the more budget-friendly option upfront. It needs more regular maintenance though: an annual clean, and re-staining or re-oiling every year or two to keep it protected from Scotland\'s damp weather and stop it greying or splitting.',
      },
      {
        type: 'heading',
        text: 'Composite decking',
      },
      {
        type: 'paragraph',
        text: 'Composite boards are made from a mix of wood fibre and recycled plastic, which makes them far more resistant to moisture, rot and fading. There\'s no staining or oiling required, just an occasional wash down. The upfront cost is higher than timber, but it typically pays off in reduced maintenance over the years, especially on decking that gets a lot of use.',
      },
      {
        type: 'heading',
        text: 'Which one is right for you?',
      },
      {
        type: 'list',
        items: [
          'Want the lowest possible maintenance and don\'t mind the higher upfront cost: composite',
          'Prefer a natural timber look and are happy with annual upkeep: treated timber',
          'Replacing an existing deck that\'s rotted or splitting: worth considering composite to avoid repeating the problem',
          'Working to a tighter budget for a garden refresh: treated timber decking is a solid, proven option',
        ],
      },
      {
        type: 'paragraph',
        text: 'We supply and install both treated timber and composite decking, built to match your outdoor space, whether that\'s a full boundary and decking replacement or a single feature deck. Free on-site quotes are available across Glasgow, Edinburgh and Newton Mearns.',
      },
    ],
  },
  {
    slug: 'when-to-start-winter-gritting-central-belt',
    title: 'When to Start Winter Gritting in the Central Belt',
    category: 'Winter Maintenance',
    metaDescription:
      'When to put winter gritting and snow clearance cover in place for driveways, paths and car parks across Scotland\'s Central Belt.',
    publishDate: '2026-08-20',
    excerpt:
      'Ice catches people out every year because gritting cover gets arranged too late. Here\'s a realistic timeline for the Central Belt.',
    body: [
      {
        type: 'paragraph',
        text: 'Every winter, we get calls from businesses and homeowners the week ice has already caused a fall or a blocked driveway. By then it\'s reactive rather than planned. Getting winter maintenance cover arranged early makes a real difference, both for safety and for avoiding last-minute scrambling.',
      },
      {
        type: 'heading',
        text: 'When does frost risk actually start?',
      },
      {
        type: 'paragraph',
        text: 'Across Glasgow, Edinburgh and the wider Central Belt, overnight frost and ice can start appearing from late October, well before the "official" start of winter. Car parks, paths and north-facing driveways are usually the first areas affected because they hold moisture and lose heat quickly overnight.',
      },
      {
        type: 'heading',
        text: 'Why commercial sites need cover in place early',
      },
      {
        type: 'paragraph',
        text: 'For care homes, schools and other commercial premises, an icy path or car park is a genuine safety and liability concern. Having scheduled gritting and de-icing cover arranged before the first cold snap means a site is protected from day one of the season rather than after an incident.',
      },
      {
        type: 'heading',
        text: 'What winter maintenance actually covers',
      },
      {
        type: 'list',
        items: [
          'Gritting and de-icing of driveways, paths and car parks',
          'Snow clearance to keep access routes usable',
          'Scheduled winter cover for the whole season, not just one-off callouts',
          'Both domestic and commercial sites',
          'Priority response when conditions turn quickly',
        ],
      },
      {
        type: 'paragraph',
        text: 'Our advice is to get winter maintenance arranged in October, ahead of the first frosts, rather than waiting until conditions turn. We provide gritting, snow clearance and de-icing for domestic and commercial clients across Glasgow, Edinburgh and Newton Mearns.',
      },
    ],
  },
  {
    slug: 'preparing-your-garden-for-spring-after-scottish-winter',
    title: 'Preparing Your Garden for Spring After a Scottish Winter',
    category: 'Grounds Maintenance',
    metaDescription:
      'A practical spring garden checklist for homeowners in Scotland: lawn recovery, hedge shaping, borders and clearing winter damage.',
    publishDate: '2026-02-18',
    excerpt:
      'A Scottish winter leaves most gardens looking tired. Here\'s where to start once the weather turns and growth begins again.',
    body: [
      {
        type: 'paragraph',
        text: 'After months of cold, wet weather, most gardens across the Central Belt need a proper reset before the growing season gets going. Getting the basics right in early spring makes the rest of the year far easier to keep on top of.',
      },
      {
        type: 'heading',
        text: 'Clear winter debris first',
      },
      {
        type: 'paragraph',
        text: 'Fallen branches, waterlogged leaves and general debris that\'s built up over winter should be cleared before anything else. Left in place, it smothers grass and encourages moss and damp patches to spread once the weather warms up.',
      },
      {
        type: 'heading',
        text: 'Give hedges their first shape of the year',
      },
      {
        type: 'paragraph',
        text: 'Hedges that were left to grow through autumn often need a proper trim to bring them back into shape before new growth starts. Getting this done early, rather than waiting until summer, keeps hedges looking neater for longer.',
      },
      {
        type: 'heading',
        text: 'Check the lawn for winter damage',
      },
      {
        type: 'paragraph',
        text: 'Compacted, waterlogged or moss-covered patches are common after a wet Scottish winter. An early season tidy up, with the first light cut of the year and any obvious dead patches addressed, sets the lawn up to recover properly rather than struggling on into summer.',
      },
      {
        type: 'heading',
        text: 'Tidy borders and beds',
      },
      {
        type: 'paragraph',
        text: 'Weeding borders early, before weeds properly establish, saves a lot of work later in the year. It\'s also the easiest time to add bark or gravel to beds that have thinned out over winter.',
      },
      {
        type: 'paragraph',
        text: 'If your garden needs more than a weekend of effort to get back on track, we offer one-off spring tidy ups as well as regular maintenance contracts for homeowners across Glasgow, Edinburgh and Newton Mearns. Free, no-obligation quotes are available.',
      },
    ],
  },
  {
    slug: 'domestic-vs-commercial-grounds-maintenance',
    title: 'Domestic vs Commercial Grounds Maintenance: What\'s the Difference?',
    category: 'Domestic & Commercial',
    metaDescription:
      'What actually differs between domestic garden maintenance and commercial grounds contracts, and how to know which service you need.',
    publishDate: '2026-05-20',
    excerpt:
      'The tools and skills overlap, but domestic and commercial grounds maintenance are arranged quite differently. Here\'s what sets them apart.',
    body: [
      {
        type: 'paragraph',
        text: 'We work with both homeowners and businesses, and while the underlying work, grass cutting, hedge trimming, edging and seasonal tidy ups, is similar, how the service is arranged and delivered differs quite a bit between the two.',
      },
      {
        type: 'heading',
        text: 'Domestic work',
      },
      {
        type: 'paragraph',
        text: 'Domestic garden care is usually more flexible. Some homeowners want a single one-off tidy up before a special occasion or before putting a property on the market. Others prefer a regular contract that keeps a garden looking its best all year without having to think about it. Scheduling tends to be more adaptable to fit around what the household needs.',
      },
      {
        type: 'heading',
        text: 'Commercial work',
      },
      {
        type: 'paragraph',
        text: 'Commercial grounds maintenance, for care homes, schools, businesses and other commercial premises, is almost always arranged as a scheduled, repeat contract rather than a one-off. Consistency matters more here: a care home or business needs its grounds looking professional and safe for staff, clients and visitors on a predictable schedule, including winter cover for gritting and snow clearance.',
      },
      {
        type: 'heading',
        text: 'Where they overlap',
      },
      {
        type: 'list',
        items: [
          'Both can include grass cutting, hedge trimming, edging and weeding',
          'Both can include landscaping work such as decking, fencing or artificial grass',
          'Both are covered by winter maintenance during the colder months',
          'Both start with a free, no-obligation quote',
        ],
      },
      {
        type: 'paragraph',
        text: 'Not sure which fits your situation? That\'s exactly what the free quote is for. We\'ll come out, assess the site, and recommend whether a one-off visit or a scheduled contract makes more sense, for domestic gardens or commercial premises across Glasgow, Edinburgh and Newton Mearns.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
