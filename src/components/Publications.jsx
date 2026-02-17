import { useState } from 'react';
import { Link } from 'react-router-dom';
import { publications, publicationFilters } from '../data/publications';
import { assetUrl } from '../utils/assets';

function AuthorList({ authors }) {
  return (
    <p className="pub-authors">
      {authors.map((author, i) => {
        const name = typeof author === 'string' ? author : author.name;
        const isSelf = typeof author !== 'string' && author.self;
        return (
          <span key={i}>
            {i > 0 && ', '}
            {isSelf ? <strong>{name}</strong> : name}
          </span>
        );
      })}
      .
    </p>
  );
}

const PAPER_FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100' fill='%23f3f4f6'%3E%3Crect width='160' height='100' rx='6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.35em' font-size='28' fill='%23d1d5db'%3E%F0%9F%93%84%3C/text%3E%3C/svg%3E";

function PubItem({ item }) {
  return (
    <div className="pub-item" data-tags={item.tags.join(' ')}>
      {item.image && (
        <div className="pub-thumb">
          <img
            src={assetUrl(item.image)}
            alt={item.title}
            onError={(e) => { e.target.src = PAPER_FALLBACK; }}
          />
        </div>
      )}
      <div className="pub-body">
        {item.award && (
          <span className="pub-award">
            <i className="fas fa-trophy" /> {item.award}
          </span>
        )}
        <h4 className="pub-title">{item.title}</h4>
        <AuthorList authors={item.authors} />
        <p className="pub-journal">
          <em>{item.journal}</em>
        </p>
        {item.links.length > 0 && (
          <div className="pub-links">
            {item.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="pub-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={link.icon} /> {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Publications section.
 * @param {Object} props
 * @param {boolean} props.standalone - If true, wraps in section+container (for dedicated page).
 */
export default function Publications({ standalone = false }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPubs = publications
    .map((group) => ({
      ...group,
      items: group.items.filter(
        (item) =>
          activeFilter === 'all' || item.tags.includes(activeFilter)
      ),
    }))
    .filter((group) => group.items.length > 0);

  const content = (
    <div className="publications-content" id={standalone ? 'publications' : undefined}>
      <h2 className="section-title">Selected Publications</h2>
      <p className="pub-note">
        <em>* equal contribution &nbsp; &dagger; corresponding author</em>
      </p>

      <div className="pub-filters">
        <span>Keywords:</span>
        {publicationFilters.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
            onClick={() => setActiveFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filteredPubs.map((group) => (
        <div key={group.year} className="pub-year-group">
          <h3 className="pub-year">{group.year}</h3>
          {group.items.map((item) => (
            <PubItem key={item.id} item={item} />
          ))}
        </div>
      ))}
    </div>
  );

  if (standalone) {
    return (
      <section className="section publications">
        <div className="container">{content}</div>
      </section>
    );
  }

  return content;
}
