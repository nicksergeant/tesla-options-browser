var _ = require('lodash');
var BrowserHeader = require('./browser-header');
var Options = require('./service');
var Option = require('./option');
var React = require('react');
var Totals = require('./totals');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      showPricing: true,
      options: Options.data,
      optionsRaw: Options.raw
    }
  },
  changePriceVisibility: function(event) {
    this.setState({
      showPricing: event.target.checked
    });
  },
  handleSearch: function(event) {
    this.setState({
      query: event.target.value.toLowerCase()
    });
  },
  optionIsVisible: function(option) {
    if (option.no_ui) return false;
    return option.price !== 0 || option.is_default;
  },
  render: function() {

    var options = _(this.state.options)
      .filter(function(option) {
        return this.optionIsVisible(option);
      }.bind(this));

    if (this.state.query) {
      options = options.filter(function(option) {
        return option.name.toLowerCase().indexOf(this.state.query) !== -1 ||
               (option.description && option.description.toLowerCase().indexOf(this.state.query) !== -1);
      }.bind(this));
    }

    var optionNodes = options.map(function(option) { 
      return (<Option key={option.id} option={option} showPricing={this.state.showPricing} />);
    }.bind(this));

    var priceHeading = this.state.showPricing ? (<th>Price</th>) : (<th></th>);

    return (
      <div>
        <BrowserHeader
          showPricing={this.state.showPricing}
          onChangePriceVisibility={this.changePriceVisibility}
          onSearch={this.handleSearch} />
        <table className="u-full-width">
          <thead>
            <tr>
              <th>Option</th>
              {priceHeading}
            </tr>
          </thead>
          <tbody>
            {optionNodes}
          </tbody>
          <Totals
            currencyCode={this.state.optionsRaw.currency_code}
            basePrice={this.state.optionsRaw.base_price}
            inspectPrepPrice={this.state.optionsRaw.inspect_prep_price}
            personalDeliveryPrice={this.state.optionsRaw.personal_delivery_price}
            options={options} />
        </table>
      </div>
    );
  }
});
