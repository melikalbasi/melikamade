import React from 'react';

const LargeNav: React.FC = () => {
  return (
    <nav className="large-nav">
      <a
        href="/engage"
        data-text="ENGAGE"
        className="large-nav__link left-link"
      >
        ABOUT
      </a>
      <a
        href="/engineering"
        data-text="ENGINEERING"
        className="large-nav__link right-link"
      >
        WORK
      </a>
      <a
        href="/embroidery"
        data-text="EMBROIDERY"
        className="large-nav__link left-link"
      >
        ART
      </a>
      <a
        href="/explore"
        data-text="EXPLORATIONS"
        className="large-nav__link right-link"
      >
        CONTACT
      </a>
    </nav>
  );
};

export default LargeNav;
