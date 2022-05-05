import React from 'react';


export default function TaskList({taskList}) {
    console.log(taskList);




    return(
        <>
        <p>I am here</p>
        {taskList?taskList.map(ele =>{
            return(
            <div key={ele.name}>
                <p>{ele.name}</p>
                <p>ho</p>
            </div>
            )
        }):null}
        </>

    )
}
