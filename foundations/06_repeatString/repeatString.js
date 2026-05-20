const repeatString = function(string, num) {

  let sol = "";

  if (num < 0) {
    return 'ERROR';
  } else {
    for (let i = 0; i < num; i++) {
      sol += string;
    }
  }
  return sol;
};

// Do not edit below this line
module.exports = repeatString;
