/**
 * Content Data - Case Studies, Skills, and Other Content
 */

import type { CaseStudy, Skill } from './types';

export const caseStudies: CaseStudy[] = [
  {
    id: '01',
    slug: 'scania-my-scania',
    title: 'My Scania — Electric Fleet & Portal Design',
    description:
      'Led product design for My Scania, Scania\'s digital customer portal for fleet management, electric vehicle operations, and subscriptions.',
    featured: true,
    category: 'Product Design',
    year: 2024,
    role: 'Senior Product Designer • UX Lead',
    tools: ['Figma', 'Datadog'],
    challenge:
      'Fleet managers at Scania\'s customer organisations need to effectively manage and monitor electric truck fleets in a complex, high-stakes environment. They must maintain real-time awareness of each truck\'s state of charge and charging status, understand which vehicles have the capacity for specific deliveries, and quickly identify and troubleshoot issues when they arise. These needs span multiple user roles — including fleet managers, charging managers, and drivers — and require coordination across different systems and teams.',
    approach:
      'Jessica joined the initiative as a Product Designer within an agile, cross-functional team involving the app team and R&D. She began by developing a deep understanding of user needs across all key roles through user and stakeholder interviews. In close collaboration with a Service Designer, she mapped an end-to-end customer journey to ground the work in real operational workflows. Designs were continuously iterated and refined through close collaboration with stakeholders and developers.',
    solution:
      'The solution evolved into a clear overview of a company\'s electric fleet, showing current battery levels, charging status, and highlighted charging errors. A dedicated vehicle page provided detailed, contextual information for individual trucks to support delivery planning, while push notifications via the Scania Driver app ensured users could stay informed even when away from the vehicle. An Order History page for charging cards gave users clear visibility into their orders — showing how many cards were ordered, their status, and expected delivery. Additionally, Jessica drove the adoption of Phrase Strings as a new translation management system, shaping a design-first localisation process that moved translations closer to the design phase.',
    results:
      'The electric fleet overview significantly improved user confidence in managing EV operations, reducing the need for manual investigation. The charging card order flow improved transparency and eliminated user uncertainty. The Phrase translation system reduced administration, shortened implementation times, and enabled faster feature delivery — resulting in happier teams and customers. Post-release, quantitative insights are gathered via Datadog to track user behaviour and validate improvements over time.',
    learnings:
      'Working across multiple user roles in a high-stakes environment reinforced the importance of role-specific workflows rather than one-size-fits-all solutions. Building trust through transparency — clearly communicating status and expected outcomes — is especially critical when users are new to electric vehicles. Involving translators and technical writers early in the design process (not as an afterthought) significantly improves both quality and speed.',
    imageUrl: '/images/case-studies/Work/scania/laptop.png',
    galleryImages: [
      '/images/case-studies/Work/scania/ipad-pro-landscape.png',
      '/images/case-studies/Work/scania/device-14pm.png',
    ],
    relatedStudies: ['02', '03'],
    keyMetrics: [
      { value: '2023–25', label: 'Project timeline' },
      { value: '100+', label: 'Countries Scania operates in' },
      { value: '50k+', label: 'Scania employees globally' },
    ],
  },
  {
    id: '02',
    slug: 'bonnier-news',
    title: 'Bonnier News — Digital Product Modernisation',
    description:
      'Modernised key digital products for Sweden\'s leading media group, improving subscription management, course discovery, and account experiences across brands.',
    featured: true,
    category: 'Product Design',
    year: 2023,
    role: 'Senior Product Designer • UX Lead',
    tools: ['Figma'],
    challenge:
      'Bonnier News\'s digital products — including Företagsservice (B2B subscription management), Bonnier Akademi (course discovery), and Dagens Industri My Page — each had significant UX problems. Subscription flows were inefficient and difficult to use for both internal teams and customers. Courses were fragmented across magazines with no unified discovery. My Page generated high support volumes because customers couldn\'t understand or manage their subscriptions and payments independently.',
    approach:
      'Jessica worked as a Product Designer across multiple cross-functional teams, leading user research, stakeholder interviews, and workshops to uncover pain points and define clear design directions. She conducted user testing on existing flows, gathered insights from customer support, and facilitated ideation sessions with developers and business owners. Each project followed an iterative, user-centred approach from discovery through to high-fidelity prototypes and release.',
    solution:
      'For Företagsservice, Jessica redesigned the subscription management tool to be more user-friendly and sustainable on a new platform. For Bonnier Akademi, she defined a new, clear site structure that surfaced all courses across magazines in one place, working with SEO experts and stakeholders. For Dagens Industri My Page, she migrated and improved the account experience, reducing friction and support contacts. She also designed a unified corporate signup and activation flow that worked consistently across all Bonnier News business magazines, and added card payment and discount code support to the Akademi checkout.',
    results:
      'The Företagsservice redesign delivered a more sustainable and usable administrative tool for Dagens Industri\'s B2B customers. The Akademi website gave customers a clear overview of all available courses, improving discoverability. The Mina Sidor migration improved subscription self-management, reducing pressure on customer support. The new unified signup flow streamlined employee activation across all business magazines.',
    learnings:
      'Working across a large media group with many brands highlighted the importance of aligning on shared patterns and components while accommodating brand-specific needs. Involving customer support early provides invaluable insight into real user pain points that usability testing alone can miss. Moving fast with iterative prototypes — rather than waiting for a perfect solution — builds stakeholder confidence and keeps momentum.',
    imageUrl: '/images/case-studies/Work/bonnier/laptop-4.png',
    galleryImages: [
      '/images/case-studies/Work/bonnier/laptop-5.png',
      '/images/case-studies/Work/bonnier/laptop-6.png',
    ],
    relatedStudies: ['01', '04'],
    keyMetrics: [
      { value: '3M+', label: 'Daily readers across brands' },
      { value: '200+', label: 'Years of journalistic heritage' },
      { value: '4', label: 'Product areas improved' },
    ],
  },
  {
    id: '03',
    slug: 'tillvaxtverket-serviceanalys',
    title: 'Tillväxtverket — GIS Tool Redesign',
    description:
      'Redesigned a government GIS tool (Pipos Serviceanalys) to solve findability and information overload, helping users explore commercial services across Sweden.',
    featured: true,
    category: 'Gov / GIS',
    year: 2022,
    role: 'UX/Product Designer • Scrum Master',
    tools: ['Figma'],
    challenge:
      'Tillväxtverket\'s GIS tool, Pipos Serviceanalys, had received significant user feedback about problems with findability and information overload. Many features had been developed and added to the interface without considering the holistic perspective, making it harder for users to understand what to do to find the information they needed. The tool illustrates commercial services across Sweden and is used to support government decisions on regional business development.',
    approach:
      'Jessica joined as a UX Designer in a cross-functional team. She started by mapping out previous user insights and identifying the key target groups. She facilitated an ideation workshop together with the team to establish a shared vision for the project. She created a user journey map for the current product and helped the Product Owner with prioritisation. She conducted user interviews and usability-tested interactive Figma prototypes, then summarised insights into a presentation that became a baseline for continuous prioritisation throughout the project.',
    solution:
      'Jessica designed a new version of Tillväxtverket\'s Geographical Information System for Commercial Services (Serviceanalys), addressing the core findability and information overload issues. The redesign created a clear, structured interface that guided users toward the information they needed without being overwhelmed by features, grounding every decision in the user journey and research insights.',
    results:
      'The new design significantly improved user orientation within the tool. Feedback from user testing showed users could more easily locate relevant information and understood the tool\'s structure. The prioritisation framework established during the project continued to guide the team\'s ongoing development decisions.',
    learnings:
      'Government digital tools often accumulate complexity over time as features are added without a holistic view. Starting from user journeys and real feedback — rather than feature lists — reframes what "improvement" means. Facilitating structured workshops with a cross-functional team builds shared ownership, which is especially important in public sector projects with multiple stakeholders.',
    imageUrl: '/images/case-studies/Work/tvv/laptop-9.png',
    galleryImages: [
      '/images/case-studies/Work/tvv/screenshot-tvv.png',
    ],
    relatedStudies: ['01', '05'],
  },
  {
    id: '04',
    slug: 'swedbank-corporate',
    title: 'Swedbank — Corporate Internet Bank',
    description:
      'Improved the corporate internet bank for Sweden\'s largest bank — spanning loan applications, service overviews, legacy migration, and notification redesign.',
    featured: false,
    category: 'FinTech',
    year: 2022,
    role: 'UX Designer',
    tools: ['Figma'],
    challenge:
      '50% of Swedbank\'s corporate customers that started the loan process dropped off after first contact, frustrated by a manual process involving multiple phone calls and emails. Corporate users also couldn\'t understand what active services and products they had, and were missing crucial notifications when logged into the web application. Meanwhile, a large number of legacy service flows still needed migrating from the old internet bank before it could be retired.',
    approach:
      'Jessica joined agile cross-functional design teams across several value streams. For the loan flow, she started by understanding the current user journey, pain points, and banking business requirements. She created prototypes that were user-tested with corporate customers who had gone through the process before, and with those currently interested in applying for a loan. For the services overview and notification redesign, she facilitated remote Design Sprints — successfully balancing different stakeholder demands and user needs to create testable prototypes within 5 days.',
    solution:
      'Jessica designed a new UI for the corporate services overview, giving customers visibility into their current active products and what additional services they could activate or order. She digitised and improved the corporate loan application process, reducing the reliance on manual communication. She migrated key legacy service flows (including export of user authorisations, opening corporate accounts, and ordering payroll services) into the new internet bank. She also redesigned the notification system, making crucial alerts — new payments, agreements to approve, new documents — much easier to discover.',
    results:
      'The services overview was greatly appreciated by users in testing, improving transparency and reducing calls to the Customer Centre. The loan application redesign significantly reduced the manual back-and-forth between customers and the bank. The notification redesign helped customers stay on top of time-sensitive actions directly within the web app.',
    learnings:
      'In banking, trust and clarity are the foundation of every interaction. Users need to feel confident they understand their situation before taking any action. Design Sprints are powerful in large organisations for breaking through alignment blockers — five days of structured work can produce more progress than months of meetings.',
    imageUrl: '/images/case-studies/Work/swedbank/image-16.png',
    galleryImages: [
      '/images/case-studies/Work/swedbank/image-18.png',
    ],
    relatedStudies: ['02', '05'],
  },
  {
    id: '05',
    slug: 'tietoevry-edlevo',
    title: 'TietoEVRY — Preschool App Redesign',
    description:
      'Redesigned and developed a time scheduling feature in TietoEVRY\'s Edlevo preschool application based on direct customer feedback.',
    featured: false,
    category: 'EdTech',
    year: 2021,
    role: 'UX/UI Designer • Front-end Developer',
    tools: ['Adobe XD', 'Figma'],
    challenge:
      'TietoEVRY\'s preschool application Edlevo had received customer feedback about a specific feature where users schedule the time their child will attend school. Based on the feedback, the feature had clear potential for improvement — it was difficult to use and the interaction model didn\'t match how parents naturally thought about scheduling.',
    approach:
      'Jessica joined a team of front-end and back-end developers as UX Designer. She started by understanding the user\'s problem through researching customer feedback and conducting user interviews. She performed a competitive analysis of similar scheduling interfaces and iterated the design in Adobe XD. She initiated internal design review sessions with the team to refine and validate her work.',
    solution:
      'Jessica designed a new way to enter time into the existing application, significantly improving the interaction model for the scheduling feature. She then implemented the design as a front-end developer, contributing directly to the production codebase. She also helped improve the UI of the team\'s internal system.',
    results:
      'The improved feature received positive feedback from the team and was appreciated for the initiative taken on design reviews. The direct contribution as both designer and developer meant the design intent was faithfully implemented without translation loss between disciplines.',
    learnings:
      'Being both the designer and developer gives you a uniquely honest perspective — you can\'t design something impractical if you also have to build it. Customer feedback is a goldmine when treated as the starting point for research rather than the final answer.',
    imageUrl: '/images/case-studies/Work/tietoevery/image-14.png',
    galleryImages: [],
    relatedStudies: ['03', '06'],
  },
  {
    id: '06',
    slug: 'taxi-stockholm',
    title: 'Taxi Stockholm — In-Journey Experience Concept',
    description:
      'Developed a concept to enhance the customer travel experience from booking through arrival, helping Taxi Stockholm reach new target groups.',
    featured: false,
    category: 'Transport',
    year: 2021,
    role: 'UX/UI Designer',
    tools: ['Figma'],
    challenge:
      'Taxi Stockholm wanted to expand its customer base and reach new target groups. The challenge was to develop a conceptual solution that enhanced the customer experience from when the customer booked their journey through the app to arriving at the final destination — for a very broad target group, while staying within the framework of Taxi Stockholm\'s high service standards.',
    approach:
      'Jessica joined a team of UX/UI designers, a front-end developer, and a Scrum Master. The team ran user surveys, brainstorming sessions, workshops, and concept development work to explore the problem space. They mapped user journeys, identified pain points during the in-journey phase, and generated multiple concepts before converging on a direction.',
    solution:
      'The project team — with Jessica as UX Designer — developed a concept that gives customers relevant, contextual information about their destination during the journey. The delivery consisted of complete wireframes and user flows, estimated and reviewed by Taxi Stockholm.',
    results:
      'The concept was well received by Taxi Stockholm and delivered as a full set of wireframes and user flows ready for further development consideration. The project demonstrated how thoughtful UX can differentiate a taxi service beyond just getting from A to B.',
    learnings:
      'Designing for a broad target group means anchoring decisions in universal needs rather than edge cases. In-journey moments are underexplored in transport UX — there\'s real opportunity between booking and arrival to add value, reduce anxiety, and build brand affinity.',
    imageUrl: '/images/case-studies/Work/taxi/image-12.png',
    galleryImages: [],
    relatedStudies: ['05', '04'],
  },
];

