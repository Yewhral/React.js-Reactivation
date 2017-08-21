const React = require('react');
const ReactDOM = require('react-dom');

// Create component
// React way

let TodoComponent = React.createClass({
    render: function(){
        return (<h1>Hello!</h1>);
    }

});


//Put component into HTML
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));