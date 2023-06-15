import React from 'react';


const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">Home</li>
          <li className="nav-item">Features</li>
          <li className="nav-item">FAQs</li>
          <li className="nav-item">About</li>
        </ul>
        <p className="text-center text-muted"> © 2023 FlexRent</p>
      </footer>
    </div>
  );
};

export default Footer;