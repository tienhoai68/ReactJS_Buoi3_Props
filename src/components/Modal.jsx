import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { name, image, price, shortDescription, quantity } =
      this.props.ShoesDetails;
    return (
      <div>
        <div>
          <button
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={() => this.props.getShowDetails(this.props.element)}
          >
            Show Details
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Details Shoes
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row mt-5">
                    <div className="col-12 col-lg-4 text-center d-flex align-items-center">
                      <h2>{name}</h2>                   
                    </div>
                    <div className="col-12 col-lg-8">
                      <table className="table">
                        <thead>
                          <tr>
                            <td colSpan={2}>
                            <img className="img-fluid w-75" alt="..." src={image} />
                            </td>
                          </tr>
                          <tr>
                            <td>Price:</td>
                            <td style={{ color: "red" }}>${price}</td>
                          </tr>
                          <tr>
                            <td>Description:</td>
                            <td>{shortDescription}</td>
                          </tr>
                          <tr>
                            <td>Quantity:</td>
                            <td style={{ color: "green" }}>{quantity}</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-success"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
