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

export const RequestApprovalDetails: React.FC<UserData> = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className=" p-6 bg-white shadow-md rounded-md space-y-6 mt-10">
                <div>
                    <h2 className="text-xl font-bold mb-4">User Information</h2>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2">
                            <span className="text-gray-700">Full Name :</span>
                            <span className="font-semibold">Omar Yusuf Hassan</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-700">Contact Number :</span>
                            <span className="font-semibold">+234 802 345 6789</span>
                        </div>
                        <div className="grid grid-cols-2 items-center">
                            <span className="text-gray-700">Driving License :</span>
                            <img
                                src="https://i.ibb.co/RKWjtfx/Vector-1.png"
                                alt="License"
                                className="w-8 h-8 object-cover rounded"
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className="text-xl font-bold mb-4">Agency Information</h2>
                    <div className="space-y-2">
                        <div className="grid grid-cols-2">
                            <span className="text-gray-700">Full Name :</span>
                            <span className="font-semibold">Rakib Hossain</span>
                        </div>
                        <div className="grid grid-cols-2">
                            <span className="text-gray-700">Contact Number :</span>
                            <span className="font-semibold">+234 802 345 0000</span>
                        </div>
                    </div>
                </div>

                <div className="text-right">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Approved
                    </button>
                </div>
            </div>
        </Modal>
    );
};
