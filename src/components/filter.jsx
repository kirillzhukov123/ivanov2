const items = [
  { id: 1, title: "CASCATE DI TIVOLI", year: 1761, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 1.png" },
  { id: 2, title: "PORTRAIT OF VINCENT VAN GOGH", year: 1886, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 2.png" },
  { id: 3, title: "UNEQUAL MARRIAGE", year: 1862, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 3.png" },
  { id: 4, title: "THE HAPPY VIOLINIST", year: 1624, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 4.png" },
  { id: 5, title: "THE ARCADIAN", year: 1834, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 5.png" },
  { id: 6, title: "GOLFO DI NAPOLI", year: 1845, artist: "JEAN-HONORE FRAGONARD", location: "LOUVRE MUSEUM", image: "img/image 6.png" }
];

const artists = [...new Set(items.map(i => i.artist))];
const locations = [...new Set(items.map(i => i.location))];

function Filter({ panelOpen, onClose }) {
  if (!panelOpen) return null;

  return (
    <div className="filter-overlay" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', zIndex: 1000 }} onClick={onClose}>
      <div className="filter-sidebar" style={{ animation: 'none', boxShadow: 'none' }} onClick={e => e.stopPropagation()}>
        <div className="filter-sidebar-header">
          <button className="close-filter" onClick={onClose}>✕</button>
        </div>
        <div className="filter-group">
          <label className="filter-label caption-bold-12">ARTIST</label>
          <div className="select-container">
            <div className="filter-select-trigger">
              <span>Select the artist</span>
              <div className="arrow-icon"></div>
            </div>
            <div className="filter-options-list">
              <div className="filter-option">All artists</div>
              {artists.map(a => <div key={a} className="filter-option">{a}</div>)}
            </div>
          </div>
        </div>
        <div className="filter-group">
          <label className="filter-label caption-bold-12">LOCATION</label>
          <div className="select-container">
            <div className="filter-select-trigger">
              <span>Select the location</span>
              <div className="arrow-icon"></div>
            </div>
            <div className="filter-options-list">
              <div className="filter-option">All locations</div>
              {locations.map(l => <div key={l} className="filter-option">{l}</div>)}
            </div>
          </div>
        </div>
        <div className="filter-group">
          <label className="filter-label caption-bold-12">YEARS</label>
          <div className="years-inputs">
            <input type="number" placeholder="From" />
            <input type="number" placeholder="To" />
          </div>
        </div>
        <div className="filter-sidebar-footer">
          <button className="btn-show">SHOW THE RESULTS</button>
          <button className="btn-clear">CLEAR</button>
        </div>
      </div>
    </div>
  );
}

export { items };
export default Filter;