import { Layout } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { useGetProfileQuery } from '../../redux/apiSlice/profile/profile';
import { imgUrl } from '../../redux/api/baseApi';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { useEffect, useMemo, useState } from 'react';
const { Header } = Layout;
import { io } from 'socket.io-client';
import NotificationModal from './NotificationModal';
import { useGetNotificationsQuery } from '../../redux/apiSlice/notification';

const pathLink = [
    { label: 'Dashboard', path: '/' },
    { label: 'Users', path: '/users' },
    { label: 'Earing', path: '/earing' },
    { label: 'Agency', path: '/agency' },
    { label: 'Brand', path: '/brand' },
    { label: 'Change Password', path: '/change-password' },
];

const HeaderDashboard = () => {
    const socket = useMemo(() => io('http://10.10.7.46:5003'), []);
    const { data } = useGetProfileQuery(undefined);
    const { data: notificatonsData, refetch } = useGetNotificationsQuery(undefined);
    console.log(notificatonsData?.data, 'notifications');
    const location = useLocation();
    const path = location.pathname;

    // notification modal
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    const findPath = pathLink.find((active) => active.path === path);

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Connected to socket');
        });

        // myMessage(1);
        refetch();
        // get-notification::687889255f960b372f74f844
        console.log('Super Admin Id', data?.data?._id);
        const eventName = 'get-notification::' + data?.data?._id;
        socket.on(eventName, () => {
            refetch();
        });

        return () => {
            socket.off(eventName);
            socket.disconnect();
        };
    }, [socket]);

    return (
        <>
            {' '}
            <Header className="w-full">
                <div className="-ml-5">
                    <div className="flex justify-between items-center">
                        <div className="ml-8">
                            <h1 className="text-xl font-semibold">{findPath?.label}</h1>
                        </div>
                        <div className="flex items-center">
                            <div onClick={openModal}>
                                <p className="relative">
                                    <MdOutlineNotificationsNone size={26} />
                                    <span className="absolute -top-2 -right-2 bg-green-300 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                        {notificatonsData?.data.length}
                                    </span>
                                </p>
                            </div>
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
                                        src={
                                            data?.data?.image?.startsWith('https')
                                                ? data?.data.image
                                                : `${imgUrl}${data?.data?.image}`
                                        }
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
            <NotificationModal message={notificatonsData?.data} isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
};

export default HeaderDashboard;
