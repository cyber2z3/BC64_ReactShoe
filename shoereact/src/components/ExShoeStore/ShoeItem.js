import React, { Component } from "react";

export default class ShoeItem extends Component {
  render() {
    let { item, handleAddShoe } = this.props;
    return (
      <div className="card" style={{ height: "500" }}>
        <img
          className="card-img-top"
          src={item.image}
          style={{ height: "300px" }}
          alt="Title"
        />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p> {item.price} $ </p>
          <button
            className="btn btn-success"
            onClick={() => {
              handleAddShoe(item);
            }}
          >
            Add to Cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
    );
  }
}
