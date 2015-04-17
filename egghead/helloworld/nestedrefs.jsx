var App = React.createClass({
  getInitialState:function(){
    return {
      red: 0,
      green: 0,
      blue: 0
    }
  },
  update: function(){
    this.setState({
      // Link properties to dom node values via `this.refs.propname`
      // getDomNode is a React method, documentation here:
      // https://facebook.github.io/react/docs/component-api.html#getdomnode
      red: this.refs.red.refs.inp.getDOMNode().value,
      green: this.refs.green.refs.inp.getDOMNode().value,
      blue: this.refs.blue.refs.inp.getDOMNode().value
    });
  },
  render:function(){
    // Create multiple widgets inside of parent div
    return (
      <div>
        <Slider ref="red" update={this.update} />
        <label>{this.state.red}</label>
        <Slider ref="green" update={this.update} />
        <label>{this.state.green}</label>
        <Slider ref="blue" update={this.update} />
        <label>{this.state.blue}</label>
      </div>
      );

  }
});

var Slider = React.createClass({
  render:function(){
    // `ref="inp"`
    return (
        <div>
        <input ref="inp" type="range" min="0" max="255" onChange={this.props.update} />
        </div>
      );
  }
});

// Only need to render the parent App on document, children are included
React.render(<App />, document.body);
