import Modal from './Modal';

interface DeleteModalPros {
    isOpen: boolean;
    onClose: () => void;
}

export default function DeleteModal({ isOpen, onClose }: DeleteModalPros) {
    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen}>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-white rounded-xl shadow-lg p-6 w-[350px]  relative">
                    <h1 className="text-3xl font-semibold text-red-500 text-nowrap">Are you want to Delete</h1>

                    <div className="flex justify-between gap-5">
                        <button
                            onClick={onClose}
                            className="w-full mt-8 py-2 text-lg font-semibold text-black border border-black rounded-lg transition duration-300"
                        >
                            No
                        </button>
                        <button
                            onClick={onClose}
                            className="w-full mt-8 text-lg font-semibold bg-[#181c1d] rounded-lg transition duration-300"
                        >
                            Yes
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
