import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from './components/connexion';
import Accueil from './components/accueil';
import Inscription from './components/inscription';
import Ajout from './components/ajout';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/connexion" element={<Connexion />} /> {/* Page de connexion */}
          <Route path="/inscription" element={<Inscription/>}/>{/* Page d'inscription */}
          <Route path="/accueil" element={<Accueil/>}/>{/* Page d'accueil */}
          <Route path="/ajout" element={<Ajout/>}/>{/* Page d'ajout */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
