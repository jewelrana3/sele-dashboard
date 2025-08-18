import { ConfigProvider, Spin, Table } from 'antd';
import { useState } from 'react';
import { Check } from 'lucide-react';
import { useGetApprovalQuery, useUpdateApprovalMutation } from '../../../redux/apiSlice/approvalRequest/approval';
import toast from 'react-hot-toast';

// interface Data {
//     id: number;
//     userName: string;
//     contactNumber: string;
//     drivingLicense: string;
//     agencyName: string;
//     status: string;
//     image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png';
// }

// const data = [
//     {
//         id: 1,
//         userName: 'Rahim Uddin',
//         contactNumber: '01712345678',
//         drivingLicense: 'DL-2023-0001',
//         agencyName: 'Swift Travel BD',
//         status: 'Success',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 2,
//         userName: 'Karim Khan',
//         contactNumber: '01898765432',
//         drivingLicense: 'DL-2022-1034',
//         agencyName: 'GreenLine Agency',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 3,
//         userName: 'Sabina Akter',
//         contactNumber: '01987654321',
//         drivingLicense: 'DL-2021-5555',
//         agencyName: 'Skyway Tours',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 4,
//         userName: 'Mehedi Hasan',
//         contactNumber: '01612349876',
//         drivingLicense: 'DL-2024-1122',
//         agencyName: 'Star Transport Ltd',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 5,
//         userName: 'Nasrin Jahan',
//         contactNumber: '01567891234',
//         drivingLicense: 'DL-2020-0099',
//         agencyName: 'Dreamline Travels',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 1,
//         userName: 'Rahim Uddin',
//         contactNumber: '01712345678',
//         drivingLicense: 'DL-2023-0001',
//         agencyName: 'Swift Travel BD',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 2,
//         userName: 'Karim Khan',
//         contactNumber: '01898765432',
//         drivingLicense: 'DL-2022-1034',
//         agencyName: 'GreenLine Agency',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 3,
//         userName: 'Sabina Akter',
//         contactNumber: '01987654321',
//         drivingLicense: 'DL-2021-5555',
//         agencyName: 'Skyway Tours',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 4,
//         userName: 'Mehedi Hasan',
//         contactNumber: '01612349876',
//         drivingLicense: 'DL-2024-1122',
//         agencyName: 'Star Transport Ltd',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
//     {
//         id: 5,
//         userName: 'Nasrin Jahan',
//         contactNumber: '01567891234',
//         drivingLicense: 'DL-2020-0099',
//         agencyName: 'Dreamline Travels',
//         status: 'Pending',
//         image: 'https://i.ibb.co.com/93Cb6KpS/Rectangle-5.png',
//     },
// ];

export default function RequestApproval() {
    const { data } = useGetApprovalQuery(undefined);
    // const [updateApproval] = useUpdateApprovalMutation();
    const isLoading = false;
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    // const handleApprove = async (id: string) => {
    //     const data = {
    //         adminApproval: true,
    //     };
    //     try {
    //         const res = await updateApproval(id, data).unwrap();
    //         if (res?.message) {
    //             toast.success(res.message);
    //         } else {
    //             toast.error(res.message || 'user not approved');
    //         }
    //     } catch (err: any) {
    //         toast.error(err?.message || 'An error occurred while approving the user.');
    //     }
    // };

    // const handleShowDetails = (data: Data) => {
    //     setShowDetails(data);
    //     setIsOpen(true);
    // };
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
                            dataSource={data?.data}
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
                                dataIndex="name"
                                key="username"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Email</span>}
                                dataIndex="email"
                                className="text-center"
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Driving License</span>}
                                dataIndex="drivingLicense"
                                key="license"
                                className="text-center"
                                render={(_, record) => (
                                    <div className="flex items-center justify-center font-semibold ">
                                        <img src={record.image} alt={record.name} className="w-16 h-14 object-cover" />
                                    </div>
                                )}
                            />

                            <Table.Column
                                title={<span className="text-white text-center block">Status</span>}
                                dataIndex="status"
                                key="status"
                                className="text-center"
                                render={(_, record) => (
                                    <div className="flex items-center justify-center font-semibold ">
                                        <span className="text-nowrap bg-[#F17600] rounded-2xl text-white py-1 px-3">
                                            {record.adminApproval == false && 'Pending'}
                                        </span>
                                    </div>
                                )}
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
                                            // onClick={() => handleApprove(record._id)}
                                        >
                                            {record.adminApproval == false && (
                                                <span>
                                                    <Check />
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                )}
                            />
                        </Table>
                    </ConfigProvider>
                )}
            </div>
        </>
    );
}
