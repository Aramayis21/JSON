import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const fetchAlbums = createAsyncThunk(
    'fetchAlbums',
    async (_,{dispatch}) =>{
        const res = await fetch ('https://jsonplaceholder.typicode.com/albums')
        const data = await res.json()
        return data
    }
) 

const albumsSlice = createSlice({
    name : 'albumsSlice',
    initialState : {
        albums : [],
        load : false
    },
    reducers :{
        get_albums : (state,action) =>{
            state.albums = action.payload
        }
    },
    extraReducers : {
        [fetchAlbums.pending] : (state,action) =>{
            state.load = true
        },
        [fetchAlbums.fulfilled] : (state,action) =>{
            state.load = false
            state.albums = action.payload
        }
    }

})
export default albumsSlice.reducer
