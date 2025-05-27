import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { useCreateAboutMutation, useGetAboutQuery } from '../../redux/apiSlice/setting/settingText';

export default function AboutUs() {
    const { data, isLoading, refetch } = useGetAboutQuery(undefined);
    const [createAbout] = useCreateAboutMutation();
    const editor = useRef(null);
    const navigate = useNavigate();
    const [content, setContent] = useState('');

    console.log(data);

    useEffect(() => {
        if (data?.data?.description) {
            setContent(data?.data?.description);
        }
    }, [data]);

    const handleSubmit = async () => {
        try {
            await createAbout({ description: content });
            refetch();
        } catch (error) {
            console.error('Error submitting About Us content:', error);
        }
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    // if (isError) {
    //     return <span>Error loading content.</span>;
    // }

    return (
        <div>
            <div className="flex items-center gap-4 font-semibold text-[20px]" onClick={() => navigate(-1)}>
                <button className="text-xl">
                    <MdOutlineArrowBackIosNew />
                </button>
                <button>About Us</button>
            </div>

            <div className="mt-5">
                <JoditEditor
                    ref={editor}
                    value={content}
                    config={{ height: 550, theme: 'light', readonly: false }}
                    onBlur={(newContent) => setContent(newContent)}
                />
            </div>

            <Button className="mt-5" onClick={handleSubmit}>
                Save
            </Button>
        </div>
    );
}
