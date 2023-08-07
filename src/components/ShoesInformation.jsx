import React, { Component } from 'react'

export default class ShoesInformation extends Component {
  render() {
    const {name, image, price, shortDescription, quantity} = this.props.ShoesDetails;
    return (
      <div>
        <div className="row mt-5">
                    <div className="col-12 col-lg-4 text-center">
                        <h2>{name}</h2>
                        <img
                            className="img-fluid"
                            alt="..."
                            src={image}
                        />
                    </div>
                    <div className="col-12 col-lg-8">
                        <table className="table">
                            <thead>
                                <tr>
                                    <td colSpan={2}>
                                        <h1>Shoes Details</h1>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Price:</td>
                                    <td style={{color:"red"}} >${price}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>{shortDescription}</td>
                                </tr>
                                <tr>
                                    <td>Quantity:</td>
                                    <td style={{color:"red"}}>{quantity}</td>
                                </tr>                              
                            </thead>
                        </table>
                    </div>
                </div>
      </div>
    )
  }
}
