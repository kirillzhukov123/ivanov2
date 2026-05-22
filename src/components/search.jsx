function Search({ scheme, searchQuery, onSearchChange, onTogglePanel }) {
  const icon = scheme === 'light' ? 'img/filter_icon-red.png' : 'img/filter_icon.png';
  return (
    <div className="search-filter-section">
      <div className="search-filter-container">
        <div className="search-wrapper">
          <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="22" y1="22" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            className="search-input"
            placeholder="Painting title"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
        <button className="burger-btn" onClick={onTogglePanel}>
          <img src={icon} alt="filter" />
        </button>
      </div>
    </div>
  );
}

export default Search;