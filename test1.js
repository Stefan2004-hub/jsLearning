function Person (props){
	return (
		<div className="person">
		  <h1>{props.name}</h1>
		  <p>Your age: {props.age}</p>
		</div>
	);
}

// ReactDOM.render(<Person name="Max" age="26"/>, document.querySelector('#p1'));
// ReactDOM.render(<Person name="Stefan" age="35"/>, document.querySelector('#p2'));

var app = (
	<div>
		<Person name = "Max" age = "26"/>
		<Person name = "Stefan" age = "35"/>
	</div>
);

ReactDOM.render(app, document.querySelector("#app"));