
# Execution Context 

Everything in JavaScript happens inside an Execution Context also known as Global Context. You can assume this Execution Context as a container inside which whole the JavaScript code is executed. Assume the Execution Context is like a big box and it executes JavaScript code in two phases:

1. Memory Creation Phase
2. Code Execution Phase 

Memory Creation Phase
In the Memory Creation Phase, all the variables and functions are stored as key-value pairs. The Memory Creation Phase is also known as the Variable Environment.

In the Memory creation phase, the memory will be allocated to all variables and functions inside the Global Execution Context. In this phase, variable declarations are scanned and made undefined.

It stores undefined to all variables.
For Functions, it stores the entire function code inside memory space.
Code Execution Phase
Code Execution Phase is the phase when code is executed one line at a time. The Code Execution Phase is also known as the Thread of Execution.

JavaScript is a synchronous single-threaded language. JavaScript can only execute one command at a time and in a specific order. It can only go to the next line once the current line has been finished executing.

In the code execution phase, the whole JavaScript program executes line by line. In this phase, all the calculations are done. In this phase, we allocate values to all variables. Previously it had an initial value of undefined.

JavaScript is treated to function as a mini program. So when JavaScript executes a function a new execution context is created. So just like the whole program runs in a Global execution context. To execute a function JavaScript creates a local execution context. Just like the Global Execution context has two phases, this local execution context is also having the same two phases.

After completion of function execution, the result is stored inside the Memory Component. Once the execution is done and the result is stored inside the Memory Component the local execution context is deleted from the code component.

Conclusion
So in this blog, we discuss how JavaScript works by breaking down its execution into two main phases within a Global Context:

1. Memory Creation Phase (Variable Environment):
During this phase, JavaScript allocates memory for variables and functions.
Variable declarations are scanned, and they are set to undefined initially.
Functions are stored in memory with their entire code.
2. Code Execution Phase (Thread of Execution):
JavaScript operates as a synchronous single-threaded language, meaning it processes one command at a time and in a specific order.
This is where the actual code is executed line by line. Calculations are performed, and values are assigned to variables.
When a function is called, a new local execution context is created with its own memory and two phases, similar to the global context.
After a function finishes executing, its result is stored in memory, and the local execution context is removed.
In essence, JavaScript runs within a Global Context, which acts like a container for code execution, and it follows a two-phase process for managing variables and functions, as well as executing code. Additionally, functions create their own local execution contexts during their execution.

Simplified Version
Seems Complicated?

Let’s break it down in a simpler way:

1. Memory Creation Phase (Variable Setup):
This is where JavaScript gets ready to work.
It sets up space in memory for things like variables and functions.
Variables are prepared but don’t have values yet; they are like empty boxes.
Functions are stored in memory with all their instructions, like a recipe.
2. Code Execution Phase (Doing the Work):
Now, JavaScript starts doing the actual tasks in your code.
It works one step at a time, following the order of your code.
When it sees a variable, it gives it a value.
If there’s a function, it runs that function like a small program.
After the function finishes, the result is saved, and the function’s stuff is removed.
Think of it like making a list of what you need to do (Memory Creation Phase) and then actually doing each task one by one (Code Execution Phase). When you have a recipe (function), you follow the steps in the recipe, and when you’re done, you put away the recipe and keep the dish you made.

So this is how the entire JavaScript program runs. This is a little bit tricky in the first place to understand. You probably need to read the article two to three times to understand this. Don’t worry it happens with everyone whenever they learn about the execution of JS. So keep calm. And read it again. :)

So That’s it for JavaScript Working Guys. Wanna get in touch with me? Follow me up below.