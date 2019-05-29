/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window/global object binding
> the value of `this` will be the window/console object

* 2. implicit binding
> whenever a function is called by a preceding dot, the object before that dot is `this`.

* 3. new binding
> whnever a constructor function is used, `this1 refers to the specific instance of the object that is created & returned by the constructor function.

* 4. explicit binding
> whenever JavaScript's call or apply method is used, this is explicitly defined.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
        function sayName(name) {
            console.log(this);
            return name;
        }
        sayName("Jashele");


// Principle 2

// code example for Implicit Binding
        const myObj = {
            greeting: 'Hello',
            sayHello: function(name) {
                console.log(`${this.greeting} my name is ${name}`);
                console.log(this);
            }
        };
        myObj.sayHello('Ryan');


// Principle 3

// code example for New Binding
        function CordialPerson(greeter){
            this.greeting = 'Hello';
            this.greeter = greeter;
            this.speak = function() {
                console.log (this.greeting + this.greeter);
                console.log(this);
            }
        }
        const jerry = new CordialPerson ('Newman');
        const newman = new CordialPerson ('Jerry');

        jerry.speak();
        newman.speak();


// Principle 4

// code example for Explicit Binding
        function somePerson(greeter){
            this.greeting = 'Hello';
            this.greeter = greeter;
            this.speak = function() {
                console.log (this.greeting + this.greeter);
                console.log(this);
            }
        }
        const jashele = new somePerson('Tillman');
        const tillman = new somePerson('Jashele');

        jashele.speak.call(jashele);
        tillman.speak.apply(tillman);

