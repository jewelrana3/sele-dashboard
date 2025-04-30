import { Button, ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import otp from '../../../public/auth/otp.svg';
import { useResendOtpMutation, useVerifyEmailMutation } from '../../redux/apiSlice/auth/auth';
import toast from 'react-hot-toast';

const VerifyOtp = () => {
    const [verifyEmail] = useVerifyEmailMutation();
    const [resendOtp] = useResendOtpMutation();
    const navigate = useNavigate();
    const adminEmail = localStorage.getItem('email');
    const email = adminEmail ? JSON.parse(adminEmail) : '';

    const onFinish = async (values: { otp: number | null }) => {
        const data = {
            email: email,
            oneTimeCode: Number(values?.otp),
        };

        try {
            const res = await verifyEmail(data);
            if (res?.data?.success) {
                toast.success('code verify successfull');

                localStorage.setItem('resetToken', res?.data?.data);

                navigate('/new-password');
            }
        } catch (isError) {
            toast.error('An unknown error occurred');
        }
    };

    const handleResendEmail = async () => {
        const value = {
            email: email,
        };

        try {
            await resendOtp(value);
            toast.success('resend successfully');
        } catch (error) {
            toast.error('failed resend code');
        }
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        // lineHeight: 3,
                        controlHeight: 50,

                        borderRadius: 10,
                    },
                },
                token: {
                    colorPrimary: '#FBB040',
                },
            }}
        >
            <div
                className="
            flex items-center justify-center h-screen"
            >
                <div className="px-5">
                    <img src={otp} width={460} height={460} alt="forgot" />
                </div>
                <span className="border-r-2 border-black h-[600px]"></span>
                <div className="flex  items-center justify-center pl-8">
                    <div className=" w-[500px] ">
                        <div className=" space-y-3 ">
                            <h1 className="text-3xl  font-semibold  mt-2">Verify OTP</h1>
                            <p className="text-[#757575]">
                                Please check your email. We have sent a code to contact @gmail.com
                            </p>
                        </div>

                        <Form
                            name="normal_VerifyOtp"
                            className="my-5"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className="flex items-center justify-center mx-auto "
                                name="otp"
                                rules={[{ required: true, message: 'Please input otp code here!' }]}
                            >
                                <Input.OTP
                                    style={{
                                        width: 250,
                                    }}
                                    className=""
                                    // variant="filled"
                                    length={6}
                                />
                            </Form.Item>
                            <div className="text-lg flex items-center justify-between gap-2 mb-8">
                                <p className="">Didn't receive the code?</p>
                                <p className="text-primary font-semibold underline" onClick={handleResendEmail}>
                                    Resend
                                </p>
                            </div>

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
                                    Verify
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default VerifyOtp;
