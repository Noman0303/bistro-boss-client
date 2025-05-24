import React from 'react'
import Banner from '../Banner/banner';
import Category from '../Category/Category';
import Banner2 from '../Banner/Banner2';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';
import CallUsSection from '../CallUsSection/CallUsSection';
import ChefRecommends from '../ChefRecommends/ChefRecommends';

import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      <CallUsSection></CallUsSection>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home;