import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const User = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const getUser = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const data = await response.data;
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h4>User info: </h4>
      <p>User_name: {user.name}</p>
      <p>User_email: {user.email}</p>
      <small>User_phone: {user.phone}</small>
    </div>
  );
};

export default User;
