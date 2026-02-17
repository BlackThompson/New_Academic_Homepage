import { Link } from 'react-router-dom';
import SectionTitle from './SectionTitle';
import ExpandableContent from './ExpandableContent';
import { news } from '../data/news';

function NewsItem({ item }) {
  return (
    <div className="news-item">
      <span className="news-date">{item.date}</span>
      <span
        className="news-text"
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  );
}

/**
 * News section.
 * @param {Object} props
 * @param {boolean} props.showAll - If true, shows all items without collapsing.
 */
export default function News({ showAll = false }) {
  const featured = news.filter((n) => n.featured);
  const rest = news.filter((n) => !n.featured);

  return (
    <section className="section news" id="news">
      <div className="container">
        <SectionTitle>Latest News</SectionTitle>
        <div className="news-list">
          {showAll ? (
            news.map((item) => <NewsItem key={item.id} item={item} />)
          ) : (
            <>
              {featured.map((item) => (
                <NewsItem key={item.id} item={item} />
              ))}
              {rest.length > 0 && (
                <ExpandableContent>
                  {rest.map((item) => (
                    <NewsItem key={item.id} item={item} />
                  ))}
                </ExpandableContent>
              )}
              <div style={{ marginTop: '8px' }}>
                <Link to="/news" className="more-btn">
                  View All News &gt;
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
