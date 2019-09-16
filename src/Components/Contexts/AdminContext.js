import React from 'react';

const AdminContext = React.createContext({
  team_id: 0,
  user: 'guest',
});

const AdminProvider = props => {
  return (
    <AdminContext.Provider value="user">{props.children}</AdminContext.Provider>
  );
};

export {AdminContext, AdminProvider};
