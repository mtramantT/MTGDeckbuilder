import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeBoundary } from './AppBoundaries';
import RouterBoundary from './AppBoundaries/RouterBoundary';
import { ErrorPage } from './UI';
import Layout from './UI/Layouts/Layout';
import NavBar from './UI/Layouts/NavBar';

function App() {
   return (
      <ThemeBoundary>
         <RouterBoundary>
            {{
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
            }}
         </RouterBoundary>
      </ThemeBoundary>
   );
}

export default App;
