
# Question One

We have all heard the saying, "Too many cooks in the kitchen". Being a part of a large project can also feel like this and it is important to have a standard source control process in place due to developers changing, updating, manipulating and deleting code in projects that can change the integrity of the code. The process typically begins with the initialization of a version control system, such as Git, where a central repository is created to store the project's codebase (GitHub, 2024).

Source control systems can be categorized into centralized and distributed models (GitLab, 2024). 
Centralized version control systems (CVCS) maintain a single central repository, where all version files reside, making it easy to manage access and control changes but creating a single point of reference (GitLab, 2024).

![alt text](IMAGES/CentralisedVersionControl.png)
(Atlassian, 2019) 

In contrast, distributed version control systems (DVCS), like Git, allow each developer to maintain their own local repository, enabling them to work offline and commit changes independently. This model promotes greater flexibility, as developers can work on features in isolation and merge changes into the central repository when ready (GitLab, 2024).

![alt text](IMAGES/DistributedVersionControl.png)
(Atlassian, 2019) 

Teams adopt a branching strategy, often employing models like Git Flow or trunk-based development, to manage feature development, bug fixes, and releases. Each team member works on their own branch, allowing them to make changes independently without affecting the main codebase. Regular commits are made with descriptive messages to document changes, fostering a clear history of the project's evolution. Code reviews are conducted through pull requests (PRs), where team members can review, discuss, and suggest modifications before merging changes into the main branch, thereby ensuring code quality and reducing the risk of introducing bugs (Ernst, 2022). Continuous integration (CI) tools are implemented to automate the testing of new code, ensuring that it meets predefined standards and passes all tests before integration. The process also involves tagging stable releases and maintaining documentation that outlines the repository structure, coding standards, and branching strategies(Atlassian, 2019). Overall, this structured approach not only enhances collaboration but also contributes to the reliability and maintainability of the software.

# Question Two

Quality software is defined by several essential attributes that ensure it effectively meets user needs, performs consistently, and can adapt to future requirements. 

The first aspect is functionality, which encompasses the software’s ability to deliver the features and capabilities that users expect. This involves not only fulfilling specified functional requirements but also addressing non-functional requirements related to how well those functions are executed (Butinar, 2023).
Next, usability is crucial for ensuring that users can interact with the software easily and intuitively. A strong focus on usability means creating interfaces and workflows that minimize complexity and enhance user satisfaction, making the software accessible to a wider audience (Apr 28 & Am, 2023). 
The third aspect, reliability, refers to the software's ability to perform consistently under specified conditions over time. Reliable software should operate without failure, even in unexpected scenarios, and should be able to recover effectively from errors (Iyer, 2024).
Testability is another vital characteristic, indicating how easily software can be tested for defects and performance issues. High testability simplifies the process of identifying bugs and verifying that the software meets its requirements, ultimately leading to a more robust final product (Butinar, 2023). 
Following this, security has become increasingly important, particularly in the context of rising cyber threats. Quality software must implement strong security measures to safeguard against unauthorized access and data breaches, thereby ensuring the integrity of user data and maintaining trust (Butinar, 2023).
Lastly, scalability reflects the software’s ability to handle increased loads or adapt to growing user demands without a decline in performance. Scalable software can efficiently manage growth, making it a vital characteristic for applications expected to expand over time (Butinar, 2023). 

Together, these six characteristics—functionality, usability, reliability, testability, security, and scalability create a comprehensive framework for evaluating software quality, ensuring that it is not only effective and user-friendly but also secure and adaptable in a dynamic environment.

# Question Three

A standard high-level structure for a MERN (MongoDB, Express, React, Node.js) stack application consists of four key components, each playing an integral role in the overall architecture and functionality of the application.

![alt text](IMAGES/MERN.png)

MongoDB serves as the database layer, utilizing a NoSQL structure that allows for flexible data storage in a JSON-like format known as BSON (MongoDB, n.d.). This flexibility is particularly beneficial for applications with rapidly changing data requirements, as it permits dynamic schemas and easy scalability. MongoDB's document-oriented approach enables developers to work with complex data structures while maintaining high performance and reliability (MongoDB, n.d.).

