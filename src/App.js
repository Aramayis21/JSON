import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Comments from './pages/Comments';
import Posts from './pages/Posts';
import Albums from './pages/Albums';
import Photos from './pages/Photos';
import Todos from './pages/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/Posts' element={<Posts/>}/>
         <Route path='/Comments' element={<Comments/>}/>
        <Route path='/Albums' element={<Albums/>} />
        <Route path='/Photos' element={<Photos/>} />
        <Route path='/Todos' element={<Todos/>}/>
      </Routes>
    </div>
  );
}

export default App;
