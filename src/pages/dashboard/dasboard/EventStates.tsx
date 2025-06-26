import earing from '../../../../public/dashboard/totalEaring.svg';
import user from '../../../../public/dashboard/user.svg';
import agency from '../../../../public/dashboard/totalAgency.svg';
import { useGetStaticsQuery } from '../../../redux/apiSlice/dashboard/dashboard';

const EventStates = () => {
    const { data } = useGetStaticsQuery(undefined);
    const staticsData = data?.data;

    const statics = [
        {
            name: 'Total Earning',
            count: `${staticsData?.totalEarning}k`,

            textColor: '#FBB040',
            image: earing,
            alt: 'earing',
        },
        {
            name: 'Total User',
            count: staticsData?.totalUser,

            bgColor: '#FDF6EC',
            image: user,
            alt: 'user',
        },
        {
            name: 'Total Agency',
            count: staticsData?.totalAgency,

            textColor: '#FBB040',
            image: agency,
            alt: 'agency',
        },
    ];

    return (
        <div>
            <div className="grid lg:grid-cols-3 xl:grid-cols-3 gap-9 mb-5">
                {statics.map((item, index) => (
                    <div key={index} className="bg-[#D6EAFF] rounded-md p-4  w-full shadow-sm ">
                        <div className="flex  items-center gap-3 px-4">
                            <div className={` w-[54px] h-[54px] rounded-full flex items-center justify-center `}>
                                <img src={item.image} width={80} height={80} alt={item.alt} />
                            </div>
                            <div className=" flex flex-col gap-1 ">
                                <p className="text-2xl font-medium text-customGray">{item.name}</p>

                                <p className="text-2xl font-semibold ">{item.count || 0}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EventStates;
