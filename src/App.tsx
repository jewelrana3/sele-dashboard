import { Toaster } from 'react-hot-toast';
import MainLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        // colorPrimary: '#FBB040',
                    },
                    components: {
                        Table: {
                            headerColor: '#ffff',
                            headerBg: '#3395FF',
                            // colorBgContainer: '#181c1d ',
                            colorText: '',
                            headerSplitColor: '',
                            padding: 5,

                            fontFamily: 'Poppins',
                        },
                        Select: {
                            colorBgContainer: '',
                        },
                        Checkbox: {
                            colorBgContainer: 'rgb(255,66,66)',
                            colorPrimary: 'rgb(241,247,247)',
                        },
                    },
                }}
            >
                <MainLayout />
                <Toaster />
            </ConfigProvider>
        </>
    );
}

export default App;
