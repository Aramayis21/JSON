import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'fetchPosts',
    async (_, {dispatch}) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return data
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState : {
        posts : [],
        load : false
    },
    reducers : {
        get_posts : (state,action) =>{
            state.posts = action.payload
        }
    },
    extraReducers : {
        [fetchPosts.pending] : (state,action) => {
            state.load = true
        },

        [fetchPosts.fulfilled] : (state,action) => {
            state.load = false
            state.posts = action.payload
        },
        [fetchPosts.rejected] : (state,action) => {
            
        }
    }
})

export default postsSlice.reducer