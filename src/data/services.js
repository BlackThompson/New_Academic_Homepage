/**
 * Academic service entries.
 * Each category has a title, optional note, and a list of items.
 * Items have a conference name and an array of years.
 * Each year can be a string or { year, award: true } to mark outstanding review.
 */

export const services = [
  {
    id: 'sv-volunteer',
    title: 'Student Volunteer',
    items: [
      { conf: 'ACM UbiComp', years: ['2025'] },
    ],
  },
  {
    id: 'sv-pc',
    title: 'Program Committee',
    items: [
      { conf: 'ACM CUI', years: ['2026'] },
    ],
  },
  {
    id: 'sv-reviewer',
    title: 'Reviewer',
    note: '★ Special Recognition for Outstanding Reviews',
    items: [
      { conf: 'ACM CHI Poster', years: [{ year: '2026', award: true }] },
      { conf: 'ACM CSCW Poster', years: ['2025'] },
      { conf: 'ACM DIS', years: ['2026'] },
      { conf: 'ACM CUI', years: ['2026'] },
      { conf: 'ACM CHI PLAY', years: [{ year: '2026', award: true }] },
      { conf: 'ACM Interactive Health', years: ['2026'] },
      { conf: 'ICHEC (ChineseCHI)', years: ['2025'] },
      { conf: 'IEEE IJCNN', years: ['2024'] },
    ],
  },
];
