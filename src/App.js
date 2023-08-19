import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroSection from './sections/hero_section/HeroSection';
import LastSection from './sections/last_section/LastSection';
import Section2 from './sections/section2/Section2';
import Section3 from './sections/section3/Section3';

function App() {
  return (
    <div id='app'>
      <HeroSection />
      <Section2 />
      <Section3 />
      <LastSection/>
      <Footer/>
    </div>
  );
}

export default App;
