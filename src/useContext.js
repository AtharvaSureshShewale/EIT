import React, { useContext } from 'react';
import './useState.css';

const ThemeContext = React.createContext('light');

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Themed Button</button>;
}

export default ThemeButton;
