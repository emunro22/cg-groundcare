export type ServiceItem = {
  slug: string
  icon: string
  title: string
  shortDesc: string
  longDesc: string
  points: string[]
}

export const services: ServiceItem[] = [
  {
    slug: 'grounds-maintenance',
    icon: '🌿',
    title: 'Grounds Maintenance',
    shortDesc: 'Grass cutting, hedge trimming, edging, weeding and seasonal garden care for all property types.',
    longDesc: 'Regular grounds maintenance keeps your lawn, hedges and borders looking sharp all year round. We offer one-off tidy ups as well as scheduled visits for homeowners and businesses across Glasgow, Edinburgh and Newton Mearns, so your property always makes the right impression.',
    points: ['Grass cutting & lawn care', 'Hedge trimming & shaping', 'Edging & weeding', 'Seasonal tidy ups', 'Regular scheduled visits'],
  },
  {
    slug: 'landscaping',
    icon: '🏡',
    title: 'Landscaping',
    shortDesc: 'Full garden transformations — fencing, decking, composite decking, artificial grass, decorative gravel, bark, planting.',
    longDesc: 'From a full garden redesign to a single feature upgrade, our landscaping service covers everything needed to transform an outdoor space — decking, artificial grass, decorative gravel, bark and planting, all finished to a high standard.',
    points: ['Full garden transformations', 'Artificial grass installation', 'Decorative gravel & bark', 'Planting & borders', 'Decking & composite decking'],
  },
  {
    slug: 'winter-maintenance',
    icon: '❄️',
    title: 'Winter Maintenance',
    shortDesc: 'Gritting, snow clearance and de-icing to keep your property safe and accessible all winter long.',
    longDesc: 'Ice and snow put people at risk and disrupt business as usual. Our winter maintenance service keeps driveways, paths and car parks gritted, cleared and accessible throughout the colder months for both domestic and commercial clients.',
    points: ['Gritting & de-icing', 'Snow clearance', 'Scheduled winter cover', 'Domestic & commercial sites', 'Priority response'],
  },
  {
    slug: 'fencing-decking',
    icon: '🪵',
    title: 'Fencing & Decking',
    shortDesc: 'Quality different styles of fencing, treated timber decking, composite decking.',
    longDesc: 'We supply and install a range of fencing styles and both treated timber and composite decking, built to last and finished to match your outdoor space — whether that\'s a garden refresh or a full boundary replacement.',
    points: ['Range of fencing styles', 'Treated timber decking', 'Composite decking', 'Repairs & replacements', 'Free on-site quotes'],
  },
  {
    slug: 'domestic',
    icon: '🏠',
    title: 'Domestic Work',
    shortDesc: 'Residential garden care tailored to homeowners — one-off tidy ups to regular maintenance contracts.',
    longDesc: 'Every home is different, so we tailor our service to you — a single one-off tidy up before a special occasion, or a regular contract that keeps your garden looking its best all year without you lifting a finger.',
    points: ['One-off garden tidy ups', 'Regular maintenance contracts', 'Flexible scheduling', 'Free, no-obligation quotes', 'Fully insured'],
  },
  {
    slug: 'commercial',
    icon: '🏢',
    title: 'Commercial Work',
    shortDesc: 'Reliable scheduled maintenance for businesses, care homes, schools and commercial premises.',
    longDesc: 'We provide dependable, scheduled grounds maintenance for businesses, care homes, schools and other commercial premises, so your site always looks professional and welcoming for staff, clients and visitors.',
    points: ['Scheduled commercial contracts', 'Care homes & schools', 'Business premises', 'Reliable, repeat visits', 'Winter cover included'],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}
