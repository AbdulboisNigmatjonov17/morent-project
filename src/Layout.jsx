import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
const Layout = () => {
    return (
        <>
            <div className='Container'>
                <Navbar />
                <main>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout