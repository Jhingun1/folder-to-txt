# Zip to Text

This Node.js script processes all `.html` files in a specified directory and its subdirectories, extracts the text content from these files, and saves the extracted text into a single `output.txt` file.

## Prerequisites

- Node.js installed on your system. You can download it from [Node.js official website](https://nodejs.org/).
- `wget` installed on your system. It is typically pre-installed on Linux and macOS. For Windows, you can download it from [GNU Wget](https://www.gnu.org/software/wget/).

## Installation

1. Clone the repository or download the script files.

2. Navigate to the directory containing the script in your terminal.

3. Install the required npm package:

   ```bash
   npm install htmlparser2
Downloading a Documentation Website
To download an entire documentation website using wget, follow these steps:

Open your terminal or command prompt.

Use the following wget command to download the website. Replace http://example.com/docs with the URL of the documentation site you want to download:

 ```bash
wget --mirror --convert-links --adjust-extension --page-requisites --no-parent http://example.com/docs



--mirror: Enable options for mirroring (recursively download the entire website).
--convert-links: Convert the links in the downloaded files to make them suitable for local viewing.
--adjust-extension: Save files with appropriate extensions (e.g., .html).
--page-requisites: Download all necessary files (images, CSS, etc.) to properly display the pages.
--no-parent: Do not ascend to the parent directory.
The downloaded website will be saved in a folder named after the website's domain.

Usage
After downloading the website, update the script to point to the downloaded folder by modifying the rootFolderPath variable:

javascript
Copy code
const rootFolderPath = path.join(__dirname, 'example.com/docs');
Place the folder you want to process (in this example, named example.com/docs) in the same directory as the script.

Run the script:

 ```bash
node folderToTxt.js
The script will create or overwrite an output.txt file in the specified folder, containing the extracted text from all .html files.

Example
If your folder structure looks like this after downloading the website:

 ```bash
project-folder/
├── folderToTxt.js
├── node_modules/
├── package.json
└── example.com/
    └── docs/
        ├── index.html
        ├── subfolder/
        │   └── page.html
        └── output.txt
After running the script, output.txt will contain the extracted text from index.html and subfolder/page.html.

Notes
The script only processes .html files. Other file types are ignored.
Ensure that you have read and write permissions for the directories and files involved.
Troubleshooting
If you encounter any issues, ensure the rootFolderPath is correctly set.
Verify that you have installed the htmlparser2 package.
Check for any error messages in the terminal for specific issues.
License
This project is licensed under the MIT License.

markdown

### Summary

- **Script Name**: `folderToTxt.js`
- **Folder Name**: `txt` (or the name of the folder you downloaded with `wget`)
- **Output File**: `output.txt` in the specified folder
- **Downloading Website**: Instructions to use `wget` to download the entire documentation website

Follow the instructions in the README to set up, download a documentation website, and run the script to extract text from the HTML files. If you have any further questions or need additional modifications, feel free to ask!
# folder-to-txt
