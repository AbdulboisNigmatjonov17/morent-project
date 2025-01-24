import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Card from './components/cards/card'
import PickUp from './components/PIck-Up/PickUp'

const Layout = () => {
    return (
        <>
            <div className='Container'>
                <Navbar />
                <main>
                    <Outlet />
                    <PickUp />
                    <Card />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout