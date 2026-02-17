import { cookData } from '../../data/fun-cook';
import PhotoGallery from './PhotoGallery';

export default function CookSection() {
  return (
    <div className="fun-section">
      {cookData.intro && <p className="fun-intro">{cookData.intro}</p>}
      <PhotoGallery images={cookData.images} />
    </div>
  );
}
