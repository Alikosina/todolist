import * as React from "react";

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.state = { name : "ali" , users : []}
    }
    add = () =>{
        const name = this.state.name;
        const newUsers = this.state.users.push(name)
        this.setState({
            users : newUsers
        })
    }
    render(){
        console.log(this.state.users);
        return(<div>
            <div> {this.state.users} </div>

            <div onClick={this.add}> add </div>
        </div>)
    }
}