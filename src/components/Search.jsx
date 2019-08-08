import React, { Component } from "react";
import ResultList from "../components/ResultList"

class Search extends Component {
  state = {
    item: "",
    results: []
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
    console.log(this.state.results);
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
    this.setState({results:[].concat(this.state.results, data.results)})
  }  
  
  getSellers = async (param) => {
    console.log(param);
    const res = await fetch(`https://api.mercadolibre.com/users/${param}`);
    const data = await res.json();
    this.setState({results:[].concat(this.state.results, data.results)})
  }

  render() {
    return (
      <div>

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

      <div>
        <ResultList products={this.state.results}/>
      </div>

      </div>
    );
  }
}

export default Search;
