import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Card from './components/Card';
import Pagination from './components/Pagination';
import './index.css';

function App() {
  const [scheme, setScheme] = useState(() => localStorage.getItem('colorMode') || 'light');
  const [panelOpen, setPanelOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    document.body.classList.toggle('dark', scheme === 'dark');
    localStorage.setItem('colorMode', scheme);
  }, [scheme]);

  return (
    <div>
      <Header scheme={scheme} onToggleTheme={() => setScheme(s => s === 'light' ? 'dark' : 'light')} />
      <Search
        scheme={scheme}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onTogglePanel={() => setPanelOpen(p => !p)}
      />
      <Filter panelOpen={panelOpen} onClose={() => setPanelOpen(false)} />
      <Card searchQuery={searchQuery} />
      <Pagination scheme={scheme} searchQuery={searchQuery} />
    </div>
  );
}

export default App;