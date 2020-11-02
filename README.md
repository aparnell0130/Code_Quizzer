# Code_Quizzer
## Description

        This application is a quiz about coding. Once you click start, the timer will start and you will be provided a random question with a list of options. If you select the right answer you will move to the next question. If you select the wrong answer, the game will subtract 10 seconds from the timer, then you will move to the next question. If you reach the end of the questions or the time runs out, the game will end and your score will be the time left. You will then move to the high scores screen, where you will be able to enter your initial and save your score.

### Question Example Code
```JS
var allQuestions = [
    {
        question: "How would you check for how many items are in an array?",
        1: 'array.length',
        2: 'check(array)',
        3: 'length.array',
        4: 'array.items',
        correctAnswer: 1,
    }
]
```



### Tools/Technologies
- JavaScript
- HTML
- CSS

### Generate Random Question Code
```JS
    function randomQuestion() {
        var index = Math.floor(Math.random() * allQuestions.length);
        currentQuestion = allQuestions[index];
        question.textContent = currentQuestion.question;
    }

```
## Live game link
- [Code Quizzer](https://aparnell0130.github.io/Code_Quizzer/)

![ALT Text](assets/images/codeQuizzer.gif)

## License
- N/A 

## Author Info
- Linkedin - [Aaron Parnell](https://www.linkedin.com/in/aaron-parnell-1ab4661b3/)
- Github - [aparnell0130](https://github.com/aparnell0130)

[Back to top](#Code_Quizzer)