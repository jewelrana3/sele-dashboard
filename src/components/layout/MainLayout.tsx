import React from 'react';

import { Outlet } from 'react-router-dom';
// import HeaderDashboard from './HeaderDashboard';
import Sidebar from './Sidebar';
import HeaderDashboard from './HeaderDashboard';

const MainLayout: React.FC = () => {
    return (
        <div className="grid grid-cols-12">
            {/* side bar */}
            <div className="col-span-2 h-screen border-r-2 border-[#ffbc58]">
                <Sidebar />
            </div>

            {/* main container with header */}
            <div className="col-span-10">
                <div className="flex items-center justify-end pr-5 ">
                    <HeaderDashboard />
                </div>

                <div className=" h-[calc(100vh-80px)] px-8 ">
                    <div className="h-full overflow-y-auto rounded-md ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
