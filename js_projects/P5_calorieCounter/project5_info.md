# ⭐ Regular Expression (regex)
___________________________________
- Regular expressions (regex) in JavaScript are `patterns` used to `match character combinations in strings`. Think of them as super-powered search tools.

1. ⭐ **What Is a Regular Expression?**
- `A regex is a sequence of characters that defines a search pattern`.
- **You use it to:**
- Validate input (like emails or phone numbers)
- Search and replace text
- Extract specific parts of a string


2. ⭐ **How to Create a Regex in JavaScript**
- **There are two ways:**
```js
// 1. Regex Literal:
const pattern = /hello/;

// 2. RegExp Constructor: 
const pattern = new RegExp("hello");

// Both do the same thing—match the word "hello".
```

3. ⭐ **Flags You Can Add:**
- Regex can also take specific flags to alter the pattern matching behavior.
- Flags are added after the `closing` `/`. 

- `g` -> Global match (find all matches)
- `i` -> Case-insensitive
- `m` -> Multiline mode


4. ⭐ **Common Regex Symbols, `Shorthand character classes`, Modifiers:**
- In regex, shorthand character classes allow you to match specific characters without having to write those characters in your pattern.

- Shorthand character classes are `preceded with a backslash` `\`.

| Symbol | Meaning                             | Example    | Matches                 |
|--------|-------------------------------------|------------|-------------------------|
| `.`    | Any character except newline        | `/h.t/`    | "hat", "hot", "hit"     |
| `\d`   | Digit (0–9)                         | `/\d/`     | "3", "7"                |
| `\w`   | Word character (letters, digits, _) | `/\w/`     | "a", "9", "_"           |
| `\s`   | Whitespace                          | `/\s/`     | " ", "\t"               |
| `^`    | Start of string                     | `/^Hi/`    | "Hi there"              |
| `$`    | End of string                       | `/end$/`   | "The end"               |
| `*`    | 0 or more times                     | `/lo*/`    | "l", "lo", "loo"        |
| `+`    | 1 or more times                     | `/lo+/`    | "lo", "loo"             |
| `?`    | Optional                            | `/colou?r/`| "color", "colour"       |
| `[]`   | Character set                       | `/[aeiou]/`| "a", "e", "i", "o", "u" |
| `|`    | OR                                  | `/cat|dog/`| "cat", "dog"            |


5. ⭐ **Using Regex with JavaScript Methods:**
```js
// match() – Finds matches: returns an array of matched results, if no match results are found it returns "null".
"hello123".match(/\d+/); // ["123"]

// test() – Returns true/false:
/\d+/.test("abc123"); // true

// replace() – Replaces matched text:
"hello world".replace(/world/, "there"); // "hello there"
```


6. ⭐ **Real-Life Examples:**
```js
// Email Validation:
/^[\w.-]+@[\w.-]+\.\w{2,}$/

// Phone number:
/^\d{3}-\d{3}-\d{4}$/

//Password strength:
/^(?=.*[A-Z])(?=.*\d).{8,}$/
```

7. ⭐ **Backslash "\" in regex:**
- You need to use the `backslash` `\` character to `escape the + symbol` because it has a `special meaning` in `regular expressions`.
```js
const regex = /\+-/;
```

- **Backslash \ is also used for shorthand character classes:**
- `\s` -> whitespace
- `\d` -> digits (0-9)
- `\w` -> word character (letters, digits, _)
 
```js
const regex = /\+-\s/; // looks for "+- " in order.

