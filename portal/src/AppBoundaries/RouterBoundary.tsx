import React, { ReactNode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
                items: [
                  <div style={{ marginLeft: '16px', fontWeight: 'bold' }}>Decks</div>,
                  <div style={{ marginLeft: '16px', fontWeight: 'bold' }}>Viewer</div>,
                ],
              }}
            </NavBar>
          ),
          body: 'This should be the body',
        }}
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
]);

const RouterBoundary: React.FC<Props> = (props: Props) => {
  const {} = props;
  return <RouterProvider router={router} />;
};

export default RouterBoundary;
