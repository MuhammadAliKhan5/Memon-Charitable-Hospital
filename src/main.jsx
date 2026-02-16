import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Index from './index.jsx';
import About from './components/About.jsx';
import CareerPage from './components/CareerPage.jsx';
import ContactPage from './components/ContactPage.jsx';
import NewsEventsPage from './components/NewsEventsPage.jsx';
import GalleryPage from './components/GalleryPage.jsx';
import GeneralPhysician from './components/GeneralPhysician.jsx';
import GeneralSurgeon from './components/GeneralSurgeon.jsx';
import Gestroenterologist from './components/Gestroenterologist.jsx';
import Gynaecologist from './components/Gynaecologist.jsx';
import EyeSpecialist from './components/EyeSpecialist.jsx';
import Diabetologist from './components/Diabetologist.jsx';
import ChestPhysician from './components/ChestPhysician.jsx';
import Cardiologist from './components/Cardiologist.jsx';
import SkinSpecialist from './components/SkinSpecialist.jsx';
import OrthopedicSurgeon from './components/OrthopedicSurgeon.jsx';
import ChildSpecialist from './components/ChildSpecialist.jsx';
import ENTSpecialist from './components/ENTSpecialist.jsx';
import Urologist from './components/Urologist.jsx';
import Nephrologist from './components/Nephrologist.jsx';
import Physiotherapy from './components/Physiotherapy.jsx';
import Sonologist from './components/Sonologist.jsx';
import PlasticSurgeon from './components/PlasticSurgeon.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Index /> },
      { path: "about", element: <About /> },
      { path: "careers", element: <CareerPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "events", element: <NewsEventsPage /> },
      { path: "gallery", element: <GalleryPage /> },
      { path: "speciality/general-physician", element: <GeneralPhysician /> },
      { path: "speciality/general-surgeon", element: <GeneralSurgeon /> },
      { path: "speciality/gestroenterologist", element: <Gestroenterologist /> },
      { path: "speciality/gynaecologist", element: <Gynaecologist /> },
      { path: "speciality/eye-specialist", element: <EyeSpecialist /> },
      { path: "speciality/diabetologist", element: <Diabetologist /> },
      { path: "speciality/chest-physician", element: <ChestPhysician /> },
      { path: "speciality/cardiologist", element: <Cardiologist /> },
      { path: "speciality/skin-specialist", element: <SkinSpecialist /> },
      { path: "speciality/orthopedic-surgeon", element: <OrthopedicSurgeon /> },
      { path: "speciality/child-specialist", element: <ChildSpecialist /> },
      { path: "speciality/ent-specialist", element: <ENTSpecialist /> },
      { path: "speciality/urologist", element: <Urologist /> },
      { path: "speciality/nephrologist", element: <Nephrologist /> },
      { path: "speciality/physiotherapy", element: <Physiotherapy /> },
      { path: "speciality/sonologist", element: <Sonologist /> },
      { path: "speciality/plastic-surgeon", element: <PlasticSurgeon /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);