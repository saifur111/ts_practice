import {configureStore} from "@reduxjs/toolkit"
import todoSlices from "../features/todoSlices"
import profileSlices from "../features/profileSlices"

export const store =configureStore({

    reducer : {
        profile: profileSlices,
        todos:todoSlices,
    }
        

}) 