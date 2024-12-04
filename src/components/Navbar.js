import React from 'react';
import plane from '../assets/airplane.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light d-flex justify-content-center" style={{ backgroundColor: 'rgb(232 219 219)' }}>
        <div
          className="navbar-brand"
          style={{ fontWeight: 'bold', fontSize: '25px' }}
        >
          <img
            src={plane}
            width="30"
            height="30"
            className="d-inline-block align-top mr-2 ml-5"
            alt="plane"
          />
          Flight Finder
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
