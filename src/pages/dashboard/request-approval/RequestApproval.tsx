import { ConfigProvider, Spin, Table } from 'antd';
import { useState } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RequestApprovalDetails } from '../../../modal/RequestApprovalDetails';

interface Data {
    id: number;
    userName: string;
    contactNumber: string;
    drivingLicense: string;
    agencyName: string;
    agencyNumber: string;
}

const data = [
    {
        id: 1,
        userName: 'Rahim Uddin',
        contactNumber: '01712345678',
        drivingLicense: 'DL-2023-0001',
        agencyName: 'Swift Travel BD',
        agencyNumber: '9084590845984',
    },
    {
        id: 2,
        userName: 'Karim Khan',
        contactNumber: '01898765432',
        drivingLicense: 'DL-2022-1034',
        agencyName: 'GreenLine Agency',
        agencyNumber: '9084590845984',
    },
    {
        id: 3,
        userName: 'Sabina Akter',
        contactNumber: '01987654321',
        drivingLicense: 'DL-2021-5555',
        agencyName: 'Skyway Tours',
        agencyNumber: '9084590845984',
    },
    {
        id: 4,
        userName: 'Mehedi Hasan',
        contactNumber: '01612349876',
        drivingLicense: 'DL-2024-1122',
        agencyName: 'Star Transport Ltd',
        agencyNumber: '9084590845984',
    },
    {
        id: 5,
        userName: 'Nasrin Jahan',
        contactNumber: '01567891234',
        drivingLicense: 'DL-2020-0099',
        agencyName: 'Dreamline Travels',
        agencyNumber: '9084590845984',
    },
    {
        id: 1,
        userName: 'Rahim Uddin',
        contactNumber: '01712345678',
        drivingLicense: 'DL-2023-0001',
        agencyName: 'Swift Travel BD',
        agencyNumber: '9084590845984',
    },
    {
        id: 2,
        userName: 'Karim Khan',
        contactNumber: '01898765432',
        drivingLicense: 'DL-2022-1034',
        agencyName: 'GreenLine Agency',
        agencyNumber: '9084590845984',
    },
    {
        id: 3,
        userName: 'Sabina Akter',
        contactNumber: '01987654321',
        drivingLicense: 'DL-2021-5555',
        agencyName: 'Skyway Tours',
        agencyNumber: '9084590845984',
    },
    {
        id: 4,
        userName: 'Mehedi Hasan',
        contactNumber: '01612349876',
        drivingLicense: 'DL-2024-1122',
        agencyName: 'Star Transport Ltd',
        agencyNumber: '9084590845984',
    },
    {
        id: 5,
        userName: 'Nasrin Jahan',
        contactNumber: '01567891234',
        drivingLicense: 'DL-2020-0099',
        agencyName: 'Dreamline Travels',
        agencyNumber: '9084590845984',
    },
];

export default function RequestApproval() {
    const isLoading = false;
    const [currentPage, setCurrentPage] = useState(1);
    const [showDetails, setShowDetails] = useState<null | { id: string | number }>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pageSize = 8;

    const handleShowDetails = (data: Data) => {
        setShowDetails(data);
        setIsOpen(true);
    };
    return (
        <>
            <div className="rounded-lg mt-2 ">
                {isLoading ? (
                    <div className="flex items-center justify-center">
                        <Spin size="large" />
                        <p className="ml-3 text-lg">Loading Approval...</p>
                    </div>
                ) : (
                    <ConfigProvider>
                        <Table
                            bordered={false}
                            dataSource={data}
                            pagination={{
                                pageSize,
                                onChange: (page) => setCurrentPage(page),
                                position: ['bottomCenter'],
                            }}
                            className="cursor-pointer font-outfit"
                            rowKey={(record) => record?.id || record?.id || Math.random().toString()}
                        >
                            <Table.Column
                                title={<div className="">Serial ID</div>}
                                render={(_, __, index) => (
                                    <p className="ml-7">{(currentPage - 1) * pageSize + index + 1}</p>
                                )}
                            />
                            <Table.Column
                                title={<span className="text-white text-center block">User Name</span>}
                                dataIndex="userName"
                                key="username"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Contact Number</span>}
                                dataIndex="contactNumber"
                                key="contact"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Driving License</span>}
                                dataIndex="drivingLicense"
                                key="license"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Agency Name</span>}
                                dataIndex="agencyName"
                                key="agencyName"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Agency Number</span>}
                                dataIndex="agencyNumber"
                                key="agencyNumber"
                                className="text-center"
                            />

                            <Table.Column
                                title={<div className="">Action</div>}
                                dataIndex="action"
                                key="action"
                                align="center"
                                render={(_, record) => (
                                    <div className="flex py-2 items-center justify-center">
                                        <span
                                            className="text-nowrap font-semibold py-1 px-2 rounded-md"
                                            onClick={() => handleShowDetails(record?.id)}
                                        >
                                            <RiDeleteBin5Line size={24} className="text-[#FE3838]" />
                                        </span>
                                    </div>
                                )}
                            />
                        </Table>
                    </ConfigProvider>
                )}

                {/* show details */}
                {showDetails && (
                    <RequestApprovalDetails isOpen={isOpen} data={showDetails} onClose={() => setIsOpen(false)} />
                )}
            </div>
        </>
    );
}
