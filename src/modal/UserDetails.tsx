import React from 'react';
import Modal from './Modal';
import Button from '../components/shared/Button';

interface UserDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    // userName: string;
    // email: string;
    // contactNumber: string;
    // address: string;
    // joiningDate: string;
}

const agencyDetails = [
    { label: 'User name', value: 'Omar Yusuf Hassan' },
    { label: 'Email', value: 'omar@gmail.com' },
    { label: 'Contact Number', value: '+9834598375435' },
    { label: 'Address', value: 'South Dakota 83475' },
    { label: 'Joining Date', value: '5 June 2025' },
];

const UserDetailsModalProps: React.FC<UserDetailsModalProps> = ({
    isOpen,
    onClose,
}: // userName,
// email,
// contactNumber,
// address,
// joiningDate,
UserDetailsModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-5 rounded-lg pt-10">
                <h2 className="text-lg font-semibold mb-4">Agency Details</h2>
                <div className="space-y-2">
                    {agencyDetails.map((detail, index) => (
                        <div key={index} className="grid grid-cols-2">
                            <strong>{detail.label} :</strong>
                            <p className="text-start">{detail.value}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end items-center mt-4">
                    <Button className="flex justify-center items-center" onClose={onClose}>
                        Done
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default UserDetailsModalProps;
