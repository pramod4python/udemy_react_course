const app = {
    title: 'Visibility Toggle',    
    displaytext: 'Showing the text to you!',
    buttonTextShow:'Show Details',
    buttonTextHide:'Hide Details'
};
class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility=this.handleToggleVisibility.bind(this);
        this.state ={
            visibility : true
        }
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        });
    }
    render(){
        return (
            <div>
            <h1>{app.title}</h1> 
            <button name="subBtn" onClick={this.handleToggleVisibility}>{this.state.visibility ? app.buttonTextHide : app.buttonTextShow}</button>           
            {(this.state.visibility) && <p> {app.displaytext}</p> }
            </div>

        )
    }
}
ReactDOM.render(<Visibility/>,document.getElementById('app'));





// const appRoot = document.getElementById('app');

// let visibility = false;
// const onFormSubmit = (e) => {
//     e.preventDefault();
//     visibility = !visibility;
//     if(visibility){
//         app.displaytext =  'Hey text to be displayed';
//     }
//     else{
//         app.displaytext ='';
//     }
//     render();
// };
// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <form onClick={onFormSubmit}>
//                 <button name="subButton">{visibility ? app.buttonTextHide : app.buttonTextShow}</button>
//                 {(visibility) && <p> {app.displaytext}</p> }
//             </form>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };
// render();