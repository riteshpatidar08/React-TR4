import React from 'react';
import { Link } from 'react-router-dom';
function Dashboard() {
  return (
    <div>
      <aside className="w-84 bg-sky-700 h-screen flex flex-col justify-center items-center text-white font-semibold text-lg gap-5">
        <Link to="/dashboard/overview">Overview</Link>
        <Link>Integrations</Link>
        <Link>Account</Link>
      </aside>
    </div>
  );
}

export default Dashboard;
