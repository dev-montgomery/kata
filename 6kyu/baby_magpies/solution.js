'use strict';

const kata = module.exports = {};

kata.child = function(bird1, bird2) {
	if (bird1 === bird2) return false;
	
	const a = bird1.split(''), b = bird2.split('');
	const dif = b.filter((e,i) => e === a[i]).length;
	
	return dif + 3 > a.length;
};
  
kata.grandchild = function(bird1, bird2) {
	if (bird1.length === 1 && bird1 !== bird2) return false;
	if (kata.child(bird1, bird2)) return true;
	
	const a = bird1.split(''), b = bird2.split('');
	const dif = b.filter((e,i) => e === a[i]).length;
	
	return dif + 5 > a.length;
};