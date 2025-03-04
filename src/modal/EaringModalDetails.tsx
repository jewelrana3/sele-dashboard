import Modal from './Modal';
interface EaringModalDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    // transactionId: string;
    // date: string;
    // email: string;
    // amount: string;
}

const transactionDetails = [
    { label: 'Transaction ID', value: '#12345678' },
    { label: 'Date', value: '01-24-2024' },
    { label: 'Email', value: 'abg@gmail.com' },
    { label: 'Transaction amount', value: '$250' },
];

const EaringModalDetails: React.FC<EaringModalDetailsProps> = ({
    isOpen,
    onClose,
    // transactionId,
    // date,
    // email,
    // amount,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mt-6">
                <h2 className="text-2xl font-semibold text-blue-500 my-6 text-center">Transaction Details</h2>
                <div className="space-y-6">
                    {transactionDetails.map((detail, index) => (
                        <div key={index} className="flex justify-between">
                            <span className="text-[#757575]">{detail.label} :</span>
                            <p className="font-semibold">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </Modal>
    );
};

export default EaringModalDetails;
