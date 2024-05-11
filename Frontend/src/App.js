import logo from './logo.svg';
import img1 from './pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg'
import Button from 'react-bootstrap/Button';
import { Card, Row, Col } from 'react-bootstrap';

import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import TopNav from './TopNav';
import './App.css';
import Crossfade from './Crossfade';
import CardView from './CardView';


function App() {

  return (
    <div className="App">
      <TopNav/>
      <Crossfade/>
      <CardView/>


    </div>
  );
}

export default App;
