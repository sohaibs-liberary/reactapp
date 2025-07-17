import React from 'react';

function Navbar() {
  return (
    <nav style={{ background: '#333', color: '#fff', padding: '10px' }}>
      <h2>My Website</h2>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '15px' }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;