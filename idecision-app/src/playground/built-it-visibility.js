const appRoot = document.getElementById('app');
const app = {
    title: 'Visibility Toggle',    
    displaytext: 'Hey text to be displayed',
    buttonTextShow:'Show Details',
    buttonTextHide:'Hide Details'
};
let visibility = false;
const onFormSubmit = (e) => {
    e.preventDefault();
    visibility = !visibility;
    if(visibility){
        app.displaytext =  'Hey text to be displayed';
    }
    else{
        app.displaytext ='';
    }
    render();
};
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <form onClick={onFormSubmit}>
                <button name="subButton">{visibility ? app.buttonTextHide : app.buttonTextShow}</button>
                {(visibility) && <p> {app.displaytext}</p> }
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
render();