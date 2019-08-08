import React, { Component } from "react";

class ResultList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.products.map(product => {
            return (
              <li key={product.id}>
                <img src={product.thumbnail} alt="thumbnail" />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price}</p>
                  <p>{product.seller.id}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ResultList;
