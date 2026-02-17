import SectionTitle from './SectionTitle';
import { researchExperience } from '../data/experience';

function ExpCard({ item }) {
  const advisorText = item.advisors.map((a, i) => (
    <span key={a.name}>
      {i > 0 && (i === item.advisors.length - 1 ? ', and ' : ', ')}
      {a.title && `${a.title} `}
      <a href={a.url} target="_blank" rel="noopener noreferrer">
        {a.name}
      </a>
    </span>
  ));

  return (
    <div className="exp-card">
      <span className="exp-date">{item.date}</span>
      <h4>
        <a href={item.labUrl} target="_blank" rel="noopener noreferrer">
          {item.lab}
        </a>
        , {item.institution}
      </h4>
      <p>Advised by {advisorText}.</p>
    </div>
  );
}

export default function ResearchExperience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <SectionTitle>Research Experience</SectionTitle>
        <div className="experience-grid">
          {researchExperience.map((item) => (
            <ExpCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
