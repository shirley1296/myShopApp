import {Container} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from './components/Header';
import Homescreen from "./screen/Homescreen";
import ProductScreen from './screen/ProductScreen';
 // arrow function
const App = () => {
  return (
  <>
  <Router>
   <Header />
   <main className='py-3'>
     <Container>
     <Routes>
       <Route path='/' element={<Homescreen />} exact />
       <Route path='/product/:id' element={<ProductScreen/>} />
     </Routes>
   </Container>
  </main>
   <Footer />
   </Router>
   </>
  );
}
export default App;
