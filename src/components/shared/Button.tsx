interface Buttonprops {
    children: string;
    className: string;
}

export default function Button({ children, className }: Buttonprops) {
    return (
        <div className={`${className} bg-[#00369A] text-white font-semibold  text-center  cursor-pointer`}>
            {children}
        </div>
    );
}
