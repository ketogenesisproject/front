var React = require('react');
var Reflux = require('reflux');
var JSE = require('JekyllStoreEngine');
var money = require('../helpers/money');

var BasketSummary = React.createClass({
  mixins: [Reflux.connect(JSE.Stores.Order)],

  render: function() {
  	var total = this.state.order.getIn(['totals', 'price']);
  	return total.gt(0) ? this.renderSummary(total) : null;
  },

  renderSummary: function(total) {
    return (
      <a href={this.props.link}>
        <img src={this.props.img} alt='Cart' id='cart' />
        <span>{money(total)}</span>
      </a>
    );
  }
});

module.exports = BasketSummary;
