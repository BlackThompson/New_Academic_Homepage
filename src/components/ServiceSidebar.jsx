import { services } from '../data/services';

export default function ServiceSidebar() {
  if (!services || services.length === 0) return null;

  return (
    <div className="sidebar-block" id="service">
      <h3 className="sidebar-title">Academic Services</h3>
      {services.map((cat) => (
        <div key={cat.id} className="sidebar-service-group">
          <h4 className="sidebar-service-heading">{cat.title}</h4>
          {cat.note && (
            <p className="sidebar-service-note">{cat.note}</p>
          )}
          <ul className="sidebar-service-list">
            {cat.items.map((item, i) => (
              <li key={i}>
                {item.conf} |{' '}
                {item.years.map((y, j) => {
                  const year = typeof y === 'string' ? y : y.year;
                  const award = typeof y !== 'string' && y.award;
                  return (
                    <span key={j}>
                      {j > 0 && ', '}
                      {year}
                      {award && <sup className="service-star">★</sup>}
                    </span>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