Next is Express, a minimalist web application framework built on top of Node.js. It simplifies the development of robust APIs by providing essential middleware functions for handling HTTP requests and responses, facilitating routing, and managing sessions and cookies. Express allows developers to build RESTful APIs efficiently, enabling seamless communication between the front-end and back-end (MongoDB, n.d.).

On the client side, React empowers developers to create interactive and dynamic user interfaces through a component-based architecture. This approach allows for the reuse of components across the application, leading to more maintainable and efficient code. React's Virtual DOM optimizes rendering, ensuring that updates to the UI are efficient and responsive, which enhances the overall user experience (Gill, 2024).

Finally, Node.js serves as the foundation of the stack, providing a JavaScript runtime environment that enables server-side scripting. Its event-driven, non-blocking I/O model makes it particularly well-suited for building scalable network applications, allowing developers to handle multiple connections simultaneously without performance degradation (Node.js Web Application Architecture, 2021).

In a typical MERN application, the flow of data begins with the React front-end making API calls to the Express server. The server processes these requests, interacts with the MongoDB database to retrieve or manipulate data, and sends the results back to the React application, thereby completing the cycle of data exchange. This architecture supports a clear separation of concerns, enhances maintainability, and facilitates the development of scalable web applications (geeksforgeeks, 2019).

# Question Four

To successfully develop a website for a small business, a team must possess a comprehensive set of skills and knowledge that span both technical and non-technical domains. First and foremost, proficiency in essential programming languages is crucial. HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are foundational for creating the structure and style of web pages, while JavaScript is necessary for adding interactivity and dynamic content (Smith, 2024). Familiarity with modern frameworks and libraries, such as React, Angular, or Vue.js, can greatly enhance development efficiency and user experience by allowing developers to build responsive and scalable web applications (Berning, 2017).

Moreover, understanding back-end development is vital. This includes knowledge of server-side programming languages such as PHP, Python, or Node.js, which facilitate the creation of robust server applications that manage data and business logic. Additionally, expertise in database management systems, such as MySQL or MongoDB, is essential for storing, retrieving, and manipulating data efficiently (W3Schools, 2023). Security is another critical area; developers need to implement best practices to protect sensitive information and ensure safe user interactions.

In addition to technical skills, the team should be well-versed in user experience (UX) and user interface (UI) design principles. This includes understanding user-centered design, accessibility standards, and usability testing to create a website that is not only visually appealing but also intuitive and easy to navigate (W3C, 2016). Knowledge of search engine optimization (SEO) is also important, as it helps the website rank better in search engine results, thereby increasing visibility to potential customers (Goodwin, 2023).

Project management skills are equally important for keeping the project organized and ensuring that deadlines are met. Familiarity with methodologies such as Agile or Scrum can enhance collaboration and adaptability throughout the development process (Atlassian, 2019). Furthermore, effective communication skills are vital for liaising with clients, understanding their requirements, and incorporating their feedback into the development process. This collaborative approach ensures that the final product aligns closely with the client’s vision and business goals (Atlassian, 2019).

In summary, a successful web development project for a small business requires a multidisciplinary approach that combines technical expertise, design sensibility, project management, and strong communication skills. This holistic skill set enables the team to deliver a high-quality, functional, and user-friendly website that meets the specific needs of the business.

# Question Five
The project referenced here is the SIX-LETTER-WORD-GAME, available here on GitHub.

Successfully completing this terminal application inspired by "WORDLE" required a diverse range of knowledge and skills while navigating several challenges. The primary objective was to create a user-friendly interface that allowed players to guess a six-letter word within eight attempts while managing player data and scores.

Achieving this necessitated a solid foundation in programming, file handling, user interface design, and project management. The following outlines the essential skills and knowledge needed, along with the obstacles encountered.

## Technical Knowledge and Skills Required

- Programming Proficiency in Python:
An understanding of Python, particularly within its syntax and object-oriented programming, is essential. This includes using classes, such as Word_game and Responsiveness, to encapsulate functionalities, demonstrating proficiency in object-oriented principles. 

