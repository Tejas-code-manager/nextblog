import Image from 'next/image'
import { Alert, Modal, Button, Dropdown, Avatar, Flowbite, DarkThemeToggle } from "flowbite-react";
// import styles from '../styles/Home.module.css'
import NavbarHeader from '../components/NavbarHeader';
// import FooterLayout from '../components/Footer';
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [Val, setVal] = useState("User");
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    getApiCall()
  }, [showModal]);

  async function getApiCall() {
    const uri = "http://localhost:3000/api/hello";
    const resp = await axios.post(uri);
    // console.log(resp.data.name)
    setVal(resp.data.name)
  }

  function opencloseModal() {
    setShowModal(!showModal)
  }

  return (

    <div>

      <NavbarHeader name="Jhon Doe"></NavbarHeader>
      <main className="">

      </main>

    </div>
  )
}
