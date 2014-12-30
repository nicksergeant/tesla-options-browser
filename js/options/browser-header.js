var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="browser-header row">
        <h4 className="four columns">Options</h4>
        <label className="four columns show-pricing">
          <input name="show-pricing" id="query" type="checkbox"
            onChange={this.props.onChangePriceVisibility}
            checked={this.props.showPricing} />
          <span className="label-body">Show pricing</span>
        </label>
        <input className="four columns" type="text" placeholder="Search options..."
          onChange={this.props.onSearch} />
      </div>
    );
  }
});
