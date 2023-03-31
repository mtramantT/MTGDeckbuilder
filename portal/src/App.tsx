import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeBoundary } from './AppBoundaries';
import RouterBoundary from './AppBoundaries/RouterBoundary';
import CardSearch from './components/CardSearch/CardSearch';
import { ErrorPage } from './UI';
import Layout from './UI/layouts/Layout';
import NavBar from './UI/layouts/NavBar';

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
                     element: <CardSearch>New Deck +</CardSearch>,
                  },
                  {
                     path: '/Viewer/',
                     element: <h1>Hello World</h1>,
                  },
               ],
            }}
         </RouterBoundary>
      </ThemeBoundary>
   );
}

export default App;
