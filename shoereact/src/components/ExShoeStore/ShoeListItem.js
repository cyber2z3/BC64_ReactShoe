import React, { Component } from "react";
import ShoeItem from "./ShoeItem";

export default class ShoeListItem extends Component {
  renderListShoe = () => {
    let { dataListShoe, handleAddShoe } = this.props;
    return dataListShoe.map((item, index) => {
      return (
        <div className="col-3" key={index} style={{ height: "550px" }}>
          <ShoeItem item={item} handleAddShoe={handleAddShoe} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
