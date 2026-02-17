import { profile } from '../data/profile';

export default function FunFactsSidebar() {
  if (!profile.aboutMe) return null;

  return (
    <div className="sidebar-block" id="about-me">
      <h3 className="sidebar-title">Fun Facts</h3>
      <p className="sidebar-funfacts-text">{profile.aboutMe}</p>
      {profile.aboutIcons && profile.aboutIcons.length > 0 && (
        <div className="sidebar-funfacts-icons">
          {profile.aboutIcons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}
        </div>
      )}
    </div>
  );
}
