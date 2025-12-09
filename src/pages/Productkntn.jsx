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
import ProdukForm from "../components/Fragments/Adminfrgmn/ProdukForm/ProdukForm";
// import { data } from "autoprefixer";
export default function Productkntn() {
  const [records, setRecords] = useState ([]);
  const [ShowModal, setShowModal] = useState(false);
  const [Showdata, setShowdata] = useState(false);
  const [Showdel, setShowdel] = useState(false);

  const columns = [
    {
      name : 'ID Produk',
      selector : (row) => row.id,
      sortable: true,
    },
    {
      name : 'Jenis Produk',
      selector : (row) => row.name,
      sortable: true,
    },
    {
      name : 'Produk Pembelajaran',
      selector : (row) => row.produk,
      sortable: true,
    },
    {
      name : 'Laman',
      selector : (row) => row.bagian,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <div className="flex gap-7">
            <Button hoverBg="hover:bg-none" Bgcolor="bg-none" Ukuran="py-2 px-0">
              <BiEdit className="w-[18px] hover:text-oren text-orange-900 h-[18px]"
              onClick={() => setShowdata(true)} />
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
    getData("product", (data) => {
      setRecords(data);
    });
  }, []);
  const handleFilter = (event) => {
    const newData = 
    event.target.value == ""
    ? getData("product", (data) => setRecords(data))
    : records.filter((row) => {
      return (
        row.produk
        .toLowerCase()
        .includes(event.target.value.toLowerCase()) ||
        row.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setRecords(newData);
  }
  return (
    <>
    <div className="m-5 p-5 transition-all ease-in-out duration-500">
      <Inputan placeholder="cari produk / jenisnya" className="rounded-lg outline-none ring-2 focus:ring-2 ring-orange-900 focus:ring-orange-400 px-10 py-1 bg-krempdrr absolute right-0"
      onChange={handleFilter}
      />
      <h1 className="text-yellow-950 font-Latobold text-2xl capitalize mb-5">Kumpulan produk</h1>
      <p className="font-Latobold text-xl">
      <DataTable className='font-Latobold text-xl transition-all duration-500' 
      columns={columns} data={records} pagination />
      </p>
      <Button Fontclr="text-white" margin="mt-5"
      onClick={() => setShowModal(true)}
      > <BiPlus className='absolute h-[20px] w-[20px] -translate-x-full translate-y-[10%]'></BiPlus> tambah produk</Button>
    </div>
    <Modal title="Tambah Produk" setShowModal={setShowModal} ShowModal={ShowModal}>
      <ProdukForm />
    </Modal>
    <Data title="Update Produk Pembelajaran" setShowdata={setShowdata} Showdata={Showdata}>
    {/* <MenuForm /> */}
    </Data>
    <Delete title="Delete Produk Pembelajaran" setShowdel={setShowdel} Showdel={Showdel}>
    </Delete>
    </>
  )
}
