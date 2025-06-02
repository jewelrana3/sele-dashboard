import { ConfigProvider, Spin, Table } from 'antd';
import Button from '../../../components/shared/Button';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { useDeleteCategoryMutation, useGetCategoryQuery } from '../../../redux/apiSlice/category/category';
import CategoryModal from '../../../modal/Category';

const Category = () => {
    const { data, isLoading, refetch } = useGetCategoryQuery(undefined);
    const [deleteCategory] = useDeleteCategoryMutation();
    const [createModal, setCreateModal] = useState(false);
    const [categoryEdit, setCategoryEdit] = useState(null);

    const handleDelete = (id: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You want to be able to this category!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCategory(id)
                    .then(() => {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Category item deleted.',
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
        setCategoryEdit(null);
        setCreateModal(true);
    };

    const handleEdit = (record: any) => {
        setCategoryEdit(record);
        setCreateModal(true);
    };

    return (
        <>
            <div className="flex justify-end " onClick={handleAddCategoryClick}>
                <Button className="">+ Add Category</Button>
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
                            pagination={{ pageSize: 10 }}
                            className="cursor-pointer font-outfit"
                        >
                            <Table.Column
                                title={<div className="ml-6">Serial ID</div>}
                                render={(_, __, index) => <p className="ml-7">{index + 1}</p>}
                            />
                            <Table.Column title="Category Name" dataIndex="category" key="category" />

                            <Table.Column
                                title={<div className="mr-8">Action</div>}
                                dataIndex="action"
                                key="action"
                                align="center"
                                render={(_, record) => (
                                    <div className="flex py-2 items-center justify-center">
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

            {/* Add/Edit modal */}
            {createModal && (
                <CategoryModal
                    data={categoryEdit}
                    isOpen={createModal}
                    refetch={refetch}
                    onClose={() => setCreateModal(false)}
                />
            )}
        </>
    );
};

export default Category;
