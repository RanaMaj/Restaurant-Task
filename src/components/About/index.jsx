import React, { Component } from 'react'
import Btn from '../Btn/Btn'

export default class index extends Component {
  render() {
    const {headingTitle ,largPar, smallPar } = this.props
    return (
      <div className='container'>
        <div className="col-content">
            <h4 className='headingTitle'>{headingTitle}</h4>
            <p>{largPar}</p>
            <p>{smallPar}</p>
            <Btn title ="Read More"/>
        </div>
        <div className="col-img"></div>
      </div>
    )
  }
}
