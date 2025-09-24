import React from 'react';
import { Link } from 'react-router-dom';
function UserPage() {
  const userData = [
    { id: 1, name: 'Mohit', email: 'mohit@gmail.com', isActive: true },
    { id: 2, name: 'Vinay', email: 'vinay@gmail.com', isActive: false },
  ];
  return (
    <div className="flex gap-2 flex-col m-10">
      {userData.map((user) => (
        <div
          key={user.id}
          className="text-2xl p-6 border rounded-2xl font-bold flex flex-col gap-3"
        >
          <h1>{user.name}</h1>
          <Link to="" className="text-lg font-semibold text-sky-300 underline">
            See Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default UserPage;
