import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import User from './components/User';
import AddUser from './components/AddUser';
import More from './components/More';
import Delete from './components/Delete';
import Footer from './components/Footer';
import ErrorPage from './components/ErrorPage';

import './style/App.css';

const App = () => {

  return (
    <div className="App">
      <Router>
        <nav>
          <Navigation />
        </nav>

        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/adduser/:user" element={ <User /> } />
            <Route path="/more/:user" element={ <More /> } />
            <Route path="/adduser" element={ <AddUser /> } />
            <Route path="/delete" element={ <Delete /> } />
            <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </Router>
      
    </div>
  );
};

export default App;
