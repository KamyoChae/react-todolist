import React, { Component } from 'react'
import Myitems from './items';
class header extends Component { 
    state = {
        list: [],
        inputValue: "",
    } 

    render() {
        return (
            <>
                <div className="todohead" >
                    {/* <input ref={(dom) => { this.inputTarget = dom }}   /> */}
                    
                     <input type="text" onChange={this.handleChange.bind(this)}  />
                    <button onClick={this.addhandle.bind(this)}>提交</button>
                </div>
                <ul className="itemlist">
                    {
                        this.state.list.map((item, index) => {
                            return (

                                <Myitems text={item} itemIndex={index} key={index} delete={this.deleteHandle.bind(this)} /> 
                         
                            )
                        })
                    }
                    
                </ul>
                {/* <Myitems liList={this.state.list} delete={this.deleteHandle.bind(this)} /> */}
            </>
        )
    }
    handleChange = (e) => {
        const str = e.target.value
        this.setState({
            inputValue: str
        })
    }

    addhandle = ()=> { 
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        }) 
    }
    deleteHandle = (index) => {

        const list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

}

export default header