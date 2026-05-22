function Pagination({ scheme, searchQuery }) {
  if (searchQuery) return null;
  const img = scheme === 'light' ? 'img/pag-light.png' : 'img/pag.png';
  return (
    <div className="pag">
      <img src={img} alt="pagination" />
    </div>
  );
}

export default Pagination;