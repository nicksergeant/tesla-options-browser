var _ = require('lodash');
var React = require('react');

module.exports = React.createClass({
  total: function() {
    return _([
        this.props.basePrice,
        this.props.inspectPrepPrice,
        this.props.personalDeliveryPrice,
      ])
      .concat(_.pluck(this.props.options.value(), 'price'))
      .reduce(function(sum, num) {
        return sum + num;
      });
  },
  render: function() {
    return (
      <tfoot>
        <tr className="subtotal">
          <td><em>Base Price</em></td>
          <td>{this.props.currencyCode}{this.props.basePrice}</td>
        </tr>
        <tr className="subtotal">
          <td><em>Inspect Prep Price</em></td>
          <td>{this.props.currencyCode}{this.props.inspectPrepPrice}</td>
        </tr>
        <tr className="subtotal">
          <td><em>Personal Delivery Price</em></td>
          <td>{this.props.currencyCode}{this.props.personalDeliveryPrice}</td>
        </tr>
        <tr className="total">
          <td><strong>Total with options</strong></td>
          <td>
            <strong>
              {this.props.currencyCode}
              {this.total()}
            </strong>
          </td>
        </tr>
      </tfoot>
    );
  }
});
