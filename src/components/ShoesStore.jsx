import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import data from "../data/data.json"
export default class ShoesStore extends Component {
  state = {
    ShoesDetails: data[0],
  }
  getShowDetails = (shoes) => {
    this.setState({
      ShoesDetails: shoes,
    })
  }
  render() {
    return (
      <div className='container'>     
          <div className="col-12 col-md-12 col-lg-12">
            <Header />
            <Body data={data} getShowDetails={this.getShowDetails} ShoesDetails={this.state.ShoesDetails}/>
          </div>
      </div>
    )
  }
}
