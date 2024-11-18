
import { Outlet } from 'react-router-dom'
import Hedar from '../component/Header'
import Footer from '../component/Footer'

const Layout = () => {
  return (
    <>
      <Hedar/>
      <div >
      <Outlet/>
      </div>
      <Footer/>
      

    </>
  )
}

export default Layout