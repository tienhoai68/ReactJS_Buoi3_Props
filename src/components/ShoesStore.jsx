import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import data from "../data/data.json"
import GioHang from './GioHang'
export default class ShoesStore extends Component {
  state = {
    ShoesDetails: data[0],
    cartList: [],
  }
  getShowDetails = (shoes) => {
    this.setState({
      ShoesDetails: shoes,
    })
  };
  addToCart = (shoes) => {
    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === shoes.id;
    });

    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push({ ...shoes, soLuong: 1 });
    };
    this.setState(
      {
        cartList: data,
      });
  };
  handleQuantity = (id, isIncrease) => {
    const data = [...this.state.cartList];
    const index = data.findIndex((element) => {
      return element.id === id;
    });

    if (isIncrease) {
      data[index].soLuong += 1;
    } else {
      if (data[index].soLuong === 1) {
        const result = window.confirm("Bạn có muốn xóa không ?");
        if (result) {
          data.splice(index, 1);
        } else {
        }
      } else {
        data[index].soLuong -= 1;
      }
    };
    this.setState({
      cartList: data,
    });

  };
  handleRemove = (id) => {
    const result = window.confirm("Bạn có muốn xóa không?");

    if (result) {
      const data = [...this.state.cartList];
      const index = data.findIndex((element) => {
        return element.id === id;
      });
      data.splice(index, 1);
      this.setState({
        cartList: data,
      });
    }
  };
  render() {
    return (
      <div>
        <Header />
        <div className='container mt-5'>
          <div className="col-12 col-md-12 col-lg-12">
            <h1 className='pb-5'>Product Shoes</h1>
            <GioHang handleRemove={this.handleRemove} handleQuantity={this.handleQuantity} cartList={this.state.cartList}/>
            <Body addToCart={this.addToCart} data={data} getShowDetails={this.getShowDetails} ShoesDetails={this.state.ShoesDetails} />
          </div>
        </div>
      </div>
    )
  }
}
