import { ConfigProvider, Spin, Table } from 'antd';
import AddCategoryModal from '../../../modal/AddCategoryModal';
import BrandModalDetails from '../../../modal/BrandModalDetails';
import Button from '../../../components/shared/Button';
import Swal from 'sweetalert2';
import { useDeletebrandMutation, useGetBrandQuery } from '../../../redux/apiSlice/category/category';
import { useState } from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { imgUrl } from '../../../redux/api/baseApi';

const Category = () => {
    const { data, isLoading, refetch } = useGetBrandQuery(undefined);
    const [deletebrand] = useDeletebrandMutation();
    const [createModal, setCreateModal] = useState(false);
    const [brandDetails, setBrandDetails] = useState<Record<string, any> | null>(null);
    const [brandEdit, setBrandEdit] = useState(null);

    const handleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to undo this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deletebrand(id)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'User item deleted.',
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

    if (isLoading) {
        return <span>Loading...</span>;
    }

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
                        <p className="ml-3 text-lg">Loading Orders...</p>
                    </div>
                ) : (
                    <ConfigProvider>
                        <Table
                            bordered={false}
                            dataSource={data?.data}
                            pagination={{ pageSize: 10 }}
                            className="cursor-pointer font-outfit"
                        >
                            <Table.Column
                                title={<div className="ml-6">Serial ID</div>}
                                render={(_, __, index) => <p className="ml-7">{index + 1}</p>}
                            />
                            <Table.Column title="Brand Name" dataIndex="brandName" key="brandName" />
                            <Table.Column
                                title="Image"
                                dataIndex="logo"
                                key="logo"
                                render={(_, record) => (
                                    <img
                                        className="w-20 h-12"
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
                <AddCategoryModal
                    data={brandEdit}
                    isOpen={createModal}
                    refetch={refetch}
                    onClose={() => setCreateModal(false)}
                />
            )}
        </>
    );
};

export default Category;
