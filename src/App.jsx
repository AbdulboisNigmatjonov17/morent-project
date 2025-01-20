import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import ErrorPage from "./pages/error/ErrorPage"
import HomePage from "./pages/home/HomePage"

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
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App 