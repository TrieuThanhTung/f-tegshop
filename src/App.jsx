import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/SignUp'
import Login from './pages/Login';
import ConfirmRegistration from './pages/ConfirmRegistration';
import Home from './pages/Home';
import Product from './pages/Product';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout>
        <Home />
      </DefaultLayout>
    },
    {
      path: "/product",
      element: <DefaultLayout>
        <Product />
      </DefaultLayout>
    },
    {
      path: "/signup",
      element: <DefaultLayout>
        <Signup />
      </DefaultLayout>
    },
    {
      path: "/login",
      element: <DefaultLayout>
        <Login />
      </DefaultLayout>
    },
    {
      path: "/verify-register",
      element: <ConfirmRegistration />
    }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
