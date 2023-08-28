import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPhotos = createAsyncThunk(
    'fetchPhotos',
    async (_, {dispatch}) =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        return data
    }
)




const photosSlice = createSlice({
    name : 'photosSlice',
    initialState :{
        photos : [],
        load : false
    },
    reducers : {
        get_photos : (state,action) =>{
            state.photos = action.payload
        }
    },
    extraReducers : {
        [fetchPhotos.pending] : (state,action) =>{
            state.load = true
        },
        [fetchPhotos.fulfilled] : (state,action) =>{
            state.load = false
            state.photos = action.payload
        }
    }
})

export default photosSlice.reducer