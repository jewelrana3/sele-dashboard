import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';
import Sideber from './Sideber';

const MainLayout: React.FC = () => {
    return (
        <div className="grid grid-cols-12 ">
            {/* side bar */}
            <div className="col-span-2 bg-[#EBF4FF] h-screen">
                <Sideber />
            </div>

            {/* main container with header */}
            <div className="col-span-10 ">
                <div className="flex items-center justify-end  ">
                    <HeaderDashboard />
                </div>

                <div className=" overflow-y-auto  px-10 mt-3">
                    <div className="h-full  rounded-md ">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
