import React, { ReactNode } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ErrorPage, Nav } from '../UI';
import Layout from '../UI/Layouts/Layout';
import NavBar from '../UI/Layouts/NavBar';

interface Props {
  children?: ReactNode;
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        {{
          navBar: (
            <NavBar>
              {{
                logo: <div>Portal-Logo</div>,
                items: ['Decks', 'Viewer'],
              }}
            </NavBar>
          ),
          body: (
            <div>
              <Outlet />
            </div>
          ),
        }}
      </Layout>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/Decks/',
        element: <div style={{ color: 'lightblue' }}>New Body</div>,
      },
    ],
  },
]);

const RouterBoundary: React.FC<Props> = (props: Props) => {
  const {} = props;
  return <RouterProvider router={router} />;
};

export default RouterBoundary;
