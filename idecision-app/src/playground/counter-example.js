class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state ={
            count:props.count
        };
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'),10);
        
        if(!isNaN(count)){
            this.setState(() => ({count})); 
        }   
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            const value = parseInt(this.state.count,10);
            const count = localStorage.setItem('count',value);
        }        
    }


    handleAddOne (){
        this.setState((oldState) => {            
            return {
                count: oldState.count + 1
            };
        });
    }
    handleMinusOne (){
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }
    handleReset (){
        this.setState(()=>{
            return {
                count : 0
            };
        });
    }
    render(){
        return(
            <div>
            <h1>Count:{this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button> 
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
Counter.defaultProps ={
    count:0
};

ReactDOM.render(<Counter />, document.getElementById('app'));


// const user = {
//     name:'Pramod',
//     age:34,
//     location:'New York'
// };
// function getLocation(location){
//     if(location){
//         return <p>Location : {location}</p>
//     }
// }
// const userTemplate = (
//     <div>
//     <h1>{user.name ? user.name.toUpperCase() : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//     </div>

// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset=() => {
//     count=0;
//     renderCounterApp();
// }
// const countRender = document.getElementById('count')
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button> 
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>        
//         </div>
//     );    
//     ReactDOM.render(templateTwo, countRender);
// };
// renderCounterApp();


// const userInfo = document.getElementById('user')

// ReactDOM.render(template, appRoot);
// ReactDOM.render(userTemplate, userInfo);