export const skills: Skill[] = [
  // Research
  { name: 'User Research', category: 'Research', level: 'expert' },
  { name: 'User Testing', category: 'Research', level: 'expert' },
  { name: 'Analytics', category: 'Research', level: 'advanced' },
  { name: 'Competitive Analysis', category: 'Research', level: 'advanced' },

  // Design
  { name: 'Interaction Design', category: 'Design', level: 'expert' },
  { name: 'Visual Design', category: 'Design', level: 'expert' },
  { name: 'Information Architecture', category: 'Design', level: 'advanced' },
  { name: 'Typography', category: 'Design', level: 'advanced' },

  // Strategy
  { name: 'Product Strategy', category: 'Strategy', level: 'advanced' },
  { name: 'Stakeholder Management', category: 'Strategy', level: 'advanced' },
  { name: 'Design Thinking', category: 'Strategy', level: 'expert' },
  { name: 'Design System', category: 'Strategy', level: 'expert' },
];

export const tools = [
  'Figma',
  'Adobe XD',
  'Sketch',
  'Framer',
  'Spline',
  'Adobe Creative Suite',
  'Webflow',
  'Protopie',
  'Amplitude',
  'Hotjar',
  'Datadog',
  'React',
  'Storybook',
];

export const processSteps = [
  {
    number: 1,
    title: 'Research',
    description: 'Understanding user needs through interviews, testing, and data analysis to inform design decisions.',
    icon: 'search',
  },
  {
    number: 2,
    title: 'Strategy',
    description: 'Defining goals, constraints, and opportunities to create a clear direction for the design.',
    icon: 'target',
  },
  {
    number: 3,
    title: 'Design',
    description: 'Creating wireframes, prototypes, and visual designs to explore solutions and validate ideas.',
    icon: 'pencil',
  },
  {
    number: 4,
    title: 'Test & Iterate',
    description: 'Validating designs through user testing and refining based on feedback and metrics.',
    icon: 'check',
  },
];

export const aboutBio = `Jessica is a curious, driven UX Designer who loves turning complex problems into holistic, intuitive user experiences. She has worked across the public sector in Sweden, within government, finance, transport, media and education, covering the full product journey from discovery and user research to idea, design, and release.

She's passionate about improving everyday life by putting users at the centre, applying an iterative, user-centred design process with tools like Figma and Sketch. A true team player, Jessica thrives in cross-functional collaboration and enjoys solving tough challenges together.

Outside of work, she brings the same dedication to running, most recently crossing the finish line at the NYC Marathon 🏃‍♀️`;
