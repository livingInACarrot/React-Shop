import React from 'react';
import './styles.css';
import AppBar from '@mui/material/AppBar';

interface INavigationBar {
  toggleSidebar: () => void;
}

const NavigationBar: React.FC<INavigationBar> = ({ toggleSidebar }) => {
  return (
    <AppBar className="navigation-bar" sx={{ backgroundColor: '#533420' }}>
      <div>
        <button onClick={toggleSidebar}>Поиск</button>
        <button>Продукция</button>
        <button>Склады</button>
        <button>О нас</button>
        <button>Профиль</button>
      </div>
    </AppBar>
  );
};

export default NavigationBar;
