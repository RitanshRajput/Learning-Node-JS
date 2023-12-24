// 🔴🔴 Understanding API on a higher level

//🔸Application Programming Interface: it is a peice of software that can be used by another
//  piece of software, in order to allow applications to talk to each other

//🔸We have already seend API more specifically WEb APIs, where we simplt built an app
// that sends data to a client whenever a request comes in so imagine we have our app running on a server
// and we have a client, so infact we have effectively two pieces of software talking to each other.
// and this is the kind of API we will build in this course.It is indeed the most widely used type of API out there.

//🔸But Infact APIs aren't only used to send data and aren't always related to web development or javscript.
// so an application in an API can actually mean many different things as long as the piece of software is relatively standalone.
// for ex: the Node File System, or the HTTP modules, we can say that they are small pieces of software and we can use them and
// we can interact with them by using their API.
// for example : when we use the readfile function from the FS module, we are actually using the FS API. and thats why you will sometimes
// hear the term node APIs and thats usually simply refers to the core node modules that we can interact with, Or when we do
// DOM manipulation in the browser, we are not really using the javscript language itself, but rather the DOM API that the browser exposes to use

// another example : lets say we create a class in any programming langauge, like Java and then add some public methods or properties to it.
// these methods will then be the API of each object created from that class because we're giving other pieces of software the possibility of interacting with our initial piece
// of software, the objects in this case.

//🔸SO we see API has a broader meaning than just building web API's
// alright? anyway, a web API is what's most important for us in the context of node.
// lets now take a look at the REST Architecture, to build APIs
//
//
//
//

//  🔘🔘  REST API Architecture 🔘🔘

//🔸 REST, which stands for representational States Transfer: is basically a way of building web APIs in
// a logical way making them easy to consume, because remember, we build an API for ourselves or for others to consume, okay?
// so we want to make the process of actually using the API, as smooth as possible for the User.

//🔸 Now to build RESTful APIs, which means APIs following the REST Architecture, we just need to folllow a couple of instructions.
// 1. first we need to separate our API into Logical resources
// 2. This resources should then be exposed which means to be made available, using structured, resource-based URLs,
// 3. To perform different actions on data like reading or creating or deleting data,
//    the API should use the right HTTP methods and not the URL.
// 4. Now the data we send back to the client or that we received from the client should usually use the JSON data format
//    where some formatting standard applied to it.
// 5. finally another important principle of REST APIs is they must be Stateless

//🔴 Deep dive on the REST API architecture principles:

//🔸The key abstraction of information in REST is a resource and therefore all the data that we wanna share in the api should be divided
//  into logical resources, now what actaully is a resource?
//  in the context of REST it is an object or a representation of something which has  some data associated to it.
//  for ex: tours, users, or review in the case of example that we are follwoing.
//  So basically any information that can be named, can be a resource alright?
//  it just has to be a name though not a verb.

//🔸 Now we need to expose meaning to make available that data using some structured URLs that the client
//   can send a request to, for ex: something like this: https:// www.natours.com/addnewTour
//   this entire address is called the URL, and this  /addnewTour is called an API endpoint.
//   So an API will have many different endpoint just like this fictional endpoints like"
//   for ex:  https://www.natours.com/addnewTour ,  /getTour, /updateTour, /deleteTour, /getTourByuser, /deleteTourByUser

//🔸 Each of which will send different data back to the client, or also performs different actions, now theres
//   something very wrong with these endpoints here because they really dont folllow, the 3rd rule/principle
//   which says that we should only use, HTTP methods in order to perform actions on data.
//   so endpoints should only contains our resources and not the actions that can be performed on them.
//   because they will quickly become a nightmare to maintain,
//  ? SO how should we use these HTTP methods in practice. /addnewTour, /getTour, /updateTour, /deleteTour,

//🔸 lets start with /getTour endpoint is to get data about a tour and we should simply name the endpoint
//   /tours and send a data whenever a GET request is made to this endpoints so in another words
//   when a client uses a GET HTTP method to access the endpoint, and just like this we only have resources
//   in the endpoint or in the URL and no verbs because the verb is now in the HTTP method, right?

//🔸So its a common practice to always use the resource name in plural which is why i
//  I have written /tours here not /tour, now the convention in that is we get back all the tours
//  that are in database, okay. But if we only want to tour with one ID, lets say seven
//  we add that seven after another slash/ ex: (GET   /tours/7  ) or in a search query or it could
//  also be the name of a tour instead of the ID, or some identifier the detail doesnt really matter at this point.

