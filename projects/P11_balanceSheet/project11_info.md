# General Info:
______________________

1. Screen readers announce HTML elements based on the document flow.

2. ⭐ You can hide elements from the screen readers by using [aria-hidden="true"].
    > <div id="years" aria-hidden="true"><div>

3. ⭐ sapn[class~="sr-only"]
    > ⭐ The [~=] operator checks for space-separated values in the class attribute.
    > ⭐ So it matches if "sr-only" is one of the classes, not necessarily the only one.

4. The CSS [clip] property is used to define the visible portions of an element.
    > clip: rect(1px, 1px, 1px, 1px);

5. The [clip-path] property determines the shape the clip property should take.
    > clip-path: inset(50%);

6. white-space: nowrap;

7. ⭐ position: sticky;
    > It’s a mix between relative and fixed positioning.
    > The element behaves like relative until you scroll past a certain point.
    > Then it “sticks” to that position (like the top of the screen) and stays there as you scroll.

    > NOTE: 
    >> It only works inside scrollable containers.
    >> The parent element must not have overflow: hidden or overflow: auto.

8. ⭐ width: calc(100% - 20px);
    > The [calc()] function is a CSS function that allows you to calculate a value based on other values.
    > For example, you can use it to calculate the width of the viewport minus the margin of an element: 
            .example {
                margin: 10px;
                width: calc(100% - 20px);
            }

9. z-index: 999;

10. span[class] 
    > he span[class] syntax will target any span element that has a class attribute set, regardless of the attribute's value.

11. width: 100vw;
    max-width: 4rem;
    min-width: 4rem;

    > This approach ensures that the width is fixed, whereas setting width specifically would allow the elements to shrink to the container.

12. ⭐ The key difference between [tr[class="total"]] and [tr.total] is that the first will select tr elements where the only class is total. The second will select tr elements where the class includes total.

13. background-image: linear-gradient(to bottom, #dfdfe2 1.845rem, white 1.845rem);

14. vertical-align: top;

# HTML Tables:
_______________________

1. ⭐ <table></table>

2. HTML tables use the <caption> element to describe what the table is about.
    > The <caption> element should always be the first child of a table, but can be positioned with the [caption-side] CSS property.

3. The <thead> and <tbody> elements are used to indicate which portion of your table is the header, and which portion contains the primary data or content.
    > <thead><tr><th> </th></tr></thead>
    > <tbody><tr> </tr></tbody>

4. The <tr> element is used to indicate a table row.
    > <tbody><tr> </tr></tbody>

5. The <td> element indicates a data cell.
    > <tr><td> </td></tr>

6. The <th> element indicates a header cell.
    > <tr><th> </th><td> </td></tr>

7. ⭐ border-collapse: collapse; CSS
    > This will allow cell borders to collapse into a single border, instead of a border around each cell.

| Element   | Purpose                              | Example Usage                |
|-----------|--------------------------------------|------------------------------|
| `<table>` | Wraps the entire table               | `<table>...</table>`         |
| `<tr>`    | Defines a row                        | `<tr>...</tr>`               |
| `<th>`    | Table header cell (bold + centered)  | `<th>Header</th>`            |
| `<td>`    | Table data cell                      | `<td>Data</td>`              |
| `<thead>` | Groups header rows                   | `<thead><tr>...</tr></thead>`|
| `<tbody>` | Groups body rows                     | `<tbody><tr>...</tr></tbody>`|
| `<tfoot>` | Groups footer rows                   | `<tfoot><tr>...</tr></tfoot>`|
| `colspan` | Merges columns in a cell             | `<td colspan="2">Merged</td>`|
| `rowspan` | Merges rows in a cell                | `<td rowspan="2">Merged</td>`|
| `<caption>`| Table title                    | `<caption>Monthly Sales</caption>`|

⚡ Tip: Use CSS for styling (e.g., border, padding, text-align) to keep HTML clean.



# ⭐ pseudo-selector
__________________________

1. ⭐ The [:first-of-type] pseudo-selector is used to target the first element that matches the selector. 
    > 1 .flex span:first-of-type

2. ⭐ The [:last-of-type] pseudo-selector does the exact opposite - it targets the last element that matches the selector. 
    > h1 .flex span:last-of-type

3. ⭐ The [:not(selector)] pseudo-selector is used to target all elements that do not match the selector

4. ⭐ The [:nth-of-type()] pseudo-selector is used to target specific elements based on their order among siblings of the same type.
    > tr.total td:nth-of-type(3)
    > Targets the 3rd sibling of td's in .total.



# ⭐ !important keyword CSS
___________________________

1. ⭐ Rather than having to constantly double-check you are not overwriting your earlier properties, you can use the [!important] keyword to ensure these properties are always applied, regardless of order or specificity.
    > margin: -1px !important; 