import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './components/connexion';
import Accueil from './components/accueil';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/connexion" element={<Connexion />} /> {/* Page de connexion */}
          <Route path="/accueil" element={<Accueil/>}/>{/* Page d'accueil */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
