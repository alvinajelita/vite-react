// import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
// import FaHome from "react-icons/fa";
import Icon from "@mui/material/Icon";
import { FaHome } from "react-icons/fa";
import {getData} from "../../../services/api.services";
// import { data } from "../../../services/dataMenu";
export default function Header() {
  const [menu, setMenu] = useState ([]);
  useEffect(
    () => {
    getData("menu", (data) => {
      setMenu(data);
    });
  }, []);
  const listItem = menu.map((item) => {
    return(
      // <Link key={item.id} to={item.path} text={item.name} ><a href="" className="group">
      //   {item.Icon}
      // <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span>
      // </a>
      //   </Link>
        <Link key={item.id} to={item.path} className='capitalize overscroll-x-auto justify-center' >
        <a href="" className="group text-center">
          <Icon  >{item.Icon}</Icon>{item.Text}
          <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-700"></span></a>
        </Link>
    )
  })
  return (
    <ul className="flex flex-1 items-center justify-center font-Latobold capitalize text-white text-center ">
      {/* <Link to="/home" className=""><a href="" className="group"> <FaHome className="text-white left-1/3 h-[25px] w-[25px] " ></FaHome>
      <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span>
      </a>
        </Link> */}
      {listItem}
      {/* <Link to="/home" className=""><a href="" className="group"> <FaHome className="text-white left-1/3 h-[25px] w-[25px] " ></FaHome>
      <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span>
      </a>
        </Link>
      <Link to="/menu" className="">
        <a href="" className="group">feature <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span></a>
        </Link>
      <Link to="/user" className="">
        <a href="" className="group">pengguna <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span></a>
        </Link>
      <Link to="/produk" className="">
        <a href="" className="group">Produk pembelajaran <span className="block max-w-0 h-[2px] bg-orange-600 group-hover:max-w-full transition-all duration-500"></span></a>
        </Link> */}
    </ul>
  )
}
