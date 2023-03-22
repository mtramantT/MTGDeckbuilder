import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorPage, Nav } from '../UI';
import Layout from '../UI/Layouts/Layout';

interface Props {}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        {{
          navBar: (
            <Nav>
              <div>Portal-Logo</div>
              <div style={{ marginLeft: '16px', fontWeight: 'bold' }}>Decks</div>
              <div style={{ marginLeft: '16px', fontWeight: 'bold' }}>Viewer</div>
            </Nav>
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
