// function to generate markdown for README
function generateMarkdown(data) {
  let contributionBadge;
  let userContributionArr = data.contributing.split(",");
  let userArr = [];
  let i = 0;

  tech = () => {
    let techArr = [];
    const tech = {
      HTML:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      CSS:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      JavaScript:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      Node:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      jQuery:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      React:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    };
    for (let [key, value] of Object.entries(tech)) {
      if (data.tech.includes(key) === true) {
        techArr.push(` <img src="${value}" alt="${key}" style="width:5%"> `);
      }
    }
    techArr = techArr.toString().replaceAll(",", "");
    return techArr;
  };

  badge = () => {
    let badge;

    let badgeObj = {
      apache: [
        "Apache License 2.0",
        "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
        "https://opensource.org/licenses/Apache-2.0",
      ],
      gnu: [
        "GNU General Public Licence v3.0",
        "https://img.shields.io/badge/License-GPLv3-blue.svg",
        "https://www.gnu.org/licenses/gpl-3.0",
      ],
      mit: [
        "MIT",
        "https://img.shields.io/badge/License-MIT-yellow.svg",
        "https://opensource.org/licenses/MIT",
      ],
      bsd2: [
        'BSD 2-Clause "Simplified" ',
        "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
        "https://opensource.org/licenses/BSD-2-Clause",
      ],
      bsd3: [
        'BSD 3-Clause "New" or "Revised" ',
        "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
        "https://opensource.org/licenses/BSD-3-Clause",
      ],
      boost: [
        "Boost Software License 1.0",
        "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
        "https://www.boost.org/LICENSE_1_0.txt",
      ],
      creative: [
        "Creative Commons Zero v1.0 Universal",
        "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
        "http://creativecommons.org/publicdomain/zero/1.0/",
      ],
      eclipse: [
        "Eclipse Public License 2.0",
        "https://img.shields.io/badge/License-EPL_1.0-red.svg",
        "https://opensource.org/licenses/EPL-1.0",
      ],
      mozilla: [
        "Mozilla Public License 2.0",
        "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
        "https://opensource.org/licenses/MPL-2.0",
      ],
    };

    for (let value of Object.values(badgeObj)) {
      if (data.licence.includes(value[0]) === true) {
        return (badge = `[![License: ${value[0]}](${value[1]})](${value[2]})`);
      }
    }
  };

  if (userContributionArr[0] === "none") {
    userArr = [`N/A`];
    contributionBadge = "";
  } else {
    while (i < userContributionArr.length) {
      userArr.push(
        ` Contribution ${i + 1}.) https://github.com/${userContributionArr[
          i
        ].trim()} <br> `
      );
      i++;
    }
    contributionBadge = `[![Contribution badge](https://img.shields.io/badge/Contributions-${userContributionArr.length}-blue.svg)](#contributing)`;
    userArr = JSON.stringify(userArr);
    userArr = userArr.replaceAll('","', " ");
    userArr = userArr.replaceAll('["', " ");
    userArr = userArr.replaceAll('"]', " ");
    userArr = userArr.trim();
  }

  screenshot = () => {
    let screenshot;
    if (data.screenshot === "none") {
      return (screenshot = "N/A");
    } else {
      return (screenshot = `<img src="${data.screenshot}" alt="${data.title}" style="width:65%"></img>`);
    }
  };

// CHANGE CONTRIBUTE TO CREDITS
// CHANGE CONTRIBUTE TO HOW TO IMPROVE PROJECT
// USe a decent screenshot
// put questions in bulletpoints


  return `
  # ${data.title}

  ${tech()}

  ${badge()} ${contributionBadge}

  <hr>

  ## Description 

  ${data.description} 

  ## Table of Contents

  - [Installation](#installation)
  - [Screenshot](#screenshot)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Installation 

  ${data.installation}

  ### Screenshot

  ${screenshot()}

  ### Usage

  ${data.usage}

  ### Licence

  This project is licensed under the ${data.licence} license.

  ### Contributing

  ${userArr}
  
  ### Tests

  ${data.tests}

  ### Questions

  If you have any questions about this application pleas email: ${
    data.email
  } and I will get back to you as soon as possible. 
  
  You can find more of my work over on GitHub: https://github.com/${
    data.username
  }.
  `;
}

module.exports = generateMarkdown;
