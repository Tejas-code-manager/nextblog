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

      <NavbarHeader name={Val}></NavbarHeader>
      <main className="grid h-screen place-items-center">
        {posts.map((postData) => (

          <div class="max-w-3xl mt-9 px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800" key={postData.id}>
            <div class="flex items-center justify-between">
              <span class="text-sm font-light text-gray-600 dark:text-gray-400">Mar 10, 2019</span>
              <a class="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Design</a>
            </div>

            <div class="mt-2">
              <Link href={'/post/' + postData.slug} ><a class="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{postData.title}</a></Link>
              <p class="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
            </div>

            <div class="flex items-center justify-between mt-4">
              <a href="#" class="text-blue-600 dark:text-blue-400 hover:underline">Read more</a>

              <div class="flex items-center">
                <img class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block" src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80" alt="avatar" />
                <a class="font-bold text-gray-700 cursor-pointer dark:text-gray-200">Khatab wedaa</a>
              </div>
            </div>
          </div>

        ))}
      </main>
    </div>
  )
}
