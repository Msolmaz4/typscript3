import { Routes,Route} from 'react-router-dom'
import  { Container } from 'react-bootstrap'
import Store from './pages/Store'
import About from './pages/About'
import Home from './pages/Home'


function App() {
  

  return (
    <div className="App">
      <Container>
      <h2>hallo</h2>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </Container>
      
    </div>
  )
}

export default App
