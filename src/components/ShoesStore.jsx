import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import data from "../data/data.json"
import ShoesInformation from './ShoesInformation'
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
      <div style={{ width: "90%" }} className='mx-auto'>
        <div className='row align-items-center'>
          <div className="col-4 col-md-4 col-lg-4 mt-5">
            <ShoesInformation ShoesDetails={this.state.ShoesDetails} />
          </div>
          <div className="col-8 col-md-8 col-lg-8">
            <Header />
            <Body data={data} getShowDetails={this.getShowDetails} />
          </div>
        </div>
      </div>
    )
  }
}
