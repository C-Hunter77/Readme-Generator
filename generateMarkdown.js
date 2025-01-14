// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  } else if (license === "GPL") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "BSD") {
    return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    return `[Apache License](https://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license === "GPL") {
    return `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "BSD") {
    return `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.`;
  } else if (license === "Apache") {
    return `This project is licensed under the Apache License - see the [Apache License](https://www.apache.org/licenses/LICENSE-2.0) for details.`;
  } else if (license === "GPL") {
    return `This project is licensed under the GPL License - see the [GPL License](https://www.gnu.org/licenses/gpl-3.0) for details.`;
  } else if (license === "BSD") {
    return `This project is licensed under the BSD License - see the [BSD License](https://opensource.org/licenses/BSD-3-Clause) for details.`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown 
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.username}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
 
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please feel free to contact me at - [${data.email}]. You can also find me on GitHub at (https://github.com/${data.username})

  `;
}

export default generateMarkdown;
