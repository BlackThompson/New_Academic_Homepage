import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Publications from '../components/Publications';

export default function PublicationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container" style={{ paddingTop: '24px' }}>
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left" /> Back to Home
        </Link>
      </div>
      <Publications standalone />
    </div>
  );
}
