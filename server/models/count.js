

var cozydb = require('cozydb');

var CountModel = cozydb.getModel('SharedCount', {
  name:					String,
  description:	String,
	allExpenses:	{type: Number, default: 0},
	users:				[Object],
	expenses:			[Object],
	currencies:		[Object],
	status:				String,
});

module.exports = CountModel;
