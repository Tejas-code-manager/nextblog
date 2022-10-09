import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import * as ls from "local-storage";

const initialState = {
    value: {
        token: ls.get("logToken"),
    }
}
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        register: async (state, action) => {

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
            state.value++
        },
        loginUser: async (state, action) => {
            // console.log(action)
            let transferData = action.payload;

            let headers = {
                'Content-Type': 'application/json',
            };
            // data: transferData

            // console.log("transferable data ==>", window)
            // console.log("Options ==>", options)
            // Send the form data to our forms API on Vercel and get a response.
            const response = await axios.post(process.env.API_URL + "login", action.payload, headers)
            const result = response.data;
            if (response.data.status == 1) {
                toast.success(response.data.message)
            } else {
                toast.error(response.data.message)
            }
            let tokenData = response.data.token;
            localStorage.setItem("logToken", tokenData)
            state.value.token = localStorage.getItem("logToken")
            // console.log(state.value.token)

        },
    }
})

export const { register, loginUser } = userSlice.actions
export default userSlice.reducer