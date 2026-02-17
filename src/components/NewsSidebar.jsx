import ExpandableContent from './ExpandableContent';
import { news } from '../data/news';

function NewsItem({ item }) {
  return (
    <div className="sidebar-news-item">
      <span className="sidebar-news-date">{item.date}</span>
      <span
        className="sidebar-news-text"
        dangerouslySetInnerHTML={{ __html: item.text }}
      />
    </div>
  );
}

export default function NewsSidebar() {
  if (!news || news.length === 0) return null;

  const visible = news.slice(0, 3);
  const rest = news.slice(3);

  return (
    <div className="sidebar-block" id="news">
      <h3 className="sidebar-title">Latest News</h3>
      <div className="sidebar-news-list">
        {visible.map((item) => (
          <NewsItem key={item.id} item={item} />
        ))}
        {rest.length > 0 && (
          <ExpandableContent>
            {rest.map((item) => (
              <NewsItem key={item.id} item={item} />
            ))}
          </ExpandableContent>
        )}
      </div>
    </div>
  );
}
