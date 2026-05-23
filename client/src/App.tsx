import './App.css'
import Dashboard from './components/Dashboard/Dashboard'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='container'>
      {/* nav bar */}
      <Navbar/>

      {/* Dashboard */} 
      <Dashboard />
    </div>
  )
}

export default App
