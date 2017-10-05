import React from "react";
// var loginarray = [];
var loginarray="";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
class List extends React.Component{

  login(event){
  console.log("clicked");
  console.log("submitted array: "+loginarray);

    fetch('/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      loginarray: loginarray,
    })
  })
  



  //   fetch('/login', {
  //   method: 'Get',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     loginarray: 'loginarray',
  //   })
  // })




  };

  concat(event){
    var buttonclicked = event.target.value;
    loginarray = loginarray + buttonclicked;
    console.log(loginarray);

  };




  render(){

// const List = props => {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const buttonoptions = this.props.buttons;
  return (
    <ul className="list-group">
      {buttonoptions.map(item => (
        <div className="rows">
          <button value={item} className="num-bg zero" id={item} onClick={this.concat}>{item}</button>
        </div>
      ))}
      <button id="loginsubmit" onClick={this.login}>Submit</button>
    </ul>
  );
};
}

export default List;








 // <li className="list-group-item" value={item}>
 //    <button className="btn btn-default">{item}</button>
 //  </li>