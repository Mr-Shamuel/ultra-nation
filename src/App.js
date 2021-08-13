import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Component/Country/Country';

function App() {

const [countries,setCountries] = useState([]);
useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
.then(res=>res.json())
.then(data=>{
  setCountries(data); 
})
.catch(error=>console.log(error));

},[])
console.log(countries);

  return (
    <div className="App">
      <h1>Total Countries: {countries.length}</h1>
      <ul>
        {
          
          countries.map(x=><Country countyName={x.name}></Country>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
