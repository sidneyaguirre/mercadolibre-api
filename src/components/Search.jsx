import React, { Component } from "react";
import { async } from "q";


class Search extends Component {
  state = {
    item: ""
  };

  /* manage a change in the page to set the new state */
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    console.log("Button was clicked");
    this.getProducts(this.state.item);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    //console.log(this.state.item);
  };

  getProducts = async (param) => {
    console.log(param);
    const res = await fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${param}&access_token=APP_USR-1549768881146675-080721-00241995db910be51e687be1a3ed8254-349672714`);
    const data = await res.json();
    console.log(data);
  }   

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>item</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="item"
              value={this.state.item}
            />
          </div>

          <button onClick={this.handleClick}>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;
