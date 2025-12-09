import Logo from "../../assets/brnghantu.svg";
import Button from "../Elements/Button";
import { AiOutlineLogout } from "react-icons/ai";
// import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Footer from "../Elements/Footer/Footer";
// import Homekntn from "../Fragments/Kontenfragm/Homekntn";
// import Sidebar from "../Fragments/DashbordFragmnt/Sidebar";
import Header from "../Fragments/DashbordFragmnt/Header";
const Dashboardlay = (props) => {
  let user = localStorage.getItem("user")
  const handleLogout = () => {
    localStorage.clear();
    window.location="/"
  }
  return (
        <div className='max-w-full duration-500 transition-all'>
        <nav className='top-0 w-full h-[90px] transition-transform -translate-x-full sm:translate-x-0 bg-orange-900'>
          <div className='py-5 relative container h-full flex flex-1 items-center '>
            <div id="Logoedu" className="">
              <img src={Logo} alt="logoburunghntu" className="w-[95px] h-[75px]" />
            </div>
            <Header />
            <div className="flex space-x-5">
              <p className="font-Latobold text-white uppercase absolute translate-y-[25%] -translate-x-[100%]">{user}</p>
              {/* <Link to="/"> */}
              <Button
              onClick = {handleLogout}
              Fontclr="text-white">
                logout<AiOutlineLogout className="text-white h-[25px] w-[90px] absolute translate-x-7 -translate-y-6 transition-all" ></AiOutlineLogout>
              </Button>
              {/* </Link> */}
            </div>
          </div>
        </nav>
        <div className="bg-transparent h-[100vh] font-Latoblack my-5 transition-all ease-in-out duration-500">
          <Outlet />
        </div>
        <Footer />
      </div>
  
    
  );
}
export default Dashboardlay;