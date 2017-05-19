# smart-console

Simple JavaScript library that provides shorthand methods to manage console output with 0 dependencies. Customize your console output with different colors and bold style.
Suitable for browsers and for NodeJS.

Every console object method (for more info see: [MDN](https://developer.mozilla.org/en/docs/Web/API/console) and
[Google API](https://developers.google.com/web/tools/chrome-devtools/console/console-reference)) has a name shortcut and predefined colors can be added to the log() messages:
* Success (green)
* Info  (blue)
* Warning   (yellow)
* Danger    (red)

__The script can have different effects based on the browser used__

File explanation:
* index.html - list of examples
* browser folder - it has 2 files suitable to be used on a browser, one is normal and one minify
* nodejs folder - it has the NodeJS module and the package.json

## How to use it:
### Browser version
Insert the library as usual:
```javascript
<script src="browser/smart-console.js"></script>
```

Write 'c' instead of 'console' and use one of the method shortcuts. For example:
```javascript
console.log('test');
```

Becomes:
```javascript
c.l('test');
```

![shortcuts results](browser/3.png)

Write the shortcut for the console method and check the console:

![console logs](browser/1.png)
![console results](browser/2.png)

If you forget the shortcuts' name:
```javascript
> c.l(c);
```

For the log() messages you can use 3 different ways to insert a variable and you can give the bold style:

![shortcuts results](browser/4.png)
![shortcuts results](browser/5.png)

#### Colors
You can add 4 default colors for the text and the background and the bold formatting.

Colors are available only for log().

How to add colors (see above image):
* Green = Success -> Add 'S' for just green text, add 'B' for bold text, add 'BG' for green background
* Blue = Info -> Add 'I' for just blue text, add 'B' for bold text, add 'BG' for blue background
* Amber = Warning -> Add 'W' for just amber text, add 'B' for bold text, add 'BG' for amber background
* Red = Danger -> Add 'D' for just red text, add 'B' for bold text, add 'BG' for red background

__Style can be added only to the whole message__

### NodeJS version
Insert the module as usual:
```javascript
> npm install --save smart-console
```
```javascript
> const {c} = require("smart-console");
```
Follow the same instructions for the browser version, the bold style is not supported.

This module is derived from the browser version and some of the console methods may not work in the terminal (i.e. console.debug()).

![console logs](browser/6.png)
![console results](browser/7.png)

[For Issues](https://github.com/achille1789/smart-console/issues)

[![License](https://img.shields.io/badge/License-MIT-yellowgreen.svg?style=flat-square)](https://github.com/achille1789/smart-console/blob/master/LICENSE)
