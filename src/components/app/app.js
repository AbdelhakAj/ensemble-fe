import React from "react";
import Button from "@material-ui/core/Button";
import { get } from "lodash";
import { useSelector, useDispatch } from "react-redux";

import "./app.scss";

function App() {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: "GETUSERS" })}
      >
        {users.loading ? "loading" : "get dummy users"}
      </Button>
      <ul>
        {get(users, "data.data", []).map(({ employee_name }) => (
          <li>{employee_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