- Data Structures:
Familiarity with various data structures—such as lists, dictionaries, and sets—is vital for managing player data and scores. Sets, in particular, are useful for efficiently storing valid six-letter words, allowing for quick lookups during gameplay. This knowledge supports effective data management and enhances the game’s performance.

- File Handling:
Understanding file I/O operations in Python is necessary to read from a text file (e.g., sixletterwords.txt). Implementing robust data validation ensures that only valid six-letter words are processed, enhancing the game’s reliability and user experience.

- User Interface Design:
Creating an engaging user interface in a terminal application involves implementing color-coded feedback using libraries like colorama. This aspect enhances user experience by providing visual cues that guide players during the game. Knowledge of console output manipulation is essential for achieving this.

- Project Management:
Utilizing project management tools, such as Trello, helps organize tasks, set deadlines, and track progress throughout the development process. Effective project management skills are critical for planning and executing the project within the designated timeframe.

- Debugging and Testing:
A methodical approach to debugging and testing is crucial for identifying and resolving issues that may arise during development. This includes testing various game scenarios to ensure robustness and handling edge cases, such as invalid guesses, to create a smooth user experience.

## Overcoming Challenges

Throughout the development process, various challenges may arise that require careful consideration and problem-solving.

- User Management:
Implementing user input validation is a key challenge, as it ensures that inputs meet criteria for word length and validity against the word list. Careful handling of user input errors is necessary to improve the overall experience and maintain game integrity.

- Game Logic:
Developing the logic for the game involves defining how guesses are evaluated, particularly distinguishing between correct and incorrect letters. Clear properties and methods within the game’s classes are essential for managing this logic effectively, ensuring an engaging gameplay experience.

- User Functionality:
Creating a structured visual feedback system that provides indicators (green, yellow, white) for player guesses requires thoughtful design. This involves processing and displaying results in a way that is intuitive for players, with iterative refinement based on testing feedback.

- Scoreboard Management:
Managing the scoreboard and player statistics presents challenges in ensuring accurate updates after each game. Implementing structured data management techniques is necessary for effectively tracking wins, losses, and total games played, which enhances player engagement.

- Time Management:
Balancing project deadlines with the need to learn new concepts can be challenging, especially when obstacles arise. Breaking tasks into smaller, manageable components and setting mini-deadlines for each can help maintain progress and ensure timely completion.

By leveraging skills in Python programming, data structures, user interface design, and project management is able to create an engaging gameplay experience. Overcoming challenges such as user input validation, game logic development, and scoreboard management will deepen understanding of these concepts and enhance overall development skills. This project serves as a valuable learning opportunity, equipping developers with essential tools for future software development endeavors.

# Question Six

This analysis encompasses key aspects such as programming proficiency in Python, data structures, control flow, user interface design, and project management. By examining the strengths demonstrated and the constructive feedback received, I will propose actionable changes for future projects of a similar nature. This approach not only highlights my growth as a developer but also sets the stage for enhancing both functionality and user experience in subsequent endeavors.

Evaluation of Knowledge and Skills
- Programming Proficiency in Python: 
My solid foundation in Python proved invaluable in implementing the core functionality of the Six-Letter Word Game. I effectively utilized object-oriented programming principles, creating classes like Word_game and Responsiveness that organized my code and improved manageability. For example, the clear structure allowed me to maintain and modify game states easily. However, I recognize the need for improvement in file handling, as pointed out by my educator: “For file handling, there is only reading from a file but no writing to a file.” Adding file-writing capabilities in future iterations would enable the application to save player scores and histories, enhancing user experience.

- Data Structures and Error Handling: 
My effective use of data structures, such as lists and dictionaries, was instrumental in managing player data and game states. I incorporated error handling that provided clear feedback for invalid inputs, ensuring that the game remained user-friendly. For instance, when a player guessed a word that was not six letters long, the application prompted them to try again without crashing, which maintained the flow of the game. Moving forward, I will focus on implementing more robust error-checking mechanisms, especially regarding installation processes. The educator's feedback highlighted this need: “The simple script written does not check if Python/pip/venv is installed,” which would streamline the setup for users.

