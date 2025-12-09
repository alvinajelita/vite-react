// import Menu  from "../../Elements/Menu/index.jsx";
import Gambar from "../assets/gmbar.svg";
export default function Homekntn() {
  let user = localStorage.getItem("user")
  return (
    <div className="m-5 p-5 transition-all ease-in-out duration-200 h-[100vh] flex">
      <h1 className="text-yellow-950 font-Latobold text-2xl capitalize">selamat datang {user} di dashboard admin </h1>
      <img src={Gambar} className="w-[100vh] h-[100vh]" alt="" srcset="" />
    </div>
  )
}
