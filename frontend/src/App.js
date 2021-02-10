
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './Items/components/SearchBar';
import ItemsLayout from './Items/components/ItemsLayout';
import ItemLayout from './Items/components/ItemLayout';

function App() {
  return (
    <Router>
      <Route exact path='/' component={SearchBar}/>
      <Route exact path='/items' component={ItemsLayout}/>
      <Route exact path='/items/:id' component={ItemLayout}/>
    </Router>
  );
}

export default App;
