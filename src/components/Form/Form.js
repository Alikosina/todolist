import * as React from "react";
import { Button } from 'semantic-ui-react'



export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.nameChange = this.nameChange.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = { value : ''}
    }

     nameChange(e) {
        this.setState({
            value : e.target.value,  
        })
    }

    onClick() {
        this.props.addState(this.state.value);
        this.setState({
            value: ''
        })
    }
    render(){  
        return(
            <div className='add-task'>
                <input className='inp' placeholder='Что нужно сделать' value={this.state.value} onChange={this.nameChange}/>
                <div> <Button primary onClick={this.onClick}>Click</Button> </div>
            </div>
        )
    }
}