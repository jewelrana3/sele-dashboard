import Modal from '../../modal/Modal';
import { useUpdateNotificationMutation } from '../../redux/apiSlice/notification';

// Define the Notification type
interface Notification {
    _id: string;
    message: string;
    isRead: boolean;
}

const NotificationModal: React.FC<{
    refetch: () => void;
    message: Notification[];
    isOpen: boolean;
    onClose: () => void;
}> = ({ refetch, message, isOpen, onClose }) => {
    if (!isOpen) return null; // If the modal isn't open, return nothing

    const [updateNotification] = useUpdateNotificationMutation();

    const handleSendId = (id: string) => {
        updateNotification(id);
        refetch(); // Refetch notifications after update
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <div className="font-bold mt-6 px-3">Notifications</div>
                <div className="h-auto scroll-smooth overflow-y-scroll">
                    <div className="text-sm px-4 my-3">
                        {message.length > 0 &&
                            message.map((item) => (
                                <p
                                    key={item._id}
                                    onClick={() => handleSendId(item._id)}
                                    className={`${
                                        item.isRead === false ? 'bg-blue-300' : 'bg-slate-300'
                                    } my-5 p-2 cursor-pointer rounded`}
                                >
                                    {item.message}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NotificationModal;
