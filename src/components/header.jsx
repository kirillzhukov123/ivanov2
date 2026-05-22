function Header({ scheme, onToggleTheme }) {
  const icon = scheme === 'light' ? 'img/dark_icon.png' : 'img/icon_btn.png';
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo h1"></h1>
        <button className="theme-toggle" onClick={onToggleTheme}>
          <img src={icon} style={{ width: 20, height: 20 }} alt="theme" />
        </button>
      </div>
    </header>
  );
}

export default Header;