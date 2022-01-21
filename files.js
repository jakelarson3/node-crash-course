const fs = require('fs'); // get file system

// reading files
fs.readFile('./docs/blog.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

// console.log('last line');

// writing files
fs.writeFile('./docs/blog.txt', 'hello, world', () => {
  console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
  console.log('file was written');
});

// directories
if (!fs.existsSync('./assets')) { // asynchronus
  fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });
} else {
  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
}

// deleting files
if (fs.existsSync('./docs/deleteme.txt')) { // asynchronous
  fs.unlink('./docs/deleteme.txt', err => { // unlink deletes files
    if (err) {
      console.log(err);
    }
    console.log('file deleted');
  });
}