'use strict';

const kata = module.exports = {};

kata.parseHTMLColor = color => {
	if (color[0] === "#") {
		const [r, g, b] = color.length === 4 
			? [color[1] + color[1], color[2] + color[2], color[3] + color[3]]
			:	[color.slice(1, 3), color.slice(3, 5), color.slice(5, 7)];

		return {r: parseInt(r, 16), g: parseInt(g, 16), b: parseInt(b, 16)};
	} else {
		return parseHTMLColor(PRESET_COLORS[color.toLowerCase()]);
	};
};