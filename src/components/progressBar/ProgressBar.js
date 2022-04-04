import { useState } from 'react';
import './styles.css';

let ProgressBar = (props) => {
    let[blue,setBlue] = useState(0);

    let red = 100 - blue;
    let bar = [];

    for (let i = 0; i < blue; i++) {
        bar.push(<span className="blue"></span>);
    }
    for (let i = 0; i < red; i++) {
        bar.push(<span className="red"></span>);
    }


        let onChange = (e) => {
            if(e.target.value < 100){
                setBlue(e.target.value);
            }
            else{
                console.warn('please less than 100')
            }

        }
        console.log(blue);
    return (
        <>
            <h1>Look here</h1>
            <form>
                <label for='position'>Current Position: </label>
                <input type='number' for='position' onChange={onChange }></input>
            </form>
            <div class='p-bar'>
                {bar.map((ele, i) => { return ele })}

            </div>
        </>
    )

}

export default ProgressBar;
