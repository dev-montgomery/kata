'use strict';

const kata = module.exports = {};

kata.findTheKey = (message, code) => {
	const messageNums = message.split('').map(e => e.charCodeAt(0) - 96);
	const keyNums = code.map((e,i) => e - messageNums[i]).join('');
	
	for (let i = 1 ; i < keyNums.length ; i++) {
		const key = keyNums.substring(0, i);
		const divided = Math.floor(keyNums.length / i);
		const remainder = keyNums.length % i;
		
		let str = key.repeat(divided);
		
		if(remainder > 0) {
			for (let u = 0 ; u < remainder ; u++) {
				str += key[u];
			};
		};
		
		if (str === keyNums) return Number(key);
	};
	return Number(keyNums);
};