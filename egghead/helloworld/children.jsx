var App = React.createClass({
  render:function(){
    return <Button>I <Heart /> React</Button>
  }
});

var Button = React.createClass({
  render:function(){
    // Access inner elements via this.props.children
    // Similar to Angular's transclusion
    return <button>{ this.props.children }</button>
  }
});

var Heart = React.createClass({
  render:function(){
    return <span>&#9825;</span>
  }
});

React.render(<App />, document.body);
