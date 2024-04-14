import * as React from 'react';
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { nanoid } from 'nanoid';


export default function TodoInput({visible,list}){
    let [task,setTask]=useState('');

    function newCharacter(event){
        setTask(event.target.value);
    }

    function newTask(event){
        event.preventDefault();
        list(task,nanoid());
        setTask('');
    }
    
    return (
        <div className='TodoInput' style={{display: visible===false?'none':'block', position:'relative', bottom:'14px'}}>
            <form >
                <TextField onChange={newCharacter}  value={task} id="outlined-basic" label="Todo Task" variant="outlined" />
                <Button  onClick={newTask} style={{position:'relative', top:"10px", left:'10px'}} variant="contained" color="success">
                    Add
                </Button>
            </form>
        </div>
    );
}