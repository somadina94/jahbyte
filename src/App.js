import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Fragment } from 'react';

import Layout from './components/layout/Layout';
import Home from './components/body/Home';
import About from './components/body/About';
import Projects from './components/body/Projects';
import Cert from './components/body/Cert';
import ContactUs from './components/body/ContactUs';
import ErrorModal from './components/UI/ErrorModal';
import Advert from './components/UI/Advert';
import ExTrackPrivacyPolicy from './components/body/ExTrackPrivacyPolicy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="certifications" element={<Cert />} />
      <Route path="contact-jahbyte" element={<ContactUs />} />
      <Route path="ad" element={<Advert />} />
      <Route path="extrack-privacy-policy" element={<ExTrackPrivacyPolicy />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={router} />
    </Fragment>
  );
}

export default App;
