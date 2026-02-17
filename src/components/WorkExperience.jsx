import SectionTitle from './SectionTitle';
import { workExperience, workExperienceNote } from '../data/experience';

function WorkItem({ item }) {
  return (
    <div className="work-item">
      <span className="work-icon">{item.icon}</span>
      <div>
        <h4>{item.title}</h4>
        <p>
          {item.placeUrl ? (
            <a href={item.placeUrl} target="_blank" rel="noopener noreferrer">
              {item.place}
            </a>
          ) : item.place ? (
            item.place
          ) : null}
          {item.place && ', '}
          {item.location}
        </p>
        <span className="exp-date">{item.date}</span>
      </div>
    </div>
  );
}

export default function WorkExperience() {
  return (
    <section className="section work-experience">
      <div className="container">
        <SectionTitle>Work Experience</SectionTitle>
        <p className="section-subtitle">
          <em>{workExperienceNote}</em>
        </p>
        <div className="work-grid">
          {workExperience.map((item) => (
            <WorkItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
