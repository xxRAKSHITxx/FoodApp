import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import './Home.css';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'>

      <div><Card/></div>
      </div>
      <div><Footer /></div>
      
    </div>

  )
}





