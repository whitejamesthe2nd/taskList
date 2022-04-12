import React from 'react';


export default function TaskList({TaskList}) {




    return(
        <>
        <p>yo</p>
        {TaskList?null:TaskList.map(ele =>{
            return(
            <div key={ele.name}>
                <p>{ele.text}</p>
                <p>yo</p>
            </div>
            )
        })}
        </>

    )
}
