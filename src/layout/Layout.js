import { Outlet } from "react-router-dom"
import DashboardHeader from "./header/DashboardHeader"
import Footer from "./Footer/Footer";


const Layout = () => {
    return(
        <>
        <DashboardHeader/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;