- Control Flow and Logic Implementation: 
I demonstrated a nuanced understanding of control structures by effectively utilizing loops and conditionals to create a complex game flow. This allowed for dynamic feedback based on player guesses, ensuring an engaging experience. For example, the game logic provided immediate responses to player inputs, clearly indicating correct and incorrect letters. However, I recognize the need for clearer feature descriptions and more accurate flowchart design, as noted in the educator's feedback: “The icons used by the flowchart are incorrect.” Enhancing the documentation and visual representation of logic in future projects will be a priority.

- User Interface Design: My implementation of color-coded feedback through the colorama library significantly improved user interaction, providing visual clarity in the terminal. Players could easily identify correct guesses, enhancing their engagement with the game. For instance, using color indicators for different guess outcomes added a layer of fun and strategy to the experience. However, I need to refine my installation instructions to be more user-friendly, as the educator mentioned: “The installation steps have an incorrect step" (Coderacademy, 2024). By providing explicit and accurate guidance, I can better assist users, especially those with less technical expertise.

- Project Management and Version Control: 
I effectively utilized version control to manage my project; however, I recognized that my commit messages were sometimes too simplistic or lacked meaningful descriptions. Despite adhering to DRY principles throughout my codebase, which kept my code clean and efficient, I could improve my project management practices. The educator's feedback emphasized this point: “Several commits are either not meaningful or too simple to be a commit.” In future projects, I will strive to ensure that my commit messages are more informative, reflecting the changes made and providing a clearer history of the project’s development.

In conclusion, this project allowed me to apply and evaluate my knowledge and skills effectively. While I succeeded in many areas, the feedback I received highlighted specific opportunities for improvement. By addressing these areas—especially in file handling, error management, and documentation—I can enhance the overall quality and user experience of future projects. This reflective process not only solidifies my understanding but also prepares me for more complex challenges ahead.

# Question Seven

Control flow referes to the order in which individual statements, instructions, or functions are executed or evaluated ina  program, this is generally read and executed in order from left-to-right, top-to-bottom )codecademy reference). Control flow has many mechanisms including; conditional statements, loops, and switch statements, each having different variants and serving different purposes.

1. Conditional statements
Conditional statements in Javascript enable your program to choose different paths based on certain conditions. They are fundamental in decision-making processes within your code and can be broken down into "if", "else-if" and "else" statements.

- If Statements
The "if" statement evaluates a condition and executes the associated block of code only if the condition is true. This mechanism allows for simple decision-making (Mozilla Developer Network, n.d.).

Example:
A check to see if a song is available before playing it:

![alt text](IMAGES/IF.png)

Here, the condition checks if songAvailable is true, the program informs the user that the song is now playing. If it’s false, nothing happens.

- Else-if statement
With previous example looking at two distinct outcomes, "else-if" statement allows for multiple conditions to be evaluated in sequence, this is particularly useful when you have more than two potential outcomes (Mozilla Developer Network, n.d.).

Example:
A program that checks the genre of a song to recommend an action:

![alt text](IMAGES/ELSE_IF.png)

This structure allows for customized messages based on the genre of music, providing a personalized experience for the user. 

Else statement
As we saw in the previous example, "else" statement provides a default action when none of the preceding conditions are met. This helps to ensure that there’s always a response, even if the input doesn’t match expected values.


2. Loops

Loops in JavaScript allow for a condition to be repeated through a block of code, they are essential for automating tasks and processing collections of data without having to deal with repetitive coding and these can be found by using the methods of "For", "While", "Do while" and "For...of and For...in" loops (Mozilla Developer Network, n.d.).

- For Loops
Useful for iterating over a collection, such as a playlist. The for loop is particularly handy when you know in advance how many times you want to iterate (Mozilla Developer Network, n.d.).

Example:
Iterating through a playlist:

![alt text](IMAGES/ForLoop.png)

This code prints each song in the playlist, demonstrating how loops can efficiently handle collections of items.

- While Loops
A while loop continues executing as long as a specified condition is true. This type of loop is useful when the number of iterations is not known ahead of time (Mozilla Developer Network, n.d.).


