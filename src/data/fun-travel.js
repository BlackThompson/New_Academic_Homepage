/**
 * Travel section data.
 * Organized by year → trips → images.
 * Place images in public/images/fun/travel/
 */

export const travelData = {
  intro:
    'Snapshots from my travels around the world.',
  years: [
    {
      year: 2026,
      trips: [
        {
          id: 'barcelona-2026',
          location: 'Barcelona, Spain',
          date: 'Apr 2026',
          description: 'CHI 2026 conference trip — tapas, Gaudí, and the Mediterranean breeze.',
          images: [
            { src: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800', caption: 'Sagrada Familia' },
            { src: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800', caption: 'Park Güell' },
            { src: 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800', caption: 'La Boqueria Market' },
          ],
        },
      ],
    },
    {
      year: 2025,
      trips: [
        {
          id: 'copenhagen-2025',
          location: 'Copenhagen, Denmark',
          date: 'Jun 2025',
          description: 'Weekend getaway from Aarhus — colorful streets and pastries.',
          images: [
            { src: 'https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800', caption: 'Nyhavn' },
            { src: 'https://images.unsplash.com/photo-1552560745-11a24d418a5f?w=800', caption: 'Tivoli Gardens' },
          ],
        },
        {
          id: 'singapore-2025',
          location: 'Singapore',
          date: 'Jan 2025',
          description: 'Research visit at NUS — hawker food, Marina Bay, and tropical rain.',
          images: [
            { src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800', caption: 'Marina Bay Sands' },
            { src: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=800', caption: 'Gardens by the Bay' },
            { src: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=800', caption: 'Hawker Centre' },
            { src: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=800', caption: 'Clarke Quay at night' },
          ],
        },
      ],
    },
    {
      year: 2024,
      trips: [
        {
          id: 'shenzhen-2024',
          location: 'Shenzhen, China',
          date: 'Jul 2024',
          description: 'Saying goodbye to my undergraduate life at HITSZ.',
          images: [
            { src: 'https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?w=800', caption: 'Shenzhen Bay' },
            { src: 'https://images.unsplash.com/photo-1598887142487-3c854d51eabb?w=800', caption: 'OCT Loft' },
          ],
        },
        {
          id: 'tokyo-2024',
          location: 'Tokyo, Japan',
          date: 'Mar 2024',
          description: 'Cherry blossom season — ramen, shrines, and Akihabara.',
          images: [
            { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800', caption: 'Shibuya Crossing' },
            { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', caption: 'Cherry blossoms at Ueno Park' },
            { src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', caption: 'Senso-ji Temple' },
          ],
        },
      ],
    },
  ],
};
