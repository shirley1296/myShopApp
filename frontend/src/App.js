import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
 

// arrow function
const App = () => {
  return (
    <>
    <Header/>
  <main>
    <Container>
   <h1>Welcome to my shop</h1> 
   </Container>

   </main>
  <Footer/>
    </>
  );

}
export default App;
