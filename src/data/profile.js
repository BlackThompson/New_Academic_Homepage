/**
 * Personal profile information.
 * Update this file to change your name, bio, social links, etc.
 */

export const profile = {
  name: 'Black Sun',
  pronouns: 'They/Them',
  tagline:
    'If technology doesn\'t work for the most vulnerable, it doesn\'t work at all.',
  location: 'Aarhus, Denmark',
  locationIcon: 'fas fa-map-marker-alt',
  badge: 'Dog Lover',
  badgeIcon: 'fas fa-dog',
  portrait: '/images/avatar/avatar.png',
  portraitAlt: 'A portrait of Black Sun',

  bio: [
    {
      text: 'I am currently pursuing a Master\'s degree in Computer Science, focusing on <strong>Human-Computer Interaction</strong> and <strong>Ubiquitous Computing</strong> at <a href="https://international.au.dk/">Aarhus University</a>, Denmark.',
      expandable: false,
    },
    {
      text: 'I received my Bachelor\'s degree in Computer Science and Technology from <a href="https://www.hitsz.edu.cn/index.html">Harbin Institute of Technology, Shenzhen (HITSZ)</a>. During my undergraduate studies, I worked as a research assistant at the <a href="https://anpengcheng.cn/about/">ai{DEAL} Studio</a>, School of Design, Southern University of Science and Technology (SUSTech), advised by <a href="https://anpengcheng.cn/about/">Dr. Pengcheng An</a>. I am currently a research intern at the <a href="https://www.ai4sg.org/">AI4SG Lab</a> at the National University of Singapore (NUS), supervised by <a href="https://www.yclee.net/">Dr. Yi-Chieh Lee</a>.',
      expandable: false,
    },
    {
      text: 'My research interests include human-computer interaction related to <strong>health</strong> and <strong>social computing</strong>. My passion lies in using technologies to enhance individuals\' everyday health and well-being. Additionally, I am interested in analyzing information from digital platforms to understand how they reflect and influence specific communities.',
      expandable: true,
    },
    {
      text: 'I like engaging in interdisciplinary exchanges and collaborations with all fields. Feel free to email me if you are interested in <strong>collaborating, discussing research ideas, or just making friends</strong>.',
      expandable: true,
    },
  ],

  // callout:
  //   'I am actively seeking for <strong>2026 Fall PhD position</strong>, please don\'t hesitate to contact me if you think I might be a good fit!',

  aboutMe:
    'Beyond research, I\'m a passionate explorer of life. In my spare time, I enjoy cooking 🍳, making cocktails 🍸, writing 📖 and connecting with people from all walks of life. By the way, I am a furry fandom enthusiast 🐾!',
  // aboutIcons: ['🦮', '🐕‍🦺', '🐩', '🐕'],
};

export const socialLinks = [
  { icon: 'fas fa-envelope fa-lg', url: 'mailto:blackthompson770@gmail.com', title: 'Email' },
  { icon: 'ai ai-google-scholar ai-lg', url: 'https://scholar.google.com/citations?user=Hrhrkc4AAAAJ&hl=en', title: 'Google Scholar' },
  { icon: 'fab fa-github fa-lg', url: 'https://github.com/BlackThompson', title: 'GitHub' },
  { icon: 'fab fa-linkedin fa-lg', url: 'https://www.linkedin.com/in/black-sun', title: 'LinkedIn' },
  { icon: 'fab fa-x-twitter fa-lg', url: 'https://x.com/Black_HCI', title: 'Twitter/X' },
  { reactIcon: 'xiaohongshu', url: 'https://www.xiaohongshu.com/user/profile/5f2a41cf000000000101d44b', title: 'RedNote' },
  { icon: 'fas fa-file-alt fa-lg', url: '/public/doc/Concise_CV_Black_Sun.pdf', title: 'CV' },
];
