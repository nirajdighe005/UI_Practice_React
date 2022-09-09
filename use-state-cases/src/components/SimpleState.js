import { useState } from "react";

/*

Important set State points
    - setState should never be inside conditional statement or loops. Because the order in which the statement 
    are declared needs to be maintained.
    - the useState hook returns an array in which the first element is the state, and second is setter for the
    state.
    - hooks can only be used in functional components it cannot be used in class components.

*/
function SimpleState() {
    // Here the initial value of count is passed to constructor useState
    let [count, setCount] = useState(50);
    //this constructor is invoked only once at initialization
    let [state, setState] = useState(() => {
        console.log("This is single invocation constructor");
        return { "score": 50, "theme": "blue"};
    });

    //this constructor is invoked every time there is change in any state
    let [value, setValue] = useState(multipleInvocation());


    function multipleInvocation() {
        console.log("This is multiple invocation constructor");
        return 50;
    }

    return (
      <div className="SimpleState">
        <button onClick = {decrementCounter}> - </button>
        <span> {count} </span>
        <button onClick = {incrementCounter}> + </button>
        
        <br/>

        <button onClick = {incrementScore}> - </button>
        <span> {state.score} </span>
        <span> {state.theme} </span>
        <button onClick = {decrementScore}> + </button>
        
        <br/> 
        <button onClick = {() => setValue(value - 1)}> - </button>
        <span> {value} </span>
        <button onClick = {() => setValue(value + 1)}> + </button> 

      </div>
    );


    function decrementScore() {
        //in hooks the setState does not merge the object it just creates a new object and sets state to it.
        return setState(prevState => { return { score: prevState.score + 1 }; });
    }

    function incrementScore() {
        // this statement needs to be used to merge object with just changes that we want.
        return setState(prevState => { return { ...prevState, score: prevState.score - 1 }; });
    }

    function incrementCounter() {
        /*this set count works on the current count hence even if you call setCount twice it will only 
        affect once
        setCount(count + 1);
        return setCount(count + 1);
        after above evaluation, returned value will still be one greater than one, not 2. 
        */
        setCount(prevCount => prevCount + 1);
       return setCount(prevCount => prevCount + 1);
       /*In the above case the returned value will be greater than 2, because of inc by 2 */
    }

    function decrementCounter() {
        return setCount(count - 1);
    }
  }
  
  export default SimpleState;