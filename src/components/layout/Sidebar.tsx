import { ConfigProvider, Menu } from 'antd';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosLogOut } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { RiUserCommunityLine } from 'react-icons/ri';
import { AiOutlineContainer, AiTwotoneContainer } from 'react-icons/ai';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import user from '../../../public/sidebar-icon/user.svg';
import earings from '../../../public/sidebar-icon/earings.svg';
import agency from '../../../public/sidebar-icon/agency.svg';
import category from '../../../public/sidebar-icon/category.svg';

const Sidebar = () => {
    const [selectedKey, setSelectedKey] = useState<string>('/');
    const [openKeys, setOpenKeys] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
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
            label: <Link to="/users">User</Link>,
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
            label: <Link to="/ategory">Category</Link>,
        },

        {
            key: 'edit-profile',
            icon: <IoSettingsOutline size={24} />,
            label: (
                <Link to="/edit-profile" className="text-white hover:text-white">
                    Settings
                </Link>
            ),
        },
        {
            key: '/terms-condition',
            icon: <AiOutlineContainer size={24} />,
            label: (
                <Link to="/terms-condition" className="text-white hover:text-white">
                    Terms And Condition
                </Link>
            ),
        },
        {
            key: '/privacy',
            icon: <AiTwotoneContainer size={24} />,
            label: (
                <Link to="/policy" className="text-white hover:text-white">
                    Privacy Policy
                </Link>
            ),
        },

        {
            key: '/logout',
            icon: <IoIosLogOut size={24} />,
            label: <p onClick={handleLogout}>Logout</p>,
        },
    ];

    const handleOpenChange = (keys: string[] = []) => {
        setOpenKeys(keys);
    };

    return (
        <div className="mt-5 bg-[#EBF4FF]">
            <Link to={'/'} className="flex justify-center items-center mb-5 my-[22px] mx-">
                <div>
                    {/* <img src={logo} alt="" className="h-[73px] mx-6 " /> */}
                    <h1 className="text-[74px] font-bold text-[#757575]">SELE</h1>
                </div>
            </Link>
            <hr className=" !border-bottom border-[#ffbc58] mb-5" />

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
                    className="bg-[#EBF4FF]"
                    mode="inline"
                    selectedKeys={[selectedKey]}
                    openKeys={openKeys}
                    onOpenChange={handleOpenChange}
                    onSelect={({ key }) => setSelectedKey(key)}
                    items={menuItems}
                />
            </ConfigProvider>
        </div>
    );
};

export default Sidebar;
