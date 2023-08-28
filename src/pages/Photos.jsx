import { useEffect } from "react"
import Load from "../Load"
import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { fetchPhotos } from "../store/Slices/photosSlice"

const Photos = () =>{
    const dispatch = useDispatch()
    const {load,photos} = useSelector((state) => state.photos)

    useEffect(() =>{
        dispatch(fetchPhotos())
    },[])
    return (
        <div>
            <Link to={`/`}>HOME</Link>
            {
                load ? <Load/> :
                photos.map((e) =>{
                    return <p key={e.id}>{e.title}</p>
                })
            }
        </div>
    )
}


export default Photos