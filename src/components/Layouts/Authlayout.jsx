import Gambarcute from "../../assets/gmbar.svg";
// import Counter from "../Fragments/Counters/Counter";
// import Counter2 from "../Fragments/Counters/Counter2";

// import Loginformni from "../Fragments/AuthFragment/Loginform2";

const Authlayout = (props) => {
    let children = props.children ? props.children : "Nothing" ;
    return (
        <>
        {/* <Counter />
        <Counter2 /> */}
        <div className="flex flex-col container ease-in-out transition-all duration-500 justify-center items-center h-[100vh]">
            <div className="flex flex-row">
                <div className="w-[500px] h-[550px] rounded-tl-2xl rounded-bl-2xl bg-krem bg-[url(./assets/background.svg)] bg-cover">
                    {children}
                </div>
            <div className="w-[500px] h-[550px] bg-krem rounded-tr-2xl rounded-br-2xl ">
                <img src={Gambarcute} alt="CuteImage"  className="translate-y-[50px] -translate-x-5 " />
            </div>
            </div>
        </div>
    </>
    );
}

export default Authlayout;
