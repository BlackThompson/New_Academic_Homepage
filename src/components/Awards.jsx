import SectionTitle from './SectionTitle';
import { awards } from '../data/awards';

function AwardItem({ item }) {
  return (
    <div className="award-item">
      <span className="award-year">{item.year}</span>
      <span className="award-text">
        {item.url ? (
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.text}
          </a>
        ) : (
          item.text
        )}
      </span>
    </div>
  );
}

export default function Awards() {
  return (
    <section className="section awards" id="awards">
      <div className="container">
        <SectionTitle>Awards &amp; Honors</SectionTitle>
        <div className="awards-list">
          {awards.map((item) => (
            <AwardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
