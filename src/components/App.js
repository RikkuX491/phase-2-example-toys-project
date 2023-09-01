// import logo from '../logo.svg';
// import '../App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './NavBar'
import {useEffect, useState} from 'react'
import ToyList from './ToyList'
import AddToyForm from "./AddToyForm"

function App() {

  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:7000/toys')
    .then(response => response.json())
    .then(toyData => {
      setToys(toyData)
    })
  }, [])

  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path="/toys">
          <h1>Here are all of the toys!</h1>
          <ToyList toys={toys}/>
        </Route>
        <Route path="/add_toy">
          <h1>Add a new toy!</h1>
          <AddToyForm/>
        </Route>
        <Route path="/"><h1>Welcome to the Toys website!</h1></Route>
      </Switch>
    </div>
  );
}

export default App;
