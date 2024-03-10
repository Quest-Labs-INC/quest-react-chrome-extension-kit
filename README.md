# Quest Chrome Extension Kit Starter Template

This template provides a starting point for creating a Chrome extension using React and TypeScript with Vite.

## Getting Started

1. **Clone the Repository:** 

git clone https://github.com/Quest-Labs-INC/quest-react-chrome-extension-kit


2. **Install Dependencies:**

cd quest-react-chrome-extension-kit
npm install


3. **Development:**
- Start the development server:
  ```
  npm run dev
  ```
- This will launch a development server using Vite, which will automatically reload the extension whenever you make changes to the source code.

4. **Building:**
- To build the extension for production, run:
  ```
  npm run build
  ```
- This command will transpile the TypeScript code to JavaScript and bundle the extension using Vite.

5. **Testing the Extension:**
- Load the extension in Chrome:
  1. Open Chrome and go to `chrome://extensions/`.
  2. Enable "Developer mode" in the top right corner.
  3. Click on "Load unpacked" and select the `dist` directory in your project.

6. **Adding Functionality:**
- Edit `src/background.ts` to add background script functionality.
- Update `src/manifest.json` to add permissions, content scripts, etc., as needed for your extension.

7. **Packaging:**
- To package the extension for distribution, run:
  ```
  npm run build-extension
  ```
- This will create a `dist` directory with the necessary files for your extension.

8. **Customizing:**
- Update the `manifest.json` file in the `src` directory to customize your extension's name, description, version, etc.

9. **Publishing:**
- To publish your extension to the Chrome Web Store, follow the [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole) instructions.

10. **Additional Resources:**
 - For more information on developing Chrome extensions, refer to the [Chrome Extension Developer Guide](https://developer.chrome.com/docs/extensions/mv3/getstarted/).


