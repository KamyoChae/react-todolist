import React, { Component } from 'react'

class items extends Component { 
    render() {
        return (
            <>
                <li>
                    <i className="indexnum">{this.props.itemIndex + 1}</i>
                    {this.props.text}
                    <i className="close" onClick={this.closeHandle}></i>
                </li> 
            </>
        )
    }
    closeHandle = () => {
        this.props.delete(this.props.itemIndex)
    }
}

export default items 