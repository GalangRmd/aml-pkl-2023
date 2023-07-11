//charAt index
var sentence = "nama saya galang RAMADHAN bisa di panggil galang."
var galang = 10; 
var nomor = sentence.charAt(galang)
 console.log("The character at index "+galang+" is "+ nomor);

//concat string
var text1 = "galang";
var text2 = "ganteng";
var text4 = "sangat";
var text3 = text1.concat(" "+text2);
console.log(text3)

//indexof string/karakter
var asyik = "galang";
var katanya = sentence.indexOf(asyik);
console.log("kata" +asyik+" di awali di kata ke"+katanya);



//subtring
var anjay = sentence.substring(1,11)
console.log(anjay);

//substr
var uwaw = sentence.substr(1,11)
console.log(uwaw);

//touppercase
var wiwi = sentence.toUpperCase();
console.log(wiwi);

//tolowercase

var jiah = sentence.toLowerCase()
console.log(jiah);

//trin
console.log(sentence.trim())