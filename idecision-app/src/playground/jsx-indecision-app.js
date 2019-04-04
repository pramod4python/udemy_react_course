console.log('App.js is running');

const app = {
    title: 'New Indecision App!',
    subTitle: 'Try it out today!',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};
const appRoot = document.getElementById('app');
const removeAll = () => {
    app.options = [];
    render();
};
const onMakeDecision = () =>{
    const randonNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randonNum];
    alert(option);
};
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here are your options:' : 'No Options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) =>{
                    return <li key={option}>{option}</li>
                })
            }    
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();





