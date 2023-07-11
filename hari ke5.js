for (let counter = 2; counter < 22; counter += 2) {
    console.log(counter + ' galang ganteng banget');
  }
  console.log("--------------");
  
  for (let counter = 20; counter > 0; counter -= 2) {
    console.log(counter + ' galang ganteng banget');
  }
  console.log("soal 2");
  
  
  for (let sd = 1; sd <= 20; sd++) {
    if (sd % 3 === 0) {
      console.log(sd + ' merupakan kelipatan 3');
    } else {
      if (sd % 2 === 0) {
        console.log(sd + ' merupakan angka genap ' + '(' + sd + ')');
      } else {
        console.log(sd + ' merupakan angka ganjil ' + '(' + sd + ')');
      }
    }
  }
  console.log("soal 3");
  
  let buakar = "";
  for (let i = 0; i < 4; i++) {
    buakar += "#####\n";
  }
  console.log(buakar);
  
  console.log("soal 4");
  let d = "";
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        d+="#";
    }
    d += "\n";
  }
  console.log(d);
  
  console.log("soal 5");
  let cah = "";
  for (let i = 0; i < 10; i++) {
    cah += "# # # # \n";
  }
  console.log(cah);
  