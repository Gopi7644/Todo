import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Profile from './components/Profile'
import Support from './components/Support'
import Layout from './Layout/Layout'
import Home from './components/Home'
import './App.css'
import Error from './Error'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/support',
          element: <Support />,
        },
        {
          path: '*',
          element: <Error />,
        },
      ],
    },
    
  ])  



  return <RouterProvider router={router}/>
}

export default App
