import { createSlice } from '@reduxjs/toolkit'
const initialState = { value: 0 }
const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducer: {
        register(state, action) {
            state.value++
        },
    }
})

export const { register } = userSlice.actions
export default userSlice.reducer