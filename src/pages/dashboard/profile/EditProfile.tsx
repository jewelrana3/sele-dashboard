import { useState } from 'react';
import { Form, Input, Button, Avatar, Upload, UploadFile, ConfigProvider } from 'antd';
import { MdModeEditOutline, MdOutlineArrowBackIosNew, MdOutlineModeEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { UploadChangeParam } from 'antd/es/upload/interface';

export default function EditProfile() {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState<string>('https://i.ibb.co/HpL1HMKZ/image-2.png');
    // const [, setIsEditing] = useState<boolean>(false);

    const [form] = Form.useForm();

    const handleEdit = () => {
        navigate('/change-password');
    };

    // const handleSave = () => {
    //     form.validateFields().then(() => {
    //         const formValues = form.getFieldsValue();
    //         console.log(formValues);
    //         setIsEditing(false);
    //     });
    // };

    const handleImageChange = (info: UploadChangeParam<UploadFile<any>>) => {
        if (info.file.status === 'done') {
            setImageUrl(info.file.response?.url || '');
        } else if (info.file.status === 'uploading') {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result as string); // Make sure to cast the result to string
            };
            reader.readAsDataURL(info.file.originFileObj!); // Using "!" to assert the object is not null
        }
    };

    return (
        <div className="">
            {/* profile */}

            <div className="w-[1035px] mx-auto">
                <div className="flex items-center gap-4 font-semibold text-[20px]" onClick={() => navigate(-1)}>
                    <button className="text-xl">
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <button>Profile</button>
                </div>
                <div className="flex justify-between space-x-6 mt-12">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Avatar size={100} src={imageUrl} className="border border-[#C68C4E]" />
                        </div>
                        <Upload showUploadList={false} onChange={handleImageChange} accept="image/*">
                            <div className="absolute left-[685px] mt-4 bg-[#FF991C] w-[22px] h-[22px] flex justify-center items-center rounded-full cursor-pointer">
                                <MdModeEditOutline className="text-white" />
                            </div>
                        </Upload>
                        <div>
                            <h3 className="font-medium font-montserrat text-2xl">Ethan Michael</h3>
                        </div>
                    </div>

                    <div className="flex justify-end mt-auto ">
                        <span
                            className="w-[209px] h-[58px] rounded-2xl text-[20px]  border border-[#C68C4E] flex items-center justify-center space-x-2 cursor-pointer"
                            onClick={handleEdit}
                        >
                            <MdOutlineModeEdit className="text-xl mr-2" /> {/* This adds the icon */}
                            Change Password
                        </span>
                    </div>
                </div>

                <div className="mt-5">
                    <Form form={form} layout="vertical">
                        <div>
                            <span className=" text-[20px] font-semibold ">Full Name</span>
                            <div className="mt-3 ">
                                <Form.Item name="fullname" rules={[{ required: true }]}>
                                    <Input
                                        className="h-14 border border-[#C68C4E] rounded-xl"
                                        placeholder="enter your email"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <span className=" text-[20px] font-semibold ">Email</span>
                            <div className="mt-3">
                                <Form.Item name="email" rules={[{ required: true }]}>
                                    <Input
                                        className="h-14 border border-[#C68C4E] rounded-xl"
                                        placeholder="enter your gmail"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <span className=" text-[20px] font-semibold ">Contact Number</span>
                            <div className="mt-3">
                                <Form.Item name="contactNumber" rules={[{ required: true }]}>
                                    <Input
                                        className="h-14 border border-[#C68C4E] rounded-xl"
                                        placeholder="contact number"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="mt-6">
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Button: {
                                            defaultHoverBg: '',

                                            defaultHoverBorderColor: '',
                                            defaultActiveBorderColor: '',
                                            defaultHoverColor: '',
                                            defaultActiveColor: '',
                                        },
                                    },
                                }}
                            >
                                <Button
                                    className="w-full py-6 rounded-sm border !bg-[#C68C4E] text-xl text-white font-semibold mt-5 !border-none"
                                    htmlType="submit"
                                    style={{ background: '#004AAD' }}
                                >
                                    Update Profile
                                </Button>
                            </ConfigProvider>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
