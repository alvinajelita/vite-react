import Inputelemnt from "../../Elements/Input/index";
import Logo from "../../../assets/brnghantu.svg";
import Submitelmnt from "../../Elements/Button/index";
import { Link } from 'react-router-dom';

export default function Formregister2(props) {
  const {ukuranJudul} = props;
  return (
    <div className="w-[500px] h-[550px] rounded-tr-2xl rounded-br-2xl bg-krem bg-[url(./assets/background.svg)] bg-cover ">
    <div className="flex flex-col items-center max-w-[500px] capitalize translate-y-[20%] relative font-Latoreglr">
        <img src={Logo} alt="Logoeducation" className="w-[150px] h-[50px] -translate-x-full " />
            <div className="">
            <h1 className={`${ukuranJudul ? ukuranJudul : "text-2xl"} font-Latoblack text-orange-900`} >Register</h1>
            <p>silahkan isi dengan lengkap formulir dibawah ini</p>
            </div>
            <form action="#" className="flex-col flex my-5 space-y-2">
                <Inputelemnt ukuranInput="px-20 py-1" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Nama Lengkap" ></Inputelemnt>
                <Inputelemnt ukuranInput="px-20 py-1" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Universitas"></Inputelemnt>
                <Inputelemnt ukuranInput="px-20 py-1" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Email"></Inputelemnt>
                <Inputelemnt ukuranInput="px-20 py-1" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Password"></Inputelemnt>
            </form>
            <Link to="/login">
            <Submitelmnt children="Register" Fontclr="text-white" ></Submitelmnt>
            </Link>
            <p>Sudah memiliki akun? silahkan <Link to="/login" className="capitalize font-Latobold text-orange-900  hover:text-orange-400 text-xl">login disini</Link> </p>
    </div>
    </div>
  )
}
