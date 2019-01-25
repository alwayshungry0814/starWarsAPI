import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import axios from 'axios';

class App extends Component {
  state = {
    peoples: []
  }

  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`)
      // get returns a promise. then gets the input and executes a
      // function 'response' once promise is resolved
      .then(response => {

        //this.setState must be called inside the .then method so that 
        //it can execute after promise is resolved
        this.setState({ peoples: response.data.results });
        console.log(response.data.results);
      });
    }
  

  render() {
    return (

      <div>
        <section className="Person">
          <h1>Star Wars API</h1>
          {this.state.peoples.map(person => {
            return <Person key={person.name} name={person.name} />
          })}
        </section>
      </div>
    );
  }
}

export default App;
