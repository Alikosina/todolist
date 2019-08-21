import  React , { memo , useState , useCallback } from "react";
import "./Todo.scss"
import classNames from 'classnames';
import Tasks from '../Tasks/Tasks';
import Form from '../Form/Form';


const Todo = () =>{
    const [tasks , setTasks] = useState([]);

    const createTask = (value) => {
        return  {
                 id : Math.random(),
                 done : false ,
                 text : value
             }
     }

     const add = useCallback((value)=>{
        const currentTasks = tasks.map(el => el)
        const newTask = createTask(value)
        currentTasks.push(newTask)
        setTasks(currentTasks)
     },[tasks])

    //  const add = (value) => {
    //     const currentTasks = tasks.map(el => el)
    //     const newTask = createTask(value)
    //     currentTasks.push(newTask)
    //     setTasks(currentTasks)
    // }

    const deleteId = useCallback((id)=>{
        const newTask = tasks.filter(function(el){
            return el.id != id
        })
        setTasks(newTask)
    },[tasks])

    // const deleteId = (id) => {
        
    //     const newTask = tasks.filter(function(el){
    //         return el.id != id
    //     })
    //     setTasks(newTask)
    // }    

    const done = useCallback((id)=>{
        const doned = tasks.map((el)=>{
            if (el.id === id){
                el.done = true
                return el
            }
            return el
        })
        setTasks(doned) 
    },[tasks])

    // const done = (id) => {
    //     const doned = tasks.map((el)=>{
    //         if (el.id === id){
    //             el.done = true
    //             return el
    //         }
    //         return el
    //     })
    //     setTasks(doned) 
    // }

    const list =  tasks.map((task) => {
        return (<div className="list"> <div  className={classNames( 'list-item' ,{ 'list__done': task.done })}> {task.text} </div> <span className="list-item list-item_delete" onClick={() => deleteId(task.id)}> Удалить задачу </span> <span className="list-item" onClick={() => done(task.id)}> Выполнена </span> </div> );
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
     <Form addState={add}/>
     <div className="tasks">
         <Tasks title="Запланированные задачи"> {list} </Tasks>
         <Tasks title="Выполненные задачи"> {listDoned} </Tasks>
     </div>     
 </div>)

}

export default memo(Todo)

