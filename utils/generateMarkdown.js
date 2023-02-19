// function to generate markdown for README
function generateMarkdown(data) {
  let badge;
  // let userContributionArr = data.contributing.split(',');
  let userArr = [];
  let i = 0;
  let screenshot;
  let techArr = [];


  if (data.tech.includes("HTML") === true) {
    techArr.push(
      `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" style="width:16px>`
    );
  }
  if (data.tech.includes("CSS") === true) {
    techArr.push(
      ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /> `
    );
  }
  if (data.tech.includes("JavaScript") === true) {
    techArr.push(
      ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" /> `
    );
  }
  if (data.tech.includes("Node.js") === true) {
    techArr.push(
      ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /> `
    );
  }
  if (data.tech.includes("jQuery") === true) {
    techArr.push(
      ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg" /> `
    );
  }
  if (data.tech.includes("React") === true) {
    techArr.push(
      ` <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> `
    );
  }

  // switch(data.licence) {
  //   case 'Apache License 2.0':
  //     badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  //     break;
  //   case 'GNU General Public Licence v3.0':
  //     badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  //     break;
  //   case 'MIT':
  //     badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  //     break;
  //   case 'BSD 2-Clause \"Simplified\" Licence':
  //     badge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  //     break;
  //   case 'BSD 3-Clause \"New\" or \"Revised\" Licence':
  //     badge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  //     break;
  //   case 'Boost Software License 1.0':
  //     badge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  //     break;
  //   case 'Creative Commons Zero v1.0 Universal':
  //     badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  //     break;
  //   case 'Eclipse Public License 2.0':
  //     badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  //     break;
  //   case 'Mozilla Public License 2.0':
  //     badge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  //     break;
  //   case 'NONE':
  //     badge = `No badge available`
  //     break;
  // }

  // if (userContributionArr[0] === "none") {
  //   userArr = [`N/A`];
  // } else {
  //   while (i < userContributionArr.length) {
  //     userArr.push(` Contribution ${i  + 1}.) https://github.com/${userContributionArr[i].trim()} <br> `);
  //     i++;
  //   }
  //   userArr = JSON.stringify(userArr);
  //   userArr = userArr.replaceAll('","', ' ');
  //   userArr = userArr.replaceAll('["', ' ');
  //   userArr = userArr.replaceAll('"]', ' ');
  //   userArr = userArr.trim();
  // }

  // if(data.screenshot === 'none') {
  //   screenshot = "none"
  // } else {
  //   screenshot = `![${data.title}](${data.screenshot} \"${data.title}\")`
  // }

  // techArr = JSON.stringify(techArr);
  // techArr = techArr.replaceAll('","', ' ');
  //   techArr = techArr.replaceAll('["', ' ');
  //   techArr = techArr.replaceAll('"]', ' ');
  //   techArr = techArr.trim();
  console.log(techArr);
  // sections entitled => Description, Table of Contents (bulletpoints), Installation, Usage, Licence, Contributing, Tests, Questions

  // add badges at top, contributors, issues etc
  // add badges on technologies used

  return `
  # ${data.title}
  ${techArr}

  ## Description 

  ${data.description} 

  ## Table of Contents

  - [Installation](#installation)
  - [Screenshot](#screenshot)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#test)
  - [Questions](#questions)

  ## Installation 

  ${data.installation}

  ## Screenshot

  ${screenshot}

  ## Usage

  ${data.usage}

  ## Licence

  This project is licensed under the ${data.licence} license.

  ## Contributing

  ${userArr}
  
  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this application pleas email: ${data.email} and I will get back to you as soon as possible. You can find more of my work over on GitHub: https://github.com/${data.username}

  `;
}

module.exports = generateMarkdown;
