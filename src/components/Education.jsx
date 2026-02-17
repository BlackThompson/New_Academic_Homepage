import SectionTitle from './SectionTitle';
import { education } from '../data/education';

function TimelineItem({ item, isFirst }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-marker${isFirst ? ' current' : ''}`} />
      <div className="timeline-content">
        <span className="timeline-date">{item.date}</span>
        <h4>
          {item.titleUrl ? (
            <a href={item.titleUrl} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h4>
        <p>
          <a href={item.institutionUrl} target="_blank" rel="noopener noreferrer">
            {item.institution}
          </a>
          , {item.location}
        </p>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section className="section education" id="education">
      <div className="container">
        <SectionTitle>Education</SectionTitle>
        <div className="timeline">
          {education.map((item, i) => (
            <TimelineItem key={item.id} item={item} isFirst={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
