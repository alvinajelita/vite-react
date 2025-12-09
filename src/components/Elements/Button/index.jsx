
const Button = (props) => {
    const {
        children, Bgcolor, tipe = "button", Fonttbl, Fontclr, Ukuran, hoverBg, margin,
        onClick = () => {}, 
    } = props;
    return (
        <div className="relative">
            <button type={tipe} 
            className={`${Bgcolor ?  Bgcolor : "bg-oren"}  ${hoverBg ? hoverBg : "hover:bg-orenglp"} ${Ukuran ? Ukuran : "py-2 px-10"} ${Fontclr ? Fontclr :"text-black"} rounded-lg outline-none ${Fonttbl ? Fonttbl : "font-normal"} capitalize ${margin ? margin :"m-0"} text-center -tracking-tighter font-Latoblack`}
            onClick={() => onClick()}
            >
                {children ? children : "login"}
            </button>
        </div>
    );
}

export default Button;
