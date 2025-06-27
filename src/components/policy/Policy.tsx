import { useGetPrivacyQuery } from '../../redux/apiSlice/setting/settingText';
import Loading from '../shared/Loading';

export default function Policy() {
    const { data, isLoading } = useGetPrivacyQuery(undefined);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="mb-10">
            <div className="flex items-center justify-center gap-4 font-semibold text-[40px] my-20">
                <h1>Privacy Policy</h1>
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
