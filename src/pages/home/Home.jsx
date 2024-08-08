import React from 'react';
import "./home.css";


 import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
 import Footer from "../../components/footer/Footer";
 import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
 import Navbar from "../../components/navbar/Navbar";
import Featured from '../../components/featured/Featured';
import PropertyList from "../../components/propertyList/PropertyList";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
      </div>
  );
 }

export default Home;


