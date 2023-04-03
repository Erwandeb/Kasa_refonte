import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/Notfound/NotFound';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LogementDetails from './pages/logementDetails/LogementDetails';

function App() {

  const handleLogementDetails = (props) => {
    console.log("hello")
    const logementId = props.match.params.id;
    return <h1>{logementId}test</h1>;
/*     console.log(props.match.params.id);
    if (!logementId) {
      return <NotFound />;
    } else {
      return <LogementDetails {...props} />;
    } */
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" component={handleLogementDetails}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;