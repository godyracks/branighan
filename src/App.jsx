import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4 mb-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16 w-16 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16 w-16 hover:scale-110 transition-transform animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Vite + React</h1>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="font-mono text-gray-800">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-4 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-600 mb-4">About Page</h1>
      <p className="text-gray-600">This is the About page, styled with Tailwind CSS.</p>
    </div>
  )
}

function App() {
  return (
    <div className="p-4">
      <nav className="mb-6">
        <Link to="/" className="mr-4 text-blue-500 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-500 hover:underline">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App