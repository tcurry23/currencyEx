import React, { Component } from 'react';
import Search from './components/search'
import Title from './components/title'
import Currency from './components/output'

class App extends Component {
  getExchangeRate = async (e) => {
    const countryOne = e.target.elements.base.value
    const countryTwo = e.target.elements.base.value
    e.preventDefault();
    const api_call = await fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,GBP`)
    const data = await api_call.json()
    if (countryOne && countryTwo) {
      console.log(data);
      this.setState({
        output: data.rates
      })
      
    }
    
  }
  state = { 
    output: undefined,
    // error: alert("Please enter a value and select a country")
   }
  render() { 
    return ( 
      <div>
        <Title />
        <Search getExchangeRate = {this.getExchangeRate} />

      </div>
     );
  }
}
 
export default App;
