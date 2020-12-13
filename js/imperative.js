// https://www.freecodecamp.org/news/imperative-vs-declarative-programming-difference/
// Imperative programming style
const passwords = [
    "123456",
    "password",
    "admin",
    "freecodecamp",
    "mypassword123",
];

let longPasswords = [];
for (let i = 0; i < passwords.length; i++) {
    const password = passwords[i];
    if (password.length >= 9) {
        longPasswords.push(password);
    }
}

console.log(longPasswords);

// Declarative programming style
const longPasswords = passwords.filter(password => password.length >= 9);

console.log(longPasswords);