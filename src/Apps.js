import React from 'react';
import Routes from './Routes';
import {ThemeContext, AdminContext} from './Components/Contexts';

const Apps = () => {
  return (
    <ThemeContext.Provider value={theme}>
      <AdminContext.Provider value={signedInUser}>
        <Routes />
      </AdminContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Apps;
