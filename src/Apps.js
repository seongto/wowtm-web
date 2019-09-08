import React from "react";
import Routes from "./Routes";
import { ThemeContext, AdminContext } from "./Components/Contexts";

const Apps = () => {
  return (
    <ThemeContext.Provider>
      <AdminContext.Provider>
        <Routes />
      </AdminContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Apps;
