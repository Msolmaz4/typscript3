import { Routes,Route} from 'react-router-dom'
import  { Container } from 'react-bootstrap'
import Store from './pages/Store'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './commponents/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCart'


function App() {
  

  return (
    <div >
      <ShoppingCartProvider>

      
      <Navbar/>
      <Container className='mb-4'>
      
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </Container>
      </ShoppingCartProvider>
    </div>
  )
}

export default App
