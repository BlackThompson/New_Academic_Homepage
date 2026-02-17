/**
 * Research experience entries.
 * To add a new experience, add it to the top of the array.
 */

export const researchExperience = [
  {
    id: 'exp-blended',
    date: '2025.07 - 2026.01',
    lab: 'Blended Realities Lab',
    labUrl: 'https://blendedrealities.jensemil.dk/',
    institution: 'Aarhus University',
    advisors: [
      { name: 'Dr. Jens Emil Sloth Grønbæk', url: 'https://jensemil.dk/' },
      { name: 'Dr. Eve Hoggan', url: 'https://eehoggan.github.io/#/' },
      {
        name: 'Julia Kleinau',
        url: 'https://scholar.google.com/citations?user=QoRWBtIAAAAJ&hl=en',
        title: 'PhD candidate',
      },
    ],
  },
  {
    id: 'exp-ai4sg',
    date: '2025.05 - 2026.01',
    lab: 'AI4SG Lab',
    labUrl: 'https://www.ai4sg.org/',
    institution: 'National University of Singapore (NUS)',
    advisors: [
      { name: 'Dr. Yi-Chieh Lee', url: 'https://www.yclee.net/' },
      {
        name: 'Holly Tianqi Song',
        url: 'https://hollysong.site/',
        title: 'PhD candidate',
      },
    ],
  },
  {
    id: 'exp-interactive-matter',
    date: '2024.11 - 2025.06',
    lab: 'Interactive Matter Lab',
    labUrl: 'https://interactivematterlab.org/',
    institution: 'Aarhus University',
    advisors: [
      {
        name: 'Dr. Michael Wessely',
        url: 'https://interactivematterlab.org/profile.html',
      },
      {
        name: 'Yijing Jiang',
        url: 'https://www.yijingjiang.com/',
        title: 'PhD candidate',
      },
    ],
  },
  {
    id: 'exp-aideal',
    date: '2023.10 - 2024.12',
    lab: 'ai{DEAL} Studio',
    labUrl: 'https://anpengcheng.cn/about/',
    institution: 'Southern University of Science and Technology (SUSTech)',
    advisors: [
      { name: 'Dr. Pengcheng An', url: 'https://anpengcheng.cn/about/' },
    ],
  },
];

/**
 * Work experience entries.
 */

export const workExperience = [
  {
    id: 'work-ramen',
    icon: '🍜🍥',
    title: 'Line Cook',
    place: 'Ramen Takumi',
    placeUrl: 'https://www.facebook.com/RamenTakumi.DK/',
    location: 'Aarhus, Denmark',
    date: '2025.07 - present',
  },
  {
    id: 'work-bartender',
    icon: '🍸🍹',
    title: 'Trainee Bartender',
    place: null,
    placeUrl: null,
    location: 'Shenzhen, China',
    date: '2024.03 - 2024.08',
  },
];

export const workExperienceNote =
  'I do not limit my work to my own discipline, I am enthusiastic about exploring diverse professions and engaging with people from various fascinating backgrounds.';
