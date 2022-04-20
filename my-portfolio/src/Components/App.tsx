import { useState } from 'react'
import { HashRouter, Link, Navigate, Route, Routes } from 'react-router-dom'

// pages
import About from '../pages/About'
import Home from '../pages/Home'


function App() {
  const [cartIsEmpty] = useState(true)

  return (
    <div className="App">
      <HashRouter>
        <nav>
          <h1>The Ninja Clothing Company</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/test" element={(
            <div>
              <h2>Test Page</h2>
              <p>Hello</p>
            </div>
          )} />
          <Route path="/redirect" element={<Navigate to="/about" />} />
          <Route path="/checkout" element={cartIsEmpty ? <Navigate to="/products" /> : <p>checkout</p>} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App