// import React from 'react';

// import { Outlet } from 'react-router-dom';
// // import HeaderDashboard from './HeaderDashboard';

// import HeaderDashboard from './HeaderDashboard';
// import SiderbarDublicate from './SiderbarDublicate';

// const MainLayout: React.FC = () => {
//     return (
//         <div className="grid grid-cols-12 h-screen">
//             <div className="col-span-2 bg-[#EBF4FF] h-screen overflow-hidden">
//                 <SiderbarDublicate />
//             </div>

//             {/* Main content - scrollable outlet */}
//             <div className="col-span-10 flex flex-col h-screen">
//                 {/* Header - fixed */}
//                 <div className="flex items-center justify-end">
//                     <HeaderDashboard />
//                 </div>

//                 {/* Outlet - scrollable */}
//                 <div className="flex-1 overflow-hidden px-10 mt-3">
//                     <div className="min-h-full rounded-md">
//                         <Outlet />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainLayout;

import React from 'react';

import { Outlet } from 'react-router-dom';
// import HeaderDashboard from './HeaderDashboard';

import HeaderDashboard from './HeaderDashboard';
import SiderbarDublicate from './SiderbarDublicate';

const MainLayout: React.FC = () => {
    return (
        <div className="flex h-screen">
            {/* Sidebar with fixed width */}
            <div className="w-[320px] min-w-[320px] max-w-[320px] bg-[#EBF4FF] h-screen">
                <SiderbarDublicate />
            </div>

            {/* Main content - scrollable outlet */}
            <div className="flex-1 flex flex-col h-screen">
                {/* Header - fixed */}
                <div className="flex items-center justify-end">
                    <HeaderDashboard />
                </div>

                {/* Outlet - scrollable */}
                <div className="flex-1 overflow-hidden px-10 mt-3 w-[1200px] xl:w-[100%]">
                    <div className="min-h-full rounded-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
