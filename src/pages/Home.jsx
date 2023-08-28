import s from './Home.module.css'
import { Link } from "react-router-dom"


const Home = ()=>{
    return(
        <div className={s.home}>
            <button><Link style={{textDecoration:'none'}} to={`/Posts`}>POSTS</Link></button>
            <button><Link style={{textDecoration:'none'}} to={`/Comments`}>COMMENTS</Link></button>
            <button><Link style={{textDecoration:'none'}} to={`/Albums`}>ALBUMS</Link></button>
            <button><Link style={{textDecoration:'none'}} to={`/Photos`}>PHOTOS</Link></button>
            <button><Link style={{textDecoration:'none'}} to={`/Todos`}>TODOS</Link></button>
        </div>
    )
}


export default Home