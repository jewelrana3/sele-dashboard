import Modal from '../../modal/Modal';
import { useUpdateNotificationMutation } from '../../redux/apiSlice/notification';

const NotificationModal: React.FC<{ message: string; isOpen: boolean; onClose: () => void }> = ({
    message,
    isOpen,
    onClose,
}) => {
    if (!isOpen) return null; // If the modal isn't open, return nothing
    const [updateNotification] = useUpdateNotificationMutation();

    const handleSendId = (id: string) => {
        console.log(id, 'id');
        updateNotification(id);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <div className="font-bold mt-6 px-3">Notifications</div>
                <div className="mt- h-72 scroll-smooth overflow-y-scroll">
                    <div className="text-sm p-4 my-3">
                        {message.length > 0 &&
                            message?.map((item) => (
                                <p
                                    key={item._id}
                                    onClick={() => handleSendId(item?._id)}
                                    className={`${
                                        item.isRead === false ? 'bg-slate-200' : 'bg-green-100'
                                    } my-5 p-2 cursor-pointer rounded`}
                                >
                                    {item?.message}
                                </p>
                            ))}
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default NotificationModal;
