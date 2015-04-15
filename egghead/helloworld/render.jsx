var Rndr = React.createClass({
  getDefaultProps:function(){
    return {
      greeting: 'Hello',
      place: 'Venus'
    }
  },
  propTypes: {
    greeting: React.PropTypes.string.isRequired,
    place: React.PropTypes.string.isRequired
  },
  render:function(){
    var greeting = this.props.greeting;

    // Two elements cannot be rendered without an encasing parent node
    // because this is the same as returning two functions
    // when it is compiled to Javascript

    // Properties are rendered through interpolation
    return (
      <div>
        <h2>{ greeting }</h2>
        <h1>{ this.props.place }</h1>
      </div>
    )
  }
});

// Render Rndr component on body
React.render(<Rndr place="World" />, document.body);
