import { useEffect } from "react"
import Load from "../Load"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchPosts } from "../store/Slices/postsSlic"
const Posts = ()=>{
    const dispatch = useDispatch()
    const {posts,load} = useSelector((state) => state.posts)
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            <Link to={`/`}>HOME</Link>
            {
                load ? <Load/> :
                posts.map((e)=>{
                   return <p key={e.id}>{e.title}</p>
                })
            }
        </div>
    )
}

export default Posts