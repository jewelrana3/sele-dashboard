import { Button, ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import forgot from '../../../public/auth/forgot.svg';
import { useForgotPasswordMutation } from '../../redux/apiSlice/auth/auth';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const [forgotPassword] = useForgotPasswordMutation();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string }) => {
        try {
            const res = await forgotPassword(values);

            if (res?.data?.success) {
                toast.success('Check your email');

                if (values?.email) {
                    localStorage.setItem('email', JSON.stringify(values.email));
                }

                navigate('/verify-otp');
            }
        } catch (isError) {
            console.log(isError);
        }
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    // colorPrimary: '#FBB040',
                    // colorBgContainer: '#F1F4F9',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        // colorBorder: '',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: '',
                        controlOutline: 'none',
                        activeBorderColor: '',
                    },
                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div
                className="
            flex items-center justify-center h-screen"
            >
                <div className=" px-5">
                    <img src={forgot} width={460} height={460} alt="forgot" />
                </div>
                <span className="border-r-2 border-black h-[600px]"></span>
                <div className="flex items-center justify-center px-6">
                    <div className="w-[500px]">
                        <div className=" space-y-3 ">
                            <h1 className="text-3xl  font-semibold mt-2">Forget Password</h1>
                            <p className="text-[#757575]">
                                Enter your email address to ger a verification code for resetting your password.
                            </p>
                        </div>

                        <Form
                            name="normal_ForgetPassword"
                            className="ForgetPassword-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                                <Input
                                    placeholder="Enter your email address"
                                    type="email"
                                    className="h-12 mt-5 bg-white"
                                />
                            </Form.Item>

                            <Form.Item>
                                <Button
                                    className="!bg-primaryBg !text-white !border-none !hover-none"
                                    htmlType="submit"
                                    style={{
                                        height: 45,
                                        width: '100%',
                                        fontWeight: 500,
                                    }}
                                >
                                    Get OTP
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default ForgetPassword;
