
import React from 'react';

function ListItem(props) {
    const todos = props.todos.map((todo) => (
      <div>
        <li style={{textDecoration: todo.completed? 'line-through': 'none'} }>
            {todo.content}
            <input type="submit" name="delete_button" value="delete" onClick={()=>{props.delete(todo.key)} } />
            <input type="submit" name="complete_button" value="completed" onClick={()=>{props.completed(todo.key)} }/>
        </li>

      </div>
    ));
    return(todos);
}

export default ListItem;