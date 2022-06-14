// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === 'None')
    return "";
  else if (license === 'MIT')
    return "![license GPL 3.0](https://img.shields.io/badge/License-MIT-blue)";
  else if (license === 'GPL 3.0')
    return "![license MIT](https://img.shields.io/badge/License-GPL%203.0-green)";
  else if (license === 'BSD 3')
    return "![license BSD 3](https://img.shields.io/badge/License-BSD%203-orange)";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None')
    return "";
  else if (license === 'MIT')
    return "https://choosealicense.com/licenses/mit/";
  else if (license === 'GPL 3.0')
    return "https://choosealicense.com/licenses/gpl-3.0/";
  else if (license === 'BSD 3')
    return "https://choosealicense.com/licenses/bsd-3-clause-clear/";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'None')
  return "";
else 
  return `This application is covered under ${renderLicenseLink(license)} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Content
  -[Installation](#Installation)  
  -[Usage](#Usage)  
  -[License](#License)  
  -[Contributing](#Contributing)  
  -[Tests](#Tests)  
  -[Questions](#Questions)  
  

  ## Installation
  ${data.commandD}
  
  ## Usage
  ${data.repoUsage}
 
  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.repoContribute}

  ## Tests
  ${data.commandT}
 
  ## Questions
  GitHub link: https://github.com/${data.username}  
  You can contact me at the following email address with additional questions:  
  ${data.email} 
 
`;
}

module.exports = generateMarkdown;
