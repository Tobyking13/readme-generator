# readme-generator

## Description

I have created a readme markdown generator using Node.js. To start the application run node index.js in the terminal when in the directory with index.js. The app asks the user a series of questions such as the description and the title. Once all the questions are answered the application will create a README.md file. 

Some features ask the user if they would like to add a screenshot, if there isn't one the readme.screenshots title will simply say N/A. The app also asks if there were any contributors then using loops will format the input data to provide a list of links to the user's GitHub profiles. Again, if there are none the README.md file will simply say N/A.

I created two objects one with technologies and web links to the icons and another object with different licences and links to the licence badges. Using for of loops the application will loop through the objects and if there is a match to the user's input, display the badges neatly at the top of the readme file. 

This has been a great insight into using Node.js and seeing its capabilities. I was also introduced to ES6 features like arrow functions. I have also started to implement different types of for loops, specifically for of loops.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Issues](#issues)

## Installation

Google Drive link to myreadmegenerator_README.md:

https://drive.google.com/file/d/1kkGPIuT5uOmX_WaqHS38WOX7ZMxyUUNn/view?usp=sharing

Google Drive link to video of the application:

https://drive.google.com/file/d/11-uJqu-O8uAIj_5cviDBVJ2eham0wXq9/view?usp=sharing

## Usage

![Toby King README generator](./assets/screenshot.png "Toby King README generator" )
Screenshot of the application.

## Features

* Using node.js, my app allows the user to create a comprihensive README markdown file.
* Dynamically adds contributors or none if that is the case
* Adds tech badges to the top of the README file. 

