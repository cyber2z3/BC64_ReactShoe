import React, { Component } from "react";
export default class CartShoe extends Component {
  renderListShoeCart = () => {
    let { dataCartShoe, handleDeleteShoe, handleChangeQuantity } = this.props;
    return dataCartShoe.map((shoe, index) => {
      return (
        <tr key={index}>
          <td>{shoe.name}</td>
          <td>
            <img src={shoe.image} width={50} />
          </td>
          <td>{shoe.price}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => {
                handleChangeQuantity(-1, shoe);
              }}
            >
              -
            </button>
            <span className="mx-3">{shoe.quantity}</span>
            <button
              className="btn btn-success"
              onClick={() => {
                handleChangeQuantity(1, shoe);
              }}
            >
              +
            </button>
          </td>
          <td>{shoe.price * shoe.quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                handleDeleteShoe(shoe);
              }}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>{this.renderListShoeCart()}</tbody>
        </table>
      </div>
    );
  }
}
