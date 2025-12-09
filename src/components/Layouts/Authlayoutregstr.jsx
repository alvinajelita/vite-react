import Gambarcute from "../../assets/gmbar.svg";

export default function Authlayoutregstr(props) {
    let children = props.children ? props.children : "Nothing" ;
  return (
    <div className="flex flex-col transition-all ease-in-out duration-500 container justify-center items-center h-[100vh]">
            <div className="flex flex-row">
            <div className="w-[500px] h-[550px] bg-krem rounded-tl-2xl rounded-bl-2xl ">
                <img src={Gambarcute} alt="CuteImage"  className="translate-y-[50px] -translate-x-5 " />
            </div>
                <div className="w-[500px] h-[550px] rounded-tr-2xl rounded-br-2xl bg-krem bg-[url(./assets/background.svg)] bg-cover">
                    {children}
                </div>
            </div>
    </div>
  )
}
