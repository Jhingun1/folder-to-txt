const fs = require('fs');
const path = require('path');
const htmlparser2 = require('htmlparser2');

// Update this to the path of your folder
const rootFolderPath = path.join(__dirname, 'docs.astuto.io');

// Function to extract text from HTML
const extractTextFromHTML = (htmlContent) => {
  let text = '';
  const parser = new htmlparser2.Parser({
    ontext: (data) => {
      text += data;
    }
  }, { decodeEntities: true });
  
  parser.write(htmlContent);
  parser.end();
  
  // Replace unusual line terminators with standard line breaks
  text = text.replace(/\u2028|\u2029/g, '\n');
  
  return text;
};

// Function to process files in the folder
const processFolder = (folder, outputFilePath) => {
  fs.readdir(folder, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${folder}:`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(folder, file);

      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error getting stats for file ${filePath}:`, err);
          return;
        }

        if (stats.isDirectory()) {
          // Recursively process subdirectories
          processFolder(filePath, outputFilePath);
        } else {
          const ext = path.extname(file).toLowerCase();
          if (ext === '.html') {
            fs.readFile(filePath, 'utf8', (err, data) => {
              if (err) {
                console.error(`Error reading file ${filePath}:`, err);
                return;
              }

              const textContent = extractTextFromHTML(data);

              // Append text content to the output file in the root folder
              fs.appendFile(outputFilePath, `\n\n--- ${filePath.replace(rootFolderPath + '/', '')} ---\n\n${textContent}`, (err) => {
                if (err) {
                  console.error(`Error writing to file ${outputFilePath}:`, err);
                } else {
                  console.log(`Processed file ${filePath}`);
                }
              });
            });
          }
        }
      });
    });
  });
};

// Determine the name of the output file based on the folder name
const folderName = path.basename(rootFolderPath);
const outputFilePath = path.join(__dirname, `${folderName}.txt`);  // Save the file in the current directory

// Create or clear the output file in the current directory
fs.writeFile(outputFilePath, '', (err) => {
  if (err) {
    console.error(`Error creating output file ${outputFilePath}:`, err);
  } else {
    // Start processing from the root folder
    processFolder(rootFolderPath, outputFilePath);
  }
});
