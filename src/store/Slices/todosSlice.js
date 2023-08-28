import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const fetchTodos = createAsyncThunk(
    'fetchTodos',
    async (_, {dispatch}) =>{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos') 
        const data = await res.json()
        return data
    }
)

const todosSlice = createSlice ({
    name :'todosSlice',
    initialState : {
        todos : [],
        load : false
    },
    reducers : {
        get_todos : (state,action) =>{
            state.todos = action.payload
        }
    },
    extraReducers :{
        [fetchTodos.pending] : (state,action) =>{
            state.load = true
        },
        [fetchTodos.fulfilled] : (state,action) =>{
            state.load = false
            state.todos = action.payload
        }
    }
})

export default todosSlice.reducer 