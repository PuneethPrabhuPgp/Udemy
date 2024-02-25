import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../App';
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
import Body from '../components/Body';
import RestaurantMenu from '../components/RestaurantMenu';


const appRouter = createBrowserRouter([
  {
    path: "/", element: <AppLayout />,
    children: [
      {
        path: '/', element: <Body />
      },
      {
        path: "/about", element: <About />
      },
      {
        path: "/contact", element: <Contact />
      }
    ],
    errorElement: <Error />
  },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu />
  }

]);

export default appRouter;
