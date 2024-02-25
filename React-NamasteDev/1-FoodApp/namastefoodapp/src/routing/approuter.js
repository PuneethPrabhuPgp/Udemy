import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../App';
import Error from '../components/Error';
import Body from '../components/Body';
import RestaurantMenu from '../components/RestaurantMenu';
import { lazy, Suspense } from 'react';
import Shimmer from '../components/Shimmer';

const About = lazy(() => import("../components/About"));
const Contact = lazy(() => import("../components/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/", element: <AppLayout />,
    children: [
      {
        path: '/', element: <Body />
      },
      {
        path: "/about",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
      },
      {
        path: "/contact",
        element:
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }

]);

export default appRouter;
