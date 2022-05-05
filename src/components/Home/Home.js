import React, { useState, useEffect, useRef } from 'react';

import './styles.css';
import Tree from './Trees.png';
import Mountain from './Mountain.png';
import TaskList from '../TasksList/TaskList';

const LOCAL_STORAGE_KEY = 'taskApp.task';


let Home = () => {
    let [taskList, setTaskList] = useState([{name:'this task list'}]);
    let [task, setTask] = useState({});
    let taskNameRef = useRef();





    let onSubmit = (e) => {
        task.name = taskNameRef.current.value;
        if (task.name === '') return;
        setTaskList(prevTaskList => {
            return [...prevTaskList, task]
        })
        taskNameRef.current.value = null;
        console.log(taskList);
    }
    useEffect(() => {
        let storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        console.log(storedTasks)
        if (storedTasks != 'undefined') {
            console.log('wtf')
            setTaskList(JSON.parse(storedTasks));
        }
    }, [])
    useEffect(() => {
        console.log(taskList)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(taskList));
    }, [taskList])

    return (
        <>

            <div className="wrapper">
                <header>
                    <img src={Mountain} className="background" alt="why you not work" />
                    <img src={Tree} className="forground" alt="why you not work" />
                    <h1 className="title"> Task a Mania</h1>
                </header>
                <section>
                    <h1> This is where my task list is finna be</h1>


                        <label >Task Name: </label>
                        <input type='text'  ref={taskNameRef} ></input>
                        <button  onClick={onSubmit}>Submit</button>

                    <TaskList taskList={taskList}></TaskList>
                </section>
            </div>

        </>
    )
}

export default Home;
