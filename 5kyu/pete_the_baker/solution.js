'use strict';

const kata = module.exports = {};

kata.cakes = (recipe, available) => {
	const amounts = [];

	for (const ingredient in recipe) {
		amounts.push(Math.floor(available[ingredient] / recipe[ingredient]));
	};

	return amounts.includes(NaN) ? 0 : Math.min(...amounts);
};