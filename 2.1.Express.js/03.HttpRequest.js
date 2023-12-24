// const fs = require('fs');
// const express = require('express');

// const app = express();

// app.use(express.json()); // Middleware for post request handler,

// // JSON parsing is the process of converting a JSON object in text format to a Javascript object that can be used
// // inside a program. In Javascript, the standard way to do this is by using the method JSON
// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
// );

// // GET request handler
// // v1 is API version it is a good practice to specify the API version
// // In the context of API REST, using "v1" in a URL typically signifies the version of the API being accessed. This versioning approach allows for changes and updates to the API without breaking existing client applications

// app.get('/api/v1/tours', (req, res) => {
//   res.status(200).json({
//     status: 'success',
//     results: tours.length, // this makes easy for the client to get a very quick information about the data it is receiving (here tours is an array, and result makes sense when we are sending an array so multiple objects)
//     data: {
//       tours, // tours : tours (in es6 we dont need to write same key-value name twice)
//     },
//   });
// });

// // Responding to URL parameters:
// // if client wants to access a specific id data, we need to create something to respond to it
// // (/:id) like this we created a variable called ID, we can name it anything like: :x, :name, :id, etc
// // so request.params is where all the parameters of all the variable that we define above in the URl are stored,
// // so (/:id) this variable are called parameter in short params, and they are available in req.params for us to use them.
// // So request.params is a very nice object which automatically assign the value to our varaible so our parameter that we defined
// // and we could actaully define multiple ('/api/v1/tours/:id/:x/:y')
// // and type the parameter in the URL (https://localhost:3000/api/v1/tours/23/45/12)
// // log we get : { id: '23', x: '45', y:'12'}
// // now if we have provided 3 paramter and in the URL clients only give 2 value
// // like: ('/api/v1/tours/:id/:x/:y') , api/v1/tours/23/45 ==> the output will be error
// // so to avoid this we can use optional chaining '/api/v1/tours/:id/:x/:y?'
// // so now it will be there but wont throw error

// app.get('/api/v1/tours/:id', (req, res) => {
//   console.log(req.params);
//   const id = req.params.id * 1; // as we get output in string{ id: '23', x: '45', y:'12'}, we need to convert them into number using javscript convention, this is JS trick where when we multiply a string that looks like a number with another number, it will convert that string to a number

//   const tour = tours.find((el) => el.id === id); // find() is a regular javscript function, which we can use on arrays, to find a specific data like id

//   // if someone enters a id which is not available Id in our array then we return 404
//   if (!tour) {
//     return res.status(404).json({
//       // 404 status code is for Not Found
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour, //tours : tour,  here the tour is the specified id that the user want
//     },
//   });
// });

// // POST request handler
// // the request object is again what holds all the data, about the request that was done, and if that request contains some data that was sent, that data should be on the request
// // Out of the box express does not put that body data on the request and in order to have that data available, we have to use something called middleware will learn about this later in much dept
// // but for now in order to make this work, we need to include, a simple middleware at the top of the file.
// // So middleware is basically a function that can modify the incoming request data, so its called middleware because it stands between so in the middle of the request and the response
// // so its just a step that the request has to go through while being processed
// // And the steps the request go throught, in this example is simply that the data from the body is added to it, so its added to request object by using this middleware( express.json());
// // and we use app.use() in order to use middleware (Express.json()) like this

// app.post('/api/v1/tours', (req, res) => {
//   //   console.log(req.body);
//   //   res.send('Done');
//   const newId = tours[tours.length - 1].id + 1; // we generally dont need to assign ID as it is take care by database as we learn in API, but here we dont have any database so we generate ID manually
//   const newTour = Object.assign({ id: newId }, req.body); // next we create a new tours now the new tour will basically be that body plus new ID that we just created, for that we use (Object.assign) which allows us to create a new object by merging two existing objects

//   tours.push(newTour); // now we want to push our new tour data into our tour array, so that is the array which now has the new tour in it

//   fs.writeFile(
//     `${__dirname}/dev-data/data/tours-simple.json`,
//     JSON.stringify(tours),
//     (err) => {
//       res.status(201).json({
//         status: 'success',
//         data: {
//           tours: newTour,
//         },
//       }); // 201 status code means created, 200 status means OK means success
//     }
//   );
//   // now we need to persist this into the file, using writeFile, we are using async version of writeFile because we are in a callback function and it is gonna run in the event loop we can never ever want to block eventloop
//   // we used JSON.stringify on tours because we parse it already so it is basically a plain text we want to convert it back to json so we use JSON.stringify
// });

// // PATCH request handler
// // As we know we have 2 methods to update our data PUT and PATCH
// // with PUT, we expect that our application recieves the entire new updated object
// // and with PATCH, we only expect the properties that should actually be updated on the object.
// //🔸Here we are not implementing actual updation method because we are not dealing with real data but we
// // we are only dealing with files and in real projects we do that with database. so will do that later
// app.patch('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   res.status(200).json({
//     status: 'success',
//     data: {
//       tour: '<Updated tour here...>',
//     },
//   });
// });

// // DELETE request handler
// //🔸Here we are not implementing actual delete method because we are not dealing with real data but we
// // we are only dealing with files and in real projects we do that with database. so will do that later
// app.delete('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id * 1 > tours.length) {
//     return res.status(404).json({
//       status: 'fail',
//       message: 'Invalid ID',
//     });
//   }

//   // 204 status code means NO content
//   res.status(204).json({
//     status: 'success',
//     data: null, // when we delete any data we dont show anything but NULL, to show the resource has been deleted
//   });
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`App running on ${port}..`);
// });

//
//
//
//        🔴🔴 Refactoring OUr Routes...🔴🔴

const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.json());
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// Reorganising / Refactoring GET http's callback function
const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours,
    },
  });
};

// Refactoring GET Tour, because we are showing single tour to the client
const getTour = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  if (!tour) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

// Refactoring create or POST request callback function
const createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

// Refactoring update or PATCH http request
const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

// Refactoring DELETE http request
const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// app.get('/api/v1/tours', getAllTours);
// app.post('/api/v1/tours', createTour);
// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);

// Route Handler for get and post, Refactoring ROUTE
app.route('/api/v1/tours').get(getAllTours).post(createTour);

// Route handler for get and patch
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

const port = 3000;
app.listen(port, () => {
  console.log(`App running on ${port}..`);
});

//🔸 As we can see we have lots or routes for different http Request like GET POST PUT DELETE
// so we will organise it accrodingly, so all the routes should be together and all the handler functions
// should be together. so separate from these routes (like in 03.CRUD_API.js)

//🔴 So we refactor callback Function (req, res) => {},  and also refactor api endpoint ( '/api/v1/tours' )
