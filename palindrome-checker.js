function palindrome(str) {
    let stringInput = str.replace(/[(-\/_,.) ]/g, "").toLowerCase();
    let reversedString = stringInput.split('').reverse().join('');
    return (stringInput === reversedString) ? "Is palindrome" : "Is not palindrome";
}

function checker(){
    let text = document.getElementById("text").value;
    text = palindrome(text);
    document.getElementById("res").value = text;
}