Example:
Playing songs in a playlist until all songs are played:

![alt text](IMAGES/WhileLoop.png)

Here, the loop continues until songIndex equals the length of the playlist, ensuring all songs are played.

- Do While
A do while loop executes at least once before checking the condition, making it useful for scenarios where you want the code to run before validating the loop condition (Mozilla Developer Network, n.d.)

Example:
Playing a song a specific number of times:

![alt text](IMAGES/DoWhileLoop.png)

This loop ensures that the song is played at least once, even if the condition to stop is already true.

- For...of and For...in loops
These loops are used for iterating over iterable objects (like arrays) and object properties, respectively (Mozilla Developer Network, n.d.).

Example:
Using a for...in loop to display song durations:

![alt text](IMAGES/For_of&For_in_Loops.png)

This code iterates over the properties of the songDurations object, displaying the duration for each song.

3. Logical Operators
Logical operators enhance conditional statements by allowing the combination and negation of boolean expressions. They play a crucial role in decision-making processes within programming and can be depicted as follows: AND (&&), OR (||), and NOT (!). These operators help create complex logical conditions that lead to more refined and flexible code (Mozilla Developer Network, n.d.).

- Logical AND (&&)
The expression evaluates to true only if both operands are true

- Logcial OR (||)
The expression evaluates to true if atleast one operand is true

- Logical NOT (!)
This negates the truthiness of an operand, turning true to false and vice versa


Example:
Creating a playlist based on user preferences:

![alt text](IMAGES/)

In this case, the program checks the user’s preferences and creates a suitable playlist, demonstrating how logical operators can guide program flow based on user input.


# Question Eight

JavaScript is a loosely-typed language, meaning it does not require the programmer to define variable types (Swati Redhu, 2023). This flexibility allows JavaScript to perform automatic type conversion (or coercion) during operations involving different types of values and are divided into two types of coercion in JavaScript; Implicit and Explicit and are can be found in various operations like arithmatic, comparisons and and even in a boolean true/false context (BITO, n.d).

Implicit coercion happens in Javascript automatically and detects the need to convert one data type to another to make another operation, if we look at how this looks in an arithmetic, comparion or boolean context this is what the example would look like if we used the example of music.

Arithmetic operations in Javascript is to automatically convert string values to numbers if needed, lets say you're working with song durations (in minutes) and a playlist count.

![alt text](IMAGES/ImplicitCoercion%20-%20Arithmetic.png)

In this case, totalTime results in "32", not 5, because the + operator is used for string concatenation. So, JavaScript converts the number 2 into a string and concatenates it to "3", resulting in "32", not the expected sum.

Another example, is comparing two song durations, say "3 minutes" (as a string) and 3 (as a number), Javascript will coerce the string to a number, 

![alt text](IMAGES/ImplicitCoercion%20-%20Comparison.png)

Finally for our examples of Implicit coercion we have Boolean context which are values that are considered as either "truthy" or "falsy", this can be demonstrated in if statements. Let's say you're checking whether a playlist has any songs.

![alt text](IMAGES/ImplicitCoercion%20-%20Boolean.png)

In this example you can see that 'Your Playlist' is a non-empty string (truthy), so the first block runs. On the other hand, 0 is falsy, so the second block is skipped.

While implicit coercion happens automatically based on JavaScript's internal rules, explicit coercion occurs when the programmer intentionally converts a value from one type to another (Khan, 2024). This is done using built-in functions like Number(), String(), and Boolean(), or by using operators such as the unary + for conversion to a number (Khan, 2024). Like implicit, we will be able to look more closely at how this works by looking at arithetic, comparison and boolean contexts and as always, using music as the example.

In arithmetic contexts, explicit coercion is often performed when you want to ensure a value is treated as a specific type (e.g., converting a string to a number before performing arithmetic operations). You can use Number() or the unary + operator to explicitly convert strings or other types to numbers (Khan, 2024).

![alt text](IMAGES/ExplicitCoercion%20-%20Arithmetic.png)

