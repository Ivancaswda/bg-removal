import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import BuyCredit from "./pages/BuyCredit.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {SignInButton} from "@clerk/clerk-react";
import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {


  return (
    <div className='min-h-screen bg-slate-50'>
        <Navbar/>
        <ToastContainer position='bottom-right'/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/result' element={<Result/>}/>
          <Route path='/buy' element={<BuyCredit/>} />
      </Routes>
        <Footer/>
    </div>
  )
}

export default App
