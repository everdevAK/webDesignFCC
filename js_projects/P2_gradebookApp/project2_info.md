# Meta http-equiv:
________________________________
```html head
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
```
-  It was designed specifically for `Internet Explorer` (IE) to control how it renders your webpage. Here's what it does:

**Purpose**
- It forces IE to use the latest rendering engine available, rather than falling back to older compatibility modes.

- This helps ensure your site is displayed using modern web standards, improving layout, performance, and behavior.

**Why It Was Needed**
- Older versions of IE (like IE8, IE9, IE10) had multiple "document modes" that emulated previous versions.

- Without this tag, IE might default to an older mode—especially if the site is on an intranet or has legacy DOCTYPEs—causing layout issues or broken functionality.

**Modern Relevance**
- Modern browsers ignore this tag. Chrome, Firefox, Safari, and even Microsoft Edge don’t use it.

- Microsoft officially ended support for Internet Explorer in 2021, so unless you're supporting legacy systems, you can safely omit it.

**When to Use It**
- If your site must support older versions of IE, especially in enterprise environments.

- Otherwise, it's mostly obsolete and can be left out of new projects1.



# To Capitalize a Value in JS:
____________________________________
```js
str.charAt(0).toUpperCase() + str.slice(1);
```
- `str.slice(1)` Returns the rest of the string, starting from index 1 (i.e., skipping the first character).



# max & min property for <input type="number">
______________________________________________________
- Setting max="100" in your HTML only affects the up/down arrows in the number input and provides a hint to browsers.

- But it doesn’t strictly prevent users from typing in values beyond that. To enforce the limit, you’ll need a bit of JavaScript validation.
