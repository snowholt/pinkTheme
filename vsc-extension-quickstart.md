# Soft Pink Theme Extension Quick Start

## Getting Started

This guide will help you set up your Soft Pink Theme extension for Visual Studio Code.

### Prerequisites

- Install Node.js (version 12 or later)
- Install Visual Studio Code

### Setting Up the Project

1. Clone the repository or download the project files.
2. Open the project folder in Visual Studio Code.

### Installing Dependencies

Run the following command in the terminal to install the required dependencies:

```
npm install
```

### Building the Extension

To compile the TypeScript files, run:

```
npm run build
```

### Running the Extension

To launch the extension in a new VS Code window, press `F5`. This will open a new instance of VS Code with your extension loaded.

### Publishing the Extension

1. Ensure you have an account on the Visual Studio Code Marketplace.
2. Install the `vsce` tool globally:

```
npm install -g vsce
```

3. Run the following command to package your extension:

```
vsce package
```

4. Publish your extension using:

```
vsce publish
```

### Additional Resources

- [Visual Studio Code API](https://code.visualstudio.com/api)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

Happy coding!