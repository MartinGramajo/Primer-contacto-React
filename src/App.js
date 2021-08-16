import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Header from './Components/Header'
import Article from './Components/Article';
import About from './Components/About';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="">
      <NavBar />
      <Header />
      <Article />
      <About />
      <Footer />
    </div>
  );
}

        export default App;
