/**
 * Publications data.
 * To add a new publication, add an entry to the appropriate year,
 * or create a new year group. Each item needs a unique `id`.
 *
 * tags: used for keyword filtering — must match filter keys in the component.
 * links: array of { label, url, icon } for paper/code/etc.
 * award: optional award badge text.
 * image: path to a preview thumbnail (place images in public/images/papers/).
 */

export const publicationFilters = [
  { key: 'all', label: 'All' },
  { key: 'aging', label: 'Aging & Accessibility' },
  { key: 'cscw', label: 'Computer-Supported Cooperative Work' },
  { key: 'health', label: 'Digital Health' },
  { key: 'education', label: 'Education' },
  { key: 'mental', label: 'Mental Well-being' },
  { key: 'social', label: 'Social Computing' },
];

export const publications = [
  //   MagHeart: Exploring Playful Avatar Co-Creation and Shared Heartbeats for Icebreaking in Hybrid Meetings
  // Authors
  // Black Sun Department of Computer Science, Aarhus University, Aarhus, Denmark
  // Haiyang Xu Aarhus University, Aarhus, Denmark
  // Ge Kacy Fu Aarhus University, Department of Computer Science, Aarhus, Denmark
  // Liyue Da Aarhus University, Aarhus, Denmark, liyueda@cs.au.dk
  // Eve Hoggan Computer Science, Aarhus University, Aarhus, Denmark

  {
    year: 2026,
    items: [
      {
        id: 'chi26-magheart',
        venue: 'To appear in CHI 2026 - Full Paper',
        title: 'MagHeart: Explorable Playful Avatar Co-Creation and Shared Heartbeats for Icebreaking in Hybrid Meetings',
        authors: [
          { name: 'Black Sun*', self: true },
          'Haiyang Xu*',
          'Ge Kacy Fu',
          'Liyue Da',
          'Eve Hoggan',
        ],
        journal: 'Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA \'26).',
        tags: ['cscw'],
        award: null,
        links: [],
        image: '/images/papers/chi26-magheart.jpg',
      },
      {
        id: 'chi26-aging-influencers',
        venue: 'To appear in CHI 2026 - Full Paper',
        title:
          "Understanding Older Adults' Experiences of Support, Concerns, and Risks from Kinship-Role AI-Generated Influencers",
        authors: [
          'Tianqi Song',
          { name: 'Black Sun', self: true },
          'Jingshu Li',
          'Han Li',
          'Chi-Lan Yang',
          'Yijia Xu',
          'Yi-Chieh Lee',
        ],
        journal:
          'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI \'26).',
        tags: ['aging', 'social', 'mental'],
        award: null,
        links: [],
        image: '/images/papers/chi26-aging.png',
      },
    ],
  },
  {
    year: 2025,
    items: [
      {
        id: 'ubicomp25-ctg',
        venue: 'UbiComp 2025 Wellcomp',
        title:
          'CTG-Insight: A Multi-Agent Interpretable LLM Framework for Cardiotocography Analysis and Classification',
        authors: [
          { name: 'Black Sun', self: true },
          'Die (Delia) Hu',
        ],
        journal:
          'Companion of the 2025 on ACM International Joint Conference on Pervasive and Ubiquitous Computing (UbiComp Companion \'25) Wellcomp.',
        tags: ['health'],
        award: null,
        links: [{
          label: 'Paper',
          url: 'https://dl.acm.org/doi/abs/10.1145/3714394.3756343',
          icon: 'fas fa-link',
        }],
        image: '/images/papers/ubicomp25-ctg.png',
      },
      {
        id: 'chi25-debate',
        venue: 'CHI 2025 - Full Paper',
        title:
          'Breaking Barriers or Building Dependency? Exploring Team-LLM Collaboration in AI-infused Classroom Debate',
        authors: [
          'Zihan Zhang*',
          { name: 'Black Sun*', self: true },
          'Pengcheng An†',
        ],
        journal:
          'Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI \'25).',
        tags: ['social', 'education'],
        award: null,
        links: [
          {
            label: 'Paper',
            url: 'https://dl.acm.org/doi/full/10.1145/3706598.3713853',
            icon: 'fas fa-link',
          },
        ],
        image: '/images/papers/chi25-debate.png',
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        id: 'icdh24-neurofetal',
        venue: 'IEEE ICDH 2024 - Full Paper',
        title:
          'NeuroFetalNet: Advancing Remote Electronic Fetal Monitoring with a New Dataset and Comparative Analysis of FHR and UCP Impact',
        authors: [
          { name: 'Black Sun', self: true },
          'Jiaqi Zhao',
          'Xinrong Miao',
          'Yanqiao Wu',
          'Min Fang',
        ],
        journal:
          'Proceedings of the IEEE International Conference on Digital Health (ICDH \'24).',
        tags: ['health'],
        award: 'Best Student Paper Award',
        links: [
          {
            label: 'Paper',
            url: 'https://ieeexplore.ieee.org/abstract/document/10645942',
            icon: 'fas fa-link',
          },
          {
            label: 'Code',
            url: 'https://github.com/BlackThompson/NeuroFetalNet',
            icon: 'fab fa-github',
          },
        ],
        image: '/images/papers/icdh24-neurofetal.png',
      },
    ],
  },
];
