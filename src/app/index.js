const React = require('react');
const ReactDOM = require('react-dom');

const TodoItem = require('./todoItem');
const AddItem = require('./AddItem');
require('./css/index.css');

// Create component
// React way

let TodoComponent = React.createClass({

    getInitialState: function(){
        return {
        todos: ['do thing A', 'do thing B', 'do thing C', 'do thing D'],
        age: 30
        }
    },

    render: function(){
        let todos = this.state.todos;
        todos = todos.map(function(item, index){
           return(
               <TodoItem item={item} key={index} onDelete={this.onDelete}/>
           )
        }.bind(this));
        let ager = setTimeout(function(){
           this.setState({
               age:35
           })
        }.bind(this), 5000);

        return (
            <div id="todo-list">
                <p>{this.state.age}</p>
                <p onClick={this.clicked}>Test text with onclick</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd}/>

            <h1>Hello!</h1>
            <p>{this.props.message}</p>
                <p>Fish: {this.props.fish.name}</p>
                <p>Smell: {this.props.fish.smellFactor}</p>
                <p>Price: {this.props.fish.price} $</p>
            </div>

        );
    },

    clicked: function(){
        console.log('this has been clicked');
    },

    onAdd: function(item){
        let updatedTodos = this.state.todos;
          updatedTodos.push(item);
        this.setState({
            todos:updatedTodos
        });
    },

    onDelete: function(item){
        let updatedTodos = this.state.todos.filter(function(val,index){
            return item !== val;
        });
        this.setState({
            todos:updatedTodos
        });
    }
});



let myFish ={ name: 'Salmon', smellFactor: 'Smelly smell', price:'19.90'};


//Put component into HTML
ReactDOM.render(<TodoComponent message="I want to eat fish" fish={myFish}/>, document.getElementById('todo-wrapper'));