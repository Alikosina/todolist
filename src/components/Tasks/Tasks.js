
import React , { memo } from "react";
import "./Tasks.scss";



const Tasks = (props) =>(
        <div className="tasks-item">
                 <div> 
                     <div className="tasks-item__title"> {props.title} </div>
                     {props.children}
                  </div>
             </div> 
)
export default memo(Tasks)
