import React, { Component } from 'react';

class Search extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
                <form onSubmit={this.props.getExchangeRate}>
                <input placeholder="country 1"></input>
                <select></select>
                <input placeholder="country 2"></input>
                <select></select>
                <br />
                <button>Convert!</button>
                </form>
            </div>
         );
    }
}
 
export default Search;