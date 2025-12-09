// import {data} from "../../../services/dataMenu"
import DataTable from 'react-data-table-component';
import Inputan from "../../src/components/Elements/Input/index";
import Button from "../../src/components/Elements/Button/index";
import { useState, useEffect } from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { getData } from "../../src/services/api.services";
import Modal from "../components/Elements/Modal";
import Data from "../components/Elements/Data";
import MenuForm from "../components/Fragments/Adminfrgmn/Menu/MenuForm";
import MenuFormput from "../components/Fragments/Adminfrgmn/Menu/MenuFormput";
import Delete from "../components/Elements/Delete";
// import { data } from 'autoprefixer';
// import { FaHome } from "react-icons/fa";
export default function Menukntn() {
  const [records, setRecords] = useState ([]);
  const [ShowModal, setShowModal] = useState(false);
  const [Showdata, setShowdata] = useState(false);
  const [Showdel, setShowdel] = useState(false);
  const columns = [
    {
      name : 'ID Menu',
      selector : (row) => row.id,
      sortable: true,
    },
    {
      name : 'Nama Fitur',
      selector : (row) => row.name,
      sortable: true,
    },
    {
      name : 'Url / path',
      selector : (row) => row.path,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="flex gap-7">
            <Button hoverBg="hover:bg-none" Bgcolor="bg-none" Ukuran="py-2 px-0">
              <BiEdit className="w-[18px] hover:text-oren text-orange-900 h-[18px]"
              onClick={() => setShowdata(true)}
              />
            </Button>
            <Button hoverBg="hover:bg-none" Bgcolor="bg-none" Ukuran="py-2 px-0">
              <LuDelete className="hover:text-oren w-[18px] text-orange-900 h-[18px]" 
              onClick={() => setShowdel(true)}/>
            </Button>
          </div>
        )
      }
    }
  ];
  useEffect(() => {
    getData("menu", (data) => {
      setRecords(data);
    });
  }, []);

  // const handleChange = ({selectedRows}) =>{
  //   console.log(selectedRows);
  // }
  const handleFilter = (event) =>{
    const newData = event.target.value == ""
    ? getData("menu", (data) => setRecords(data)) 
    : records.filter((row) => {
      return row.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    })
      setRecords(newData);
  }
  return (
    <>
    <div className="m-5 p-5 ease-in-out transition-all duration-500">
      <Inputan placeholder="cari fitur" className="rounded-lg outline-none ring-2 focus:ring-2 ring-orange-900 focus:ring-orange-400 px-10 py-1 bg-krempdrr absolute right-0"
      onChange={handleFilter}
      />
      <h1 className="text-yellow-950 font-Latobold text-2xl capitalize mb-5">Kumpulan Fitur</h1>
      <p className="font-Latobold text-xl capitalize">
      <DataTable columns={columns} data={records} 
      pagination className='capitalize transition-all duration-500'
      />
      </p>
      <Button Fontclr="text-white" margin="mt-5" 
      onClick={() => setShowModal(true)}
      > <BiPlus className='absolute h-[20px] w-[20px] -translate-x-full translate-y-[10%]'></BiPlus> tambah features</Button>
    </div>

    <Modal title="Tambah Features" setShowModal={setShowModal} ShowModal={ShowModal}>
    <MenuForm />
    </Modal>
    <Data title="Update Features" setShowdata={setShowdata} Showdata={Showdata}>
    <Button Fontclr="text-white">update</Button>
    </Data>
    <Delete title="Delete Features" setShowdel={setShowdel} Showdel={Showdel}>
      <Button Fontclr="text-white">hapus</Button>
    </Delete>
    </>
  )
}
