import * as React from "react";
import "./todo.scss"

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.openBox = this.openBox.bind(this);
        this.state = { name : "" , users : [], box : false}
    }
    add () {
        const name = this.state.name;
        const newUsers = this.state.users
        newUsers.push(name)
        this.setState({
            users : newUsers
        })
    }

     nameChange(e) {
        this.setState({
            name : e.target.value
        })
    }
    
    openBox () {
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
            <div>
                  <input  onChange={this.nameChange}/>
                 
            </div>
        )
        return(<div>
            <div> {list} </div>

            <div onClick={this.openBox}> Добавить </div>
            <div> {box} </div>
            <div onClick={this.add}> add </div>
            
        </div>)
    }
}