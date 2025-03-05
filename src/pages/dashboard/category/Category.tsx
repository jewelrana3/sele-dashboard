import audi from '../../../../public/category/audi.svg';
import bmw from '../../../../public/category/bmw.svg';
import tesla from '../../../../public/category/tesla.svg';
import honda from '../../../../public/category/honda.svg';
import toyota from '../../../../public/category/toyota.svg';
import buick from '../../../../public/category/buck.svg';
import mercedes from '../../../../public/category/mercides.svg';
import gmc from '../../../../public/category/gmc.svg';
import { useState } from 'react';
import CategoryModal from '../../../modal/CategoryModal';
import Button from '../../../components/shared/Button';
import AddCategoryModal from '../../../modal/AddCategoryModal';

const carBrands = [
    { name: 'BMW', logo: audi },
    { name: 'Audi', logo: bmw },
    { name: 'Tesla', logo: tesla },
    { name: 'Honda', logo: honda },
    { name: 'Toyota', logo: toyota },
    { name: 'Buick', logo: buick },
    { name: 'Mercedes', logo: mercedes },
    { name: 'GMC', logo: gmc },
];

const Category = () => {
    const [categoryDetails, setCategoryDetails] = useState<boolean>(false);
    const [createModal, setCreateModal] = useState(false);
    return (
        <>
            <div className="flex justify-end my-6 pr-5" onClick={() => setCreateModal(true)}>
                <Button className="">+ Add Category</Button>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {carBrands.map((car) => (
                    <div key={car.name} className="flex flex-col items-center justify-center p-4 rounded-lg">
                        <div className="border border-[#757575] p-4 text-center rounded-xl">
                            <img src={car.logo} alt={car.name} className="h-20 w-20 mb-3" />
                            <span>{car.name}</span>
                        </div>

                        <p
                            className="bg-[#E6F2FF] text-blue-500 font-bold mt-2 ml-20 p-1 rounded-md cursor-pointer"
                            onClick={() => setCategoryDetails(true)}
                        >
                            Details
                        </p>
                    </div>
                ))}
            </div>

            {/* details modal */}
            {categoryDetails && <CategoryModal isOpen={categoryDetails} onClose={() => setCategoryDetails(false)} />}
            {createModal && <AddCategoryModal isOpen={createModal} onClose={() => setCreateModal(false)} />}
        </>
    );
};

export default Category;
