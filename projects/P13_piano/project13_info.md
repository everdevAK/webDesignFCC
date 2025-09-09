1. [inherit] 
    > Tells the targeted elements to use the same value as the parent element.
    > parent { box-sizing: border-box; }
    > child { box-sizing: [inherit]; }

2. float: left;

3. overflow: hidden;
    > This property will hide any element that is pushed outside the set width value of .keys.

# Pseudo-element:
_____________________

1. [::before]
    > The [::before] selector creates a pseudo-element which is the first child of the selected element

2. [::after]
    > The [::after] selector creates a pseudo-element which is the last child of the selected element.

3. ⭐ These pseudo-elements are often used to create cosmetic content.

4. ⭐ *, ::before, ::after {  }
    > * targets only actual DOM elements.
    > [::before] and [::after] are generated content, not real DOM nodes.
    > Since [box-sizing] is not inherited by default, you must explicitly set it on pseudo-elements.

    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

5. ⭐ element::after { content: ""; }
    > The content property is used to set or override the content of the element.
    > By default, the pseudo-elements created by the ::before and ::after pseudo-selectors are empty
    > And the elements will not be rendered to the page.

    > ⭐ Setting the content property to an empty string "" will ensure the element is rendered to the page while still being empty.



# ⭐⭐ @media (aka media query):
____________________________________

1. The [@media] at-rule, also known as a media query, is used to conditionally apply CSS.

2. ⭐ Media queries are commonly used to apply CSS based on the viewport width using the [max-width] and [min-width] properties.

3. In the below example the padding is applied to the .card class when the viewport is 960px wide and below.

    @media (max-width: 960px) {
        .card {
            padding: 2rem;
        }
    }

4. ⭐ Logical operators can be used to construct more complex media queries. The [and] logical operator is used to query two media conditions.

    > For example, a media query that targets a display width between 500px and 1000px would be:
    >> @media (min-width: 500px) [and] (max-width: 1000px) { }
