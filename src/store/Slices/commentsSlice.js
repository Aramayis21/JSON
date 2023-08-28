import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchComm = createAsyncThunk(
    'fetchComm',
    async (_, {dispatch}) =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await res.json()
        return data
    }
)

const commentsSlice = createSlice({
    name : 'commentsSlice',
    initialState : {
        comments : [],
        load : false
    },
    reducers : {
        get_comments : (state,action) =>{
            state.comments = action.payload
        }
    },
    extraReducers : {
        [fetchComm.pending] : (state,action) =>{
            state.load = true
        } ,
        [fetchComm.fulfilled] : (state,action) =>{
            state.load = false
            state.comments = action.payload
        },
        [fetchComm.rejected] : (state,action) => {
            
        }
    }
})

export const {get_comments} = commentsSlice.actions
export default commentsSlice.reducer