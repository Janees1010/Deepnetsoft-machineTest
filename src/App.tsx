
import './App.css'
import AboutBanner from './components/About';
import ButtonBanner from './components/ButtonContainer';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import MenuPreview from './components/MenuCard';

function App() {

  return (
    <>
     
      <Header />
      <Home />
      <ButtonBanner />
      <MenuPreview/>
      <AboutBanner />
      <Footer/>
    
    </>
  )
}

export default App
