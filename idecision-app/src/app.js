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

// const user = {
//     name:'Pramod',
//     age:34,
//     location:'New York'
// };
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
const appRoot = document.getElementById('app');
const userInfo = document.getElementById('user')
ReactDOM.render(template, appRoot);
ReactDOM.render(userTemplate, userInfo);