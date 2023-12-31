//🔴🔴🔴 MVC Architecture

//🔸Intro to BACK_END Architecture MVC types of Logic and More:
//🔴 Link (https://www.youtube.com/watch?v=VyzMDvObdQU&list=PLOmL3sL-afbSlct9s9zJXV7KVeyXWQy9e&index=85)
// So up until this point we have just written our code without thinking much
// about our application architecture, it wasn't really important until now,
// but now that our app is really starting to grow, we need to start worrying,
// that we design our code architecture.
// So we will see in bried introduction to backend starting with MVC architecture

//🔸In this express project we will use a widely used architecture called
//  Model View Controller (MVC) for short.
// And there are different way of implementing the MVC architecture some
// more complex than others, but wll implement it in a very straightorward way here.

//    [Controller]          [Model]           [View]
//  Application Logic    Business logic      Presentation Logic

//🔸Okay in this architecture "
//🔘The model layer : is concerned with everything about
//  applications data and the business logic (will see what is business logic further ahead)

//🔘The controller Layer : and the function of the controller is to handler the application
//  request interact with models and send back responses to the client and all
//  that is called the application logic.

//🔘The View Layer : is necessary if we have a graphical interface in our app
//  or in other words, if we're buildings a server-side rendered website as we talked
//  about before.
//  In this case the view layer consists basically of the templates
//  used to generate the view so the website that we're goiing to send back to the
//  client and that is the presentation logic.

//🔸For now we are just building an API though so we're not really concerned about the views just yet
//  that we'll do later while learning.

// So using a pattern a more architectural like this allows us to write more
// modular application, which is going to be way easier to maintain in scale
// as necessary. and we could take it more further and add more layers of
// abstraction here but in this kind of smaller application, the MVC architecture
// is more than enough for our needs, Now all this may sound a bit abstract.
//🔸So lets take a look at MVC in the context of our app and the request-response cycle.

//🔸So as always it all starts with a request
//🔸That request will hit one of our routers, because remember we have multiple routers
//   basically one for each resource like /toursRouter, /userRouter, etc. now the goal of the
//   router is to delegate the request to the correct handler function which will be
//   be in one of the controllers and there will be one controller for each of our
//   resources. to keep this different parts of the app nicely separated.
//🔸Then depending on the incoming request the controller might need to interact
//   with one of the models for example to retrieve a certain document from the database
//   or to create a new one.
//🔸Once more there is one model file for each resource after getting the data from the
//  model the controller might then be ready to send back a response to the client for
//  example containing that data.
//🔸now in case we want to actually render a website there is one more step
//  involved in this case after getting the data from the model, the controller
//  will then select one of the view templates and inject the data into it.
//  that rendered website will then be sent back as the response in the view
//  layer in an express app there is usually one view template for each page.
//  like a tour overview page, a tour detail page, or a login page.
//  In the example of our natours app offcourse, so that is a broad overview
//  of the architecture that we're going to implement in this prject.

//🔴Now to finish lets get into a bit more detail on model and controller
//  So one of the big goals of MVC is to separate business logic from application
//  logic, we'll hear about these types of logic all the time when we browse stackOverflow,etc
//  But what are these types of logic actually ?

//🔸Well the difference is a bit opinionated but this is my take onit:

//🔴🔴 Application Logic: 🔴🔴
//🔘So, application logic is all the code that is only concerned about the
//  application implementation and not the underlying business problem that
//  we're actually trying to solve with the application like showing and selling
//  tours managing stock in a supermarket or organizing a library for example.
//🔘so again application logic is the logic that makes the app actually work for
//  example a big part of application logic in EXpress is all about managing request
//  and responses.
//🔘So in a sense we can also say that application logic is more about technical stuff.
//🔘Also if we have views in our app the application logic serves as a bridge between model
//  and view layers so that we never mix business logic with presentation logic.

//🔴🔴Business Logic: 🔴🔴
// 🔘So, Business logic its all the code that actually solves the business problem
//   that we set out to solve.
// 🔘lets say again that our goal is to show tours to customer and then sell them
//   and the code that is directly related to the business rules, to
//   how the business works and the business needs is business logic
// 🔘Now if that still sounds a bit too philosopical some examples in the context of
//   our latest app are:
// 🔸creating new tours in the apps database.
// 🔸checking if a user's password is correct when he logs in
// 🔸validating user input data
// 🔸ensuring that only users who bough a certain tour can review it.

// So all this stuff is concerned with the business itself, so its part of bussiness logic
// Now we need to keepp in mind that application logic and business logic are almost
// impossible to completely separate and so sometimes they will overlap, but we
// should do our best efforts to keep the application logic in our controllers,
// and business logic in our models.

//🔸And there is even this philosophy of fat models, thin controllers
//  which says which says we should offload as much logic as possible into
//  the models to keep the controller as simple and lean as possible.
//🔸So a fat model will have asmuch business logic as we can offload to it.
//🔸And a thin controller will have as little logic as possible.
// So that the controller is really mostly for managing the applications request
//  and responses okay.
