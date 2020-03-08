class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.handleRemoveOption=this.handleRemoveOption.bind(this);
        this.state={
            options: props.options
        };
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if(options){
                this.setState(() => ({options}));
            }
        }
        catch(e){
            //do nothing
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    handleRemoveAll(){
        this.setState(() => ({options:[]}))
    }
    handleRemoveOption(optionToRemove){
        this.setState((prevState) => ({
            options:prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick(){
        const randonNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randonNum];
        alert(option);
    }
    handleAddOption(option){
        console.log(option);
        if(!option){
            return 'Enter a valid value to the list'
        }else if (this.state.options.indexOf(option) > -1){
            return 'Option already exists!!'
        }
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer';
        
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOption={this.state.options.length > 0}
                handlePick={this.handlePick}/>
                <Options 
                options={this.state.options} 
                handleRemoveAll={this.handleRemoveAll}
                handleRemoveOption={this.handleRemoveOption}/>
                <AddOption 
                handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options:[]
};
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
};
Header.defaultProps = {
    title: 'Indecision App'
};
// class Header extends React.Component {
//     //react components require a method render()
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }
const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption}
            >What should I do?
            </button>
        </div>
    );
};
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOption}
//                 >What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleRemoveAll}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                <Option 
                key={option} 
                optionText={option} 
                handleRemoveOption={props.handleRemoveOption}
                />
                ))
            }
        </div>
    );
}; 
// class Options extends React.Component {
//     render() {        
//         return (
//             <div>
//                 <button onClick={this.props.handleRemoveAll}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }
//             </div>
//         );
//     }

// }
const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button onClick={(e) => {//e is the event handler object
                props.handleRemoveOption(props.optionText)
            }}            
            >Remove
            </button>
        </div>
    );
}
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.optionText}</p>
//             </div>
//         );
//     }
// }
class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            error:undefined
        }
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({error}));
        
        if(!error){        
            e.target.elements.option.value='';
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button>Add Options</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));