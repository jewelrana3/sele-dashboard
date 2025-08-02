import { ConfigProvider, Spin, Table } from 'antd';
import BrandModalDetails from '../../../modal/BrandModalDetails';
import Button from '../../../components/shared/Button';
import Swal from 'sweetalert2';
import { useDeletebrandMutation, useGetBrandQuery } from '../../../redux/apiSlice/brand/brand';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { imgUrl } from '../../../redux/api/baseApi';
import AddEditBrandModal from '../../../modal/BrandModal';

const Brand = () => {
    const { data, isLoading } = useGetBrandQuery(undefined);
    const [deletebrand] = useDeletebrandMutation();
    const [createModal, setCreateModal] = useState(false);
    const [brandDetails, setBrandDetails] = useState<Record<string, any> | null>(null);
    const [brandEdit, setBrandEdit] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;

    const handleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want be able to this brand!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deletebrand(id)
                    .then(() => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Brand item deleted.',
                            icon: 'success',
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            title: 'Error!',
                            text: `Could not delete the brand. Please try again.`,
                            icon: 'error',
                        });
                    });
            }
        });
    };

    const handleAddCategoryClick = () => {
        setBrandEdit(null);
        setBrandDetails(null);
        setCreateModal(true);
    };

    const handleEdit = (record: any) => {
        setBrandEdit(record);
        setCreateModal(true);
    };

    return (
        <>
            <div className="flex justify-end " onClick={handleAddCategoryClick}>
                <Button className="">+ Add Brand</Button>
            </div>

            {/* Table */}
            <div className="rounded-lg mx-auto overflow-x-auto mt-2">
                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <Spin size="large" />
                        <p className="ml-3 text-lg">Loading Brand...</p>
                    </div>
                ) : (
                    <ConfigProvider>
                        <Table
                            bordered={false}
                            dataSource={data?.data}
                            pagination={{
                                showSizeChanger: false,
                                pageSize,
                                onChange: (page) => setCurrentPage(page),
                                position: ['bottomCenter'],
                            }}
                            className="cursor-pointer font-outfit"
                            rowKey={(record) => record?._id || record?.id || Math.random().toString()}
                        >
                            <Table.Column
                                title={<div className="ml-6">Serial ID</div>}
                                render={(_, __, index) => (
                                    <p className="ml-7">{(currentPage - 1) * pageSize + index + 1}</p>
                                )}
                            />
                            <Table.Column title="Brand Name" dataIndex="brandName" key="brandName" />
                            <Table.Column
                                title="Image"
                                dataIndex="logo"
                                key="logo"
                                render={(_, record) => (
                                    <img
                                        className="w-28 h-16 object-cover"
                                        src={record.logo?.startsWith('http') ? record.logo : `${imgUrl}${record.logo}`}
                                    />
                                )}
                            />

                            <Table.Column
                                title={<div className="mr-8">Action</div>}
                                dataIndex="action"
                                key="action"
                                align="center"
                                render={(_, record) => (
                                    <div className="flex py-2 items-center justify-center">
                                        <span
                                            className="text-nowrap font-semibold py-1 px-2 rounded-md"
                                            onClick={() => setBrandDetails(record)} // View details
                                        >
                                            <AiOutlineEye size={22} />
                                        </span>
                                        <span
                                            className="text-nowrap font-semibold py-1 px-2 rounded-md"
                                            onClick={() => handleEdit(record)}
                                        >
                                            <CiEdit size={22} />
                                        </span>
                                        <span
                                            className="text-nowrap font-semibold py-1 px-2 rounded-md"
                                            onClick={() => handleDelete(record?._id || '')}
                                        >
                                            <RiDeleteBin5Line size={24} className="text-[#FE3838]" />
                                        </span>
                                    </div>
                                )}
                            />
                        </Table>
                    </ConfigProvider>
                )}
            </div>

            {/* Details modal */}
            {brandDetails && (
                <BrandModalDetails data={brandDetails} isOpen={!!brandDetails} onClose={() => setBrandDetails(null)} />
            )}

            {/* Add/Edit modal */}
            {createModal && (
                <AddEditBrandModal data={brandEdit} isOpen={createModal} onClose={() => setCreateModal(false)} />
            )}
        </>
    );
};

export default Brand;
