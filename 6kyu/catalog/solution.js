'use strict';

const kata = module.exports = {};

kata.catalog = (s, article) => {
  const catalogItems = s.replace(/<prod><name>|<\/qty><\/prod>/g, '-')
    .replace(/<\/name><prx>/g, ' > prx: $')
    .replace(/<\/prx><qty>/g, ' qty: ')
    .split('-')
    .filter(item => item !== '\n\n' && item !== '');
  const articleItems = catalogItems.filter(item => item.includes(article));
  const entry = articleItems.join('\r\n');
  
  return entry.length > 0 ? entry : 'Nothing';
};