//🔸The first HTTP method or verb we can respond to is (GET) it is use to perform the Read operation on data.
//🔸If the client wants to create a new resource in our database in this example a new tour The (POST) method should be used
//  in this case no ID should be send because the server will figure the new ID accrodingly.
//🔸To update the resource we should use either (PUT) or (PATCH) method to the endpoint, the difference them
//  is in the (PUT) the client is supposed to send the entire uppdated object,
//  while in (PATCH) it is supposed to send only the part of the object that has been changed
//  but both of them has the ability to send data to the server.
//🔸Finally there is an (DELETE) Http method, again the ID or some other unique identifier of the resource
//  to be deleted should be part of the URL.

//🔸Now usually in order to actually be able to this kind of request, the client should be authenticated
//  so basically Log into your app.

//🔸Just to finish if we looked at previous endpoints there were 2 other crazy endpoints
//  names (/getTourByuser, /deleteTourByUser) which kind of involved 2 resources at the same time
//  and thats also no problem in REST.
//  so (/getTourByuser) can simply be translated to /users/tours
//  for example user 3 we want to access: https://www.natourAPI.com/users/3/tours

// same for deleting like we want to delete tour number 9 from the user number 3
// we say: https://www.natourAPI.com/users/3/tours/9
//
//
//
//🔘🔘 JSON :
//🔴Now about the data that the client actaully recieves or that the server receives from the client
// usually we use the JSON Data Format so lets briefly learn what JSON actaully is and how to format our
//  API responses.

//🔸So JSON is a very lightweight data interchange format which is heavily used by web APIs
// coded in any programming language. and its soo widely used today because it is very easy for both
// human and computer to understand and write JSON.

//🔸We noticed a JSON looked a bit like a regular Javascript object. with all these key-value pairs.
// there are certain difference like all the keys have to be string and its also very typical for the values
//  to be strings as well but they can be other things, like number and true or false value, other objects,
//  or even arrays of other values
//ex:
//   {
//       "id": 5,
//       "tourName": "The Park Camper",
//       "rating" : "4.9",
//       "guides" : [
//           {
//               "name":"Steven hawkins",
//               "role": "Lead guide"
//           },
//           {
//               "name":"Iron Man",
//               "role": "Tour Guide"
//           }
//       ]
//   }

//🔸above is an exmaple of JSON data which looks straigthforward and easy to understand.
// lets say that this is a data that we have in our database, for a (GET) request to this
// URL : https://www.natours.com/tours/5
// now we could send it back like this to the client, but we usually do some simple response
// formatting before sending. there are couple of standards for this and we're gonna use a very simple
// one called (Jsend).

//🔸In this we simply create a new object then add a status message to it in order to inform the client
//  whether the request was a succeess, fail or error, and then we put our original data into a new object
// called Data we can develop this little futher but this is really the simplest way
//🔸ex: Jsend
//   {
//     "status": "success",
//     "data":{
//       "id": 5,
//       "tourName": "The Park Camper",
//       "rating" : "4.9",
//       "guides" : [
//           {
//             "name":"Steven hawkins",
//             "role": "Lead guide"
//           },
//           {
//             "name":"Iron Man",
//             "role": "Tour Guide"
//           }
//       ]
//     }
//   }

//🔸Wrapping the data into an additional object is called Enveloping like above and
//  it is a common practice to mitigate some security issues and other problems,
//  also there are other standards for response formatting that you can look into
//  like: Jsend:API , or  Odata JSON Protocol
//
//

//🔘🔘 Stateless

//🔸finally a RESTful API should always be stateless so what does stateless actaully means?
// Stateless RESTful API: All state is handled on the client and not on the server.
//  ans state simply refers to a piece of data in the application that might change over the time.
// for ex: whether a certain user is logged in, or on a page with a list with several pages, or what the current page is.

//🔸On the client means that each request must contain all the information that is necessary to process
// a certain request on the server.

//🔸SO the server should never ever have to remember the previous request in order to process to current request.
// SO lets take the list with several pages as an example and lets say that we cuurently on page five
// and want to move forward to page six so we could have a simple endpoint called
//  (/tours/nextPage) and submit a request to it. but the server would then have to
//  figure out what the current page is and based on that send the next page to the client
//  in other words server would have to remember the pevious request.
//  GET /tours/nextPage ----> [we server]   [nextPage = currentPage + 1 ]
//                                          [ send(nextpage)]  \
//                                                               state on server
// means it would have to handle the state server side
// and that is exactly what we want to avoid in RESTful API,
// instead in this case we should create a ( /tours/page/6) endpoint and
// pass a number 6 to it which is a page number that we are requesting
// GET /tours/page/6  --------> [web server]   [send(6)]
//                  \
//          state coming from client

// This way we would then state on the client, because on the client we would already know that we're on page five
// and so all we had to do is to just add one adn then request the page number six so the server doesnt have
// to remember anything in this case, all it has to do is to send back data, for page number six
// as we requested.

// By the way Statelessness and StateFullness, which is the opposite are very important concepts
// in computer science and application design in general, so its a good idea to actaully
// have some understanding what is stateless API is and how it works.
