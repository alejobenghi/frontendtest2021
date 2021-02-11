
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SearchBar from './Items/components/SearchBar';
import ItemsLayout from './Items/components/ItemsLayout';
import DetailLayout from './Items/components/DetailLayout';

function App() {
  return (
    <Router>
      <Route exact path='/' component={SearchBar}/>
      <Route exact path='/items' component={ItemsLayout}/>
      <Route exact path='/items/:id' component={DetailLayout}/>
    </Router>
  );
}

export default App;
