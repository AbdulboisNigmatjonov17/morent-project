import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
// import Card from './components/cards/card'

const Layout = () => {
    return (
        <>
            <div className='Container flex flex-col gap-10'>
                <Navbar />
                <main>
                    <Outlet />
                    {/* <Card /> */}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout