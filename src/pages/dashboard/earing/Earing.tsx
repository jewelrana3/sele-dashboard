import { ConfigProvider, Spin, Table } from 'antd';
import { useState } from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import EaringModalDetails from '../../../modal/EaringModalDetails';
import EventStates from '../dasboard/EventStates';
import { useGetEarningQuery } from '../../../redux/apiSlice/earning';

export default function Earing() {
    const { data, isLoading } = useGetEarningQuery(undefined);
    const [isEaringModalDetails, setIsEaringModalDetails] = useState<Record<string, any> | null>(null);
    console.log(isEaringModalDetails);
    const tableTheme = {
        components: {
            Table: {
                borderColor: '#E7E7E7',
                // fontWeightStrong: 500,
                scrollX,
            },
        },
    };

    return (
        <>
            <EventStates />
            <div className="rounded-lg mx-auto overflow-x-auto">
                {/* Loader */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <Spin size="large" />
                        <p className="ml-3 text-lg">Loading Earning...</p>
                    </div>
                ) : (
                    <ConfigProvider theme={tableTheme}>
                        <Table bordered={false} dataSource={data?.data} className="cursor-pointer">
                            {/* Define columns here */}

                            <Table.Column
                                title={<div className="ml-6">Serial</div>}
                                dataIndex="id"
                                key="id"
                                render={(_, __, index: number) => <p className="ml-7">{index + 1}</p>}
                            />
                            <Table.Column
                                title="Order Id"
                                dataIndex="transactionId"
                                key="transactionId"
                                render={(_, record) => <span className="">{record?.transactionId.slice(0, 6)}</span>}
                            />
                            <Table.Column
                                title="Trax Id"
                                dataIndex="trxId"
                                key="trxId"
                                // render={(traxId) => traxId || 'N/A'}
                            />

                            <Table.Column
                                title="Email"
                                dataIndex="email"
                                key="email"
                                render={(_, record) => <span className="">{record?.userId?.email}</span>}
                            />

                            <Table.Column
                                title="Date"
                                dataIndex="date"
                                key="date"
                                render={(_, record) => <span className="">{record?.createdAt.slice(0, 10)}</span>}
                            />
                            <Table.Column
                                title="Amount"
                                dataIndex="amount"
                                key="amount"
                                render={(amount) => (amount ? <span className="">${amount}</span> : 'No')}
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
                                                onClick={() => setIsEaringModalDetails(record)}
                                            >
                                                <MdOutlineRemoveRedEye size={24} />
                                            </span>
                                        </div>
                                    </div>
                                )}
                            />
                        </Table>
                    </ConfigProvider>
                )}
            </div>

            {/* earing  modal */}
            {isEaringModalDetails && (
                <EaringModalDetails
                    //@ts-ignore
                    data={isEaringModalDetails}
                    isOpen={!!isEaringModalDetails}
                    onClose={() => setIsEaringModalDetails(null)}
                />
            )}
        </>
    );
}
