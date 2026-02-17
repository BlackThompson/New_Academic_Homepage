import { cocktailsData } from '../../data/fun-cocktails';
import PhotoGallery from './PhotoGallery';

export default function CocktailSection() {
  return (
    <div className="fun-section">
      {cocktailsData.intro && <p className="fun-intro">{cocktailsData.intro}</p>}
      <PhotoGallery images={cocktailsData.images} />
    </div>
  );
}
