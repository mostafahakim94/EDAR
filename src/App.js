import './App.scss';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import Contact from './pages/contact/Contact';
// import Intro from './components/intro/Intro';
function App() {
  return (
    <div className='app'>
      <Navbar />
      {/* <Intro /> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
