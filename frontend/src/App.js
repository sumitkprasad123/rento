
import { Box } from '@chakra-ui/react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Allroutes from './pages/Allroutes';

function App() {
  return (
    <Box className="App" bg={"#FFFAF0"}>
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </Box>
  );
}

export default App;
