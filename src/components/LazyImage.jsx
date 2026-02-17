import { useState, useRef, useEffect } from 'react';

export default function LazyImage({ src, alt, className, style, onError }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`lazy-img-wrapper${loaded ? ' loaded' : ''}`}>
      {!loaded && <div className="lazy-img-skeleton" />}
      {inView && (
        <img
          src={src}
          alt={alt || ''}
          className={className}
          style={style}
          onLoad={() => setLoaded(true)}
          onError={(e) => {
            setLoaded(true);
            if (onError) onError(e);
          }}
        />
      )}
    </div>
  );
}
