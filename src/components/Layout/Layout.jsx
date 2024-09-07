
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
  <div className='container mx-auto shadow-lg min-h-screen flex flex-col  justify-between'>
 <Header/>
    <Outlet />
    <Footer/>
  </div>


  )
}
