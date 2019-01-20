import React from "react";
import UserList from "../containers/UserList";
import UserDetail from "../containers/UserDetail";
const App = () => {
  return (
    <div>
      <h2>Username List:</h2>
      <UserList />
      <hr />
      <h2>User Details:</h2>
      <UserDetail />
    </div>
  );
};

export default App;
