import { useEffect } from "react"
import Load from "../Load"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchComm } from "../store/Slices/commentsSlice"



const Comments = ()=>{
    const dispatch = useDispatch()
    const {comments,load} =  useSelector((state) => state.comments)
    useEffect(()=>{
        dispatch(fetchComm())
    },[])
    return (
        <div>
            <Link to={`/`}>HOME</Link>

            {   
             load ? <Load/> :
                comments.map((e)=> {
                    return <p key={e.id}>{e.name}</p>
                })
            }
        </div>
    )
}

export default Comments