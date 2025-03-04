import { Button, ConfigProvider, Form, FormProps, Input } from 'antd';
import { FieldNamesType } from 'antd/es/cascader';
import { useNavigate } from 'react-router';
import forgot from '../../../public/auth/forgot.svg';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const onFinish: FormProps<FieldNamesType>['onFinish'] = (values) => {
        console.log('Received values of form: ', values);
        navigate('/verify-otp');
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
                <div className=" border-r-2 border-black px-5">
                    <img src={forgot} width={460} height={460} alt="forgot" />
                </div>
                <div className="flex items-center justify-center px-5">
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
