import { Layout } from 'antd';
import { IoIosMenu, IoMdNotificationsOutline } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const pathName = [
    { label: 'Dashboard', path: 'dashboard' },
    { label: 'User', path: 'user' },
    { label: 'Earing', path: 'earing' },
    { label: 'Category', path: 'category' },
    { label: 'Agency', path: 'agency' },
    { label: 'Profile', path: 'profile' },
    { label: 'Change Password', path: 'change-password' },
    { label: 'About Us', path: 'about-us' },
    { label: 'Terms and Conditions', path: 'terms-conditions' },
    { label: 'Policy', path: 'policy' },
];

const HeaderDashboard = () => {
    let location = useLocation();
    const activeItem = pathName.find((item) => location.pathname.includes(item.path));
    return (
        <Header
            className="w-full"
            style={{
                height: 80,
            }}
        >
            <div className="flex items-center justify-between w-full">
                {activeItem ? (
                    <div className="flex items-center cursor-pointer" key={activeItem.label}>
                        <p>
                            <IoIosMenu className="w-10 h-[24px]" />
                        </p>
                        <p className="ml-2 ">{activeItem.label}</p> {/* Add bold to active */}
                    </div>
                ) : (
                    <div className="flex items-center">
                        <p>
                            <IoIosMenu className="w-10 h-[24px]" />
                        </p>
                        <p className="ml-2">Dashboard</p> {/* Or any fallback text */}
                    </div>
                )}
                <div className="flex items-center">
                    <div>
                        {/*notification icons */}
                        <Link to={'/notification'}>
                            <div className="size-10 rounded-full flex items-center justify-center ">
                                <button className="py-4 px-1 relative border-2 border-transparent rounded-full focus:outline-none transition duration-150 ease-in-out">
                                    <span className="absolute inset-0 -top-4  -mr-6 ">
                                        <div className="inline-flex items-center px-1.5 py-0.5 border-2 border-white rounded-full text-xs font-semibold leading-4  bg-[#FC6057]">
                                            6
                                        </div>
                                    </span>

                                    <IoMdNotificationsOutline size={24} />
                                </button>
                            </div>
                        </Link>
                    </div>
                    <div>
                        {/* profile */}

                        <Link
                            to={'/edit-profile'}
                            style={{
                                height: '42px',
                                cursor: 'pointer',
                                borderRadius: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                margin: '10px',
                            }}
                        >
                            <img
                                src={'/user.svg'}
                                style={{
                                    width: '44px',
                                    height: '44px',
                                    borderRadius: '50%',
                                    borderColor: '#00369A',
                                    borderWidth: 2,
                                }}
                                alt=""
                            />
                            <h2
                                style={{
                                    fontSize: '16px',
                                    fontWeight: '600',
                                }}
                            >
                                John Doe
                            </h2>
                        </Link>
                    </div>
                </div>
            </div>
        </Header>
    );
};

export default HeaderDashboard;
