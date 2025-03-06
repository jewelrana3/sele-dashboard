import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import user from '../../../public/sidebar-icon/user.svg';
import earings from '../../../public/sidebar-icon/earings.svg';
import agency from '../../../public/sidebar-icon/agency.svg';
import category from '../../../public/sidebar-icon/category.svg';
import about from '../../../public/sidebar-icon/about.svg';
import privacy from '../../../public/sidebar-icon/privacy.svg';
import terms from '../../../public/sidebar-icon/terms.svg';
import logout from '../../../public/sidebar-icon/logout.svg';
import { CiLock, CiUser } from 'react-icons/ci';
// import styles from './Sidebar.module.css';

const Sidebar = () => {
    const [selectedKey, setSelectedKey] = useState<string>('/');
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const getItemStyle = (key: string) => {
        if (selectedKey === '/users' && key === '/') {
            // Apply styles to 'Dashboard' when 'User' is selected
            return {
                background: 'linear-gradient(to right, #56ab2f, #a8e063)',
                color: 'white', // White text
                borderRadius: '0px 0px 30px 0px', // Rounded corners on one side
                width: '304px',
                height: '60px',
            };
        }
        return {
            width: '304px',
            height: '60px',
        };
    };

    const menuItems = [
        {
            key: '/',
            icon: <LuLayoutDashboard size={24} />,
            label: (
                <Link to="/" className="">
                    Dashboard
                </Link>
            ),
        },
        {
            key: '/users',
            icon: <img src={user} alt="user" width={24} height={24} />,
            label: (
                <Link to="/users" style={getItemStyle('users')}>
                    User
                </Link>
            ),
        },
        {
            key: '/earing',
            icon: <img src={earings} alt="user" width={24} height={24} />,
            label: <Link to="/earing">Earing</Link>,
        },
        {
            key: '/agency',
            icon: <img src={agency} alt="user" width={24} height={24} />,
            label: <Link to="/agency">Agency</Link>,
        },

        {
            key: '/category',
            icon: <img src={category} alt="user" width={24} height={24} />,
            label: <Link to="/category">Category</Link>,
        },

        {
            key: '/setting',
            icon: <IoSettingsOutline size={24} />,
            label: (
                <Link to="/profile">
                    <span className="text-[18px]">Setting</span>
                </Link>
            ),
            children: [
                {
                    key: '/profile',
                    icon: <CiUser size={24} />,
                    label: <Link to="/profile">Profile</Link>,
                },
                {
                    key: '/change-password',
                    icon: <CiLock size={24} />,
                    label: <Link to="/change-password">Change Password</Link>,
                },
                {
                    key: '/about-us',
                    icon: <img src={about} width={24} height={24} alt="about" />,
                    label: (
                        <Link to="/about-us" className="text-white hover:text-white">
                            About Us
                        </Link>
                    ),
                },
                {
                    key: '/terms-condition',
                    icon: <img src={privacy} width={24} height={24} alt="terms" />,
                    label: (
                        <Link to="/terms-condition" className="text-white hover:text-white">
                            Terms And Condition
                        </Link>
                    ),
                },
                {
                    key: '/privacy',
                    icon: <img src={terms} width={24} height={24} alt="privacy" />,
                    label: (
                        <Link to="/policy" className="text-white hover:text-white">
                            Privacy Policy
                        </Link>
                    ),
                },
            ],
        },

        {
            key: '/logout',
            icon: <img src={logout} alt="user" width={24} height={24} />,
            label: (
                <p onClick={handleLogout} className="text-[#FC6057]">
                    Logout
                </p>
            ),
        },
    ];

    const handleOpenChange = (keys: string[] = []) => {
        setOpenKeys(keys);
    };

    return (
        <div className="">
            <Link to={'/'} className="flex justify-center items-center mb-5 my-[22px]">
                <div>
                    {/* <img src={logo} alt="" className="h-[73px] mx-6 " /> */}
                    <h1 className="text-[74px] font-bold text-[#757575]">SELE</h1>
                </div>
            </Link>

            <ConfigProvider
                theme={{
                    token: {
                        colorText: '#fffff',
                    },
                    components: {
                        Menu: {
                            itemBorderRadius: '0px' as any,
                            itemHeight: 60,
                        },
                    },
                }}
            >
                <Menu
                    className="bg-[#EBF4FF] pl-4"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={handleOpenChange}
                    onSelect={({ key }) => setSelectedKey(key)}
                    items={menuItems.map((item) => ({
                        ...item,
                        style: getItemStyle(item.key),
                    }))}
                />
            </ConfigProvider>
        </div>
    );
};

export default Sidebar;
