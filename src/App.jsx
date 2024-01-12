import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/SignUp'
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/login',
      element: <Login />
    }
  ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
