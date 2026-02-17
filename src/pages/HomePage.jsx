import Hero from '../components/Hero';
import Publications from '../components/Publications';
import NewsSidebar from '../components/NewsSidebar';
import ServiceSidebar from '../components/ServiceSidebar';
import AwardsSidebar from '../components/AwardsSidebar';
import FunFactsSidebar from '../components/FunFactsSidebar';
import Friends from '../components/Friends';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Two-column layout: Publications (left) + Sidebar (right) */}
      <section className="section two-column-section" id="main-content">
        <div className="container two-column-container">
          <div className="main-column">
            <Publications />
            <Friends />
          </div>
          <aside className="sidebar-column">
            <NewsSidebar />
            <ServiceSidebar />
            <AwardsSidebar />
            <FunFactsSidebar />
          </aside>
        </div>
      </section>
    </>
  );
}
