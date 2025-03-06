import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import user from '../../../public/sidebar-icon/user.svg';
import earings from '../../../public/sidebar-icon/earings.svg';
import agency from '../../../public/sidebar-icon/agency.svg';
import category from '../../../public/sidebar-icon/category.svg';
import logout from '../../../public/sidebar-icon/logout.svg';
import about from '../../../public/sidebar-icon/about.svg';
import privacy from '../../../public/sidebar-icon/privacy.svg';
// import terms from '../../../public/sidebar-icon/terms.svg';

import { CiLock, CiUser } from 'react-icons/ci';
import './SiderbarDublicate.css';
// import '../assets/css/sidebar.css';

const menuItems = [
    { label: 'Dashboard', path: '/', icon: <LuLayoutDashboard size={24} /> },
    { label: 'User', path: '/users', icon: <img src={user} alt="user" width={24} height={24} /> },
    { label: 'Earing', path: '/earing', icon: <img src={earings} alt="earing" width={24} height={24} /> },
    { label: 'Agency', path: '/agency', icon: <img src={agency} alt="agency" width={24} height={24} /> },
    { label: 'Category', path: '/category', icon: <img src={category} alt="category" width={24} height={24} /> },
    {
        label: 'Setting',
        icon: <IoSettingsOutline size={24} />,
        path: '/profile',
        children: [
            { label: 'Profile', path: '/profile', icon: <CiUser size={24} /> },
            { label: 'Change Password', path: '/change-password', icon: <CiLock size={24} /> },
            { label: 'About Us', path: '/about-us', icon: <img src={about} width={24} height={24} alt="about" /> },
            {
                label: 'Terms And Condition',
                path: '/terms-condition',
                icon: <img src={privacy} width={24} height={24} alt="terms" />,
            },
            {
                label: 'Privacy Policy',
                path: '/privacy',
                icon: <img src={privacy} width={24} height={24} alt="terms" />,
            },
        ],
    },
    { label: 'Logout', path: '/login', icon: <img src={logout} alt="logout" width={24} height={24} /> },
];

export default function Sidebar() {
    const [openSetting, setOpenSetting] = useState<boolean>(false);
    console.log(openSetting);
    const location = useLocation();

    const getMenuItemClass = (path: string) => {
        return location.pathname === path ? 'active' : '';
    };

    const toggleSetting = (path: string) => {
        if (path === '/profile') {
            setOpenSetting(!openSetting);
        }
    };

    return (
        <div className="sidebar">
            <div className="logo">
                <h1>SELE</h1>
            </div>
            <div className="navigation">
                <ul className="menu ml-6">
                    {menuItems.map((item) => {
                        console.log(item.path);
                        return (
                            <li
                                onClick={() => toggleSetting(item.path)}
                                key={item.path}
                                className={`menu-item  ${`menu-item ${
                                    item.children ? 'has-children' : ''
                                }`} ${getMenuItemClass(item.path)}`}
                            >
                                <b></b>
                                <b></b>
                                <Link to={item.path}>
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.label}</span>
                                    {/* {item.label !== 'Setting' && <span className="title">{item.label}</span>} */}
                                </Link>
                                <br />
                                {item.children && openSetting && (
                                    <ul className="submenu ">
                                        {item.children.map((child) => (
                                            <li key={child.path} className="submenu-item ">
                                                <Link to={child.path}>
                                                    <span className="icon">{child.icon}</span>
                                                    <span className="title">{child.label}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
