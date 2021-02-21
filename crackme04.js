// Vous devez assigner la bonne string à la variable password ci-dessous
// Et obtenir le message 'GOOD' en éxecutant le programme

// Codage Unicode en valeurs décimales - The 9th letter of Armenian alphabet, T'o

let password = "Թ";

const crackme4 = (password) => {
  let tmp1 = 0;
  for (let i = 0; i < password.length; ++i) {
    tmp1 += password.charCodeAt(i);
  }
  if (tmp1 === 1337) {
    console.log("GOOD");
  } else {
    console.log("BAD");
  }
};

crackme4(password);

//Output: GOOD
