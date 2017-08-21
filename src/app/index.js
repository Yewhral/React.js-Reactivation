const React = require('react');
const ReactDOM = require('react-dom');

// Create component
// React way

let TodoComponent = React.createClass({
    render: function(){
        return (
            <div>
            <h1>Hello!</h1>
            <p>{this.props.message}</p>
                <p>Fish: {this.props.fish.name}</p>
                <p>Smell: {this.props.fish.smellFactor}</p>
                <p>Price: {this.props.fish.price} $</p>
            </div>
        );
    }
});

let myFish ={ name: 'Salmon', smellFactor: 'Smelly smell', price:'19.90'};


//Put component into HTML
ReactDOM.render(<TodoComponent message="I want to eat fish" fish={myFish}/>, document.getElementById('todo-wrapper'));