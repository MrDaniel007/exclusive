import './App.css'
import { RouterProvider } from 'react-router-dom'
import myRouter from "./router"
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {

  return (
    <>
    <div className='wrapper'>
   <RouterProvider router={myRouter}/>
    </div>
    </>
  )
}

export default App
