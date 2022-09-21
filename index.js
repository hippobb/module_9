const inquirer = require('inquirer');
const fs = require('fs');
const Readme =require('./src/readme.js');
const generate = require('./develop/generate.js');


// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      name: 'title',
      message: 'What is the title of your README? (Required)',
      validate: nameInput => {
         if (nameInput) {
            return true;
         } else {
            console.log('Please enter a title for the README');
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmDescription',
      message: 'Would you like to enter a description?',
      default: true
   },
   {
      type: 'input',
      name: 'description',
      message: 'Enter a description',
      when: ({ confirmDescription }) => {
         if (confirmDescription) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmInstallation',
      message: 'Would you like to enter installation instructions?',
      default: true
   },
   {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions',
      when: ({ confirmInstallation }) => {
         if (confirmInstallation) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmUsage',
      message: 'Would you like to enter usage information?',
      default: true
   },
   {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information',
      when: ({ confirmUsage }) => {
         if (confirmUsage) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'list',
      message: 'Select your license',
      choices: ['IBM', 'ISC', 'MIT', 'Mozilla', 'No license'],
      name: 'license'
   },
   {
      type: 'confirm',
      name: 'confirmContributing',
      message: 'Would you like to enter contributing information?',
      default: true
   },
   {
      type: 'input',
      name: 'contributing',
      message: 'Enter contributing instructions',
      when: ({ confirmContributing }) => {
         if (confirmContributing) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmTests',
      message: 'Would you like to enter tests information?',
      default: true
   },
   {
      type: 'input',
      name: 'tests',
      message: 'Enter tests information',
      when: ({ confirmTests }) => {
         if (confirmTests) {
            return true;
         } else {
            return false;
         }
      }
   },
   {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub user name? (Required)',
      validate: nameInput => {
         if (nameInput) {
            return true;
         } else {
            console.log('Please enter a GitHub user name');
         }
      }
   },
   {
      type: 'confirm',
      name: 'confirmEmail',
      message: 'Would you like to enter email information?',
      default: true
   },
   {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
      when: ({ confirmEmail }) => {
         if (confirmEmail) {
            return true;
         } else {
            return false;
         }
      }
   }
];


function writeToFile(data) {
   console.log(data.title);
   fs.writeFile("./Develop/"+data.title+".md", Readme(data), err => {
      if (err) throw err;
      console.log('README created! Check out the README.md file in the develop folder!');
   });
   
}

// 
function init() {
    inquirer.prompt(questions)
    .then(function(data){
     generate(data) 
     writeToFile(data)
    });
};

init();

