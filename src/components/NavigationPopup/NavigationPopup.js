import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationPopup.css';

function NavigationPopup() {
  return (
    <section>
      <button></button>
      <nav>
        <div>
          <NavLink></NavLink>
          <NavLink></NavLink>
          <NavLink></NavLink>
        </div>
        <NavLink></NavLink>
      </nav>
    </section>
  );
}

export default NavigationPopup;
