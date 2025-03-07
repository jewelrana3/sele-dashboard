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
import terms from '../../../public/sidebar-icon/terms.svg';

import { CiLock, CiUser } from 'react-icons/ci';
import './SiderbarDublicate.css';
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';

const menuItems = [
    { label: 'Dashboard', path: '/', icon: <LuLayoutDashboard size={24} /> },
    { label: 'User', path: '/users', icon: <img src={user} alt="user" width={24} height={24} /> },
    { label: 'Earing', path: '/earing', icon: <img src={earings} alt="earing" width={24} height={24} /> },
    { label: 'Agency', path: '/agency', icon: <img src={agency} alt="agency" width={24} height={24} /> },
    { label: 'Category', path: '/category', icon: <img src={category} alt="category" width={24} height={24} /> },
];

const settings = [
    {
        label: 'Setting',
        icon: <IoSettingsOutline size={24} />,
        path: '/profile',
        children: [
            { label: 'Profile', path: '/profile', icon: <CiUser size={24} /> },
            { label: 'Change Password', path: '/change-password', icon: <CiLock size={24} /> },
            { label: 'About Us', path: '/about-us', icon: <img src={about} width={24} height={24} alt="about" /> },

            {
                label: 'Privacy Policy',
                path: '/policy',
                icon: <img src={privacy} width={24} height={24} alt="policy" />,
            },
            {
                label: 'Terms And Condition',
                path: '/terms-condition',
                icon: <img src={terms} width={24} height={24} alt="terms" />,
            },
        ],
    },
];

export default function SiderbarDublicate() {
    const location = useLocation();
    const [settingIcon, setSettingIcon] = useState<boolean>(false);
    const [isSetting, setIsSetting] = useState<boolean>(false);

    const getMenuItemClass = (path: string) => {
        return location.pathname === path && 'active';
    };

    const handleSetting = () => {
        setIsSetting(!isSetting);
        setSettingIcon(!settingIcon);
    };

    return (
        <div className="sidebar">
            <div className="text-[#757575] md:text-[70px] font-bold text-center">
                <h1>SELE</h1>
            </div>
            <div className="navigation">
                <ul className="menu ml-6">
                    {menuItems.map((item) => (
                        <li key={item.path} className={`menu-item ${getMenuItemClass(item.path)}`}>
                            <b></b>
                            <b></b>
                            <Link to={item.path} className="">
                                <div className="flex justify-between items-center">
                                    <div className="flex">
                                        <span className="icon ">{item.icon}</span>
                                        <span className=" text-[#333333] hidden md:block">{item.label}</span>
                                    </div>
                                </div>
                            </Link>
                            <br />
                        </li>
                    ))}

                    {/* setting pages */}
                    <li onClick={handleSetting} className={`menu-item  cursor-pointer`}>
                        <div className="flex justify-between items-center">
                            <div className="flex">
                                <span className="icon flex items-center">{<IoSettingsOutline size={24} />}</span>
                                <span className="title">Settings</span>
                            </div>
                            <p className="">{settingIcon ? <MdKeyboardArrowDown /> : <MdOutlineKeyboardArrowUp />}</p>
                        </div>
                        <br />
                        {isSetting && (
                            <ul className="submenu ml-5 mb-4">
                                {settings?.[0].children.map(
                                    (item: { label: string; path: string; icon: JSX.Element }) => {
                                        console.log(item);
                                        return (
                                            <li
                                                key={item.path}
                                                className={`submenu-item px-4 mb-2  ${getMenuItemClass(item.path)}`}
                                            >
                                                <Link to={item.path} onClick={(e) => e.stopPropagation()}>
                                                    <span className="icon">{item.icon}</span>
                                                    <span className="title">{item.label}</span>
                                                </Link>
                                            </li>
                                        );
                                    },
                                )}
                            </ul>
                        )}
                    </li>
                    <Link to="/login">
                        <li className={`menu-item cursor-pointer`}>
                            <div className="flex gap-3">
                                <img src={logout} alt="logout" width={24} height={24} />
                                <span className="title text-[#FC6057]">Logout</span>
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}
