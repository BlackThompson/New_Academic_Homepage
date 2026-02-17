import { profile, socialLinks } from '../data/profile';
import ExpandableContent from './ExpandableContent';
import { SiXiaohongshu } from 'react-icons/si';

const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22380%22 fill=%22%23e8e8e8%22%3E%3Crect width=%22300%22 height=%22380%22 rx=%2216%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 dy=%22.3em%22 font-size=%2240%22 fill=%22%23999%22%3E%F0%9F%90%95%3C/text%3E%3C/svg%3E";

export default function Hero() {
  const visibleBio = profile.bio.filter((b) => !b.expandable);
  const expandableBio = profile.bio.filter((b) => b.expandable);

  return (
    <header className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{profile.name}</h1>
            {profile.pronouns && (
              <span className="hero-pronouns">{profile.pronouns}</span>
            )}
            <div className="hero-bio">
              {visibleBio.map((b, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: b.text }} />
              ))}

              {expandableBio.length > 0 && (
                <ExpandableContent>
                  {expandableBio.map((b, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: b.text }} />
                  ))}
                </ExpandableContent>
              )}
            </div>

            {profile.callout && (
              <div className="phd-callout">
                <p dangerouslySetInnerHTML={{ __html: profile.callout }} />
              </div>
            )}

            {socialLinks.length > 0 && (
              <div className="hero-links">
                {socialLinks.map((link) => (
                  <a key={link.title} href={link.url} title={link.title} target="_blank" rel="noopener noreferrer">
                    {link.reactIcon === 'xiaohongshu' ? (
                      <SiXiaohongshu size={22} />
                    ) : (
                      <i className={link.icon} />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="hero-portrait">
            <img
              src={profile.portrait}
              alt={profile.portraitAlt}
              onError={(e) => {
                e.target.src = FALLBACK_IMG;
              }}
            />
            {profile.tagline && (
              <p className="hero-tagline">
                <em>{profile.tagline}</em>
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
