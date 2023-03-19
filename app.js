                                                               // Chapter 21 to 25

                                                            //    Question: 01

// var firstName = prompt("Enter your first name.")
// var lastName = prompt("Enter your last name.")
// var fullName = (firstName + lastName)
// alert("Hello!" + " " + fullName)

                                                            //    Question: 02

// var favMobile = prompt("What is your favorite mobile phone model.")
// var lengthMobile = favMobile.length
// document.write("My favorite phone is:" + " " + favMobile + "<br />")
// document.write("Length of string:" + " " + lengthMobile)

                                                            //    Question: 03

// var string = "Pakistani"
// var index = string.indexOf("n")
// document.write("String:" + string + "<br />")
// document.write("Index of 'n':" + index)

                                                            //    Question: 04

// var string = "Hello World"
// var index = string.lastIndexOf("l")
// document.write("String:" + string + "<br />")
// document.write("Index of 'l':" + index)

                                                            //    Question: 05

// var string = "Pakistani"
// var character = string.charAt(3)
// document.write("String:" + string + "<br />")
// document.write("Character at index 3:" + character)

                                                            //    Question: 06

// var question = "What is your favorite color? ";
// var promptText = "Please enter below.";
// var fullQuestion = question.concat(promptText);
// console.log (fullQuestion)

                                                            //    Question: 07

// var city = "Hyderabad"
// var newWord = city.replace("Hyder" , "Islam")
// document.write("City:" + city + "<br />")
// document.write("After replacement:" + newWord)

                                                            //    Question: 08

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var words = message.split(" ");
// var newWords = [];

// for (var i = 0; i < words.length; i++) {
//   if (words[i] === "and") {
//     newWords.push("&");
//   } else {
//     newWords.push(words[i]);
//   }
// }

// var newMessage = newWords.join(" ");
// document.write(newMessage);

                                                            //    Question: 09

// var valueOne= "472"
// document.write("Value:" + " " + valueOne + "<br />")
// document.write("Type:" + " " + typeof valueOne + "<br />")
// var typeChange= Number(valueOne)
// document.write("Value:" + " " + valueOne + "<br />")
// document.write("Type:" + " " + typeof typeChange)

                                                            //    Question: 10

// var user= prompt("Enter a word.")
// document.write( "User Input:" + " "  + user + "<br />" )
// var capiUser= user.toUpperCase();
// document.write("Upper case:" + " "  + capiUser)

                                                            //    Question: 11

// var user= prompt("Enter a word.")
// document.write("User Input:" + " " + user + "<br />" )
// var titleCase= user.indexOf(0);
// var pushing= titleCase
//Incomplete

                                                            //    Question: 12

// var num = 35.36 ;
// document.write("Number:" + " " + num + "<br />")
// var roundof= num.toString().replace("." , "")
// document.write("Result:" + " " + roundof)

                                                            //    Question: 13
                                                            
// var username = prompt("Enter your username:");

// if (/[@.,!]/.test(username)) {
//   alert("Please enter a valid username without special symbols [@ . , !]");
// } else {
//   alert("Your username is: " + username);
// }

                                                            //    Question: 14

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// var searchTerm = prompt("Enter an item to search for:");

// var found = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === searchTerm.toLowerCase()) {
//     found = true;
//     break;
//   }
// }

// if (found) {
//   alert(searchTerm + " is found in the list!");
// } else {
//   alert(searchTerm + " is not found in the list.");
// }

                                                            //    Question: 15

// var password = prompt("Enter a password:");

// var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

// if (regex.test(password) && isNaN(parseInt(password[0]))) {
//   alert("Password is valid.");
// } else {
//   alert("Password is not valid. Please enter a valid password.");
// }

                                                            //    Question: 16

// var university = "University of Karachi"
// var array= university.split("");
// document.write(array + "<br />")

                                                            //    Question: 17

// var word= prompt("Enter a word.")
// document.write("User input:" + " " + word + "<br />")
// var array= word.split("");
// var lastChar = array.pop();
// document.write ("Last character of input:" + " " + lastChar )

                                                            //    Question: 18

