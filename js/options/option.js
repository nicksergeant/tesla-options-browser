var React = require('react');

module.exports = React.createClass({
  priceLabel: function() {
    if (!this.props.showPricing) return false;
    return this.props.option.price === 0 ? '-' :
      this.props.option.currency_code + this.props.option.price;
  },
  render: function() {
    return (
      <tr>
        <td>{this.props.option.name}</td>
        <td>{this.priceLabel()}</td>
      </tr>
    );
  }
});
