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
        { label: 'Joining Date', value: data?.createdAt.slice(0, 10) },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-5 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">User Details</h2>
                <div className="space-y-2 mt-6">
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
