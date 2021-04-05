import React from 'react';
import Todo from './Todo';

const List = (props) => {
    return (
        <div>
            {props.list.map((e, i) => {
                return <Todo item={e} key={i} />
            })}
        </div>
    )
}

export default List
