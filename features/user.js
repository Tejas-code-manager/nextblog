import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
    value: {
        // token: localStorage.getItem("logToken") ? localStorage.getItem("logToken") : "",

    }
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        register: async (state, action) => {
            console.log(action)
            let transferData = action.payload;

            let headers = {
                'Content-Type': 'application/json',
            };
            // data: transferData

            // console.log("transferable data ==>", window)
            // console.log("Options ==>", options)
            // Send the form data to our forms API on Vercel and get a response.
            const response = await axios.post(process.env.API_URL + "register", action.payload, headers)
            // const result = await response.json()
            if (response.data.status == 1) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
            console.log(response)

            // <Toaster></Toaster>
            state.value++
            // return response;
        },
        login: async (state, action) => {
            console.log(action)
            let transferData = action.payload;

            let headers = {
                'Content-Type': 'application/json',
            };
            // data: transferData

            // console.log("transferable data ==>", window)
            // console.log("Options ==>", options)
            // Send the form data to our forms API on Vercel and get a response.
            const response = await axios.post(process.env.API_URL + "login", action.payload, headers)
            const result = response.data.data.
                console.log(response)
            localStorage.setItem("logToken",)
            state.value++
        },
    }
})

export const { register, login } = userSlice.actions
export default userSlice.reducer