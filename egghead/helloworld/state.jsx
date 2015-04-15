var Stt = React.createClass({
  // Set the initial state of the property
  getInitialState:function(){
    return {
      txt: 'inital state txt'
    }
  },
  // Create an event listener and action for the component
  update: function(e){
    this.setState({ txt: e.target.value });
  },
  render:function(){
    return (
      <div>
        <input type="text" onChange={ this.update } />
        <h1>{ this.state.txt }</h1>
      </div>
      );
  }
});

React.render(<Stt txt="text property"  />, document.body);
