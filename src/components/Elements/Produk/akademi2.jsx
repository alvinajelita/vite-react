import htmlLogo from "../../../assets/imgproduk/html.png";
export default function akademi2() {
  return (
    <div className='flex flex-col py-5 items-center md:items-center pl-10 lg:w-fit lg:flex-row bg-orange-500'>
    <img src={htmlLogo} className='aspect-square w-[200px] mt-5 md:w-[200px] lg:w-[200px]' alt="" />
    <div className='pl-5 relative'>
      <h1 className='uppercase text-2xl font-extrabold font-Latoblack text-black'>belajar html dasar </h1>
      <p className='capitalize text-center text-xl font-extrabold'>html tutorial</p>
      <ul className='grid grid-cols-2 gap-2 font-Latoreglr capitalize'>
        <li>
          Html home
        </li>
        <li>
          html introduction
        </li>
        <li>
          html editor
        </li>
        <li>
          html basic
        </li>
        <li>
          html element
        </li>
        <li>
          html attribute
        </li>
        <li>
          html heading
        </li>
        <li>
          html paragraphs
        </li>
      </ul>
    </div>
  </div> 
  )
}
