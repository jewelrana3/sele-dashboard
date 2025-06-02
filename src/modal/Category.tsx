import { useEffect } from 'react';
import Modal from './Modal';
import { useCreateCategoryMutation, useUpdateCategoryMutation } from '../redux/apiSlice/category/category';
import { Form, Input } from 'antd';
import toast from 'react-hot-toast';

interface AddEditCategoryProps {
    isOpen: boolean;
    onClose: () => void;
    refetch: () => void;
    data: any;
}

interface category {
    category: string;
}

const CategoryModal = ({ isOpen, onClose, refetch, data }: AddEditCategoryProps) => {
    console.log(data);
    const [updateCategory] = useUpdateCategoryMutation();
    const [createCategory] = useCreateCategoryMutation();
    const [form] = Form.useForm();

    useEffect(() => {
        if (data && data._id) {
            form.setFieldsValue({
                name: data.category,
            });
        } else {
            form.setFieldsValue({
                name: '',
            });
        }
    }, [form, data]);

    const onFinish = async (values: category) => {
        console.log(values);
        try {
            if (data?._id) {
                await updateCategory({ id: data._id, data: values });
                toast.success('update successfully');
            } else {
                await createCategory(values);
                toast.success('create successfully');
            }
            refetch();
            onClose();
        } catch (error) {
            toast.error('Post faild');
        }
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="bg-[#E6F2FF] p-6 rounded-lg shadow-lg w-[500px] h-[280px]">
                <h2 className="text-2xl  mb-4">{data?._id ? 'Edit Category' : 'Add New Category'}</h2>
                <Form form={form} layout="vertical" onFinish={onFinish}>
                    {/* Fuel */}
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <span className="text-[20px] font-semibold ">Full Name</span>
                            <Form.Item name="category" rules={[{ required: true }]}>
                                <Input
                                    type="text"
                                    placeholder="Enter your category name"
                                    className="w-full h-12 bg-[#fcfdfd] rounded-lg px-4 focus:outline-none border-black mt-3"
                                />
                            </Form.Item>
                        </div>

                        {/* <div>
                            <label htmlFor="carType" className="block text-xl font-medium mb-2">
                                Brand Logo
                            </label>
                            <div className="flex gap-4 mt-6">
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    style={{ display: 'none' }}
                                />
                                <div
                                    className="flex justify-center items-center  cursor-pointer bg-white w-full h-48"
                                    onClick={() => document.getElementById('file')?.click()}
                                >
                                    {previewUrl ? (
                                        <img
                                            src={previewUrl}
                                            alt="pic"
                                            className="w-full h-56 object-cover object-center"
                                        />
                                    ) : (
                                        <div className="">
                                            <span className="">
                                                <BiUpload size={24} className="ml-8" />
                                            </span>
                                            <span className="text-[#636363]">Upload Image</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div> */}
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-1">
                        Submit
                    </button>
                </Form>
            </div>
        </Modal>
    );
};

export default CategoryModal;
