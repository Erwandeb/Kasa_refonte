import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/Notfound/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogementDetails from './pages/logementDetails/LogementDetails';

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<LogementDetails  />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;