import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Index from './index.jsx';
import About from './components/About.jsx';
import GeneralPhysician from './components/GeneralPhysician.jsx';
import CareerPage from './components/CareerPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import NewsEventsPage from './components/NewsEventsPage.jsx';
import GalleryPage from './components/GalleryPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "generalPhysician",
        element: <GeneralPhysician />,
      },
      {
        path: "careers",
        element: <CareerPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "events",
        element: <NewsEventsPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);