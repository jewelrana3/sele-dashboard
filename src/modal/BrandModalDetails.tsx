import { imgUrl } from '../redux/api/baseApi';
import Modal from './Modal';

interface CategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: any;
}

export default function BrandModalDetails({ isOpen, onClose, data }: CategoryModalProps) {
    console.log(data);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="flex justify-between items-center mb-4 p-4">
                <h2 className="text-xl font-semibold text-primaryColor">Brand Details</h2>
            </div>
            <div className="space-y-2 p-4">
                <div className="">
                    <span className="text-[#757575] font-semibold">Brand Name : {data?.brandName}</span>
                </div>
                <div>
                    <span className="text-[#757575] font-semibold">Image : </span>
                    <img
                        className="w-96  mt-3 object-cover"
                        src={data?.logo?.startsWith('http') ? data.logo : `${imgUrl}${data?.logo}`}
                    />
                </div>
            </div>
        </Modal>
    );
}
