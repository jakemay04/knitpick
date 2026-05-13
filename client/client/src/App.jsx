import './App.css'
import Sidebar from './components/Sidebar'
import Gallery from './components/Gallery'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />
      <Gallery />
    </div>
  )
}
