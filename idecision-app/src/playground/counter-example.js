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
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset=() => {
    count=0;
    renderCounterApp();
}
const countRender = document.getElementById('count')
const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button> 
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>        
        </div>
    );    
    ReactDOM.render(templateTwo, countRender);
};
renderCounterApp();


const userInfo = document.getElementById('user')

ReactDOM.render(template, appRoot);
ReactDOM.render(userTemplate, userInfo);