// var string= "The quick brown fox jumps over the lazy dog"
// var lowerString= string.toLowerCase();
// var find= "the";
// var stringArray= lowerString.split(" ");
// var number= 0;
// for(var i = 0; i < stringArray.length; i++){
//    if(stringArray[i] === find){
//       number++;
//    }
// }
// document.write("Text:" + " " + string + "<br />")
// document.write("There are " + number + " " + "occurrences of word " + find )

                                                               // Chapter 26 to 30

                                                            //    Question: 1

// var integer= prompt("Enter a Positive Integer")
// var round= Math.round(integer)
// var floor= Math.floor(integer)
// var ceil= Math.ceil(integer)
// document.write("Number:" + " " + integer + "<br />")
// document.write("Round off value:" + " " + round + "<br />")
// document.write("Floor value:" + " " + floor + "<br />")
// document.write("Ceil value:" + " " + ceil)

                                                            //    Question: 2

// var negfloat= prompt("Write a Negative Floating Point")
// var round= Math.round(negfloat)
// var floor= Math.floor(negfloat)
// var ceil= Math.ceil(negfloat)
// document.write("Number:" + " " + negfloat + "<br />")
// document.write("Round off value:" + " " + round + "<br />")
// document.write("Floor value:" + " " + floor + "<br />")
// document.write("Ceil value:" + " " + ceil)

                                                            //    Question: 3

// var num = +prompt("Enter a number.")
// var value = Math.abs(num)
// document.write("The absolute value of " + num + " is " + value)

                                                            //    Question: 4

// var value = Math.floor(Math.random() * 6) + 1;
// document.write("Random dice value: " + value)

                                                            //    Question: 5

// var value = Math.floor(Math.random() * 2) + 1;
// if(value === 1){
//       document.write(value + "<br />")
//       document.write("Random coin value: " + "Tails")
// }else if(value === 2){
//    document.write(value + "<br />")
//    document.write("Random coin value: " + "Heads")
// }

                                                            //    Question: 6

// var value = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + value)

                                                            //    Question: 7

// var input = parseFloat(prompt("What is your Weight."))
// document.write(input)
// Incomplete

                                                            //    Question: 8

// var value = Math.floor(Math.random() * 10) + 1;
// var input= +prompt("Write a number between 1 and 10")
// if (input === value){
//    alert("Congrats!")
// }else if(input !== value){
//    alert("Oops! You're incorrect")
// }

                                                               // Chapter 31 to 34

                                                            //    Question: 1

// var now = new Date()
// console.log(now)

                                                            //    Question: 2

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var now = new Date()
// var getMonth = months[now.getMonth()]; 
// document.write("Current month: " + getMonth)

                                                            //    Question: 3

//  var now = new Date().toDateString()
//  var dayWords = now.slice(0,3) 
// document.write ( "Today is " + dayWords)

                                                            //    Question: 4

// var today = new Date();

// if (today.getDay() === 0 || today.getDay() === 6) {
//   document.write("It's Fun day");
// } else {
//   document.write("Sorry, it's not Fun day");
// }

                                                            //    Question: 5

// var now = new Date().getDate()
// if (now <= 16){
//    document.write("First fifteen days of the month")
// }else(document.write("Last days of the month"))

                                                            //    Question: 6

// var now = Date.now(); 
// var minutesSince = Math.floor(now / 60000);
// document.write(minutesSince);
// Incomplete

                                                            //    Question: 7

// var now = new Date(); 
// var hour = now.getHours(); 

// if (hour < 12) {
//   alert("It's AM"); 
// } else {
//   alert("It's PM"); 
// }

                                                            //    Question: 8

// var laterDate = new Date(2020, 11, 31);
// document.write("Later Date: " + laterDate)

                                                            //    Question: 9

// var ramadanStart = new Date("2023-03-22"); 
// var today = new Date(); 
// var daysPassed = Math.round((today - ramadanStart) / (1000 * 60 * 60 * 24)); 
// document.write(daysPassed + " days have passed since the start of Ramadan 2023."); 




                                                      