// When using character set/class you can omit \ for +:
const regex = /[+-\s]/;
```




# ⭐ insertAdjacentHTML() 
_________________________________
- Your other bug occurs if you add a Breakfast entry, fill it in, then add a second Breakfast entry. You'll see that the values you added disappeared.

- This is because you are updating innerHTML directly, which does not preserve your input content.

- Change your innerHTML assignment to use the `insertAdjacentHTML() method` of targetInputContainer instead.

- **The insertAdjacentHtml method takes `two arguments`:**
1. The `first argument` is a string that specifies the `position` of the inserted element.

- For the `first argument`, pass the string `beforeend` to insert the new element as the `last child` of targetInputContainer.

2. The `second argument` is a string containing the HTML to be inserted.


```js
function addEntry() {
  const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
  const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />`;
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
```



# Name Attribute (<form>) 
_________________________________
- The name attribute in HTML form elements is like a label that identifies the data when it's submitted to a server.

- It's essential for processing form input correctly.

**Purpose of the name Attribute**

1. **Data Identification:**
- When a form is submitted, each input's name becomes the `key` in the `key-value pair` sent to the server.

```html
<input type="text" name="username" />

<!-- If the user enters "Alice", the server receives: username="Alice" -->
```

2. **Server-Side Access:**
- Backend languages (like PHP, Python, Node.js) use the `name` to `retrieve the submitted value`.

- Without it, the input data won’t be included in the submission.

3. **FormData API:**
- JavaScript uses the `name` attribute when `collecting form data` via the `FormData object`.

4. **Grouping Inputs:**
- For `radio buttons`, using the `same name` groups them so only one can be selected:

```html
<input type="radio" name="gender" value="male" />
<input type="radio" name="gender" value="female" />
```

5. **Common Mistake:**
- Leaving out the name attribute means the input’s value won’t be sent when the form is submitted.

- It’s like writing a message but forgetting to say who it’s from.



# ⭐ Button's Behavior in <form>
___________________________________
- By default, a <button> inside a <form> acts as a `submit button` unless you specify otherwise.

- That means if you omit the type, clicking the button would try to submit the form—even if you didn’t intend it to.

**Example**
```html
<form>
    <div class="controls"> 
        <span>
            <label for="entry-dropdown">Add food or exercise:</label>
            <select id="entry-dropdown" name="options"></select> <button id="add-entry" type="button">Add Entry</button> 
        </span> 
    </div>
</form>
```
```js
const addEntryBtn = document.getElementById("add-entry")

addEntryBtn.addEventListener("click", function() {
  // Add food or exercise logic here
});
```
1. **Prevents Form Submission:**
- This button is meant to trigger an action (like adding an entry) without submitting the form. So `type="button"` ensures it doesn't accidentally submit the form.

2. **Used with JS**
- Typically, this kind of button is paired with JavaScript to dynamically add items, show modals, or perform other client-side actions:



# Selected attribute for <option>
_______________________________________
- From the list of options it selects the option that has `selected` attribute given to it.

```html
<select id="entry-dropdown" name="options">
    <option value="breakfast" selected>Breakfast</option>
    <option value="lunch" selected>Lunch</option>
</select>
```



# getElementById()
_________________________________
- To access an HTML element with a given id name, you can use the getElementById() method. 

**Example**
```html
<h1 id="title">Main title</h1>
```
```js
const mainTitleElement = document.getElementById('title');
```



# Common Practice (Prefixing a variable with "is" or "has")
_________________________________________________________________
- In programming, `prefixing a variable` with `is` or `has` is a common practice to signify that the variable represents a `boolean value`.

```js
let isRunning = true;
let hasCompleted = false;
```



# Receving Input Values in JS:
___________________________________
- Values from an HTML input field are received as strings in JavaScript.

- You'll need to convert these strings into numbers before performing any calculations.




# Replace Method JS
__________________________
- avaScript provides a `.replace() method` that enables you to replace characters in a string with another string.

- This method accepts `two arguments`.
- The `first argument` is the character sequence to be replaced, which can be either a string or a regex pattern.
- The `second argument` is the string that replaces the matched sequence.

- Since `strings` are `immutable` `string.replace()` method returns a new string;



# ⭐ <select> Static Context:
_________________________________
- `Static context` = code runs once, captures the value at that moment.

- `Dynamic behavior` = use an event listener to react to user changes.

**Examples**
```js
const entryDropdown = document.getElementById('entry-dropdown');
console.log(entryDropdown.value);

//This code runs once, typically when the page loads. At that moment, entryDropdown.value will return "breakfast" because it's the default selected option.
```

**How to make it dynamic**
```js
entryDropdown.addEventListener('change', function() {
  console.log(entryDropdown.value); // This will reflect the new selection
});
```



# querySelectorAll() Method
_________________________________
- The `querySelectorAll()` method returns a `NodeList` of all the elements that match the selector.

- A `NodeList` is an array-like object, so you can access the elements using bracket notation.




# Submit Behavior in <form>
____________________________________
- The `submit event` is triggered when the form is submitted. 
- The `default action` of the `submit event` is to `reload` the page. 
- To prevent this default action use: `preventDefault()` method of your e parameter.

```js
function calculateCalories(e) {
  e.preventDefault();
  isError = false;
}
```



# ⭐ Math.abs()
____________________
- `Math.abs()` is a built-in JavaScript method that will return the absolute value of a number.

```js
const num = -5;
Math.abs(num); // 5
```



# ⭐ Class List (.remove())
__________________
- An element has a `classList` property.
- This property has a `.remove()` method, which accepts a string representing the class to remove from the element.

```js
const paragraphElement = document.getElementById('paragraph');
paragraphElement.classList.remove('hide');
```



# ⭐ document.querySelectorAll && Array Object:
__________________________________________________
- The `document.querySelectorAll` returns a NodeList, which is `array-like` but is `not an array`.

- ⭐ The `Array` object has a `.from()` method that accepts an `array-like` and returns an `array`.

- This is helpful when you want access to more robust array methods

**Example:**
```html
<ul>
  <li>List 1</li>
  <li>List 2</li>
  <li>List 3</li>
</ul>
```
```js
const listItemsArray = Array.from(document.querySelectorAll('li'));

console.log(listItemsArray); //Output: (3) [li, li, li]
```



# ⭐ The difference between innerText and innerHTML is that innerText will not render HTML elements, but will display the tags and content as raw text.


# ⭐ Unbroken Text
__________________________________
- Long `unbroken` text like "dddddddddddddddd..." doesn't contain spaces or breakpoints, so even with flex-wrap: wrap, the browser tries to keep it on one line.

- `flex-wrap wraps` flex items, not text inside a single item. So your span is one flex item, and the text inside it needs its own wrapping rules.

```css
.element {
  word-break: break-word;
  overflow-wrap: break-word;
}
```