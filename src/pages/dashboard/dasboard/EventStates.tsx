import { Image } from 'antd';
import earing from '../../../../public/dashboard/totalEaring.svg';
import user from '../../../../public/dashboard/user.svg';
import agency from '../../../../public/dashboard/totalAgency.svg';
const data = [
    {
        name: 'Total Country',
        count: '$120.4k',

        textColor: '#FBB040',
        image: earing,
        alt: 'earing',
    },
    {
        name: 'Total Event',
        count: '88k',

        bgColor: '#FDF6EC',
        image: user,
        alt: 'user',
    },
    {
        name: 'Total User',
        count: '820',

        textColor: '#FBB040',
        image: agency,
        alt: 'agency',
    },
];

const EventStates = () => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-9">
                {data.map((item, index) => (
                    <div key={index} className="bg-[#D6EAFF] rounded-md p-4  w-full shadow-sm ">
                        <div className="flex  items-center gap-3 px-4">
                            <div className={` w-[54px] h-[54px] rounded-full flex items-center justify-center `}>
                                <Image src={item.image} width={80} height={80} alt={item.alt} />
                            </div>
                            <div className=" flex flex-col gap-1 ">
                                <p className="text-2xl font-medium text-customGray">{item.name}</p>

                                <p className="text-[60px] font-semibold ">{item.count}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventStates;
