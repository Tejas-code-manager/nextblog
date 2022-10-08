import Image from 'next/image'
import Link from 'next/link'
import { Alert, Modal, Button, Dropdown, Avatar, Flowbite, DarkThemeToggle } from "flowbite-react";
// import styles from '../styles/Home.module.css'
import NavbarHeader from '../components/NavbarHeader';
// import FooterLayout from '../components/Footer';
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';

export default function Home() {
    const router = useRouter()
    const [Val, setVal] = useState("User");
    const posts = [{ id: 1, title: "How to learn Javascript", slug: "How-to-learn-Javascript--63hu84neb6" }, { id: 2, title: "How to learn C++", slug: "How-to-learn-C++--069uriw94762" },
    { id: 3, title: "How to learn Python", slug: "How-to-learn-Javascript--63hu84neb6" }, { id: 4, title: "How to learn Redux", slug: "How-to-learn-Redux--86fn8432kl43" }];

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

            <NavbarHeader routed={"about"}></NavbarHeader>
            <main className="grid h-screen place-items-center">
                <div>
                    <h1>This about page!</h1>
                </div>
            </main>
        </div>
    )
}
