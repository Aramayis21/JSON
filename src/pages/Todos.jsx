import { useEffect } from "react"
import Load from "../Load"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchTodos } from "../store/Slices/todosSlice"


const Todos = () =>{
    const dispatch = useDispatch()
    const {load,todos} = useSelector((state) => state.todos)

    useEffect(() =>{
        dispatch(fetchTodos())
    },[])
    return (
        <div>
            <Link to={`/`}>HOME</Link>
            {
                load ? <Load/> :
                todos.map((e) =>{
                    return <p key={e.id}> {e.title}</p>
                })
            }
        </div>
    )
}

export default Todos