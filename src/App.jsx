import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import ErrorPage from "./pages/error/ErrorPage"
import HomePage from "./pages/home/HomePage"
import CardPage from "./pages/products/CardPage"
import MainPage from "./pages/all-cards/MainPage"
import LikePage from "./pages/like/LikePage"
import RentCard from "./pages/rent/RentCard"
import SportType from "./components/filter-cards/types/SportType"
import SuvType from "./components/filter-cards/types/SuvType"
import SedanType from "./components/filter-cards/types/SedanType"
import HatchbakType from "./components/filter-cards/types/HatchbakType"
import People2 from './components/filter-cards/capacities/People2'
import People4 from './components/filter-cards/capacities/People4'
import People6 from './components/filter-cards/capacities/People6'
import CardCopy from "./components/cards/CardCopy"

const App = () => {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />
        },
        {
          path: 'card/:id',
          element: <CardPage />
        },
        {
          path: 'cards',
          element: <MainPage />,
          children: [
            {index: true, element: <CardCopy/>},
            { path: "sport-type", element: <SportType /> },
            { path: "sedan-type", element: <SedanType /> },
            { path: "suv-type", element: <SuvType /> },
            { path: "hatchback-type", element: <HatchbakType /> },
            { path: '2-people', element: <People2 /> },
            { path: '4-people', element: <People4 /> },
            { path: '6-people', element: <People6 /> },
          ]
        },
        {
          path: 'like',
          element: <LikePage />
        },
        {
          path: 'cardRent/:id',
          element: <RentCard />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App 