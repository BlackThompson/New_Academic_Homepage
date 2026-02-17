import SectionTitle from './SectionTitle';
import { highlights } from '../data/highlights';

function HighlightCard({ item }) {
  return (
    <div className="highlight-card">
      <div className="highlight-icon">
        <span style={{ fontSize: '2.25rem' }}>{item.emoji}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="highlight-tags">
        {item.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ResearchHighlights() {
  return (
    <section className="section research-highlights" id="research">
      <div className="container">
        <SectionTitle>Research Highlights</SectionTitle>
        <div className="highlights-grid">
          {highlights.map((h) => (
            <HighlightCard key={h.id} item={h} />
          ))}
        </div>
      </div>
    </section>
  );
}
