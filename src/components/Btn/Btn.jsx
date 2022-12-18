import React from 'react';
import './style.css'
class Btn extends React.Component {
    render(){
    const {title} = this.props
    return(
        <button className='activeBtn' type='button'>{title}</button>
    )
}}

export default Btn;