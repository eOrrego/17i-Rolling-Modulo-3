import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
// import Footer from '../components/Footer/Footer'
import NotFound from '../pages/NotFound';
import Details from '../pages/Details';
import PrivateRoutes from './PrivateRoutes';
import Admin from '../pages/Admin';

const PublicRoutes = () => {
  return (
    <>
      <Navbar title="Rolling Code <>" />
      {/* En react-router v5 Routes = Switch */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:name" element={<Details />} />
        <Route
          path="/admin"
          element={
            <PrivateRoutes>
              <Admin />
            </PrivateRoutes>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default PublicRoutes;
