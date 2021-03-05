// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {


  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.TitleofProject}

    # Title of Project
    ${data.TitleofProject}

    ## Description
    ${data.description}

     ## Table of Contents 
     * [Installation](#installation)
     * [usage](#usage)
     * [License](#license)
     * [Contribution](#contribution)
     * [Tests](#tests)
     * [Questions](#questions)

     ## Installation
     ${data.installation}

     ## Usage
     ${data.contribution}

     ## License
     ${data.license}
     
     ## Contribution
     ${data.contribution}

     ## Tests
     ${data.test}

     ## Questions 
     GitHub UserName: [${data.GitHub}](www.github.com/${data.GitHub})

     If you want to contribute to my project, feel free to reach out to me. 
     Email: ${data.email}
  `;
}

module.exports = generateMarkdown;