Here, we used Number(songDuration) to explicitly convert the string "5" to the number 5. After that, the two numbers are added together, resulting in the correct sum of 7, instead of string concatenation .

Alternatively, you could use the unary + operator for explicit conversion:

![alt text](IMAGES/ExplicitCoercion%20-%20ArithmeticAlt.png)

Both methods achieve the same result, ensuring that the operation is performed numerically.

In comparison operations, explicit coercion is useful when you want to ensure that both values are of the same type before making the comparison (Mozilla Developer Network, n.d.). For example, if you're comparing a string and a number, you can explicitly convert the string to a number using Number().

![alt text](IMAGES/ExplicitCoercion%20-%20Comparison.png)

Here, Number(songDuration) explicitly converts the string "3" into the number 3, making the comparison 3 === 3 evaluate to true.

![alt text](IMAGES/ExplicitCoercion%20-%20ComparisonAlt.png)

Alternatively, you could use parseInt() or parseFloat() if you expect the string to contain numbers with decimals or other characters:

In boolean contexts, explicit coercion is used to ensure that values are treated as either true or false. The Boolean() function is used to explicitly convert a value into a boolean, which is particularly useful when checking conditions like in an if statement (GeeksforGeeks, 2022)

![alt text](IMAGES/ExplicitCoercion%20-%20BooleanTruthy.png)

In this example, Boolean(playlist) explicitly converts the empty string "" into false. Since an empty string is falsy, the second block of the if statement is executed, and the message "Playlist is empty" is logged.

Explicit coercion can also be useful when dealing with falsy values that you want to ensure are treated correctly:

![alt text](IMAGES/ExplicitCoercion%20-%20BooleanFalsy.png)

)) conclusion


# Question Nine
In programming, data types are classifications used to define the type of data a variable can hold. Understanding data types is crucial because it dictates how the computer stores, manipulates, and interacts with data. Each data type has its own behavior, supported operations, and memory representation, influencing both performance and functionality within a program, these data types can be categorized into primitive types and objects (GeeksforGeeks, n.d.). 

JavaScript, like most programming languages, uses a range of built-in primitive data types. These are the most basic types of data that are immutable (i.e., they cannot be altered once created). The seven primitive data types in JavaScript are:

1. Undefined 
This type represents a variable that has been declared but not yet assigned a value. It’s automatically assigned to a variable when no value is explicitly provided (GeeksforGeeks, n.d.). 

2. Null
This type represents the intentional absence of any object value. It is often used to indicate that a variable should be empty or nullified (GeeksforGeeks, n.d.). 

3. Boolean
A Boolean represents one of two possible values: true or false. It's commonly used for decision-making in control structures, these can be in the example of if statements (GeeksforGeeks, n.d.).  

4. Number
This type represents numeric values, both integer and floating-point. JavaScript uses the IEEE 754 standard for floating-point arithmetic, which means it can handle very large and small numbers but also has some precision limitations (GeeksforGeeks, n.d.).

5. String
A string is a sequence of characters used to represent textual data. Strings can be defined using either single quotes (') or double quotes ("), or backticks (`) for template literals in JavaScript (GeeksforGeeks, n.d.).

6. Symbol
A Symbol is a unique and immutable primitive value primarily used to create unique object property keys. Symbols are especially useful for avoiding property name conflicts in objects (GeeksforGeeks, n.d.). 

7. BigInt
BigInt is a new primitive type that allows you to work with integers larger than the largest number that can be represented by the regular Number type (which is 2^53 - 1). BigInts can represent arbitrarily large integers, making them useful for applications that require working with very large numbers for example cryptography, financial calculations, or handling large data sets (GeeksforGeeks, n.d.).

For example, a string type can represent textual data such as a song title like "Getaway Car" by Taylor Swift. Similarly, the number type can be used to represent numeric values, such as the year of release, 2017, or the track duration in seconds, like 234.

The boolean type holds values of true or false, which can be used in conditions, such as checking if a user has liked a song on Spotify: isLiked = true. Additionally, null signifies the intentional absence of a value, for instance, when an artist has no available albums: const albums = null;, while undefined indicates that a variable has been declared but not assigned a value, such as when a playlist hasn’t been set yet. 

In contrast, the object type can store collections of related data. For instance, a JavaScript object representing a Spotify playlist might look like this: const playlist = { name: "Chill Vibes", tracks: 20, creator: "Jesse" };. Furthermore, BigInt is used to handle integers that are too large for the number type. For example, if an artist like Taylor Swift who has 91100000 monthly listeners (Spotify, 5 November 2024), however to make this easier visiually you may end up using the number system like 91.1M.

Another category of data types from primitive data types is; non-primitive, or otherwise known as objects.

)) continue on non-primitve data

