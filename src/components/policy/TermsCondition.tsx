import { useGetConditionQuery } from '../../redux/apiSlice/setting/settingText';

export default function Condition() {
    const { data, isLoading } = useGetConditionQuery(undefined);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div className="mb-10">
            <div className="flex items-center justify-center gap-4 font-semibold text-[40px] my-20">
                <h1>Terms Condition</h1>
            </div>

            <div className="">
                <div className="mt-5 max-w-5xl mx-auto">
                    <article
                        dangerouslySetInnerHTML={{ __html: data?.data?.description }}
                        className="prose prose-slate"
                    />
                </div>
            </div>
        </div>
    );
}
