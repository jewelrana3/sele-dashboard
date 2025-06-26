import Modal from './Modal';
interface EaringModalDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    data: { transactionId: string; createdAt: string; amount: string; userId: { email: string } };
}

const EaringModalDetails: React.FC<EaringModalDetailsProps> = ({ isOpen, onClose, data }) => {
    const transactionDetails = [
        { label: 'Transaction ID', value: data?.transactionId.slice(0, 7) },
        { label: 'Date', value: data?.createdAt.slice(0, 7) },
        { label: 'Email', value: data?.userId?.email },
        { label: 'Transaction amount ', value: data?.amount },
    ];
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-lg  w-ful">
                <h2 className="text-2xl font-semibold text-blue-500">Earning Details</h2>
                <div className="space-y-6 mt-6">
                    {transactionDetails.map((detail, index) => (
                        <div key={index} className="grid grid-cols-2 gap-6">
                            <span className="text-[#757575]">{detail.label} :</span>
                            <p className="font-semibold">
                                {detail.label === 'Transaction amount ' ? `$${detail.value}` : detail.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default EaringModalDetails;
