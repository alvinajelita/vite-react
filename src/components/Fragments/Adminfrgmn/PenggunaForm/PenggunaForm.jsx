import Input from "../../../Elements/Input/index";
import Button from "../../../Elements/Button/index";
import { useState } from "react";
import { postData } from "../../../../services/api.services";
import React from 'react'

export default function PenggunaForm() {
    const [inputData, setInputData] = useState({
        id:"",
        name:"",
        asal:"",
        email:"",
        password:"",
        role:"",
      })
      const handleSubmit = (event) => {
        event.preventDefault();
  
        let data = new FormData(event.target);
        let newData = Object.fromEntries(data.entries());
  
        postData("pengguna", newData, (res) => {
          window.location.reload();
        });
      };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input type="number" id="id" name="id" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="ID user / admin ke-"
      value={inputData.id}
      onChange={(e) => setInputData({...inputData, id: e.target.value})}></Input>

      <Input id="name" name="name" type="text" className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Nama Lengkap"
      value={inputData.name}
      onChange={(e) => setInputData({...inputData, name: e.target.value})}></Input>

      <Input className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Universitas"
      type="text" id="asal" name="asal"
      value={inputData.asal}
      onChange={(e) => setInputData({...inputData, asal: e.target.value})}></Input>

      <Input className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Masukkan Email"
      type="text" id="email" name="email"
      value={inputData.email}
      onChange={(e) => setInputData({...inputData, email: e.target.value})}></Input>

      <Input className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Password"
      type="text" id="password" name="password"
      value={inputData.password}
      onChange={(e) => setInputData({...inputData, password: e.target.value})}></Input>

      <Input className="rounded-lg outline-none ring-2 focus:ring-2 focus:ring-orange-400 px-10 py-1 bg-krempdrr" placeholder="Sebagai"
      type="text" id="role" name="role"
      value={inputData.role}
      onChange={(e) => setInputData({...inputData, role: e.target.value})}></Input>

      <Button
      tipe="submit">Tambah</Button>
    </form>
  )
}
