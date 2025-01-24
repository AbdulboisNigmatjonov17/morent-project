import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import ErrorPage from "./pages/error/ErrorPage"
import HomePage from "./pages/home/HomePage"
import CardPage from "./pages/products/CardPage"

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
          path: `/card`,
          element: <CardPage/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App 