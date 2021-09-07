import './App.css';
import Navigation from './Navigation/Navigation';
import Home from './Pages/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation/>
    </div>
  );
}

export default App;
