import { ConfigProvider, Form, Input } from 'antd';

import Button from '../shared/Button';
import { useAccountDeleteMutation } from '../../redux/apiSlice/accountDelete/accountDelete';
import toast from 'react-hot-toast';

export default function AccountDelete() {
    const [accountDelete] = useAccountDeleteMutation();
    const onFinish = async (values: { email: string; password: string }) => {
        const data = {
            email: values?.email,
            password: values?.password,
        };

        try {
            const res = await accountDelete(data).unwrap();
            if (res.success) {
                toast.success(res.message || 'Account delete successfully');
            } else {
                toast.success(res.message || 'Account failed try again.');
            }
        } catch {
            toast.error('Account failed try again.');
        }
    };
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-5xl rounded-lg mx-auto gap-5">
                    <div className="flex items-center justify-center p-6">
                        <img className="w-2/3 max-w-xs h-auto object-cover" src="./sele.png" alt="sele" />
                    </div>
                    <div className="flex items-center justify-center p-6">
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorPrimary: '#FBB040',
                                    colorBgContainer: '#F1F4F9',
                                },
                                components: {
                                    Input: {
                                        borderRadius: 10,
                                        colorBorder: '#757575',
                                        colorPrimaryBorder: 'transparent',
                                        hoverBorderColor: 'transparent',
                                        activeBorderColor: '#757575',
                                    },
                                    Button: {
                                        colorPrimaryHover: 'rgb(0,0,0)',
                                    },
                                },
                            }}
                        >
                            <div className="w-full max-w-[600px]">
                                <div className="rounded-lg border border-primaryColor p-8 ">
                                    <div className="space-y-3 text-center mb-6">
                                        <h1 className="text-xl md:text-3xl font-semibold text-nowrap">
                                            Account Delete
                                        </h1>
                                    </div>

                                    <Form
                                        name="normal_login"
                                        className="login-form"
                                        layout="vertical"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                    >
                                        <Form.Item
                                            label={
                                                <label htmlFor="email" className="block mb-1 text-lg">
                                                    Email
                                                </label>
                                            }
                                            name="email"
                                            rules={[{ required: true, message: 'Please input your email!' }]}
                                        >
                                            <Input
                                                placeholder="Enter your email address"
                                                type="email"
                                                className="h-12 px-6 bg-white"
                                            />
                                        </Form.Item>

                                        <Form.Item
                                            label={
                                                <label htmlFor="password" className="block mb-1 text-lg">
                                                    Password
                                                </label>
                                            }
                                            name="password"
                                            rules={[{ required: true, message: 'Please input your Password!' }]}
                                        >
                                            <Input.Password
                                                placeholder="Enter your password"
                                                className="h-12 px-6 bg-white"
                                            />
                                        </Form.Item>

                                        <Form.Item>
                                            <Button className="w-full" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </ConfigProvider>
                    </div>
                </div>
            </div>
        </>
    );
}
