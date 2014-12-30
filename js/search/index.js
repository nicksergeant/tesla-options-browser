var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="container">
        <input name="q" id="query" type="text"
          placeholder="Search badges..."
          onChange={this.props.onSearch} />
      </div>
    );
  }
});
