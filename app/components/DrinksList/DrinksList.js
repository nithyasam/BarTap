import React, { Component } from 'react';

export default class DrinksList extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.price);
		// this.state = {
		// 	drinkList: this.props.drinks
		// };

		this.handleClick = this.handleClick.bind(this);
	}

	render(){
		let d = this.props.drinks.map(drink => <p>drink</p>)
		return({d})
		// return(
		// 	<div className="drinkList">
		// 	<div className="container">
		// 	<div className="row">
		// 	<div className="col-md-4">
		// 	<div>
		// 	<img src= {userDetails.image} style={styles.img}/>
		// 	<h4>{userDetails.name}</h4>
		// 	</div>
		// 	</div>
		// 	<div className="col-md-1"></div>
		// 	<div className="col-md-7">
		// 	</div>
		// 	</div>
		// 	</div>
		// 	</div>
		// 	);
	}
}