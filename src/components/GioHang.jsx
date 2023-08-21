import React, { Component } from "react";

export default class GioHang extends Component {
  renderContent = () => {
     return this.props.cartList.map((element) => {
      const {id, name, image, price, soLuong} = element;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>
            <img
              width={75}
              src={image}
              className="img-fluid"
              alt="phone"
            />
          </td>
          <td style={{padding: "0.6rem", fontSize:"15px"}}>{name}</td>
          <td>
            <button onClick={() => this.props.handleQuantity(id, false)} className="btn btn-warning">-</button>
            <span className="mx-1">{soLuong}</span>
            <button onClick={() => this.props.handleQuantity(id, true)} className="btn btn-warning">+</button>
          </td>
          <td>${price.toLocaleString()}</td>
          <td>${(price * soLuong).toLocaleString()}</td>
          <td>
            <button onClick={() => this.props.handleRemove(id)} className="btn btn-danger">XÓA</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-end mb-2">
          <button
            type="button"
            className="btn btn-dark "
            data-toggle="modal"
            data-target="#gioHang"
          >
            <i className="fa-solid fa-cart-shopping"></i> ({this.props.cartList.length})
          </button>
        </div>
        <div
          className="modal fade"
          id="gioHang"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
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
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình Ảnh</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn Giá</th>
                      <th>Thành Tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderContent()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
