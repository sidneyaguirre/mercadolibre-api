import React, { Component } from "react";
import ResultList from "../components/ResultList";

import "./styles/Search.css";

const initialState = {
  item: "",
  results: []
};

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
    this.getProductInfo(this.state.item);
    console.log(this.state.results);
    this.setState(initialState);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("Form was submitted");
    //console.log(this.state.item);
  };

  // getProductInfo = async param => {
  //   let productInfo = [];
  //   let info = {
  //     thumbnail: "",
  //     name: "",
  //     price: 0,
  //     seller: 0,
  //   }
  //   fetch(`https://api.mercadolibre.com/sites/MLU/search?q=${param}&access_token=APP_USR-1549768881146675-081003-d9e464283fd14bc98cf44fa27c3bafbc-349672714`)
  //     .then(res => res.json())
  //     .then(data => {
  //       Promise.all(
  //         data.results.map(element =>
  //           fetch(`https://api.mercadolibre.com/users/${element.seller.id}`)
  //           .then(res => res.json())
  //           .then(res => {
  //             info.name = element.title
  //             info.thumbnail = element.thumbnail
  //             info.price = element.price
  //             info.seller = res.nickname
  //             productInfo.push(info)
  //             console.log(info);
  //           })
  //         )
  //       ).then(() => {
  //         this.setState({ results: [].concat(this.state.results, productInfo)});
  //       });
  //     });
  // }

  getProductInfo = async param => {
    let productInfo = [];
    let acessToken = 'APP_USR-1549768881146675-083114-ab265f039a94212d1878fdda7bd5eba6-349672714'
    fetch(
      `https://api.mercadolibre.com/sites/MLU/search?q=${param}&access_token=${acessToken}`
    )
      .then(res => res.json())
      .then(data => {
        Promise.all(
          data.results.map(element =>
            fetch(`https://api.mercadolibre.com/users/${element.seller.id}`)
              .then(res => res.json())
              .then(res => {
                productInfo.push({
                  id: element.id,
                  title: element.title,
                  thumbnail: element.thumbnail,
                  //price: element.price,
                  price: Intl.NumberFormat().format(element.price),
                  seller: res.nickname
                });
              })
          )
        ).then(() => {
          this.setState({
            results: [].concat(this.state.results, productInfo)
          });
        });
      });
  };

  render() {
    return (
      <div>
        <div className="search__form">
          <form onSubmit={this.handleSubmit} className="search__form--form">
            <div className="form-group">
              <label>Search</label>
              <input
                onChange={this.handleChange}
                type="text"
                name="item"
                value={this.state.item}
              />
            </div>
            <div>
              <button onClick={this.handleClick}>
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
        </div>

        <div>
          <ResultList products={this.state.results} />
        </div>
      </div>
    );
  }
}

export default Search;
