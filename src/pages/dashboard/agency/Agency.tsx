import { ConfigProvider, Spin, Table } from 'antd';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useState } from 'react';
import eye from '../../../../public/share-icon/eye.svg';
import { useDeleteAgencyMutation, useGetAgencyQuery } from '../../../redux/apiSlice/agency';
import Swal from 'sweetalert2';
import UserDetailsModal from '../../../modal/UserDetails';

export default function Agency() {
    const { data, isLoading, refetch } = useGetAgencyQuery(undefined);
    const [deleteAgency] = useDeleteAgencyMutation();
    const agencyData = data?.data?.data;
    console.log(agencyData);

    const [userDetails, setUserDetails] = useState<Record<string, any> | null>(null);

    const tableTheme = {
        components: {
            Table: {
                borderColor: '#E7E7E7',
                fontWeightStrong: 700,
                scrollX,
            },
        },
    };

    const handleDelete = (id: string) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to user this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAgency(id);
                refetch();
                Swal.fire({
                    title: 'Deleted!',
                    text: `User item delete`,
                    icon: 'success',
                });
            }
        });
    };

    return (
        <>
            {/* Table */}
            <div className="rounded-lg mx-auto overflow-x-auto">
                {/* Loader */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <Spin size="large" />
                        <p className="ml-3 text-lg">Loading Orders...</p>
                    </div>
                ) : (
                    <ConfigProvider theme={tableTheme}>
                        <Table
                            bordered={false}
                            dataSource={agencyData}
                            pagination={{ pageSize: 9 }}
                            className="cursor-pointer"
                        >
                            {/* Define columns here */}

                            <Table.Column
                                title={<div className="ml-6">Serial ID</div>}
                                render={(_: any, __: any, index: number) => <p className="ml-7">{index + 1}</p>}
                            />
                            <Table.Column title="User Name" dataIndex="name" key="name" />
                            <Table.Column
                                title="Email"
                                dataIndex="email"
                                key="email"
                                render={(email) => email || 'N/A'}
                            />

                            <Table.Column
                                title="Joining Date"
                                dataIndex="date"
                                key="date"
                                render={(_, record) => <span className="">{record?.createdAt?.slice(0, 10)}</span>}
                            />

                            <Table.Column
                                title={<div className="mr-10">Action</div>}
                                dataIndex="action"
                                key="action"
                                align="center"
                                render={(_, record) => (
                                    <div className="w-full lg:w-[80%]">
                                        <div className="flex lg:flex-row flex-col items-center justify-center gap-2 lg:gap-5 py-2 rounded-md   px-2 lg:px-0">
                                            <span
                                                className={`text-nowrap font-semibold  py-1 px-2 rounded-md `}
                                                onClick={() => setUserDetails(record)}
                                            >
                                                <img src={eye} width={20} height={20} alt="eye" />
                                            </span>
                                            <span
                                                className={`text-nowrap font-semibold  py-1 px-2 rounded-md `}
                                                onClick={() => handleDelete(record?._id)}
                                            >
                                                <RiDeleteBin5Line size={24} className="text-[#FE3838]" />
                                            </span>
                                        </div>
                                    </div>
                                )}
                            />
                        </Table>
                    </ConfigProvider>
                )}
            </div>

            {/* user modal */}
            {userDetails && (
                // @ts-ignore
                <UserDetailsModal data={userDetails} isOpen={!!userDetails} onClose={() => setUserDetails(null)} />
            )}
        </>
    );
}
