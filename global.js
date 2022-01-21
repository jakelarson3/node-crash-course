const speak = () => {
  console.log('hello, ninjas');
}

speak();

// Global Object

// console.log(global);

// global.setTimeout(() => {
//   console.log('in the timeout');
// }, 3000);

setTimeout(() => {
  console.log('in the timeout');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('in the interval');
}, 1000);

console.log(__dirname); // get path of directory
console.log(__filename); //get path of file currently running

// no access to DOM methods
//console.log(document.querySelector); // error because document is in window object and global doesn't have that in namespace
