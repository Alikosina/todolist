import * as React from "react";
import "./todo.scss"
// import { Button } from 'react-toolbox/lib/button';
import { Button } from 'semantic-ui-react'

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.nameChange = this.nameChange.bind(this);
        this.openBox = this.openBox.bind(this);
        this.state = { name : {} , users : [], box : false}
    }
    add () {
        const name = this.state.name;
        const newUsers = this.state.users
        newUsers.push(name)
        this.setState({
            users : newUsers
        })
    }

    deleteId (id) {
        const users = this.state.users;
        const newUsers = users.filter(function(el){
            return el.id != id
        })
    }

     nameChange(e) {
        this.setState({
            name : {
                id : Math.random(),
                text : e.target.value
            }
            // name : e.target.value + ' '
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
        const task = this.state.task && (
            <div>

            </div>
        )
        const list = users.map(function(name) {
            return (<div>{name.text} <span onClick={() => this.deleteId(name.id)}> V </span> </div> );
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
            
            {/* <div onClick={this.add}> add </div> */}
            <Button primary onClick={this.add}>Click</Button>
            {/* <Button label='Primary Button' primary /> */}
            
        </div>)
    }
}