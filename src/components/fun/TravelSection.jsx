import { useState } from 'react';
import { travelData } from '../../data/fun-travel';
import { assetUrl } from '../../utils/assets';
import PhotoGallery from './PhotoGallery';

function TripCard({ trip, isOpen, onToggle }) {
  const cover = trip.images?.[0];

  return (
    <div className={`trip-card${isOpen ? ' open' : ''}`}>
      <div className="trip-card-header" onClick={onToggle}>
        {cover ? (
          <div className="trip-cover">
            <img src={assetUrl(cover.src)} alt={trip.location} />
            <div className="trip-cover-overlay" />
          </div>
        ) : (
          <div className="trip-cover trip-cover-empty">
            <i className="fas fa-map-marker-alt" />
          </div>
        )}
        <div className="trip-info">
          <h4 className="trip-location">{trip.location}</h4>
          <span className="trip-date">{trip.date}</span>
          {trip.description && (
            <p className="trip-description">{trip.description}</p>
          )}
        </div>
        <span className="trip-toggle">
          <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'}`} />
        </span>
      </div>
      {isOpen && trip.images?.length > 0 && (
        <div className="trip-gallery">
          <PhotoGallery images={trip.images} />
        </div>
      )}
    </div>
  );
}

export default function TravelSection() {
  const [openTrip, setOpenTrip] = useState(null);

  const hasTrips = travelData.years?.some((y) => y.trips?.length > 0);

  if (!hasTrips) {
    return (
      <div className="fun-section">
        {travelData.intro && <p className="fun-intro">{travelData.intro}</p>}
        <div className="gallery-empty">
          <i className="fas fa-plane" />
          <p>Travel photos coming soon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fun-section">
      {travelData.intro && <p className="fun-intro">{travelData.intro}</p>}
      {travelData.years.map((yearGroup) => (
        <div key={yearGroup.year} className="travel-year-group">
          <h3 className="travel-year">{yearGroup.year}</h3>
          <div className="travel-trips">
            {yearGroup.trips.map((trip) => (
              <TripCard
                key={trip.id}
                trip={trip}
                isOpen={openTrip === trip.id}
                onToggle={() =>
                  setOpenTrip(openTrip === trip.id ? null : trip.id)
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
