import React, { Component } from 'react'
import Modal from './Modal';

export default class ProductItem extends Component {
  render() {
    const {image, name, price} = this.props.element;
    return (
        <div>
        <div className="card mb-4">
            <img className="card-img-top w-100" src={image} alt="..." />
            <div className="card-body">
                <h6 style={{fontSize: 15}} className="card-title">{name}</h6>
                <p style={{color : "red"}} >${price}</p>
                <Modal addToCart={this.props.addToCart} ShoesDetails={this.props.ShoesDetails} element={this.props.element} getShowDetails={this.props.getShowDetails}/>
            </div>
        </div>
    </div>
    )
  }
}
