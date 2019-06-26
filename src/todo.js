import * as React from "react";
import "./todo.scss"

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.state = { name : "ali" , users : [], box : false}
    }
    add = () =>{
        const name = this.state.name;
        const newUsers = this.state.users
        newUsers.push(name)
        this.setState({
            users : newUsers
        })
    }
    openBox = () =>{
        this.setState({
            box : true
        })
    }
    render(){
        console.log(this.state.users);
        const users = this.state.users; 
        const list = users.map(function(name) {
            return name;
          });
        const box = this.state.box && (
            <div className="box"> hello </div>
        )
        return(<div>
            <div> {list} </div>

            <div onClick={this.openBox}> Добавить </div>
            <div> {box} </div>
            <div onClick={this.add}> add </div>
        </div>)
    }
}