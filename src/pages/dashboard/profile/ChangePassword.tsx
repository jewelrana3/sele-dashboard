import { Button, ConfigProvider, Form, Input } from 'antd';

export default function ChangePassword() {
    //   const navigate = useNavigate();
    //   const [changePassword] = useChangePasswordMutation();

    const [form] = Form.useForm();

    const onFinish = (values: string) => {
        console.log(values);
        form.resetFields();
    };

    return (
        <>
            <div className="mx-auto bg-transparent px-5 flex items-center justify-center mt-28 ">
                <div className="w-full lg:w-2/3 border border-[#0A5239] rounded-xl px-7 pt-16 pb-5 ">
                    <ConfigProvider
                        theme={{
                            components: {
                                Input: {
                                    colorTextPlaceholder: 'rgba(61,61,61,0.25)',
                                },
                            },
                        }}
                    >
                        <Form form={form} onFinish={onFinish} layout="vertical" className="bg-transparent w-full">
                            <span className=" text-[20px] font-semibold ">Current password</span>
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
                                    placeholder="Enter your password"
                                    className="py-2 px-3 text-xl bg-transparent  text-black  border-[#E6C379] focus:bg-transparent focus:border-[#E6C379]"
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
                                    className="py-2 px-3 text-xl bg-transparent  text-black  border-[#E6C379] focus:bg-transparent focus:border-[#E6C379]"
                                />
                            </Form.Item>

                            <span className=" text-[20px] font-semibold ">Re-enter new Password</span>
                            <Form.Item
                                name="reEnterPassword"
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
                                    className="py-2 px-3 text-xl bg-transparent  text-black  border-[#E6C379] focus:bg-transparent focus:border-[#E6C379]"
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
                                    <Button
                                        className="w-full py-6 rounded-sm border !bg-[#C68C4E] text-xl text-white font-semibold mt-5 !border-none"
                                        htmlType="submit"
                                        style={{ background: '#004AAD' }}
                                    >
                                        Change password
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
