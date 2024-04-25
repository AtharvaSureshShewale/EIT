import { useState } from "react";

function Component1(){
    const[user,setUser]=useState('Atharva Shewale');

    return(
        <>
        <h1>Component 1</h1>
        <Component2 user={user}/>
        </>
    )
}

function Component2({user}){
    return(
        <>
        <h1>Component 2</h1>
        <Component3 user={user}/>
        </>
    )
}

function Component3({user}){
    return(
        <>
        <h1>Component 3</h1>
        <h1>Hello {user} again</h1>
        </>
    )
}

export default Component1;