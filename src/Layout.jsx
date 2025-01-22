import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/card'
const Layout = () => {
    return (
        <>
            <div className='Container'>
                <Navbar />
                <main>
                    <Outlet />
                    <Card />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout