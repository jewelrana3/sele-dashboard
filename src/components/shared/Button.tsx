interface Buttonprops {
    children: React.ReactNode;
    className: string;
    onClose?: () => void;
    htmlType?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, className, onClose, htmlType = 'button' }: Buttonprops) {
    return (
        <button
            type={htmlType}
            onClick={onClose}
            className={`${className} font-semibold text-center my-auto  cursor-pointer bg-primaryBg text-white w-[200px] h-[50px] rounded-lg`}
        >
            {children}
        </button>
    );
}
