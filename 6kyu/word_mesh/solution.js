'use strict';

const kata = module.exports = {};

kata.wordMesh = arr => {
	const mesh = [];

	for (let i = 0 ; i < arr.length ; i++) {    
		if (i + 1 < arr.length) {
			const a = arr[i];
			const b = arr[i + 1];
			let string = '';
			
			for (let u = 0 ; u < a.length ; u++) {
				const subA = a.substring(u, a.length);
				const subB = b.substring(0, subA.length);
				
				if (subA === subB && subA.length > string.length) string = subA;
			};
			
			if (string.length) mesh.push(string);
		}; 
	};
	
	return mesh.length + 1 === arr.length ? mesh.join('') : 'failed to mesh';
};