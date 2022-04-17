import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Award from './pages/Award';
import Post from './pages/Post';
import PostDetails from './pages/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/award" element={<Award />} />
        <Route path='/:data' element={<Post />} />
        <Route path='/details/:data' element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
