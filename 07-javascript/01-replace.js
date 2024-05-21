const replaceItems = (input) => {
  // return a string with 'gold' replaced by 'SHINY' and 'wander' replaced by 'roam', regardless of the case of the letters

  // for reference, see the MDN "Regular Expressions" entry:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

  //we use regular expressions by using /abc/, it has many function(like replace) that we can found in MDN web page (above reference)
  //gi flag added g-global, for muliple repeation, i- ignore the case( canptial or not)

  // solution -1//
  // input=input.replace(/gold/gi,'SHINY').replace(/wander/i,'roam');

  // solution -2
  // let re=/gold/gi
  // input=input.replace(re,'SHINY').replace(/wander/i,'roam')
  // return input;

  //solution -3 - one line code
  return input.replace(/gold/gi, "SHINY").replace(/wander/i, "roam");
};

console.log(replaceItems("All that is gold does not glitter"));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems("Wisdom is better than silver or GOLD."));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems("Not all those who Wander are lost"));
// expected: 'Not all those who roam are lost'
