# smart-console

Simple JavaScript library that provides shortcuts to manage the console methods and to add colors.
Suitable for browsers and for NodeJS.

Every console object method (for more info see: [MDN](https://developer.mozilla.org/en/docs/Web/API/console) and
[Google API](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)) has a name shortcut and predefined colors can be added to the log() messages:
* Success
* Info
* Warning
* Danger

__The script can have different effects based on the browser used__

File explanation:
* index.html - list of examples
* browser folder - it has 2 files suitable to be used on a browser, one is normal and one minify
* nodejs folder - it has the NodeJS module and the package.json

# How to use it:
## Browser version
Insert the library as usual:
> <script src="browser/smart-console.js"></script>

Write the shortcut for the console method:
![console logs](browser/1.png)
Check the console
[console logs](browser/2.png)

[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/achille1789/smart-console/blob/master/LICENSE)
