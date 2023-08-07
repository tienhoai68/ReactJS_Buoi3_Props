import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class Body extends Component {
    renderShoes = () => {
       return this.props.data.map((element, index) => {
            return (
                <div key={index} className="col-12 col-md-6 col-lg-3">
                    <ProductItem getShowDetails= {this.props.getShowDetails} element ={element}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='row'>          
                    {this.renderShoes()}       
            </div>
        )
    }
}
