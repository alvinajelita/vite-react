import logoMongo from "../../../assets/imgproduk/mongodb.png";

export default function challenge1() {
  return (
    <div className='flex flex-col py-5 items-center md:items-center pl-10 lg:w-fit lg:flex-row bg-orange-500'>
      <img src={logoMongo} alt="logoMongo" />
      <div className='pl-5 relative'>
      <h1 className='uppercase text-2xl font-extrabold font-Latoblack text-black'>challenge</h1>
      <p className='capitalize text-center text-xl font-extrabold'>membuat web profile menggunakan mongo db</p>

      </div>
    </div>
  )
}
