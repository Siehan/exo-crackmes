// Vous devez assigner la bonne string à la variable password ci-dessous
// Et obtenir le message 'OK' en éxecutant le programme

/* Any letter of the alphabet works as long as there is only one.
By default I entered B because in the Caesar code, the letter corresponds to the number 1 (without shift key) */

let password = "B";

const crackme2 = (password) => {
  if (password.length === 1) {
    console.log("GOOD");
  } else {
    console.log("BAD");
  }
};

crackme2(password);

// Output : GOOD (for all the alphabet letter)
