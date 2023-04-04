import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/Notfound/NotFound';
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import LogementDetails from './pages/logementDetails/LogementDetails';

function App() {

  const HandleLogementDetails = (props) => {
    const logementId = useParams();
    if (!logementId) {
      return <NotFound />;
    } else {
      return <LogementDetails {...props} />;
    } 
  };

  return (
    <div className="App"> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<HandleLogementDetails />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;