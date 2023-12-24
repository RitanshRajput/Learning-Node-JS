// 🔴🔴 learning Promises and Async/Await

//🔸callback hell
// const fs = require('fs');
// const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed : ${data}`);

//   superagent.get(`https://dog.ceo/api/breed/${data}/images/random`).end((err, res) => {
//     if (err) return console.log(err.message);
//     console.log(res.body.message);

//     fs.writeFile('dog-img.txt', res.body.message, (err) => {
//       console.log('random random');
//     });
//   });
// });
//
//
//
////////////////////////////////////////////////////////////
//
//
//
//
//🔴consuming promise
// means we wait for it to come back with some data
// const fs = require('fs');
// const superagent = require('superagent');

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   console.log(`Breed : ${data}`);

//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .then((res) => {
//       console.log(res.body.message);

//       fs.writeFile('dog-img.txt', res.body.message, (err) => {
//         console.log('random dog image is save to dog-img file');
//       });
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// });
////🔸output:
// Breed : pitbull
// https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg
// random dog image is save to dog-img file
//
//
//
//
////////////////////////////////////////////////////////////
//
//
//
////🔴 returning a promise from a readfile and writefile

// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file sorry..');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject('Could not write file..🙌');
//       resolve('success');
//     });
//   });
// };

// readFilePro(`${__dirname}/dog.txt`)
//   .then((data) => {
//     console.log(`Breed : ${data}`);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then((res) => {
//     console.log(res.body.message);
//     return writeFilePro('dog-img.txt', res.body.message);
//   })
//   .then(() => {
//     console.log('random dog image is save to dog-img file');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//🔸output:
// Breed : pitbull
// https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg
// random dog image is save to dog-img file
//
//
//
//
//
////////////////////////////////////////////////////////////
//
//
//
//🔴🔴using Async/Await
// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file sorry..');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject('Could not write file..🙌');
//       resolve('success');
//     });
//   });
// };

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed : ${data}`);

//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     console.log(res.body.message);

//     await writeFilePro('dog-img.txt', res.body.message);
//     console.log('random dog image is save to dog-img file');
//   } catch (err) {
//     console.log(err);
//   }
// };
// getDogPic();
//🔸output:
// Breed : pitbull
// https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg
// random dog image is save to dog-img file
//
//
//
//
//
////////////////////////////////////////////////////////////
//
//
//
//🔴🔴 How Aysnc Function actually works ( returning values from async function)
// const fs = require('fs');
// const superagent = require('superagent');

// const readFilePro = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, (err, data) => {
//       if (err) reject('I could not find that file sorry..');
//       resolve(data);
//     });
//   });
// };

// const writeFilePro = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, (err) => {
//       if (err) reject('Could not write file..🙌');
//       resolve('success');
//     });
//   });
// };

// const getDogPic = async () => {
//   try {
//     const data = await readFilePro(`${__dirname}/dog.txt`);
//     console.log(`Breed : ${data}`);

//     const res = await superagent.get(
//       `https://dog.ceo/api/breed/${data}/images/random`
//     );
//     console.log(res.body.message);

//     await writeFilePro('dog-img.txt', res.body.message);
//     console.log('random dog image is save to dog-img file');
//   } catch (err) {
//     console.log(err);

//     throw err;
//   }

//   return '2.Ready';
// };
// // console.log('1: Will get dog pics');
// // getDogPic()
// //   .then((x) => {
// //     console.log(x);
// //     console.log('3.Done getting dog pics');
// //   })
// //   .catch((err) => {
// //     console.log('ERROR..');
// //   });

// (async () => {
//   try {
//     console.log('1.will get dog pics');
//     const x = await getDogPic();
//     console.log(x);
//     console.log('3:done getting dog pics');
//   } catch (err) {
//     console.log('Error...');
//   }
// })();

//🔸output:
// 1: Will get dog pics
// Breed : pitbull
// https://images.dog.ceo/breeds/pitbull/IMG_20190826_121528_876.jpg
// random dog image is save to dog-img file
// 2.Ready
// 3.Done getting dog pics
//
//
//
//
//
////////////////////////////////////////////////////////////
//
//
//
//🔴🔴 How to run many promises all at once

const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find that file sorry..');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file..🙌');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed : ${data}`);

    const res1Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res2Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const res3Promise = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    const all = await Promise.all([res1Promise, res2Promise, res3Promise]);
    const imgs = all.map((el) => el.body.message);
    console.log(imgs);

    await writeFilePro('dog-img.txt', imgs.join('\n'));
    console.log('random dog image is save to dog-img file');
  } catch (err) {
    console.log(err);

    throw err;
  }

  return '2.Ready';
};
(async () => {
  try {
    console.log('1.will get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('3:done getting dog pics');
  } catch (err) {
    console.log('Error...');
  }
})();
//🔸output:
// 1.will get dog pics
// Breed : pitbull
// [
//   'https://images.dog.ceo/breeds/pitbull/20190801_154956.jpg',
//   'https://images.dog.ceo/breeds/pitbull/dog-3981033_1280.jpg',
//   'https://images.dog.ceo/breeds/pitbull/dog-5437227_640.jpg'
// ]
// random dog image is save to dog-img file
// 2.Ready
// 3:done getting dog pics
