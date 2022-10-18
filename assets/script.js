var word = document.querySelector("#word")
var button = document.querySelector("#dude")

function palindrome(string){
    var reversed = string.split("").reverse().join("")

    if(reversed == string){
        alert(`${word.value} is a palindrome`)
    } else alert(`${word.value} is NOT a palindrome`)
}

button.addEventListener("click", () => {
    palindrome(word.value)
})