import { ConfigProvider, Form, Input } from 'antd';
import Button from '../../../components/shared/Button';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useChangePasswordMutation } from '../../../redux/apiSlice/profile/profile';

export default function ChangePassword() {
    const navigate = useNavigate();
    const [changePassword] = useChangePasswordMutation();

    const [form] = Form.useForm();

    const onFinish = async (values: string) => {
        console.log(values);
        try {
            const res = await changePassword(values);
            console.log(res);
            if (res?.data?.success) {
                toast.success('Password changed successfully!');
                navigate('/profile');
            }
            toast.error('Failed to change password!');
        } catch (error) {
            toast.error('Failed to change password!');
        }

        form.resetFields();
    };

    return (
        <>
            <div className="flex items-center justify-center mt-[10%]">
                <div className="w-full lg:w-2/3  rounded-xl px-7  pb-5 ">
                    <ConfigProvider
                        theme={{
                            components: {},
                        }}
                    >
                        <Form form={form} onFinish={onFinish} layout="vertical">
                            <span className=" text-[20px] font-semibold pb-2">Current password</span>
                            <Form.Item
                                name="currentPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your current password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Please input your current password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    className="h-14 bg-[#EBF4FF] hover:bg-[#EBF4FF] focus:bg-[#EBF4FF] rounded-xl border-none mt-2"
                                    placeholder="enter your password"
                                />
                            </Form.Item>
                            <span className=" text-[20px] font-semibold ">New Password</span>
                            <Form.Item
                                name="newPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your new password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    className="h-14 bg-[#EBF4FF]  hover:bg-[#EBF4FF] focus:bg-[#EBF4FF] rounded-xl border-none mt-2"
                                />
                            </Form.Item>

                            <span className=" text-[20px] font-semibold ">Re-enter new Password</span>
                            <Form.Item
                                name="confirmPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your new password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    className="h-14 bg-[#EBF4FF] focus:bg-red-500 rounded-xl border-none mt-2"
                                />
                            </Form.Item>
                            <Form.Item>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                defaultBg: '',

                                                defaultBorderColor: '',
                                                defaultActiveBorderColor: '',
                                                defaultColor: '',
                                                defaultActiveColor: '',
                                            },
                                        },
                                    }}
                                >
                                    <Button className="w-[20%] font-semibold text-[18px]" htmlType="submit">
                                        Submit
                                    </Button>
                                </ConfigProvider>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </>
    );
}
