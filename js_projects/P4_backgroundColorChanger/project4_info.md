# SyntaxError:
____________________
- `Syntax errors` are thrown when the JavaScript engine encounters something it can't interpret.
```js
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C"
  "#616A6B" // missing ','
  "#4A235A" // missing ','
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];

// SyntaxError: unknown: Unexpected token, expected "," (5:2)
```


# ReferenceError:
______________________
- A `ReferenceError` is thrown when a `non-existent variable` is referenced.
```js
 console.log(darkColorsArr.length * math.random()) // its Math [not] math.

 // Uncaught ReferenceError: math is not defined
 ```



# TypeError:
______________________
- A `TypeError` means that the code is trying to perform an operation on a `value` that is `not of the expected type`.
```js
const body = document.queryselector("body"); // querySelector [not] queryselector

// Uncaught TypeError: document.queryselector is not a function
```



# null:
_____________________
- `null` is a special value in JavaScript that represents the absence of a value. This can happen when you `try to access a property of an object that doesn't exist`.

**Example 1:**
```js
const bgHexCodeSpanElement = document.querySelector("bg-hex-code"); // "#bg-hex-code" [not] "bg-hex-code"

// console shows bgHexCodeSpanElement value as null.
```

**Example 2:**
```html
<button class="btn" id="btn">Change Background Color</button>
```
```js
const btn = document.querySelector("#click-btn"); // correct id name is #btn
console.log(btn);

// console shows null.
```



# undefined:
_______________________
- `undefined` is showing up here because the color variable is not being set correctly.
```js
function changeBackgroundColor() {
  const color = darkColorsArr[getRandomIndex]; // getRandomIndex, needs to be called: darkColorsArr[getRandomIndex()]

  bgHexCodeSpanElement.innerText = color;
  body.style.backgroundColor = color;
}

// The bgHexCodeSpanElement's innerText shows: undefined

changeBackgroundColor();
```




# Function Reference Mistake:
_________________________________
- When calling the function directly on a clickable button.
- The `onclick` property should be assigned a `function reference`.
```js
btn.onclick = changeBackgroundColor(); // btn.onclick = changeBackgroundColor [not] btn.onclick = changeBackgroundColor()
```