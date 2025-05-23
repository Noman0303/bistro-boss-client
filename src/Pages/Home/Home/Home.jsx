import React from 'react'
import Banner from '../Banner/banner';
import Category from '../Category/Category';
import Banner2 from '../Banner/Banner2';
import PopularMenu from '../PopularMenu/PopularMenu';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Banner2></Banner2>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home;