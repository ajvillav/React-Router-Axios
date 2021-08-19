import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>Users list</h2>
      {users.map((item) => (
        <div>
          <Link to={`/users/${item.id}`} key={item.id}>
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;
