import SectionTitle from './SectionTitle';
import { friends, friendsNote } from '../data/friends';

function FriendCard({ item }) {
  const nameElements = item.names.map((person, i) => (
    <span key={person.name}>
      {i > 0 && ', '}
      {person.url ? (
        <a href={person.url} target="_blank" rel="noopener noreferrer">
          {person.name}
        </a>
      ) : (
        person.name
      )}
    </span>
  ));

  return (
    <div className={`friend-item${item.special ? ' friend-item-special' : ''}`}>
      <div className="friend-name">{nameElements}</div>
      {item.description && (
        <div className="friend-desc">{item.description}</div>
      )}
    </div>
  );
}

export default function Friends() {
  if (!friends || friends.length === 0) return null;

  return (
    <div className="friends-section" id="friends">
      <SectionTitle>Friends</SectionTitle>
      <p className="section-subtitle">
        <em>{friendsNote}</em>
      </p>
      <div className="friends-list">
        {friends.map((item) => (
          <FriendCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
