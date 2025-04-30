import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { useLoginMutation } from '../../redux/apiSlice/auth/auth';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Login = () => {
    const [Login, { data, isLoading, isSuccess, error }] = useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading) {
            toast.loading('Loading ...', { id: 'login-toast' });
        } else {
            toast.dismiss('login-toast');

            if (isSuccess && data) {
                toast.success('Login Successful', { id: 'login-toast' });
                localStorage.setItem('accessToken', data?.data?.accessToken);
                navigate('/');
            }
        }
    }, [data, navigate, isLoading, isSuccess]);

    const onFinish = async (values: { email: string; password: string }) => {
        const data = {
            email: values?.email,
            password: values?.password,
        };

        try {
            await Login(data).unwrap();
        } catch (error) {
            toast.error(error);
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
                        // controlOutline: 'none',
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
                    {/* <div className="flex justify-end ">
                        <Link to="/sign-up">
                            {' '}
                            <p className="text-[#8DB501] font-bold underline cursor-pointer">Sign Up</p>
                        </Link>
                    </div> */}
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Login;
