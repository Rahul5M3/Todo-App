import './TodoList.css'
import TaskBox from './TaskBox';

export default function TodoList({todos,trigger,donetask}){
    return (
        <div className="TodoList">
            <div className='headings'>
                <div>Task</div>
                <div>Mark Task</div>
                <div>Delete Task</div>
            </div>
            <div className='boxing'>
                {
                    todos.map((todo) =>
                        <TaskBox donetask={donetask} todo={todo} trigger={trigger} key={todo.id}></TaskBox>
                    )    
                } 
            </div> 
        </div>
    );
} 