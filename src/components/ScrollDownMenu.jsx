import React, { useState } from 'react';

const ScrollDownMenu = () => {
  const [menuItems, setMenuItems] = useState([
    'Home',
    'About',
    'Services',
    'Contact',
    "hello"
    // Add more menu items as needed
  ]);

  return (
    <div className="scroll-down-menu overflow-y-scroll h-40 border border-red">
      {/* Render the menu items */}
      {menuItems.map((item, index) => (
        <div key={index} className="menu-item py-2 px-4 cursor-pointer hover:bg-red">
          {item}
        </div>
      ))}
    </div>
  );
};

export default ScrollDownMenu;
