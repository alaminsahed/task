import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Award from './pages/Award';
import ReactPost from './pages/ReactPost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/award" element={<Award />} />
        <Route path='/react' element={<ReactPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
