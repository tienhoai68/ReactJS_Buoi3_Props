import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {image, name, price} = this.props.element;
    return (
        <div>
        <div className="card mb-4">
            <img className="card-img-top w-100" src={image} alt="..." />
            <div className="card-body">
                <h6 className="card-title">{name}</h6>
                <p>${price}</p>
                <button onClick={() => this.props.getShowDetails(this.props.element)} className='btn btn-dark'>Show Description</button>
            </div>
        </div>
    </div>
    )
  }
}
