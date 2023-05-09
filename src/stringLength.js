function stringLength(string) {
  const length = string.length 
    if(length < 1) { 
      throw new Error('You need at least one character'); 
    }
    if(length > 10) {
      throw new Error('You should not have more than 10 characters');
    }
    return length;
}

module.exports = stringLength;