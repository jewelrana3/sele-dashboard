import { Form, Input, Avatar, ConfigProvider } from 'antd';
import { MdOutlineArrowBackIosNew, MdOutlineModeEdit } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';

import CustomButton from '../../../components/shared/Button';
import { useGetProfileQuery } from '../../../redux/apiSlice/profile/profile';
import { imgUrl } from '../../../redux/api/baseApi';
import { useEffect } from 'react';
import Loading from '../../../components/shared/Loading';

export default function Profile() {
    const navigate = useNavigate();
    const { data, isError, isLoading } = useGetProfileQuery(undefined);
    const profile = data?.data;
    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            name: profile?.name,
            email: profile?.email,
        });
    }, [form, data]);

    if (isLoading) {
        return <Loading />;
    }

    if (isError) {
        return <span>Error loading content.</span>;
    }

    return (
        <div className="flex justify-center items-center">
            {/* profile */}

            <div className="w-[1035px] mx-auto">
                <div className="flex items-center gap-4 font-semibold text-[20px]" onClick={() => navigate(-1)}>
                    <button className="text-xl">
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <button>Profile</button>
                </div>

                <div className="flex items-center justify-between gap-4  mt-12">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Avatar
                                size={100}
                                src={profile?.image?.startsWith('https') ? profile.image : `${imgUrl}${profile.image}`}
                                className=""
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-2xl">{profile?.name}</h3>
                        </div>
                    </div>
                    <div className="">
                        <Link to="/edit-profile">
                            <CustomButton className=" flex items-center justify-center space-x-2 cursor-pointer">
                                <MdOutlineModeEdit className="text-xl mr-2" /> {/* This adds the icon */}
                                Edit Profile
                            </CustomButton>
                        </Link>
                    </div>
                </div>

                <div className="mt-5">
                    <ConfigProvider
                        theme={{
                            components: {
                                Input: {
                                    hoverBorderColor: '#EBF4FF',
                                    activeBorderColor: '#EBF4FF',
                                },
                            },
                        }}
                    >
                        <Form form={form} layout="vertical">
                            <div>
                                <span className=" text-[20px] font-semibold ">Full Name</span>
                                <div className="mt-3 ">
                                    <Form.Item name="name" rules={[{ required: true }]}>
                                        <Input
                                            className="h-14 bg-[#EBF4FF] hover:bg-[#EBF4FF] focus:bg-[#EBF4FF] rounded-xl border-none"
                                            placeholder="enter your email"
                                            readOnly
                                        />
                                    </Form.Item>
                                </div>
                            </div>

                            <div>
                                <span className=" text-[20px] font-semibold ">Email</span>
                                <div className="mt-3">
                                    <Form.Item name="email" rules={[{ required: true }]}>
                                        <Input
                                            className="h-14 bg-[#EBF4FF] hover:bg-[#EBF4FF] focus:bg-[#EBF4FF] rounded-xl border-none"
                                            placeholder="enter your gmail"
                                        />
                                    </Form.Item>
                                </div>
                            </div>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
