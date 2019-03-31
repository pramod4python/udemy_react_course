console.log('App.js is running');

const app = {
title:'New Indecision App!',
subTitle:'Try it out today!',
options:['One','Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subTitle && <p>{app.subTitle}</p>}
        <p>{(app.options && app.options.length > 0 )? 'Here are your options:' : 'No Options' }</p>
        <ol>
        <li>{app.options[0]}</li>
        <li>{app.options[1]}</li>
        </ol>
    </div>
);

const user = {
    name:'Pramod',
    age:34,
    location:'New York'
};
function getLocation(location){
    if(location){
        return <p>Location : {location}</p>
    }
}
const userTemplate = (
    <div>
    <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>

);

let count = 0;
const addOne = () => {
    console.log('addOne');
}
const minusOne = () => {
    console.log('minusOne');
}
const reset=() => {
    console.log('reset');
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button> 
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>        
    </div>
);
console.log(templateTwo);



const appRoot = document.getElementById('app');
const userInfo = document.getElementById('user')
const countRender = document.getElementById('count')
ReactDOM.render(template, appRoot);
ReactDOM.render(userTemplate, userInfo);
ReactDOM.render(templateTwo, countRender);