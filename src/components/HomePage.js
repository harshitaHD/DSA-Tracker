import React from 'react'
import SideNav from './SideNav';
import '../assets/css/HomePage.css';

export default function HomePage() {
  return (
    <div className='homepage'>
      <SideNav />
      <div className='home-div'>HomePage</div>
    </div>
  )
}
