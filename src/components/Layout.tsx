import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import FooterSection from "./FooterSection"

const Layout = () => {
  return (
    <div className="bg-white relative">
      <Navbar />
      <Outlet />
      <FooterSection />
    </div>
  )
}

export default Layout
