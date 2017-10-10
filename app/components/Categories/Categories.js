import React, { Component } from 'react';
import DrinksList from "../DrinksList/DrinksList";
import Summary from "../Summary/Summary";
import helpers from '../../utils/Helpers';
//--Need to fetch this from the db --//

import axios from 'axios';
//--Need to fetch this from the db --//
var categories = ["vodka", "rum", "whiskey", "gin", "scotch", "tequila", "cordials", "beer"];

const styles ={ 
	img: {
		width: '100px',
		height: '100px',
		display: 'block',
		borderRadius: '50%',
	},
	button: {
		width: '45.75%',
		height:'75px',

		
	},
	drinksbutton: {
		width: '100px',
		height:'100px',
		margin: "5px",
		float: 'left'
	},
	

};


export default class Categories extends Component {
	constructor(props) {
		super(props);

		this.state = {
			drinkList: [],
			drinkPrice: [],
			drinkUnit: [],
			results: false,
			count: [],
			drink: []
		};

		this.handleClick = this.handleClick.bind(this);
		this.handleOrderClick = this.handleOrderClick.bind(this);
		
	}




	handleClick(event) {

		var thing = event.target.id;
		console.log(thing);
		fetch('/getdrinks/' + thing).then(function(response){
			return response.json();
		}).then(data => {
			// console.log(data);
			let arrName = [];
			let arrPrice = [];
			let arrUnit = [];
			for (var i = 0; i < data.length; i++) {
				arrName.push(data[i].item_name);
				arrPrice.push(data[i].price);
				arrUnit.push(data[i].unit);
			}
			this.setState({drinkList: arrName});
			//this.setState({drinkPrice: arrPrice});
			this.setState({drinkUnit: arrUnit});

			console.log(arrPrice);


		});



	}
	handleOrderClick(event) {
		const item =  event.target.id;
		let found = false;

		fetch('/getprice/' + item).then(function(response){
			return response.json();
		}).then(data => {


			let arrPrice = this.state.drinkPrice;

			//arrPrice.push(data[0].price);

			let index = this.state.drink.indexOf(item);
				arrPrice[index] = data[0].price;
			console.log("Indexxxxxx Price: " + index);

			this.setState({drinkPrice: arrPrice});

			console.log("drinkPrice: " + this.state.drinkPrice);


		});

		for(let i=0;i<this.state.drink.length;i++){
			if(this.state.drink[i] === item){
				this.state.count[i] = this.state.count[i] + 1;
				found =true;
			}
			
		}
		if(!found){
			this.state.drink[this.state.drink.length] = item;
			this.state.count[this.state.count.length] = 1;
		}
		
		
		this.setState({
				
				results : true,
			});
		console.log(this.state.drink);
		
	}
	render(){
		let list;
		let ordersummary;
		if(this.state.results){

			list = <DrinksList drinks={this.state.drinkList} price={this.state.drinkPrice} unit={this.state.drinkUnit} />
			//ordersummary = <Summary />

			//list = <DrinksList drinks={this.state.drinkList}  />
			ordersummary = <Summary drink={this.state.drink} count={this.state.count} price={this.state.drinkPrice}/>
		}



		return(

			<div className="leftBar">
					<div>
					<div className="container">

			<div className="row">
			<div className="col-md-5">
			{categories.map((item) => (
				<div><button className="btn btn-default" id={item} style={styles.button} onClick={this.handleClick} >{item}</button></div>
				))}
			<button className="btn btn-warning" style={styles.button}>LOGOUT</button>
			</div>
			
			<div className="<col-md-7></col-md-7>">
			<div className="row">
			<div className="col-md-12">
			{this.state.drinkList.map((item) => 

				// <div><button className="btn " id={item} style={styles.drinksbutton}>{item}</button></div>

				<div><button className="btn " id={item} style={styles.drinksbutton} onClick={this.handleOrderClick} >{item}</button></div>

				)}
			</div>
			</div>
			<div className="row">
			<div className="col-md-12">
				{ordersummary}
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			</div>
			);
	}
}