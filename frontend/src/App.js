
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './Items/components/SearchBar';
import ItemsLayout from './Items/components/ItemsLayout';

function App() {
  return (
    <Router>
      <Route exact path='/' component={SearchBar}/>
      <Route path='/items' component={ItemsLayout}/>
    </Router>
  );
}

export default App;
