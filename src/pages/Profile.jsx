import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
    

const Profile = () => {
  const [user, setUser] = useState({});
  const { name } = useParams();

  useEffect(() => {
    setUser(users.find((u) => u.username == name));
  }, []);

  return (
    <div>
      <img src={user.profile} alt="" />
      <h1>ID: {user.id}</h1>
      <h1>Name: {user.name}</h1>
      <h1>Username: {user.username}</h1>
      <h1>Email: {user.email}</h1>
    </div>
  );
};

export default Profile;
