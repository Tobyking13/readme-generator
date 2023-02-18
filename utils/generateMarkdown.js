// function to generate markdown for README
function generateMarkdown(data) {
  let badge;

  switch(data.licence) {
    case 'Apache License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case 'GNU General Public Licence v3.0':
      badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case 'MIT':
      badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case 'BSD 2-Clause \"Simplified\" Licence':
      badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case 'BSD 3-Clause \"New\" or \"Revised\" Licence':
      badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case 'Boost Software License 1.0':
      badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case 'Creative Commons Zero v1.0 Universal':
      badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case 'Eclipse Public License 2.0':
      badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case 'Mozilla Public License 2.0':
      badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case 'NONE':
      badge = `No badge available`
      break;
  }
 
  // sections entitled => Description, Table of Contents (bulletpoints), Installation, Usage, Licence, Contributing, Tests, Questions 

  // add badges at top, contributors, issues etc
  // add badges on technologies used

  return `
  # ${data.title}
  ${badge}

  ## Description 

  ${data.description} 

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation 

  ${data.installation}

  ## Usage

  ![${data.title}](${data.usage} \"${data.title}\")

  ## Licence

  This project is licensed under the ${data.licence} license.

  ## Contributing

  ${data.contributing}
  
  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this application pleas email: ${data.email} and I will get back to you as soon as possible. You can find more of my work over on GitHub: https://github.com/${data.username}

  `;
}

module.exports = generateMarkdown;

