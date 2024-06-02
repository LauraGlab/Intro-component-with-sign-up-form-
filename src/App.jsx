import { useState } from 'react'

import SectionOne from "./jsx/SectionOne.jsx";
import SectionTwo from "./jsx/SectionTwo.jsx";

import './styles/App.css'


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <SectionOne/>
        <SectionTwo/>
      </main>
    </>
  );
}

export default App
