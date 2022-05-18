import React from 'react';
import DisplayTodo from './DisplayTodo';
import ToDoList from './ToDoList';

const Home = () => {
    return (
        <div className='px-12 mt-20'>
           <ToDoList></ToDoList>
           <DisplayTodo></DisplayTodo>
        </div>
    );
};

export default Home;