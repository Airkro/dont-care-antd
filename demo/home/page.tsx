import { Link } from 'react-router-dom';

export function Page() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Home</h1>
      <nav style={{ display: 'flex', gap: 16, marginTop: 16 }}>
        <Link to="/tree">Tree Demo</Link>
        <Link to="/separate">Separate Demo</Link>
      </nav>
    </div>
  );
}
