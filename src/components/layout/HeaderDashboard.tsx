import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
const { Header } = Layout;

const pathLink = [
    { label: 'Dashboard', path: '/' },
    { label: 'Users', path: '/users' },
    { label: 'Earing', path: '/earing' },
    { label: 'Agency', path: '/agency' },
    { label: 'Brand', path: '/brand' },
    { label: 'Change Password', path: '/change-password' },
];

const HeaderDashboard = () => {
    const location = useLocation();
    const path = location.pathname;

    const findPath = pathLink.find((active) => active.path === path);

    return (
        <Header className="w-full">
            <div className="-ml-5">
                <div className="flex justify-between items-center">
                    <div className="ml-8">
                        <h1 className="text-xl font-semibold">{findPath?.label}</h1>
                    </div>
                    <div className="flex items-center">
                        <div>
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
            </div>
        </Header>
    );
};

export default HeaderDashboard;
