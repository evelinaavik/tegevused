import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Tegevused from './pages/Tegevused';
import TagasisideAndjad from './pages/TagasisideAndjad';
import TagasiSide from './pages/TagasiSide';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasiside</button>
      </Link>
      <Link to="/andjad">
        <button>Tagasiside andjad</button>
      </Link>
      <Link to="/tegevused">
        <button>Vaata veel tegevusi</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere</div>}></Route>
        <Route path="/tagasiside" exact element={<TagasiSide></TagasiSide>}></Route>
        <Route path="/andjad" exact element={<TagasisideAndjad></TagasisideAndjad>}></Route>
        <Route path="/tegevused" exact element={<Tegevused></Tegevused>}></Route>
      </Routes>
    </div>
  );
}

export default App;
