// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'mit') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'mozilla') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else if (license === 'perl') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else
    return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'apache') {
    return '## License\ [Apache License](https://opensource.org/licenses/Apache-2.0)\ ';
  } else if (license === 'mit') {
    return '## License\ [Mit License](https://opensource.org/licenses/MIT)\ ';
  } else if (license === 'mozilla') {
    return '## License\ [Mozilla License](https://opensource.org/licenses/MPL-2.0)\ ';
  } else if (license === 'perl') {
    return '## License\ [Pearl License](https://opensource.org/licenses/MPL-2.0)\ ';
  } else
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseBadge = renderLicenseBadge(data.license);
  var licenseLink = renderLicenseLink(data.license);
  console.log(licenseBadge);
  return `

# ${data.TitleofProject}

${licenseBadge}

## Description
${data.description}

## Table of Contents 
- [Installation](#installation)

- [usage](#usage)

- [License](#license)

- [Tests](#tests)

- [Contribution](#contribution)

- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.contribution}

${licenseLink}

## Contribution
${data.contribution}

## Tests
${data.test}

## Questions 
GitHub UserName: [${data.GitHub}](www.github.com/${data.GitHub})

If you want to contribute to my project, feel free to reach out to me.
\ Email: ${data.email}`

}

module.exports = generateMarkdown;