var form2js = require('../vendor/form2js').form2js;
var JSE = require('JekyllStoreEngine');

function serializeAndPurchase(formElement) {
  var form = form2js(formElement);
  splitExpiry(form);
  form.card.number = form.card.number.replace(/ /g, '');
  JSE.Actions.purchase(form);
}

function splitExpiry(form) {
  var expiry = form.card.expiry.split(' / ');
  form.card.month = expiry[0];
  form.card.year = expiry[1];
  delete form.card.expiry;
}

module.exports = serializeAndPurchase;