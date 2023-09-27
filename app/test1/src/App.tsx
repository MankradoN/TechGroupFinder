import Layout from './Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Favourites from './components/pages/Favourites';

const App = () => (
  <Router>
    <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </Layout>
  </Router>
);
export default App;
