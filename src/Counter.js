//Using React Functional Component

import React, {useState} from 'react';

const Counter = () => {

    const a = 0;
    const [count, setCount] = useState(a);

    const incrementHandler = () => {
        setCount(count+1);
    };

    const decrementHandler = () => {
        setCount(count-1);
    };

    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={incrementHandler}>Increment Counter</button>
            <button onClick={decrementHandler}>Decrement Counter</button>
        </div>
    )
}

export default Counter;


//Using React Class Based Component

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
        
//         this.state = {
//         count:0
//         };
//     }

// increment = () => {
//     this.setState({
//         count: this.state.count+1
//     })

// }

// decrement = () => {
//     this.setState({count: this.state.count-1
//     })
// }

// render(){
//     return(
//         <div>
//             <h2>Counter: {this.state.count}</h2>
//             <button onClick={this.increment}>Increment Counter</button>
//             <button onClick={this.decrement}>Decrement Counter</button>
//         </div>
//     )
// }
// }