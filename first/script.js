localStorage.setItem('name', 'Bob');
// console.log(localStorage.getItem('name'));
localStorage.removeItem('name');

sessionStorage.setItem('name', 'John');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');
sessionStorage.setItem('name', 'Bob');

document.cookie = 'name=kyle; expires=' + new Date(2023, 0, 1)
.toUTCString()
document.cookie = 'lastName=Smith; expires=' + new Date(9999, 0, 1)
.toUTCString()
console.log(document.cookie);

