import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './pages/NavBar';
import Template from './routes/Template';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Template />
      </BrowserRouter>
    </>
  )
}

export default App
