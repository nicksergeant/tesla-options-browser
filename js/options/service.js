var _ = require('lodash');

var options = require('../../api/options.json');
var optionPrices = require('../../api/option-prices.json');

var mappedOptions = _(options.options)
  .keys()
  .map(function(key) {
    return _({ id: key, currency_code: options.currency_code })
      .merge(options.options[key])
      .merge(optionPrices.options[key])
      .value();
  })
  .sortBy('price')
  .reverse();

module.exports = {
  raw: _(options).merge(optionPrices).value(),
  data: mappedOptions
};
