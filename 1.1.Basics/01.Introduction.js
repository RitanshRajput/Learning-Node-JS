//🔴What is Node JS:
// NodeJs is a Javascript Runtime Built on Google's Open Source V8 Javascript Engine

//❓what is V8 engine:
// V8 is a free and open-source JavaScript and WebAssembly engine developed by the Chromium Project for Chromium 
// and Google Chrome web browsers. The project's creator is Lars Bak. The first version of the V8 engine was released 
// at the same time as the first version of Chrome: 2 September 2008.

//🔘SO bascially javascript code runs on browser now if we want to run our javscript code in outside of browser or in our local computer
// we can do that using Node Js, so NodeJs is a runtime environment or kind of a container where Javscript or related framework can
// be run.
// but❓ how does the node js understand Javascript : This is where V8 engine comes in picture this is where Js code will be parsed and run.
// node js uses v8 engine to understand javscript code and compile it and run it 
// V8 is a free and open-source JavaScript and WebAssembly engine


//🔴advantages of NodeJs : 
// Now we can access File system
// Better Networking capabilities
// Offers high-performance for Real-time Applications.
// Offers easy scalability for modern applications
// Web App Development.
// Improves App Response Time and Boosts Performance.
// It is Easy to Learn and Quick to Adapt
// Helps in building cross-platform applications.
// Reusable Code.

//🔘Perfect conditions for using Node Js as a web server
// 1. we can use Javscript on the server side of web development
// 2.build fast, highly scalable network application (backend)


//🔴NodeJs Pros:
//🔸 Single-threaded ,based on event driven, non-blocking I/O model
//🔸 perfect for building fast and scalable data-intensive apps
//🔸 companies like netflix uber paypal ebay have started using node in production
//🔸 javscript across the entire stack: faster and more efficient development
//🔸 NPM: huge lib of Open Source packages available for everyone for free
//🔸 very active developer community

//🔴Use of NodeJs:
//🔸 Building an API with database behind it(preferably NoSql)
//🔸 data strreaming (think youtube, netflix)
//🔸 Real-time chat application
//🔸 Server-side web application where entire content is simply generated on the server


//🔴NodeJs COns:
//🔸 Application with heavy server-side processing (like adobe-photoshop) should not be build 
//   instead for that we have different languages like Ruby0nRails php Python
//🔸 its performance is reduced with heavy computational tasks


//          //🔘🔘 IMPORTANT COMMAND TO USE IN NODE 

//🔴How to write Javascript On terminal Using Node :
// type 'node' on terminal
// Now the terminal will become REPL(read-eval-print loop) and we can just run javscript on  terminal using node
// A Read-Eval-Print Loop, or REPL, is a computer environment where user inputs are read and evaluated, and then the results are returned to the user. 
// REPLs provide an interactive environment to explore tools available in specific environments or programming languages. 
// Some examples include the Node.js console, IPython, the Bash shell, and the developer console found in most web browsers.

//🔴To exit the REPL we have :
// type '.exit'     
// or
// type 'Ctrl + d'


//🔴 Access all Global variable available in NodeJs:
// type 'tab'       (sometimes press tab twice)


//🔸Performing calculations :
// we can simply perform calculation on REPL like
//> 3 + 5
//> 8

//🔸 we can get previous result using underscore(_) :
// > 2 + 5
// > 7
// > _+3            (here underscore means previous result + 3)
// > 10
// > _-5            ( here previous result - 5)
// > 5


//🔴how to see all the property related for a specific Constructor: 
// lets say String ( for that we can)
// > String.(press tab)

// we get all the property or methods available for String in Node JS 

// String.__proto__             String.hasOwnProperty
// String.isPrototypeOf         String.propertyIsEnumerable    
// String.toLocaleString        String.valueOf

// String.apply                 String.arguments
// String.bind                  String.call
// String.caller                String.constructor
// String.toString

// String.fromCharCode          String.fromCodePoint
// String.length                String.name
// String.prototype             String.raw