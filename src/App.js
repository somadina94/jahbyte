import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import Layout from './components/layout/Layout';
import Home from './components/body/Home';
import About from './components/body/About';
import Projects from './components/body/Projects';
import Cert from './components/body/Cert';
import ContactUs from './components/body/ContactUs';
import ErrorModal from './components/UI/ErrorModal';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorModal />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="projects" element={<Projects />} />
      <Route path="certifications" element={<Cert />} />
      <Route path="contact-jahbyte" element={<ContactUs />} />
    </Route>
  )
);

function App() {
  return (
    <div className="background">
      <RouterProvider router={router} />
      <TawkMessengerReact propertyId="643012464247f20fefea5d26" widgetId="1gtdseqgd" />
    </div>
  );
}

export default App;
