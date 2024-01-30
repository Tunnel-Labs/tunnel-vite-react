import { useState } from 'react'
import { TunnelToolbar } from '@tunnel/react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {(
        import.meta.env.NODE_ENV !== "development" 
        // Uncomment the following line to disable the Tunnel Toolbar in production
        // && process.env.RAILWAY_GIT_BRANCH !== 'main'
        ) && (
        <TunnelToolbar 
          projectId={import.meta.env.VITE_TUNNEL_PROJECT_ID}
          branch={import.meta.env.RAILWAY_GIT_BRANCH}
        />
      )}
    </>
  )
}

export default App
