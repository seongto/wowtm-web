import React from "react";

const AdminContext = React.createContext({
  team_id: 0,
  user: "guest"
});

export default AdminContext;
