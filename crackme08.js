// Vous devez assigner la bonne string à la variable password ci-dessous
// Et obtenir le message 'GOOD' en éxecutant le programme

/* Any letter of the alphabet works as long as there is only one, joint to the number 42.
By default I writenthe B because in the Caesar code, the hexadécimal number 42 is B in character ASCII */

let password = "42B";

const crackme8 = (password) => {
  let tmp1 = password.split("").slice(-3, -1).join("");
  if (Number(tmp1) === 42) {
    console.log("GOOD");
  } else {
    console.log("BAD");
  }
};
crackme8(password);

// Output : GOOD (With any alphabet letter, it work)
