import { IoMdNotificationsOutline } from 'react-icons/io';

const notifications = [
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 12:30pm',
    },
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 1:30pm',
    },
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 12:30pm',
    },
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 12:30pm',
    },
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 2:30pm',
    },
    {
        message: 'Your car rental starts tomorrow! Don’t forget to bring your documents.',
        time: 'Fri, 4:30pm',
    },
];

const Notification = () => {
    return (
        <div className="space-y-4">
            {notifications.map((notification, index) => (
                <div key={index} className="flex items-center p-4 ">
                    <div className="bg-blue-200 p-2 rounded-full">
                        <IoMdNotificationsOutline className="text-primaryColor" size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                        <p className="font-medium">{notification.message}</p>
                        <p className="text-gray-500 text-sm">{notification.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notification;
