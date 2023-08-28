import {configureStore} from "@reduxjs/toolkit"
import postsSlic from "./Slices/postsSlic"
import commentsSlice from "./Slices/commentsSlice"
import albumsSlice from "./Slices/albumsSlice"
import photosSlice from "./Slices/photosSlice"
import todosSlice from "./Slices/todosSlice"
const store = configureStore({
    reducer : {
        posts : postsSlic,
        comments : commentsSlice,
        albums : albumsSlice,
        photos : photosSlice,
        todos : todosSlice
    }
})

export default store