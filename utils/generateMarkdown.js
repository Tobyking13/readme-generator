// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  # ${data.title}
  <br>
  
  ## Description 
  <br>
  ${data.description} 
  <br>

  ## Installation 
  <br>
  ${data.installation}
  <br>

  ## Licence
  <br>
  ${data.licence}
  <br>
`;
}

module.exports = generateMarkdown;


// console.log(data)
//     const title = `# ${data.title}`;
//     const horizontalRule = `---`
//     const description = `## Description <br> ${data.description}`;

//     const mdFile = 
//     `${title} 
//     ${description}
//     `