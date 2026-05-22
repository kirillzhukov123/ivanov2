import { useState } from 'react';
import { items } from './Filter';

function ArtCard({ image, title, year, artist, location }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="art-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="card-content">
        <div className="content-flex-wrapper">
          <div className="text-container">
            <div className="text-wrapper">
              {!isHovered ? (
                <div className="state-default">
                  <div className="painting-title">{title}</div>
                  <div className="painting-year">{year}</div>
                </div>
              ) : (
                <div className="state-hover">
                  <div className="painting-title uppercase">{artist}</div>
                  <div className="painting-year uppercase">{location}</div>
                </div>
              )}
            </div>
          </div>
          <div className="mobile-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ searchQuery }) {
  // Всегда показываем все карточки
  // Если есть поисковый запрос — показываем сообщение и скрываем карточки
  if (searchQuery) {
    return (
      <div className="empty-gallery" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
        No matches for {searchQuery}<br />Please try again with a different spelling or keywords.
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {items.map((card) => (
        <ArtCard key={card.id} {...card} />
      ))}
    </div>
  );
}

export default Card;