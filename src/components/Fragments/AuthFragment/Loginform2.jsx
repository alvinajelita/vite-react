import Inputelemnt from "../../Elements/Input/index";
import Logo from "../../../assets/brnghantu.svg";
import Submitelmnt from "../../Elements/Button/index";
import { Link, useNavigate } from 'react-router-dom';
import { HiEye } from "react-icons/hi2";

const Loginform2 = (props) => {
    const {ukuranJudul} = props;
    let navigasi = useNavigate();
    let isLogin = localStorage.getItem("Login");
    if (isLogin) {
        window.location="/home";
    }
    const handleLogin = (event) => {
        event.preventDefault();
        let user = event.target.user.value
        let pass = event.target.pass.value
        user = "alvinajlt130104"
        pass= "13jelita"
        if (user != "alvinajlt130104" || pass != "13jelita" ) {
            return alert("Username atau Password anda salah \n Silahkan Login kembali");
        } 
        localStorage.setItem("user" , user);
        localStorage.setItem("password" , pass);
        localStorage.setItem("Login" , true);
        // return navigasi("/home");
        window.location.href="/home";
    };
    return (
            <div className="flex flex-col items-center max-w-[500px] capitalize translate-y-[20%] relative font-Latoreglr">
                <img src={Logo} alt="Logoeducation" className="w-[150px] h-[50px] -translate-x-full " />
                <div className="">
                <h1 className={`${ukuranJudul ? ukuranJudul : "text-2xl"} font-Latoblack text-orange-900`} >login</h1>
                <p>silahkan login jika sudah memiliki akun</p>
                </div>
                <form onSubmit={handleLogin} className="flex flex-col my-10 space-y-2">
                Email<Inputelemnt
                 id="user" type="text" nama="username" className="px-10 py-1 rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 bg-krempdrr" placeholder="Username"></Inputelemnt>

                Password<Inputelemnt id="pass" type="password" nama="password" className="px-10 py-1 rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 bg-krempdrr" placeholder="******"></Inputelemnt><HiEye id="matapass" className="absolute top-[56.5%] cursor-pointer w-[20px] h-[20px] left-[63%]" 
                ></HiEye>

                <p className="text-xs underline cursor-pointer hover:text-blue-700">lupa password ?</p>
                <p className="mb-10">silahkan 
                    <Link to="/register" className="text-xl text-orange-900 font-Latobold hover:text-orange-400 ">Register
                    </Link> 
                    jika belum memiliki akun</p>
                <Submitelmnt tipe="submit" Fontclr="text-white" ></Submitelmnt>
                </form>
            </div>
    );
}

export default Loginform2;
