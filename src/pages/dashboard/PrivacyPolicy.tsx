import { MdOutlineArrowBackIosNew } from 'react-icons/md';

import { useEffect, useRef, useState } from 'react';
import JoditEditor from 'jodit-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { useCreatePrivacyMutation, useGetPrivacyQuery } from '../../redux/apiSlice/setting/settingText';

export default function PrivacyPolicy() {
    const { data, isLoading, isError } = useGetPrivacyQuery(undefined);
    const [createPrivacy] = useCreatePrivacyMutation();
    const editor = useRef(null);
    const navigate = useNavigate();

    const [content, setContent] = useState('');

    useEffect(() => {
        if (data?.data?.description) {
            setContent(data?.data?.description);
        }
    }, [data]);

    const handleOnSave = async (value: string) => {
        await createPrivacy({ description: value });
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>Error loading content.</span>;
    }
    return (
        <div>
            <div className="flex items-center gap-4 font-semibold text-[20px]" onClick={() => navigate(-1)}>
                <button className="text-xl">
                    <MdOutlineArrowBackIosNew />
                </button>
                <button>Privacy Policy</button>
            </div>

            <div className="">
                <div className="mt-5">
                    <JoditEditor
                        ref={editor}
                        value={content}
                        config={{ height: 550, theme: 'light', readonly: false }}
                        onBlur={(newContent) => setContent(newContent)}
                    />
                </div>
                <Button className="mt-5" onClick={() => handleOnSave(content)}>
                    Save
                </Button>
            </div>
        </div>
    );
}
