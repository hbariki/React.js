/**
 * Created by nmekala on 7/1/17.
 */
class Button extends React.Component {
    state = { counter : 0}
    // we can define it as a component as instance property
    handleClick = () => {
    // this == component instance, handle click reads the current counter by using {this.state.counter++}
    this.setState((prevState) => ({
    counter: prevState.counter + 1
}));

};

render() {
    return(
        <button onClick={this.handleClick}>
    {this.state.counter}
</button>
);
}
}

ReactDOM.render(<Button />, mountNode);