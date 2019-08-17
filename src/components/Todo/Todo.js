import * as React from "react";
import "./Todo.scss"
// import { Button } from 'react-toolbox/lib/button';
import { Button } from 'semantic-ui-react'
import classNames from 'classnames';
import Tasks from '../Tasks/Tasks';
import Form from '../Form/Form';

export default class Todo extends  React.Component{
    constructor(props){
        super(props);
        this.add = this.add.bind(this);
        this.deleteId = this.deleteId.bind(this);
        this.createTask = this.createTask.bind(this);
        this.done = this.done.bind(this);
        this.state = { value : '' ,  tasks : []}
    }
    add (value ) {
        const currentTasks = this.state.tasks.map(el => el)
        const newTask = this.createTask(value)
        currentTasks.push(newTask)
        this.setState({
            tasks: currentTasks
        })
    }

    deleteId (id) {
        const tasks = this.state.tasks;
        const newTask = tasks.filter(function(el){
            return el.id != id
        })
        this.setState({
            tasks : newTask
        })
    }

    done (id) {
        const tasks = this.state.tasks;
        const doned = tasks.map((el)=>{
            if (el.id === id){
                el.done = true
                return el
            }
            return el
        })
        this.setState({ 
            tasks : doned 
        })  
    }

    createTask(value) {
       return  {
                id : Math.random(),
                done : false ,
                text : value
            }
        
    }
    
    render(){
        const tasks = this.state.tasks;   
        const list = tasks.map((task) => {
             return (<div className="list"> <div  className={classNames( 'list-item' ,{ 'list__done': task.done })}> {task.text} </div> <span className="list-item list-item_delete" onClick={() => this.deleteId(task.id)}> Удалить задачу </span> <span className="list-item" onClick={() => this.done(task.id)}> Выполнена </span> </div> );
          });
          const listDoned = tasks.map((task) => {
              if (task.done){
                  return (
                      <div className="list__doned">
                          {task.text}
                      </div>
                  )
              }
          })
      
        return(<div className='block'>
            <Form addState={this.add} changeName={this.nameChange}/>
            <div className="tasks">
                <Tasks title="Запланированные задачи"> {list} </Tasks>
                <Tasks title="Выполненные задачи"> {listDoned} </Tasks>
            </div>     
        </div>)
    }
}