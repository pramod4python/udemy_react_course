console.log('App.js is running');

const app = {
    title: 'New Indecision App!',
    subTitle: 'Try it out today!',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
        render();
    }
};
const appRoot = document.getElementById('app');
const removeAll = () => {
app.options=[];
render();
};
const render = ()=>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No Options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>{app.options[0]}</li>
                <li>{app.options[1]}</li>
            </ol>
            <button onClick={removeAll}>Remove all</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();





