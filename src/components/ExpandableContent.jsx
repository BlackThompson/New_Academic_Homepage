import { useState } from 'react';

export default function ExpandableContent({ children }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className={`expandable-content${expanded ? ' expanded' : ''}`}>
        {children}
      </div>
      {!expanded && (
        <button className="more-btn" onClick={() => setExpanded(true)}>
          More &gt;
        </button>
      )}
      {expanded && (
        <button className="more-btn" onClick={() => setExpanded(false)}>
          Less &lt;
        </button>
      )}
    </>
  );
}
