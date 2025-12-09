import Logoedukasi from "../assets/brnghantu.svg";
import Submitdsbr from "../components/Elements/Button/index";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="h-[100vh] flex-col ease-in-out duration-500 transition-all">
        <div className="flex space-x-3 items-center justify-center">
        <img src={Logoedukasi} alt="Logo" className="w-[45%] h-1/2"  />
        <Link to="/login" >
        <Submitdsbr Ukuran="py-3 px-16"  Fonttbl="font-bold" Fontclr="text-white">started<HiOutlineArrowUpRight className="absolute top-1/3 right-5 w-10 h-5 " ></HiOutlineArrowUpRight></Submitdsbr>
        </Link>
        </div>
    </div>
  )
}
