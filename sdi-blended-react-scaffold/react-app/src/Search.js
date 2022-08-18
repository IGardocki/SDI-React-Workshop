import React from "react";
import { CocktailMenu } from "./CocktailMenu";

export class Search extends React.Component{
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchDrinks: []
        }
    } 
    

    searchResults(){
      fetch(`http://localhost:3001/search/${this.searchText}`)
      .then(resp => resp.json())
      .then(data => {
          for (let drink of data.drinks) {
              drink.favorite = false;
          }
          return data;
      })
      .then(data => {
          this.setState({
              drinks: data.drinks
              // favorite
          })
          console.log(this.state)
      })
    }

    render(){
        
      return (
        <>
          <input
          type="text"
          id="message"
          placeholder="Search.."
          onChange={event => this.setState({ searchText: event.target.value })}
          onKeyUp={(event) => {
              if (event.key === 'Enter') {
                  alert(this.state.searchText);

              }
          }}/>

        </>
        )
    }
}


