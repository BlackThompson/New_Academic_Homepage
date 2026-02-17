import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import PublicationsPage from './pages/PublicationsPage';
import FunPage from './pages/FunPage';

function useExternalLinksNewTab() {
  const location = useLocation();

  useEffect(() => {
    const links = document.querySelectorAll('a[href]');
    links.forEach((link) => {
      const href = link.getAttribute('href');
      if (
        href &&
        !href.startsWith('#') &&
        !href.startsWith('/') &&
        href !== '' &&
        !link.hasAttribute('data-internal')
      ) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      }
    });
  }, [location]);
}

export default function App() {
  useExternalLinksNewTab();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/fun" element={<FunPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
