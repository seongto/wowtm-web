import React from 'react';
import Routes from './Routes';
import {ThemeContext, AdminContext, ModalContext} from './Components/Contexts';

const Apps = () => {
  return (
    <ThemeContext.Provider>
      <AdminContext.Provider>
        <ModalContext.Provider>
          <Routes />
        </ModalContext.Provider>
      </AdminContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Apps;
