"use server";

import { use } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

const UsersItems = () => {
  const users = use(fetchUsers());

  return (
    <ul>
      {users.map((user: User) => (
        <div key={user.id} className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </ul>
  );
};

export default UsersItems;
