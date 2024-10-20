import React from "react";
import { getAllUsers } from "../../../lib/db";
import UserCard from "./UserCard";

const UsersList = async () => {
  const allUsers = await getAllUsers();
  return (
    <div>
      {allUsers?.map((data) => (
        <UserCard key={data?.id} data={data} />
      ))}
    </div>
  );
};

export default UsersList;
