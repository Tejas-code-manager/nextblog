import { createSlice } from '@reduxjs/toolkit'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';
import * as ls from "local-storage";

const userSlice = createSlice({
    name: "userSlice",
    initialState: { value: {} },
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

        },
        getUserData: async (state, action) => {
            // console.log(action)
            let transferData = action.payload.name;
            const response = await axios.post(process.env.API_URL + "userProfile", {
                //...data
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': localStorage.getItem("logToken"),
                }
            })
            const result = response.data;
            if (response.data.status == 1) {
                let userDatas = response.data.data;
                // console.log(userDatas.data)
                state.value = userDatas
                // console.log(state.value)
                toast.success(response.data.message)
            } else {
                state.value = {}
                toast.error(response.data.message)
            }

        },
    }
})

export const { register, loginUser, getUserData } = userSlice.actions
export default userSlice.reducer