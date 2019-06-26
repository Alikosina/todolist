import * as React from "react";

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.state = { name : "ali" , users : []}
    }
    add = () =>{
        const name = this.state.name;
        const newUsers = this.state.users
        newUsers.push(name)
        this.setState({
            users : newUsers
        })
    }
    render(){
        console.log(this.state.users);
        const users = this.state.users; 
        const list = users.map(function(name) {
            return name;
          });
        return(<div>
            <div> {list} </div>

            <div onClick={this.add}> add </div>
        </div>)
    }
}