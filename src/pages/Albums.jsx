import { useEffect } from "react"
import Load from "../Load"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchAlbums } from "../store/Slices/albumsSlice"


const Albums = () =>{
    const dispatch = useDispatch()
    const {albums,load} = useSelector((state) => state.albums)
    useEffect(() =>{
        dispatch(fetchAlbums())
    },[])
    return (
        <div>
            <Link to={`/`}>HOME</Link>
            {
                load ? <Load/> :
                albums.map((e) =>{
                    return <p key={e.id}>{e.title}</p>
                })
            }
        </div>
    )
}

export default Albums