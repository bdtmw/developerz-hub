import { expandedContent } from './expanded-services';
export const serviceContent = {
  ...expandedContent,
  'hire-web-developers': {
    intro: 'A web development project should make a useful customer task easier: learning about your business, requesting a quote, buying a product or using a service. Developerz Hub helps you shape that task into a website or application with a defined scope.',
    audience: 'This service suits businesses creating a marketing website, startups planning a browser-based product, and teams improving an existing interface. A brochure site, booking flow and customer dashboard need different development plans; the brief should identify which one you need.',
    planningTitle: 'Plan your website before choosing the stack',
    planning: 'Start with a page inventory and the actions visitors must complete. Identify content you already have, pages that need writing, and integrations such as forms, payments or a CRM. For a redesign, record the existing URLs and decide which should stay, change or redirect. This helps preserve useful content and reduces surprises during implementation.',
    delivery: 'For a React or Next.js application, agree on the boundary between the frontend and backend, where data comes from, and how loading, empty and error states should behave. For a marketing site, focus on navigation, mobile layouts, editable content, descriptive page metadata and a clear enquiry path.',
    quote: 'The number of unique layouts matters more than the raw page count. Custom interactions, account systems, content migration and third-party integrations can add work. Supply examples of the experience you want and ask for design, content, development and ongoing services to be priced separately.',
    checklist: ['A page and content inventory, including existing URLs', 'Your primary conversion: enquiry, booking, purchase or signup', 'Required integrations and who controls their accounts', 'Mobile, accessibility and performance acceptance criteria'],
    faqs: [
      ['Do I need a web developer or a full-stack developer?', 'A web developer may be the right fit for your website or frontend interface. If the project also needs custom backend logic, databases and account workflows, review our full-stack service. The responsibilities should be explicit in your scope.'],
      ['Can you improve an existing website?', 'An existing site can be reviewed for layout, content structure, usability and technical constraints. Include the current URL, platform and issues in your enquiry so the scope can distinguish targeted improvements from a rebuild.'],
      ['Will the website be prepared for SEO?', 'The scope can include crawlable pages, descriptive titles and headings, internal links, image alternatives, canonical URLs and a sitemap. Search performance also depends on useful content, competition and the site’s real-world reputation; technical setup alone does not guarantee rankings.'],
      ['How long will web development take?', 'Timing depends on the agreed scope, content readiness, integrations and review cycles. Share your deadline at the start and ask for milestones with named dependencies rather than relying on a generic delivery promise.'],
    ],
  },
  'hire-wordpress-developers': {
    intro: 'WordPress development is a good fit when your team needs to publish and update content without changing application code. Developerz Hub helps define the pages, reusable blocks and editing workflow behind your website.',
    audience: 'Consider WordPress for a content-led business website, resource library or store built around WooCommerce. The best setup depends on who edits the site, how often content changes, and which features must be supported by themes, plugins or custom work.',
    planningTitle: 'Build around the people managing your content',
    planning: 'List the content types your team will maintain: service pages, articles, products, case studies or team profiles. Decide which fields should be editable and which layout rules should stay consistent. A small set of reusable blocks can make publishing more predictable than a separate custom layout for every page.',
    delivery: 'For an existing site, review the theme, plugin inventory, hosting and update process before proposing changes. A migration needs a content inventory, backups, a staging environment and a URL redirect plan. A store also needs agreed product, shipping, tax and payment requirements; the business should confirm these rules.',
    quote: 'Custom themes, complex content models, store workflows, plugin conflicts and migration volume affect the estimate. Theme and plugin subscriptions, hosting and maintenance may be ongoing costs. Ask who owns each license and what is included in the handover.',
    checklist: ['The content types and page layouts your team needs', 'Your current theme, plugins and hosting, if applicable', 'Store requirements and integrations for WooCommerce', 'Publishing roles, backups, updates and handover expectations'],
    faqs: [
      ['Should I use WordPress or a custom web application?', 'WordPress is often worth considering for publishing and established content workflows. A custom application may be a better fit for highly specific interactions or backend logic. Choose based on your requirements and maintenance capacity, not just a preferred technology.'],
      ['Can you work with an existing theme?', 'Include the theme name, license status and requested changes in your brief. A review can establish whether configuration, a child theme or custom development is the right approach.'],
      ['Can my team update the content?', 'The editing workflow should be part of the scope. Specify the content your team will manage, user roles, reusable blocks and the documentation or training you expect at handover.'],
      ['What should a WordPress migration include?', 'Agree on content transfer, media handling, URL mapping, redirects, testing, backups and rollback responsibilities. Check important pages and forms before changing the live site.'],
    ],
  },
  'hire-full-stack-developers': {
    intro: 'Full-stack development connects the interface your customers use with the application logic, APIs and data behind it. Developerz Hub helps turn these connected requirements into a scoped web application.',
    audience: 'This service suits projects such as customer portals, internal tools, booking systems and software products with custom workflows. If you only need a content website or visual redesign, a web or WordPress development scope may be simpler.',
    planningTitle: 'Define the system behind the interface',
    planning: 'Map the people using the application, their permissions and the information they create or change. Describe the main workflow from beginning to end, including failures and exceptions. These requirements help define the data model, API contracts and boundaries between your application and external services.',
    delivery: 'For a first release, prioritize a complete user journey over a large set of disconnected features. Agree on authentication, validation, error handling, test coverage, deployment responsibilities and operational documentation. If the project uses existing code, begin by identifying its dependencies and constraints.',
    quote: 'Complex permissions, data migration, external integrations and background processing can increase the scope. Include expected usage, data sensitivity and reliability needs in the brief. Hosting, monitoring and third-party usage charges should be considered separately from implementation.',
    checklist: ['User roles and the main end-to-end workflows', 'Required data, integrations and existing APIs', 'Security, reliability and operational requirements', 'A defined first release and measurable acceptance criteria'],
    faqs: [
      ['What does a full-stack developer work on?', 'Full-stack work spans frontend interfaces and backend application services. A project may include APIs, databases and authentication, but the exact responsibilities and technologies should be agreed in the scope.'],
      ['Can we start with a smaller first release?', 'Yes, a useful scope can focus on one complete customer journey. Separate the essential workflow from later features and define the behavior that will demonstrate the first release is ready.'],
      ['Can development continue from an existing codebase?', 'Share the current stack, repository structure, documentation and known issues through an agreed access process. An initial review can identify dependencies, technical risks and the work needed before adding features. Do not email passwords or production secrets.'],
      ['Who manages the application after launch?', 'Agree on hosting, monitoring, updates, incident response and documentation before delivery. Ongoing support is a separate responsibility that should be written into the engagement rather than assumed.'],
    ],
  },
} as const;