# Question Ten
Manipulating Arrays in JavaScript
Arrays in JavaScript are dynamic data structures that can hold multiple values, making them essential for various programming tasks. They come equipped with numerous built-in methods that facilitate the manipulation of their elements. Below, we will explore some fundamental operations, using examples from the provided code.

![alt text](IMAGES/Question10.png)

The code snippet demonstrates various operations on a playlist in JavaScript, focusing on a list of tracks. Initially, a playlist named playlist is created with three elements: 'Track A', 'Track B', and 'Track C'. Tracks are then added using the push method, which appends 'Track D' to the end of the playlist, and the unshift method, which adds 'Track E' to the beginning. After these additions, the playlist contains ['Track E', 'Track A', 'Track B', 'Track C', 'Track D'].

Subsequently, tracks are removed from the playlist using the pop method, which removes the last track ('Track D') and returns it, leaving the playlist as ['Track E', 'Track A', 'Track B', 'Track C']. The shift method is then used to remove the first track ('Track E'), resulting in the playlist now being ['Track A', 'Track B', 'Track C'].

To display the tracks, the forEach method is utilized, which iterates over each element in the playlist and logs each track to the console. The code also includes operations to find specific tracks, using the indexOf method to get the index of 'Track B', which is 1. Additionally, the filter method is employed to create a new array containing tracks with more than six characters; however, since none of the current tracks meet this criterion, this results in an empty array.

Finally, the current state of the playlist, the index of 'Track B', and the list of long tracks are logged to the console, summarizing the playlist's contents after the various manipulations. Overall, this code illustrates basic playlist manipulation techniques, including adding, removing, iterating, and filtering tracks in JavaScript.

# Question Eleven

In JavaScript, objects are versatile data structures that allow developers to store collections of key-value pairs. They are essential for organizing and managing data in a structured way. Below, we will explore how objects can be created and manipulated, using examples.

![alt text](IMAGES/Question11.png)

The example showcases a song object, which includes properties such as title, artist, album, and releaseYear, along with a method called play. You can access properties using dot notation (e.g., song.title) or bracket notation (e.g., song['artist']). New properties can be added dynamically, such as song.genre = 'Pop', and existing properties can be modified, like updating song.releaseYear to 2021. Methods within objects can be invoked like standard functions; calling song.play() outputs "Now playing: Blinding Lights by The Weeknd." This manipulation of objects allows for efficient organization and retrieval of music-related data in JavaScript.

# Question Twelve

JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. In JavaScript, JSON is often used for data exchange between a client and a server. Below, we will explore how to manipulate JSON data in JavaScript.

![alt text](IMAGES/Question12.png)

In the example, the song object is converted into a JSON string using JSON.stringify(), resulting in songJSON, which holds a textual representation of the object. This is particularly useful for sending data between a client and a server, as well as for storing information in a structured format. The output of console.log(songJSON) shows the object as a JSON string. To manipulate JSON data, JSON.parse() is employed to convert the JSON string back into a JavaScript object. In this case, newSong holds the parsed object, allowing for straightforward access to its properties, such as retrieving newSong.album, which outputs "After Hours." Additionally, properties can be updated easily, as shown by changing newSong.releaseYear to 2022. This demonstrates how JavaScript facilitates the manipulation of JSON data, making it an effective tool for managing music-related information in applications.

### References

Atlassian. (2019). Get started with agile project management | Atlassian. Atlassian. https://www.atlassian.com/agile/project-management

Atlassian. (2019). What is version control. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control

