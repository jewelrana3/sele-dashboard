import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { useLoginMutation } from '../../redux/apiSlice/auth/auth';
import toast from 'react-hot-toast';

const Login = () => {
    const [Login, { isLoading }] = useLoginMutation();

    const onFinish = async (values: { email: string; password: string }) => {
        if (isLoading) {
            toast.loading('Loading ...', { id: 'login-toast' });
        }
        const data = {
            email: values?.email,
            password: values?.password,
        };

        try {
            const res = await Login(data).unwrap();
            if (res.success) {
                toast.success('Login Successful', { id: 'login-toast' });
                localStorage.setItem('accessToken', res?.data?.accessToken);
                setTimeout(() => {
                    window.location.href = '/';
                }, 500);
            } else {
                toast.error(res.message || 'login failed try again.');
            }
        } catch (error) {
            toast.error('login failed');
        }
    };

    return (
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
            <div className="flex items-center justify-center h-screen ">
                <div className=" w-[650px] rounded-lg  border border-primaryColor p-14 ">
                    <div className="space-y-3 text-center">
                        <h1 className="text-3xl  font-semibold text-center mt-2">Login to Account</h1>
                        <p className="text-lg text-[#757575]">Please enter your email and password to continue</p>
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
                                <label htmlFor="email" className="block  mb-1 text-lg">
                                    Email
                                </label>
                            }
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                className=" h-12  px-6 bg-white"
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <label htmlFor="password" className="block  mb-1 text-lg">
                                    Password
                                </label>
                            }
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password placeholder="Enter your password" className=" h-12  px-6 bg-white" />
                        </Form.Item>

                        <div className="flex items-center justify-between mb-4">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className=" text-lg">Remember me</Checkbox>
                            </Form.Item>
                            <Link to="/forget-password" className="text-primary text-md hover:text-primary">
                                Forget password
                            </Link>
                        </div>

                        <Form.Item>
                            <Button
                                className="w-full"
                                htmlType="submit"

                                // onClick={() => navigate('/')}
                            >
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Login;
