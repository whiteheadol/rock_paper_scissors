# Rock, Paper, Scissors

<img width="500" alt="Rock, Paper, Scissors Project" src="https://user-images.githubusercontent.com/96206823/157110347-d362555b-2c6e-4c4b-b8ca-1c6b4f472f5c.png">

## Table of Contents

  - [Introduction](#introduction)
  - [Deploy Link](#deploy-link)
  - [Technologies](#technologies)
  - [Features](#features)
  - [Page Demo](#page-demo)
  - [Possible Future Extensions](#possible-future-extensions)
  - [Set Up](#set-up)
  - [Contributors](#contributors)
  - [Project Specs](#project-specs)
  - [Project GitHub Repo](#project-github-repo)

## Introduction
The Rock, Paper, Scissors challenge was assigned as a final project for Turing School of Software Design's Front End Module 1. Students were instructed to work independently with a timeframe of one week to make a game with a minimum functionality laid out in the rubric.

The game has two options - in my case these are represented by the labels **Classic** and **Spicy**, and users can switch between the to options as they wish.

While completing this project, I feel that I built on my knowledge of and comfort with using class to class interaction. Personally, I felt that both my biggest win and challenge was understanding how to separate the DOM manipulation from the data model itself. This concept took the most thought and refactoring, but I feel that I was able to reach a point of understanding that I am happy with at this point in the program. 

## Deploy Link
[Try the website here!]() (This is not functional yet, but I will be adding a deploy link as soon as the projects are graded and I am able to make it public.)

## Technologies
  - Javascript
  - HTML
  - CSS
    - Flexbox

## Features
- When a user loads the page, they'll see a home screen with two side bars and a main page.
- Clicking on the **Change your Token!** button will allow the user to cycle through three alien token options and choose their favorite. This token will persist at the top of the user's sidebar as they play the game.
- From here, the user will be able to click on the classic or spicy game, depending on which they would prefer to play. (All buttons will change in color and size when hovered over, so that the user sees the fact that they are clickable.)
- Once deciding on a game style, the user will be able to select their weapon of choice. The game will pause for a moment, mimicking the computer taking the time to make a selection of its own. Then, the screen will update to show the two weapons chosen by the user and computer along with text declaring the winner. The appropriate sidebar will update as well to reflect the game's new score.
- Two buttons will now appear under the chosen weapons. The user can click on **Choose again!** to play another round with the same level of difficulty, or **Switch games!** to load the other difficulty option. The side bars will keep a running score, regardless of how many times the user switches between the games.

## Page Demo
An example of the token changing functionality:

![Example of button functionality](https://media.giphy.com/media/EAf1r6v3IkPC265t3T/giphy.gif)

Choosing a weapon:

![Example of button functionality](https://media.giphy.com/media/eW42RvArwnwsXIVG7e/giphy.gif)

## Possible Future Extensions
- Add local storage functionality so that user and computer wins persist upon page refresh.
- Allow users to choose between different image styles for their weapon displays if they want a different feel to their game.

## Set Up
1. Fork and clone this repo.
2. Type `cd rock_paper_scissors` to move into the root directory.
3. Read this README thoroughly, then make any desired changes!

## Contributors
- Olivia Whitehead (GitHub: whiteheadol)

## Project Specs
- The spec for this project can be found [here](https://frontend.turing.edu/projects/module-1/rock-paper-scissors-solo.html).

## Project GitHub Repo
- The project repo can be found [here](https://github.com/whiteheadol/rock_paper_scissors).
