import React, { useContext } from 'react';
import ThemeContext from '../context/theme';

export default function Setting() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Hi from setting</h1>
      <hr />
      <h5>Theme : {theme}</h5>
    </div>
  );
}
