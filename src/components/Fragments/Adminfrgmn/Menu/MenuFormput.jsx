import { putData } from "../../../../services/api.services";
import Input from "../../../Elements/Input/index";
import Button from "../../../Elements/Button/index";
import { useEffect, useState } from "react";
export default function MenuFormput() {
  const [inputData, setInputData] = useState({
    id:"",
    name:"",
    Text:"",
    path:"",
  })
  const handleSubmit = (event) => {
    event.preventDefault();

    let data = new FormData(event.target);
    let newData = Object.fromEntries(data.entries());

    putData("menu", newData, (res) => {
      window.location.reload();
    });
  };
    //delet data
  useEffect(() => {
    putData("menu", (data) => {
      setRecords(data);
    })
  }, [])
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* <div className="space-y-3"> */}
      <Input type="number" id="id" name="id" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Fitur ke-"
      value={inputData.id}
      onChange={(e) => setInputData({...inputData, id: e.target.value})}></Input>

      <Input id="Text" name="Text" type="text" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr"  placeholder="Nama Fitur Baru"
      value={inputData.Text}
      onChange={(e) => setInputData({...inputData, Text: e.target.value})}></Input>
      
      <Input id="name" name="name" type="text" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr"  placeholder="Masukkan Kembali Nama Fitur Baru"
      value={inputData.name}
      onChange={(e) => setInputData({...inputData, name: e.target.value})}></Input>

      <Input placeholder="Url / path" id="path" name="path" type="text" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr"
      value={inputData.path}
      onChange={(e) => setInputData({...inputData, path: e.target.value})}
      ></Input>
      <Button
      tipe="submit">Ubah</Button>
      {/* </div> */}
    </form>
  )
}
