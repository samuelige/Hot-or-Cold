### Hot or Cold

In this project, starting from scratch you’ll build a JavaScript version of "Hot or Cold" (commonly known as "Huckle buckle beanstalk"). It’s a very simple game. The hider knows where one object is, and a seeker has to find it. Each time the seeker makes a guess, the hider responds "getting hotter" if she's getting closer, or "getting colder" if she's moved farther away. For your version of the game, the computer will be hiding a number(0 - 100), and your user will be trying to find it.

###

To build this game, you should use functions, conditionals, random numbers, and a "scoped" variable. This should help you understand the mindset of a programmer.

1. On page load, Javascript should pick a number at random(between 0 and 100) that the user will have to guess.
2. The user should be prompted to enter a guess.
3. The user should get feedback about their guess -- if it was too high, too low, or just right. Initially, don't worry about telling users if they're getting "hotter" or "colder", just tell them if their previous guess was "hot" or "cold".
4. For your initial version, feel free to use the built-in "prompt()" function to get user guesses, and the "alert()" function to give feedback on the user guess.
5. For the final version of your project, you'll need to create an HTML-based interface for getting user inputs and giving feedback on guesses.
6. Your app should ensure that users provide valid inputs. For instance, if a user submits a space, a blank guess, or letters, they should receive feedback that they need to input a number.
7. The app should feature a button that allows the user to start a new game, without making additional calls to the server
8. Make sure to use version control as you're working on this project, committing early and often.

###

### Instruction

1. Starting from scratch, in a brand new repository, create a web page that meets the requirements listed above.
2. If you're feeling adventurous, consider adding the following additional features to improve the game:
   ● Using another correctly scoped variable, iteratively track the user's previous guess in order to let them know if they are getting “hotter” or “colder”.
   ● If you’re more visual, you can add animations using jQuery.
3. Once you’ve got a working version, push it to Github (and host a version on Github pages) and share it with your mentor and classmates to get feedback.
