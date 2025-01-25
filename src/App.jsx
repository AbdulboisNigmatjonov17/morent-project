import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import ErrorPage from "./pages/error/ErrorPage"
import HomePage from "./pages/home/HomePage"
import CardPage from "./pages/products/CardPage"
import MainPage from "./pages/all-cards/MainPage"
import LikePage from "./pages/like/LikePage"
import RentCard from "./pages/rent/RentCard"

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <HomePage/>
        },
        {
          path: '/card/:id',
          element: <CardPage/>
        },
        {
          path: '/cards',
          element: <MainPage/>
        },
        {
          path: 'like',
          element: <LikePage/>
        },
        {
          path: 'cardRent/:id',
          element: <RentCard/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App 