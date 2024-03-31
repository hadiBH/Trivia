# WHAC - A - MOLE Study Buddy


### By: Hadar Ben Hamo and Yael Elad




## Introduction

In today's fast-paced world, finding innovative ways to make learning enjoyable and engaging is crucial. With this in mind, we introduce a new app that combines the classic arcade game Whac-A-Mole with the challenge of trivia questions. Our app offers users a unique opportunity to test their knowledge across various subjects while having fun.


## Introduction – Whac A Mole

The game Whac-A-Mole, originating from Japan in 1975, stands as a timeless arcade classic. The game's setup typically includes a waist-level cabinet housing a play area and display screen, accompanied by a substantial soft mallet. Within the play area, holes are populated by small, plastic, whimsical moles or other characters that unpredictably pop up. Players score points by swiftly whacking each mole as it emerges, with faster reactions yielding higher scores. Its simple yet engaging mechanics have made Whac-A-Mole a beloved fixture in arcades worldwide, providing players of all ages with a delightful and challenging experience.


## Game Description

Users begin by selecting their preferred subject from a diverse range of options, including music, books, sports, and more. They can also choose the difficulty level of the questions, catering to both beginners and experts alike. Once the settings are chosen, the game begins.
As the game unfolds, players are presented with trivia questions displayed prominently on the screen, along with possible answers (the questions are dynamically selected based on the subject and difficulty level that the player chose at the beginning of the game).
However, there's a twist: reminiscent of the Whac-A-Mole arcade game, a board featuring playful moles pops up simultaneously. Each mole holds one of the possible answers.
The challenge is to swiftly identify the correct answer and tap the corresponding mole before it disappears.
Each session includes trivia questions, with players aiming to achieve a maximum score of 100 points. Correct answers earn 10 points, while incorrect ones result in a deduction of 5 points. Players must be cautious, as accumulating 5 incorrect answers ends the game, while reaching 100 points marks a successful completion, allowing players to start a new game.


## Statistics

In our app, there is a Statistics section that provides users with insights into their practice performance, helping users to track their progress and identify areas for improvement.
One of the key components is the progress chart, which provides a visual representation of the performance across different subjects in the trivia. As you continue to practice, the chart dynamically adjusts to reflect the progress in each subject. This allows the user to easily see which subjects they have practiced the most and those that may require additional attention. 
Additionally, when you start practicing the trivia game, a pie chart appears, showcasing the percentage of correct answers you've achieved overall. This chart is segmented by subjects, giving you insights into the proportion of correct answers within each subject area, enabling the user to focus their efforts accordingly.
#### Graph Column Description
The column in our graph represents the frequency of gameplay for each theme. It illustrates the number of times you've engaged with each subject, providing insight into your level of interest and focus on specific topics.
#### Pie Chart Description
The pie chart visually represents the distribution of correct answers within each subject relative to the total number of attempted questions multiplied by the number of tests taken. Each segment of the pie chart corresponds to a subject, with the size of the segment indicating the proportion of correct answers achieved within that subject area. This calculation offers a comprehensive view of performance efficiency across different subjects.
#### Percentage Inside the Circle Description
The percentages displayed inside the circle represent the cumulative number of correct answers obtained across all subjects relative to the total number of questions in all tests. 


## Our Vision of Whac A Mole Study Buddy
Integrating education with entertainment through games like Whac A Mole Study Buddy offers a transformative approach to learning, bridging the gap between traditional study methods and engaging, interactive experiences. By infusing educational content into a familiar and enjoyable format, such as the classic Whac-A-Mole game, our Study Buddy taps into the intrinsic human desire for fun and excitement. Through gamification, users are incentivized to actively participate in their learning journey, as the thrill of gameplay motivates them to tackle challenging questions and strive for mastery.
In our game, we've integrated a learning component to earn points, incorporating trivia questions that challenge users to consider the correct answers. Inspired by the original game's bomb element, we've transformed wrong answers into bombs, urging players to be cautious. However, fear not! Every mistake serves as a learning opportunity, enriching the experiential learning process. With multiple attempts available, users can engage in strategic learning, refining their knowledge and decision-making skills while progressing through the game.


## Project Components and Technologies

