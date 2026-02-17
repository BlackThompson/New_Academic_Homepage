import { furryData } from '../../data/fun-furry';
import PhotoGallery from './PhotoGallery';

export default function FurrySection() {
  return (
    <div className="fun-section">
      {furryData.intro && <p className="fun-intro">{furryData.intro}</p>}
      {furryData.sections.map((section, i) => (
        <div key={i} className="fun-subsection">
          <h3 className="fun-subsection-title">{section.title}</h3>
          {section.description && (
            <p className="fun-subsection-desc">{section.description}</p>
          )}
          <PhotoGallery images={section.images} />
        </div>
      ))}
    </div>
  );
}
