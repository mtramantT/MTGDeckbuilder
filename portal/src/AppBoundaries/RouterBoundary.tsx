// TODO - Add ReactNode to children to make it compatible with HTML. The path can be assumed here;

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

const RouterBoundary: React.FC<Props> = ({ children }: Props) => {
   if (isRouteGroup(children)) {
      const { root, routes } = children;
      const routesList = Array.isArray(routes) ? routes : [routes];
      return <RouterProvider router={createBrowserRouter([root, ...routesList])} />;
   }

   return <RouterProvider router={createBrowserRouter([children])} />;
};

// Helpers
const isRouteGroup = (val: any): val is RouteGroup =>
   isObject(val) && 'root' in val && 'routes' in val;

export default RouterBoundary;
