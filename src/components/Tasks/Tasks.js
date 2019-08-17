import * as React from "react";
import "./Tasks.scss";


export default class Tasks extends React.Component{
    render(){
        return(
            <div className="tasks-item">
                <div> 
                    <div className="tasks-item__title"> {this.props.title} </div>
                    {this.props.children}
                 </div>
            </div> 
        )
    }
}