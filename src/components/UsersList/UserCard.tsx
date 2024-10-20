import React from "react";
import { NewUser } from "../../../lib/db";
import { format } from "date-fns";

const UserCard = ({ data }: { data: NewUser }) => {
  return (
    <div className="w-full px-3 py-2 border rounded-lg mb-4 last-of-type:mb-0">
      <h2>
        <span className="font-semibold">Name:</span> {data?.name}
      </h2>
      <h2>
        <span className="font-semibold">Email:</span> {data?.email}
      </h2>
      <h2>
        <span className="font-semibold">Member since:</span>{" "}
        {format(new Date(data?.createdAt ?? ""), "do MMMM yyyy")}
      </h2>
    </div>
  );
};

export default UserCard;
