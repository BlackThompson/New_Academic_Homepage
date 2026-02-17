import { useState } from 'react';
import { assetUrl } from '../../utils/assets';

const FALLBACK =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' fill='%23f3f4f6'%3E%3Crect width='400' height='300' rx='12'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.35em' font-size='40' fill='%23d1d5db'%3E%F0%9F%93%B7%3C/text%3E%3C/svg%3E";

export default function PhotoGallery({ images }) {
  const [lightbox, setLightbox] = useState(null);

  if (!images || images.length === 0) {
    return (
      <div className="gallery-empty">
        <i className="fas fa-camera" />
        <p>Photos coming soon...</p>
      </div>
    );
  }

  return (
    <>
      <div className="photo-gallery">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-item"
            onClick={() => setLightbox(i)}
          >
            <img
              src={assetUrl(img.src)}
              alt={img.alt || ''}
              loading="lazy"
              onError={(e) => { e.target.src = FALLBACK; }}
            />
            {img.caption && (
              <div className="gallery-caption">{img.caption}</div>
            )}
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <i className="fas fa-times" />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + images.length) % images.length);
            }}
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <img
            src={assetUrl(images[lightbox].src)}
            alt={images[lightbox].alt || ''}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % images.length);
            }}
            aria-label="Next"
          >
            <i className="fas fa-chevron-right" />
          </button>
          {(images[lightbox].caption || images[lightbox].date || images[lightbox].description) && (
            <div className="lightbox-info" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-info-header">
                {images[lightbox].caption && (
                  <span className="lightbox-info-title">{images[lightbox].caption}</span>
                )}
                {images[lightbox].date && (
                  <span className="lightbox-info-date">
                    <i className="fas fa-calendar-alt" /> {images[lightbox].date}
                  </span>
                )}
              </div>
              {images[lightbox].description && (
                <p className="lightbox-info-desc">{images[lightbox].description}</p>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
}
