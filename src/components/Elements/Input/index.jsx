const Input = ({ onChange = () => {}, children, ...props}) => {
    return (
        <div className="relative">   
                <input onChange={onChange} {...props} required />
                <div>
                    {children ? children : null}
                </div>
        </div>
    );
}
export default Input;
// type={tipeInput} name={nama} id={id}
//                 className={`rounded-lg outline-none ${warnaRing ? warnaRing : "ring-none"} ${Ring ? Ring : "ring-0"} ring-2 focus:ring-2 focus:ring-orange-400 ${ukuranInput ? ukuranInput : "px-10 py-1" } ${abso ? abso : "relative"} ${posisi ? posisi : "1  -09 y    1   q=]UYTREGFR5"} ${warnaBginput || "bg-krempdrr" } placeholder:text-sm placeholder:text-slate-400 placeholder:capitalize`} placeholder={placeholderText ? placeholderText : "Tidak ada"}
//                 onChange={onChange}
// const {
//     warnaBginput, onChange = () => {}, nama, id, warnaRing, Ring, children = "",
//     ukuranInput, placeholderText, tipeInput, abso, posisi
// } = props;
