// import {data} from "../../../data/dataMenu"
import DataTable from 'react-data-table-component';
import Inputan from "../components/Elements/Input/index";
import Button from "../components/Elements/Button/index";
import { useState, useEffect } from "react";
import { BiEdit, BiPlus } from "react-icons/bi";
import { LuDelete } from "react-icons/lu";
import { getData } from "../services/api.services";
import Modal from "../components/Elements/Modal";
import Data from "../components/Elements/Data";
import Delete from "../components/Elements/Delete";
import PenggunaForm from "../components/Fragments/Adminfrgmn/PenggunaForm/PenggunaForm";
export default function Userskntn() {
  const [records, setRecords] = useState ([]);
  const [ShowModal, setShowModal] = useState(false);
  const [Showdata, setShowdata] = useState(false);
  const [Showdel, setShowdel] = useState(false);
  const columns = [
    {
      name : 'ID user / Admin',
      selector : (row) => row.id,
      sortable: true,
    },
    {
      name : 'Nama Lengkap',
      selector : (row) => row.name,
      sortable: true,
    },
    {
      name : 'Asal',
      selector : (row) => row.asal,
      sortable: true,
    },
    {
      name : 'Nama Email',
      selector : (row) => row.email,
      sortable: true,
    },
    {
      name : 'Password',
      selector : (row) => row.password,
      sortable: true,
    },
    {
      name : 'Role',
      selector : (row) => row.role,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="flex gap-7">
            <Button hoverBg="hover:bg-none" Bgcolor="bg-none" Ukuran="py-2 px-0">
              <BiEdit className="w-[18px] hover:text-oren text-orange-900 h-[18px]"
              onClick={() => setShowdata(true)}  />
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
    getData("pengguna", (data) => {
      setRecords(data);
    });
  }, []);
  const handleFilter = (event) => {
    const newData = 
    event.target.value == ""
    ? getData("pengguna", (data) => setRecords(data))
    : records.filter((row) => {
      return (
        row.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase()) ||
        row.email.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setRecords(newData);
  }
  return (
    <>
    <div className="m-5 p-5 transition-all duration-500 ease-in-out">
      <Inputan placeholder="Nama Lengkap / email" className="rounded-lg outline-none ring-2 focus:ring-2 ring-orange-900 focus:ring-orange-400 px-12 py-1 bg-krempdrr absolute right-0" 
      onChange={handleFilter}
      />
      <h1 className="text-yellow-950 font-Latobold text-2xl capitalize mb-5">data pengguna website</h1>
      <DataTable className='font-Latobold text-xl transition-all duration-500' 
      columns={columns} data={records} pagination />
            <Button Fontclr="text-white" margin="mt-5" 
      onClick={() => setShowModal(true)}
      > <BiPlus className='absolute h-[20px] w-[20px] -translate-x-full translate-y-[10%]'></BiPlus> tambah admin / user</Button>
    </div>
    <Modal title="Tambah Admin / user" setShowModal={setShowModal} ShowModal={ShowModal}>
    <PenggunaForm />
    </Modal>
    <Data title="Update Admin / User" setShowdata={setShowdata} Showdata={Showdata}>
    {/* <MenuForm /> */}
    </Data>
    <Delete title="Delete Admin / User" setShowdel={setShowdel} Showdel={Showdel}>
    </Delete>
    </>
  )
}
