function palindrome(str) {
    var stringInput = str.replace(/[(-\/_,.) ]/g, "").toLowerCase();
    var reversedString = stringInput.split('').reverse().join('');
    return (stringInput === reversedString) ? true : false;
  }
  
  palindrome("eye");