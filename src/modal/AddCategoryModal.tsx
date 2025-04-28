import React, { useState } from 'react';
import Modal from './Modal';

interface AddCategoryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddCategoryModal = ({ isOpen, onClose }: AddCategoryModalProps) => {
    const [formData, setFormData] = useState({
        fuel: '',
        carType: '',
        interiorColor: '',
        seat: '',
        transmission: '',
        price: '',
        logo: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-6 rounded-lg shadow-lg w-[500px]">
                <h2 className="text-2xl  mb-4">Add New Brand</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Fuel */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label htmlFor="fuel" className="block text-xl font-medium mb-2">
                                Brand Name
                            </label>
                            <input
                                type="text"
                                id="fuel"
                                name="fuel"
                                value={formData.fuel}
                                onChange={handleChange}
                                placeholder="Enter your fuel category"
                                className="w-full h-12   bg-[#fcfdfd] rounded-lg px-4 focus:outline-none"
                            />
                        </div>

                        {/* Car Type */}
                        <div>
                            <label htmlFor="carType" className="block text-xl font-medium mb-2">
                                Brand Logo
                            </label>
                            <input
                                type="text"
                                id="carType"
                                name="carType"
                                value={formData.carType}
                                onChange={handleChange}
                                placeholder="Enter your Car Type"
                                className="w-full h-12 bg-[#fafbfc] rounded-lg px-4 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-4">
                        Submit
                    </button>
                </form>
            </div>
        </Modal>
    );
};

export default AddCategoryModal;
