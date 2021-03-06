// Vous devez assigner la bonne string à la variable password ci-dessous
// Et obtenir le message 'OK' en éxecutant le programme

/* I used the ASCII table to convert to decimal the 5 lowercase and inverted letters.
The total is 535, the first 2 digits 53, 35 in reverse. */

let password = "JustASimplePassword";

const crackme9 = (password) => {
  if (password.startsWith("Just") && password.endsWith("Password")) {
    let tmp1 = password.slice(4).slice(0, -8);
    tmp1 = tmp1.split("").reverse().join("");
    if (Number.isNaN(Number(tmp1))) {
      tmp1 += String.fromCharCode(35);
      if (tmp1 === "e" + "l" + "p" + "m" + "iSA#") {
        console.log("OK");
      } else {
        console.log("BAD");
      }
    } else {
      console.log("BAD");
    }
  } else {
    console.log("BAD");
  }
};
crackme9(password);

// Output : OK
