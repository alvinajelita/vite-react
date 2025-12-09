import HeaderProduk  from "./Header";
import BodyProduk from "./Body";
export default function index({ShowModal = false, setShowModal, title, children}) {
  return (
    <div className={ShowModal == false ? "hidden" : `flex justify-center items-center fixed bg-slate-300 bg-opacity-45 overflow-y-auto overflow-x-hidden inset-0 z-50 outline-none focus:outline-none`}>
      <div className="relative w-auto my-6 mx-auto max-w-3xl">
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <HeaderProduk title={title} onClick={() => setShowModal(false)} />
            <BodyProduk>{children}</BodyProduk>
        </div>
      </div>
    </div>
  )
}
