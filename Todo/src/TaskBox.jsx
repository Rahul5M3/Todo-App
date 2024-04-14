import { width } from "@mui/system";
import './TaskBox.css';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function TaskBox({trigger,todo,donetask}){

    function deleteTodo(id){
        // console.log(id);
        trigger(id);
    }

    function markTodo(id){
        donetask(id);
        // console.log(id);
    }

    return (
        <div className="tasking">
            {/* <Checkbox {...label} /> */}
            <div className="TaskBox" style={{backgroundColor:todo.isDone===true?"red":'none'}}>
                <div id="content" style={{textDecoration: todo.isDone===true?"line-through":'none'}}>{todo.task}</div>
                <div className="nextToContent" key={todo.id}>
                    <div id="markDone" onClick={()=>markTodo(todo.id)}><CheckIcon></CheckIcon></div>
                    <div onClick={()=>deleteTodo(todo.id)} id="delete"><DeleteIcon></DeleteIcon></div>
                </div>
            </div>
        </div>
    );
}