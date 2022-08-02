import './App.css';
import { Route, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx'
import Home from './components/Home/Home.jsx'
import DogDetail from './components/DogDetails/DogDetails';
import CreateDog from './components/CreateDog/CreateDog.jsx'


function App() {
  return (
      <div className="App">
        <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path = "/home" component ={Home}/>
        <Route path = "/home/create" component={CreateDog}/>
        <Route path = "/home/:dogId" component ={DogDetail}/>
        </Switch>
      </div>
  );
}

export default App;
