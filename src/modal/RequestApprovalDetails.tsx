import Modal from './Modal';

interface UserData {
    isOpen?: boolean;
    data: {
        id: string | number;
        userName?: string;
        contactNumber?: string;
        drivingLicense?: string;
        agencyName?: string;
        agencyNumber?: string;
    };
    onClose: () => void;
}

export const RequestApprovalDetails: React.FC<UserData> = ({ isOpen, data, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <h2>Request Details</h2>
                <p>ID: {data.id}</p>
                <p>User Name: {data.userName}</p>
                {/* অন্যান্য তথ্য */}
            </div>
        </Modal>
    );
};
