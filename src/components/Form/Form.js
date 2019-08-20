import  React , {useState , memo} from "react";
import { Button } from 'semantic-ui-react'

const Form = (props) =>{
    const { addState } = props 
    const [value , setValue] = useState('')
    const nameChange = (e) => {
        setValue(e.target.value)
     }
     const onClick = () => {
        addState(value);
       setValue('')
    }
    return(
        <div className='add-task'>
            <input className='inp' placeholder='Что нужно сделать' value={value} onChange={nameChange}/>
            <div> <Button primary onClick={onClick}>Click</Button> </div>
        </div>
    )
}
export default memo(Form)
