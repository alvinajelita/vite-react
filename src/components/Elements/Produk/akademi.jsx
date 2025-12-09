import nodeJs from "../../../assets/imgproduk/nodejs.png";
export default function akademi(props) {
  return (
    <div className='flex flex-col py-5 items-center md:items-center pl-10 md:w-[50%] lg:flex-row bg-orange-500'>
    <img src={nodeJs} className='aspect-square w-[200px] mt-5 md:w-[200px] lg:w-[200px]' alt="" />
    <div className='pl-5 relative'>
      <h1 className='uppercase text-2xl font-extrabold font-Latoblack text-black'>belajar backend dengan nodejs </h1>
      <p className='capitalize text-center text-xl'>node.js tutorial</p>
      <ul className='grid grid-cols-2 gap-2 font-Latoreglr capitalize'>
        <li>
          Node.js introduction
        </li>
        <li>
          module Node.js 
        </li>
        <li>
          Node.js HTTP Module
        </li>
        <li>
          Node.js File system
        </li>
        <li>
          Node.js URL module
        </li>
        <li>
          Node.js NPM
        </li>
        <li>
          Node.js Event
        </li>
        <li>
          Node.js Upload file
        </li>
      </ul>
    </div>
  </div>  
  )
}
