import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../Components/Navbar"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default DefaultLayout