function palindrome(str) {
    var stringInput = str.replace(/[(-\/_,.) ]/g, "").toLowerCase();
    var reversedString = stringInput.split('').reverse().join('');
    return (stringInput === reversedString) ? "Is palindrome" : "Is not palindrome";
  }

function checker(){
  let text = document.getElementById("text").value;
  text = palindrome(text);
  document.getElementById("res").value = text;
}