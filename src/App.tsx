import MainLayout from './components/layout/MainLayout';
import { ConfigProvider } from 'antd';
function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#FBB040',
                    },
                    components: {
                        Input: {
                            borderRadius: 40,
                        },
                        Table: {
                            headerColor: '#ffff',
                            headerBg: '#3395FF',
                            // colorBgContainer: '#181c1d ',
                            colorText: '',
                            headerSplitColor: '',
                            padding: 5,
                            fontSize: 19,
                        },
                        Select: {
                            colorBgContainer: '',
                        },
                    },
                }}
            >
                <MainLayout />
            </ConfigProvider>
        </>
    );
}

export default App;
