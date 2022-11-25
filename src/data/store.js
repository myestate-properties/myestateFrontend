import { configureStore } from "@reduxjs/toolkit"
import { userSlice } from "../features/User/UserSlice"
export default configuresStore({
    reducer: {
        user: userSlice.reducer
    }
})



