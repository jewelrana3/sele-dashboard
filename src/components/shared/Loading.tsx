import { Spin } from 'antd';

export default function Loading() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <Spin size="large" />
            <p className="ml-3 text-lg">Loading ...</p>
        </div>
    );
}
