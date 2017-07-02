class Button extends React.Component {

    // we can define it as a component as instance property
    handleClick = () => {
    // this == component instance, handle click reads the current counter by using {this.state.counter++}
        this.props.onClickFunction(this.props.incrementValue);
};

render() {
    return(
        <button onClick={this.handleClick}>
           +{this.props.incrementValue}
        </button>
    );
  }
}

const Result = (props) => {
    return (
        <div>{props.counter}</div>
    );
};

class App extends React.Component {
    state = { counter: 0 };

    incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
    counter: prevState.counter + 1
    }));
};
render() {
    return (
        <div>
        <Button incrementValue = {1} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {5} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {10} onClickFunction={this.incrementCounter} />
        <Button incrementValue = {100} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
        </div>
     );
  }
}
ReactDOM.render(<App />, mountNode);


