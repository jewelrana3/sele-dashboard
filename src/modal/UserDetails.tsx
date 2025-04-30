import React from 'react';
import Modal from './Modal';

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: { name: string; email: string; createdAt: string };
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, data }) => {
    const agencyDetails = [
        { label: 'User name', value: data?.name },
        { label: 'Email', value: data?.email },
        { label: 'Joining Date', value: data?.createdAt },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-5 rounded-lg pt-10">
                <h2 className="text-lg font-semibold mb-4">User Details</h2>
                <div className="space-y-2">
                    {agencyDetails.map((detail, index) => (
                        <div key={index} className="grid grid-cols-2 gap-5">
                            <strong>{detail.label} :</strong>
                            <p className="text-start">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default UserDetailsModal;
