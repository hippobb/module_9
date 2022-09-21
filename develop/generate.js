// function that returns a license badge and info link based on which license is passed in
function renderLicense(data) {
  if (data.license === 'IBM'){
    data.badge = `![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg`;
    data.link = 'More information: (https://opensource.org/licenses/IPL-1.0)';
  } else if (data.license === 'ISC') {
    data.badge = `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/ISC)';
  } else if (data.license === 'MIT') {
    data.badge = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/MIT)';
  } else if (data.license === 'Mozilla') {
    data.badge = `![License: GPL v3](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    data.link = 'More information: (https://opensource.org/licenses/MPL-2.0)';
  } else if (data.license === 'No license') {
    data.badge = '';
    data.link = '';
  }
};

function renderSection(data) {
  if (!data.confirmDescription){
    descriptionText = ``;
    data.confirmDescription = '';
  } else {
    descriptionText = `## Description'
    ${data.description}`;
    data.confirmDescription = '- [Description](#Description)';
  } 
  
  //installation section and info 
  if (!data.confirmInstallation){
    installationText = ``;
    data.confirmInstallation = '';
  } else {
    installationText = `## Installation'
    ${data.installation}`;
    data.confirmInstallation = '- [Installation](#Installation)';
  }
  
  if (!data.confirmUsage){
    usageText = ``;
    data.confirmUsage = '';
  } else {
    usageText = `## Usage'
    ${data.usage}`;
    data.confirmUsage = '- [Usage](#Usage)';
  }
  
 if (!data.confirmContributing){
  contributingText = ``;
  data.confirmContributing = '';
 } else {
  contributingText = `## Contributing'
  ${data.contributing}`;
  data.confirmContributing = '- [Contributing](#Contributing)';
}

  if (!data.confirmTests){
    testsText = ``;
    data.confirmTests = '';
  } else {
    testsText = `## Tests'
    ${data.tests}`;
    data.confirmTests = '- [Tests](#Tests)';
  }
  
  if (!data.confirmEmail){
    Emailusage = ``;
    emailText= ``;
    
  } else {
    emailText = 
    `Contact me by email: ${data.email}`;    
  }
};


function generate(data) {
  renderLicense(data);
  renderSection(data);
};

module.exports = generate;