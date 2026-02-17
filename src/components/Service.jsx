import SectionTitle from './SectionTitle';
import { services } from '../data/services';

function ServiceColumn({ category }) {
  return (
    <div className="service-col">
      <h3>{category.title}</h3>
      <ul>
        {category.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Service() {
  return (
    <section className="section service" id="service">
      <div className="container">
        <SectionTitle>Academic Service</SectionTitle>
        <div className="service-grid">
          {services.map((cat) => (
            <ServiceColumn key={cat.id} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
