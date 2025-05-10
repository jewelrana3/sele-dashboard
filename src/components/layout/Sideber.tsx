import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { CiLock, CiLogout, CiUser, CiSettings } from 'react-icons/ci';
import { MdKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import './Sideber.css';

const menuItems = [
    { label: 'Dashboard', path: '/', icon: <LuLayoutDashboard size={24} /> },
    { label: 'User', path: '/users', icon: <img src="/sidebar-icon/user.svg" alt="user" width={28} height={28} /> },
    {
        label: 'Earing',
        path: '/earing',
        icon: <img src="/sidebar-icon/earings.svg" alt="earing" width={24} height={24} />,
    },
    {
        label: 'Agency',
        path: '/agency',
        icon: <img src="/sidebar-icon/agency.svg" alt="agency" width={24} height={24} />,
    },
    {
        label: 'Brand',
        path: '/brand',
        icon: <img src="/sidebar-icon/category.svg" alt="brand" width={24} height={24} />,
    },
];

const settings = [
    {
        label: 'Setting',
        icon: <IoSettingsOutline size={24} />,
        path: '/profile',
        children: [
            { label: 'Profile', path: '/profile', icon: <CiUser size={24} /> },
            { label: 'Change Password', path: '/change-password', icon: <CiLock size={24} /> },
            {
                label: 'About Us',
                path: '/about-us',
                icon: <img src="/sidebar-icon/about.svg" width={24} height={24} alt="about" />,
            },
            {
                label: 'Privacy Policy',
                path: '/policy',
                icon: <img src="/sidebar-icon/privacy.svg" width={24} height={24} alt="policy" />,
            },
            {
                label: 'Terms And Condition',
                path: '/terms-condition',
                icon: <img src="/sidebar-icon/terms.svg" width={24} height={24} alt="terms" />,
            },
        ],
    },
];

const Sideber = () => {
    const navigate = useNavigate();

    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const pathname = useLocation();
    const currentPath = pathname.pathname;

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <div className="h-screen">
            <div
                onClick={() => {
                    if (currentPath !== '/') {
                        navigate('/');
                    }
                }}
                className="text-[#757575] md:text-[70px] font-bold text-center cursor-pointer"
            >
                <h1>SELE</h1>
            </div>

            <div style={{ backgroundColor: '' }} className="mt-10">
                {menuItems.map((item) => (
                    <div key={item.path} className={`navigation-item ${currentPath === item.path ? 'active ' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link className="flex items-center gap-4 p-6 py-2" to={item.path}>
                            <span>{item.icon}</span>
                            {item.label}
                            {item.label === 'Post List' && <div className="notification-bubble -mt-4 -ml-1">1</div>}
                        </Link>
                    </div>
                ))}

                <div onClick={() => setIsSettingOpen(!isSettingOpen)} className="cursor-pointer">
                    <div className="flex items-center ml-6 my-2 ">
                        <div className="flex gap-3 mt-2">
                            <span>
                                <CiSettings size={26} />
                            </span>
                            <span> Setting</span>
                        </div>
                        <div className="ml-28">
                            {isSettingOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </div>
                </div>

                <div className={isSettingOpen ? 'block ' : 'hidden'}>
                    {settings.map((setting) => (
                        <div key={setting.path} className="ml-4">
                            {setting.children.map((child) => (
                                <div
                                    key={`${setting.path}-${child.path}`}
                                    className={currentPath === child.path ? '' : 'my-1'}
                                >
                                    <Link to={child.path} className="flex items-center gap-4 p-6 py-2">
                                        <span>{child.icon}</span>
                                        {child.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    className=" flex items-center mt-20 gap-3  text-[18px]  py-2 rounded-xl cursor-pointer ml-6"
                    onClick={handleLogout}
                >
                    <span>
                        <CiLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sideber;