### TypeScript
We used TypeScript in our project due to its ability to provide type options, significantly enhancing our ability to detect and rectify bugs during the development process.
### React with Vite
React, a JavaScript library renowned for building user interfaces, serves as the cornerstone of the Whac-A-Mole StudyBuddy project. With React's component-based architecture, we create reusable UI elements, enhancing maintainability and scalability. React's virtual DOM ensures seamless updates and optimal performance, fostering a responsive user experience. Paired with Vite, a modern build tool acting as the bundler, React enables rapid iteration with fast bundling and hot module replacement. This collaboration between React and Vite significantly boosts developer productivity and streamlines the development experience specific to Whac-A-Mole StudyBuddy.
### React Router
React Router plays a pivotal role in facilitating client-side routing within Whac-A-Mole StudyBuddy. Leveraging React Router, we implement declarative routing and define navigation logic through components and URLs. This empowers users to seamlessly navigate between study modes and statistics without the inconvenience of full-page reloads, thereby enhancing the user experience.
### Trivia API
The integration of the Trivia API into the Whac-A-Mole StudyBuddy project serves as a vital component. Leveraging the Trivia API, we access a vast repository of study questions spanning various subjects and difficulty levels. Dynamically fetching study questions ensures an engaging and diverse study experience for users, with real-time updates and dynamic content enriching user interaction and encouraging exploration.
### Render
For deployment and hosting, we rely on Render, a robust platform that offers scalable infrastructure and automated deployments. By hosting Whac-A-Mole StudyBuddy on Render, we ensure high availability and reliability, enabling seamless access for users to the application's study resources and features.



## Getting Started
### Login Page
Upon launching the game, you will be greeted with a login page where you can enter your name to access the game. 

![WhatsApp Image 2024-03-31 at 18 05 43 (1)](https://github.com/hadiBH/Whac-A-Mole-Study-Buddy/assets/97242311/8e75ba07-b49c-4e2d-8895-949c7d4e3531)

### Select Difficulty and Question Type
After logging in successfully, you can choose between several difficulty levels and select the type of trivia questions you want to answer. 

![WhatsApp Image 2024-03-30 at 20 53 01](https://github.com/hadiBH/Whac-A-Mole-Study-Buddy/assets/97242311/0d65d680-11ab-4e33-9501-cb801a215a99)
![WhatsApp Image 2024-03-30 at 20 53 30](https://github.com/hadiBH/Whac-A-Mole-Study-Buddy/assets/97242311/83fedd96-25f1-47e6-bb04-4cfac4eb38b6)

## Playing the Game
### Gameplay
Once you've selected your preferences, the game begins! You will have 5 attempts to answer as many trivia questions as you can, the maximom score you can get is 100. A mole will pop out of a hole with a possible answer. Be careful not to be reckless and click on the wrong answer—stay focused!

### Whack the Mole
As the mole pops up with a potential answer, click on the correct one as quickly as possible to score points. But be vigilant, clicking on the wrong answer will decrease your remaining tries.
Keep an eye on your remaining tries. Each incorrect click reduces your tries, so use them wisely!

### Score Tracking
Your score will be tracked throughout the game, providing you with instant feedback on your performance.
![WhatsApp Image 2024-03-30 at 20 53 48](https://github.com/hadiBH/Whac-A-Mole-Study-Buddy/assets/97242311/c1c11232-c72f-494d-9642-0cfc57c3898b)

## Analyzing Your Progress
### Statistics
After playing a few rounds, you can visit the statistics section to review your performance. Discover which subjects are your strengths and which ones need improvement. 

For instance, the statistics may reveal that user's highest success rate, currently at 40%, lies in the subject of history.
#### Subject Frequency
The columns in the table represent the number of times you've engaged with each subject. For instance, in this case user played Entertainment music the most times, it indicates a significant passion on that subject, but this does not necessarily mean that the user is strong on this subject.

#### Success Analysis
Delve into the success percentages to assess your proficiency in various areas. For instance, if you have a success rate of 7% in music, it suggests room for improvement in this subject. Conversely, if your success rate in geography is low or non-existent, it indicates an area that requires attention and practice.


![image](https://github.com/hadiBH/Whac-A-Mole-Study-Buddy/assets/97242311/10568114-5768-460d-8efb-f2b14853dd84)

#### We hope you like our study buddy,

#### [Try by yourself](https://trivia2-u5rb.onrender.com)



