import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <h1>Authentic Kid Skills Virtual Reality</h1>
      <Scene>
        <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity particle-system={{preset: 'snow'}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
      </Scene>

      </div>

  )
}

export default App
