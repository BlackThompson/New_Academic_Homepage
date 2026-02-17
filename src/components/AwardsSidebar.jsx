import { awards } from '../data/awards';

export default function AwardsSidebar() {
  if (!awards || awards.length === 0) return null;

  return (
    <div className="sidebar-block" id="awards">
      <h3 className="sidebar-title">Awards &amp; Honors</h3>
      <ul className="sidebar-awards-list">
        {awards.map((item) => (
          <li key={item.id}>
            <span className="sidebar-award-year">{item.year}</span>
            {item.url ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
