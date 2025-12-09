import Input from "../../../Elements/Input/index";
import Button from "../../../Elements/Button/index";
import { useState } from "react";
import { postData } from "../../../../services/api.services";

export default function ProdukForm() {
    const [inputData, setInputData] = useState({
        id:"",
        name:"",
        produk:"",
        bagian:"",
      })
      const handleSubmit = (event) => {
        event.preventDefault();
  
        let data = new FormData(event.target);
        let newData = Object.fromEntries(data.entries());
  
        postData("product", newData, (res) => {
          window.location.reload();
        });
      };
  return (
    <form onSubmit={handleSubmit} className="space-y-3" >
      <Input type="number" id="id" name="id" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Produk ke-"
      value={inputData.id}
      onChange={(e) => setInputData({...inputData, id: e.target.value})}></Input>

      <Input type="text" id="name" name="name" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Jenis Produk"
      value={inputData.name}
      onChange={(e) => setInputData({...inputData, name: e.target.value})}></Input>

      <Input type="text" id="produk" name="produk" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Produk Pembelajaran"
      value={inputData.produk}
      onChange={(e) => setInputData({...inputData, produk: e.target.value})}></Input>

      <Input type="text" id="bagian" name="bagian" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Laman"
      value={inputData.bagian}
      onChange={(e) => setInputData({...inputData, bagian: e.target.value})}></Input>

      <Button
      tipe="submit">Tambah</Button>
    </form>
  )
}
