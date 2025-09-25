import React from 'react';
import { Link  , Outlet} from 'react-router-dom';
function Dashboard() {
  return (
    <div className='flex'>
      <aside className="w-84 bg-sky-700 h-screen flex flex-col justify-center items-center text-white font-semibold text-lg gap-5">
        <Link to="/dashboard/overview">Overview</Link>
        <Link to='/dashboard/integrations'>Integrations</Link>
        <Link>Account</Link>
      </aside>
      <div className='flex-1'>
      <Outlet/>
      </div>
    </div>
  );
}

export default Dashboard;
