/* eslint-disable react/prop-types */

import Footer from '../components/template/Footer';
import Header from '../components/template/Header';
import HomeContact from '../modules/home/HomeContact.jsx';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <HomeContact />
      <Footer />
    </>
  );
};

export default MainLayout;