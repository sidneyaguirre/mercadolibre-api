import React, { Component } from "react";
import "./styles/ResultList.css"
import Card from "../components/Card"

class ResultList extends Component {
  render() {
    return (
      <div className="Results">
        <ul className="ResultList">
          {this.props.products.map(product => {
            return (
              <li className="ResultListItem" key={product.id}>
                <div>
                  <Card img={product.thumbnail} title={product.name} price={product.price} seller={product.seller} />
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
