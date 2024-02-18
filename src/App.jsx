import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import { publicRoutes, privateRoutes } from './routes';
import { useAuth } from './hooks/AuthContext';


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <DefaultLayout>
  //       <Home />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/product",
  //     element: <DefaultLayout>
  //       <Product />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/category/:category",
  //     element: <DefaultLayout>
  //       <Category />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/cart",
  //     element: <DefaultLayout>
  //       <Cart />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/profile",
  //     element: <DefaultLayout>
  //       <Profile />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/signup",
  //     element: <DefaultLayout>
  //       <Signup />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/login",
  //     element: <DefaultLayout>
  //       <Login />
  //     </DefaultLayout>
  //   },
  //   {
  //     path: "/verify-register",
  //     element: <ConfirmRegistration />
  //   },
  // ]);
  const {isLoggedIn} = useAuth();
  return (
    // <RouterProvider router={router} />
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route key={index}
              path={route.path}
              element={<DefaultLayout><Page /></DefaultLayout>}
            />
          )
        })}
        {privateRoutes.map((route, index) => {
          const Page = route.component;
          return (
            <Route key={index}
              path={route.path}
              element={isLoggedIn ? <DefaultLayout><Page /></DefaultLayout> : <Navigate to={'/login'}/>}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
