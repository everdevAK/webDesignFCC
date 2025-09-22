# CSS Specificity Summary

CSS specificity determines which styles apply when multiple rules target the same element. It follows this hierarchy (from highest to lowest):

| Selector Type                        | Specificity Value | Example                            |
|--------------------------------------|-------------------|------------------------------------|
| Inline styles                        | 1000              | `<div style="...">`                |
| ID selectors                         | 0100              | `#header`                          |
| Classes, attributes, pseudo-classes  | 0010              | `.menu`, `[type="text"]`, `:hover` |
| Element selectors, pseudo-elements   | 0001              | `div`, `h1`, `::before`            |
| Universal selector, `:where()`       | 0000              | `*`, `:where()`                    |

**Key points:**
- Higher specificity overrides lower.
- If specificity is equal, the later rule in the stylesheet wins.
- Inline styles trump all except `!important` declarations.
- Avoid overly specific selectors to keep CSS manageable.

Example:
```css
/* Specificity: 0001 */
div { color: blue; }

/* Specificity: 0010 */
.menu { color: green; }

/* Specificity: 0101 */
div#header { color: red; }

```

# onclick button porperty:
_______________________________
```js
const button1 = document.querySelector("#btn1");
button1.onclick = goStore;

function goStore() {
    console.log("Going to store.");
}
```

# innerText porperty:
_______________________________
- The `innerText` property controls the text that appears in an HTML element. For example:

```html
<p id="info">Demo content</p> 
```
```js
const info = document.querySelector("#info"); 

// Right way to use `.innerText` property:
info.innerText = "Hello World"; 
```

- The example above would change the text of the p element from Demo content to Hello World.


# Objects in JS
__________________________
- `Objects` are an important data type in JavaScript.

- `Objects` are non `primitive` data types that store key-value pairs.

- `Objects` are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through properties.

**Non primitive data:** 
- types are `mutable` data types that are not `undefined`, `null`, `boolean`, `number`, `string`, or `symbol`.

**Mutable:**
- means that the data can be `changed` after it is `created`.


**Object syntax:**
```js
//Symple Syntax:
const obj = { key: value, key2: value2, ... };

//Objects with `normal` keys (property name):
const cat = { name: "Meuu", }

//Objects with `spaced` keys (property name):
const cat1 = { "Number of legs": 4, }

//Accessing Object Properties:
const cat2 = {
  name: "meuu",
  "number of legs": 4,
}

// using "." notation:
console.log(cat2.name); -> "meuu"

// using "[]" notation: (used when there is space in the property name)
console.log(cat2["number of legs"]); -> 4;
```


# ⭐ Math Object:
________________________
- The `Math object` in JavaScript is a built-in object that provides a suite of mathematical functions and constants. It's not a constructor, so you don’t create instances of it—just use its static methods and properties directly.

**Common Math Properties**
- `Math.PI` → π (approximately 3.14159)
- `Math.E` → Euler’s number (≈ 2.718)
- `Math.LN2` → Natural log of 2
- `Math.SQRT2` → Square root of 2



# ⭐ Popular Math Methods:
__________________________________
- These help you perform calculations:

**Rounding and Truncating**
- `Math.round(x)` → Rounds to nearest integer
- `Math.floor(x)` → Rounds down
- `Math.ceil(x)` → Rounds up
- `Math.trunc(x)` → Removes decimal part

**Random and Absolute**
- `Math.random()` → Returns a number between 0 (inclusive) and 1 (exlusive)
- `Math.abs(x)` → Absolute value

**Powers and Roots**
- `Math.pow(x,y)` -> x raised to the power y
- `Math.sqrt(x)` → Square root

**Min and Max**
- `Math.min(...values)` → Smallest value
- `Math.max(...values)` → Largest value

**Examples**
- Math.floor(Math.random() * 5) + 1;
- this generates a random number between 1 and 5

- monsterHealth -= weapons[currentWeaponIndex].power + Math.floor(Math.random() * xp + 1);

- gold += Math.floor(monsters[fighting].level * 6.7);



# innerHTML `(&#x2620) -> ☠, (&#x1F389) -> 🎉`
____________________________________________________
- In order for the `&#x2620; ☠` emoticon text to properly display on the page, you will need to use the innerHTML property.

- The `innerHTML` property allows you to access or modify the content inside an HTML element using JavaScript.



# ⭐ Ternary Operator
__________________________
- The `ternary operator` is a conditional operator and can be used as a one-line if-else statement. 
- The syntax is: `condition ? expressionIfTrue : expressionIfFalse`
```js
// if-else statement
if (score > 0) {
  return score
} else {
  return default_score
}

// ternary operator
return score > 0 ? score : default_score
```



# Logical OR operator
__________________________
- The `logical OR operator` will use the first value if it is truthy – that is, anything apart from NaN, null, undefined, 0, -0, 0n, "", and false. Otherwise, it will use the second value.
```js
return Math.random() > .2 || health < 20;
```


# Logical AND operator
________________________
- checks if both the conditions are true.
```js
if (firstName === "Quincy" && lastName === "Larson") { }
```



# .includes()
_____________________
- The `.includes() method` determines if an array contains an element and will return either true or false.
```js
const numbersArray = [1, 2, 3, 4, 5]
const number = 3

if (numbersArray.includes(number)) {
  console.log("The number is in the array.")
}
```