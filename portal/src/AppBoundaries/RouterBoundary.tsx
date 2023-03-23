import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { isObject } from '../types';

interface Props {
   children: RouteObject | RouteGroup;
}

interface RouteGroup {
   root: RouteObject;
   routes: RouteObject | RouteObject[];
}

const RouterBoundary: React.FC<Props> = (props: Props) => {
   const { children } = props;

   if (isRouteGroup(children)) {
      const { root, routes } = children;
      const routerList = [root];

      if (Array.isArray(routes)) {
         routes.forEach((route) => routerList.push(route));
      } else {
         routerList.push(routes);
      }

      return <RouterProvider router={createBrowserRouter(routerList)} />;
   }

   return <RouterProvider router={createBrowserRouter([children])} />;
};

// Helpers
const isRouteGroup = (val: any): val is RouteGroup => isObject(val) && 'root' in val;

export default RouterBoundary;
