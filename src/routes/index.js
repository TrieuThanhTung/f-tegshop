import Signup from '../pages/SignUp'
import Login from '../pages/Login';
import ConfirmRegistration from '../pages/ConfirmRegistration';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Category from '../pages/Category';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';

const publicRoutes = [
  {path: '/', component: Home},
  {path: '/signup', component: Signup},
  {path: '/login', component: Login},
  {path: '/verify-register', component: ConfirmRegistration},
  {path: '/product', component: Product},
  {path: '/category/:category', component: Category},
  {path: '/cart', component: Cart},
];

const privateRoutes = [
  {path: '/profile', component: Profile}
]

export {publicRoutes, privateRoutes};