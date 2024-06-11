import type { RouteObject } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

export const routes = [
  {
    path: '/',
    element: <div className="trapezoid"></div>
    ,
  },
  {
    path: '/404',
    lazy: () => import('./pages/404'),
  },
  {
    path: '*',
    lazy: () => import('./pages/404'),
  },
] satisfies [RouteObject, ...RouteObject[]];

export const router = createBrowserRouter(routes, {
  future: {
    v7_normalizeFormMethod: true,
  },
});
