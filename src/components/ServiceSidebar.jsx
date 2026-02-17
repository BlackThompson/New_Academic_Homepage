import { services } from '../data/services';

export default function ServiceSidebar() {
  if (!services || services.length === 0) return null;

  return (
    <div className="sidebar-block" id="service">
      <h3 className="sidebar-title">Academic Services</h3>
      {services.map((cat) => (
        <div key={cat.id} className="sidebar-service-group">
          <h4 className="sidebar-service-heading">{cat.title}</h4>
          <ul className="sidebar-service-list">
            {cat.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
