import React from 'react';
export class CocktailMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            searchDrinks: [],
            favoriteDrinks: []
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3001/`)
            .then(resp => resp.json())
            .then(data => {
                for (let drink of data.drinks) {
                    drink.favorite = false;
                }
                return data;
            })
            .then(data => {
                this.setState({
                    searchDrinks: data.drinks
                })
                console.log(this.state)
            })
    }
    addFavorite = (drink) => {
        console.log('add to favorite', drink)
        if (this.state.favoriteDrinks.includes(drink)){
            let currentFav = this.state.favoriteDrinks.filter(drinkObj => drinkObj !== drink)
            let currentSrch = this.state.searchDrinks
            currentSrch.unshift(drink)
            console.log(currentSrch, drink)
            this.setState({
                favoriteDrinks: currentFav,
                searchDrinks: currentSrch
            })
        } else {
            let currentFav = this.state.favoriteDrinks
            let currentSrch = this.state.searchDrinks.filter(drinkObj => drinkObj !== drink)
            console.log('currentfav: ',currentFav)
            currentFav.push(drink)
            
            this.setState({
                favoriteDrinks: currentFav,
                searchDrinks: currentSrch
            })
        }  

    }
    CocktailList = () => {
        console.log('cocktailList')
        // if check for searchresults
        let unfavoriteFilteredList = this.state.searchDrinks
        
        return (
            <>
                <h1>Cocktails</h1>
                <ul>
                    {unfavoriteFilteredList.map(drink => {
                        let favoriteButtonId = drink.idDrink + 'FavBtn'
                        return (
                            <>
                                <li key={drink.idDrink}>
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className='imageThumb'/>
                                    {drink.strDrink}
                                    <button key={favoriteButtonId} onClick={() => this.addFavorite(drink)}>Add to Favorites</button>
                                </li>
                            </>
                        )
                    })}

                </ul>
            </>
        );
    }
    FavoriteCocktailList = () => {

        let filteredFavoriteList = this.state.favoriteDrinks
        console.log('filterList =', filteredFavoriteList)
        return (
            <>
                <h1>Favorite Cocktails</h1>
                <ul>
                    {filteredFavoriteList.map(drink => {
                        let favoriteButtonId = drink.idDrink + 'FavBtn'
                        return (
                            <>
                                <li key={`fav${drink.idDrink}`}>
                                    <img src={drink.strDrinkThumb} alt={drink.strDrink} className='imageThumbFav'/>
                                    {drink.strDrink}
                                    <button key={favoriteButtonId} onClick={() => this.addFavorite(drink)}>Unfavorite</button>
                                </li>
                            </>
                        )
                    })}

                </ul>
            </>
        );
    }
    searchResults(){
        fetch(`http://localhost:3001/search/${this.state.searchText}`)
        .then(resp => resp.json())
        .then(data => {
            console.log('after json: ', data)
            for (let drink of data.drinks) {
                drink.favorite = false;
            }
            return data;
        })
        .then(data => {
            this.setState({
                searchDrinks: data.drinks
            })
            console.log(this.state)
        })
    }

    render() {
        console.log('Render ran:')
        return (
            <>
            <div className='search-content'>
                <span>Search by Ingredient: </span>
                <input
                    type="text"
                    id="message"
                    placeholder="Search.."
                    onChange={event => this.setState({ searchText: event.target.value })}
                    onKeyUp={(event) => {
                        if (event.key === 'Enter') {
                            console.log(this.state.searchText);
                            this.searchResults();
                        }
                    }} />
            </div>
            <div className="main-content">
                <div className="cocktail-lists">
                    <this.CocktailList />
                </div>
                <div className="cocktail-lists">

                    <this.FavoriteCocktailList />
                </div>
            </div>
            </>)
    }
}
