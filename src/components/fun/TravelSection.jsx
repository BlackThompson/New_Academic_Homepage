import { travelData } from '../../data/fun-travel';
import PhotoGallery from './PhotoGallery';

export default function TravelSection() {
  return (
    <div className="fun-section">
      {travelData.intro && <p className="fun-intro">{travelData.intro}</p>}
      <PhotoGallery images={travelData.images} />
    </div>
  );
}
