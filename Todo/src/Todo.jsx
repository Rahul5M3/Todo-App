import './Todo.css'
import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import TodoInput from './TodoInput';
import { useState } from 'react';
import TodoList from './TodoList';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';

export default function Todo(){
    let [addBtnClicked,setAddBtnClicked]=useState(false);
    let [todos,setTodos]=useState([]);

    function addTasktoTodos(task,id){
        setTodos(()=>{
            return ([...todos,
                {id:id,
                task:task,
                isDone:false}
            ]);
        });
    }

    const markTheTaskDone = (id) => {
        setTodos(todos.map(todo =>
          todo.id === id ? { ...todo, isDone: true } : todo
        ));
      };

    function deleteTaskfromTodo(id){
        setTodos(todos.filter((todo)=>todo.id!==id));
    }

    function clickingAddbtn(){
        setAddBtnClicked(!addBtnClicked);
    }

    return (
        <div className="Todo">
            <h2>Todo App</h2>
            <TodoInput list={addTasktoTodos} visible={addBtnClicked}></TodoInput>
            {todos.length===0 ?  <HourglassDisabledIcon style={{fontSize:'200px', position:'relative', top:'80px'}}></HourglassDisabledIcon> :
            <TodoList donetask={markTheTaskDone} trigger={deleteTaskfromTodo} todos={todos}></TodoList> }
            <button onClick={clickingAddbtn} className='addBtn'><AddIcon style={{fontSize:'26px'}}></AddIcon></button>
        </div>
    );
}