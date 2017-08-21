const React = require('react');
const ReactDOM = require('react-dom');

// Create component
// React way

let TodoComponent = React.createClass({

    getInitialState: function(){
        return {
        todos: ['do thing A', 'do thing B', 'do thing C'],
        age: 30
        }
    },

    render: function(){
        let todos = this.state.todos;
        todos = todos.map(function(item, index){
           return(
               <li>{item.toUpperCase()}</li>
           )
        });
        let ager = setTimeout(function(){
           this.setState({
               age:35
           })
        }.bind(this), 5000);

        return (
            <div id="todo-list">
                <p>{this.state.age}</p>
                <p>Test text</p>
                <ul>{todos}</ul>

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