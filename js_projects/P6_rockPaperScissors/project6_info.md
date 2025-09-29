# ⭐ <details> and <summary> 
________________________________
- The <details> and <summary> elements in HTML are a powerful duo for creating interactive disclosure widgets—think `expandable sections` like FAQs or `collapsible menus—without needing JavaScript`. 

- Here's a breakdown:

**⭐<details> Element**
- `Purpose`: Acts as a container for content that can be toggled open or closed.

- `Behavior`: Hidden by default unless the `open attribute` is present.

- `Attributes`: 
1. `open`: Boolean attribute that, when present, displays the content inside.

2. `name`: Allows `grouping multiple` <details> elements so only one can be open at a time.


**⭐<summary> Element**
- `Purpose`: Provides a `clickable heading` for the <details> element.

- `Behavior`: `Always visible` and toggles the visibility of the associated <details> content.

- `Placement`: Must be the first child of <details>.


**Example**
```html
<details>
  <summary>What is HTML?</summary>
  <p>HTML stands for HyperText Markup Language. It's the standard language for creating web pages.</p>
</details>
```
```css
details > summary {
  cursor: pointer;
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 4px;
}

/* Details when opened */
details[open] > summary {
  font-weight: bold;
}
```