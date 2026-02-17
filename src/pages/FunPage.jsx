import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { funTabs } from '../data/fun';
import FurrySection from '../components/fun/FurrySection';
import CocktailSection from '../components/fun/CocktailSection';
import CookSection from '../components/fun/CookSection';
import TravelSection from '../components/fun/TravelSection';

const sectionMap = {
  furry: FurrySection,
  cocktails: CocktailSection,
  cook: CookSection,
  travel: TravelSection,
};

export default function FunPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(
    funTabs.find((t) => t.key === tabParam)?.key || funTabs[0].key
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTab = (key) => {
    setActiveTab(key);
    setSearchParams({ tab: key });
  };

  const ActiveSection = sectionMap[activeTab];

  return (
    <div className="fun-page" style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container">
        <Link to="/" className="back-link">
          <i className="fas fa-arrow-left" /> Back to Home
        </Link>

        <div className="fun-tabs">
          {funTabs.map((tab) => (
            <button
              key={tab.key}
              className={`fun-tab${activeTab === tab.key ? ' active' : ''}`}
              onClick={() => handleTab(tab.key)}
            >
              <i className={tab.icon} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="fun-content">
          {ActiveSection && <ActiveSection />}
        </div>
      </div>
    </div>
  );
}