BERNING, D. (2017, May 27). My Take on the Big Three: React, Angular, and Vue - Dave Berning - Medium. Medium; Medium. https://medium.com/@daveberning/my-take-on-the-big-three-react-angular-and-vue-c82f57fef2ea

BITO. (n.d.). Type coercion in JavaScript: JavaScript explained. BITO. https://bito.ai/resources/type-coercion-javascript-javascript-explained/

BUTINAR, M. (2023, September 1). Don’t Save on Quality: Essential Attributes of Good Software. https://biosistemika.com/blog/dont-save-on-quality-key-attributes-of-software/

ERNST, M. (2022, March 7). Version control concepts and best practices. Washington.edu. https://homes.cs.washington.edu/~mernst/advice/version-control.html

GEEKSFORGEEKS. (2019, October 11). MERN Stack. GeeksforGeeks. https://www.geeksforgeeks.org/mern-stack/

GEEKSFORGEEKS. (2022, March 8). Explain nonboolean value coercion to a boolean one in JavaScript. GeeksforGeeks. https://www.geeksforgeeks.org/explain-non-boolean-value-coercion-to-a-boolean-one-in-javascript/

GEEKSFORGEEKS. (n.d.). JavaScript data types. GeeksforGeeks. Retrieved November 5, 2024, from https://www.geeksforgeeks.org/javascript-data-types/

GILL, N. S. (2024, October 7). Reactjs Project Structure and Best Practices. Xenonstack.com; Xenonstack Inc. https://www.xenonstack.com/insights/reactjs-project-structure

GOODWIN, D. (2023). What Is SEO / Search Engine Optimization? Search Engine Land. https://searchengineland.com/guide/what-is-seo

GITLAB. (2024). What is version control? GitLab. https://about.gitlab.com/topics/version-control/

GITHUB. (2024). What is Version Control? GitHub; GitHub. https://github.com/resources/articles/software-development/what-is-version-control

IYER, J. (2024). What Is Software Quality Assurance, and Why Is It Important? | Turing. Www.turing.com. https://www.turing.com/blog/software-quality-assurance-and-its-importance

KHAN, B. (2024, May 17). Understanding Type Coercion in JavaScript - Beenish Khan - Medium. Medium. https://medium.com/@vdsnini/understanding-type-coercion-in-javascript-aff173bd72b5

MONGODB. (n.d.). MERN Stack Explained. MongoDB. https://www.mongodb.com/resources/languages/mern-stack

MOZILLA DEVELOPER NETWORK. (n.d.). do...while. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

MOZILLA DEVELOPER NETWORK. (n.d.). Equality comparison and sameness - JavaScript. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness

MOZILLA DEVELOPER NETWORK. (n.d.). for. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for

MOZILLA DEVELOPER NETWORK. (n.d.). for...in. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

MOZILLA DEVELOPER NETWORK. (n.d.). for...of. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

MOZILLA DEVELOPER NETWORK. (n.d.). Logical AND. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND

MOZILLA DEVELOPER NETWORK. (n.d.). Logical OR. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR

MOZILLA DEVELOPER NETWORK. (n.d.). Nullish coalescing. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

MOZILLA DEVELOPER NETWORK. (n.d.). while. Retrieved October 30, 2024, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

NODE.JS WEB APPLICATION ARCHITECTURE. (2021, October 17). GeeksforGeeks. https://www.geeksforgeeks.org/node-js-web-application-architecture/

SMITH, C. (2024). Basics of Website Development: A Step-by-Step Guide for 2024. Scandiweb. https://scandiweb.com/blog/basics-of-website-development/

SWATI REDHU. (2023, June 14). Javascript is a loosely typed language. What does that mean?? — Part 7🫤. Medium. https://medium.com/@swati.developer17/javascript-is-a-loosely-typed-language-what-does-that-mean-part-7-a1941662e15c

SPOTIFY. (5 November, 2024). Taylor Swift. Spotify. https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02

W3C. (2016, May 6). Accessibility, Usability, and Inclusion. Web Accessibility Initiative (WAI). https://www.w3.org/WAI/fundamentals/accessibility-usability-inclusion/