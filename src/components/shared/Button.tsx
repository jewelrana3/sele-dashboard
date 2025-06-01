interface Buttonprops {
    children: React.ReactNode;
    className: string;

    onClick?: () => void;
    htmlType?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, onClick, htmlType = 'button' }: Buttonprops) {
    return (
        <button
            type={htmlType}
            onClick={onClick}
            className={`${className} font-semibold text-center my-auto  cursor-pointer bg-primaryBg text-white w-[200px] h-[40px] rounded-lg`}
        >
            {children}
        </button>
    );
}
