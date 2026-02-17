import SectionTitle from './SectionTitle';
import { profile } from '../data/profile';

export default function AboutMe() {
  return (
    <section className="section about-me" id="about-me">
      <div className="container">
        <SectionTitle>About Me</SectionTitle>
        <div className="about-content">
          <p>{profile.aboutMe}</p>
          <div className="about-icons">
            {profile.aboutIcons.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
