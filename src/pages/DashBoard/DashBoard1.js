import React from 'react';
import DashOffCanvas from '../../components/DashOffCanvas/DashOffCanvas';

const DashBoard1 = () => {
  return (
    <div>
      <nav class='navbar  navbar-light bg-light'>
        <div class='container-fluid'>
          <DashOffCanvas></DashOffCanvas>
          <div class='navbar-nav d-flex flex-row align-items-center justify-content-center'>
            {/* <a class='nav-link active' aria-current='page' href='#'>
              Home
            </a>
            <a class='nav-link' href='#'>
              Features
            </a>
            <a class='nav-link' href='#'>
              Pricing
            </a>
            <a class='nav-link disabled'>Disabled</a> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBoard1;
