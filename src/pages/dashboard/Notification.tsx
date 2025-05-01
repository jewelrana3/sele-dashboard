import { IoMdNotificationsOutline } from 'react-icons/io';
import { useGetNotificationsQuery } from '../../redux/apiSlice/notifications';

const Notification = () => {
    const { data, isLoading } = useGetNotificationsQuery(undefined);

    const notifications = [
        {
            message: data?.title,
            time: data?.createAt?.slice(0, 10),
        },
    ];
    if (isLoading) {
        return <span>Loading....</span>;
    }
    return (
        <div className="space-y-4 mt-10">
            {data.length > 0 ? (
                notifications.map((notification, index) => (
                    <div key={index} className="flex items-center p-4">
                        <div className="bg-blue-200 p-2 rounded-full">
                            <IoMdNotificationsOutline className="text-primaryColor" size={24} />
                        </div>
                        <div className="ml-4 flex-1">
                            <p className="font-medium">{notification.message}</p>
                            <p className="text-gray-500 text-sm">{notification.time}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No notifications available.</p>
            )}
        </div>
    );
};

export default Notification;
