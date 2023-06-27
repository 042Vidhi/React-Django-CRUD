
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import NotePage from './pages/NotePage';
import './App.css';
import AddModal from "./components/AddModal";


function App() {


  return (
    <Router>
    <div className="App">
          <Routes>
                 <Route exact path='/'  element={< Home />}></Route>
                 <Route exact path='/notes/create' element={<AddModal/>}></Route>
                 <Route exact path='/notes/:id' element={<NotePage/>}></Route>
          </Routes>
    </div>
    </Router>
  );
}

export default App;
