1. Some JavaScript developers believe that most of the issues with JavaScript stem from its asynchronous nature, its loose typing, and the web platform it runs on. For each of the three reasons listed, explain in your own words why a developer might believe that it is a pain point.
   - The fact that JavaScript is asynchronous would be painful for some developers because it requires have multiple callback functions which can be tedious to create and can be hard to organize if there are too many callbacks to keep track of.  JavaScript's loose typing is also a pain point because it means that developers have to do things such as explicitly remember to check for data types so that bugs such as concatenating instead of adding are not present in the program. 
2. Related to the first question, why do you believe that the developer(s) who created JavaScript made it loosely typed? Why do you think they added asynchronous features?
   - Developers added asynchronous features to JavaScript to increase speed of runtime and to make functions reliable.  JavaScript was created to be loosely typed for efficiency probably so that the compiler doesn't have to compare variables data types each time.  
3. What are the key differences between a compiled language and an interpreted one? Which one is JavaScript? What are the benefits & drawbacks of JavaScript being made that way?
   - Seeing as I have not gotten any compile errors like I would for mixing data types like in Java, compiled languages go through an extra step than interpreted ones don't. The extra step is that before executing the actual code, there is a compiler which checks to mismatched things like data types.  In this sense, a drawback of JavaScript being an interpreted language is that it is difficult to know where bugs are and how many checks to run to ensure that correct information is being passed through parameters.  We have to manually check for valid data types when parameters are passed and create the correct output instead of the compiler telling so.  However, a benefit to having an interpreted language is that one can execute code faster and more directly.  You can also control how to handle a string sentence being passed into your parameter that is supposed to take only numbers.  You can do something funny and unexpected like computed a sentence plus the integer 1 and have it equal an actual number.   
4. The professor believes that, though sometimes misused, JavaScript frameworks are incredibly powerful tools that can help teams work more efficiently and effectively. Given that, why do you believe he is focusing more on vanilla JavaScript for this course? What are the benefits of mastering vanilla JS first? What are the drawbacks of not learning a framework?
   - We are focusing more vanilla JavaScript because mastering that will help us understand more intuitively how JS frameworks interact with JS to create a better developer experience. By learning vanilla JS first, we are understanding how to use the tool (JS frameworks) in order to be able to use it to its full potential.  The drawbacks of not learning a framework are having inconsistent styling of code, bad organization, and redundant lines of code for one feature. 
5. Explain, in your own words, how you think this lab relates to your project. How might you be able to use this information in your own project?
   - This lab relates to the project in that I can use this information about JS to design and create an interactive website. I can test it with automated tests in Git without manual reviews by other teammates.  I can easily create a flowchart during the design process. I can also test the website with breakpoints to debug. 