1. ⭐ To link a stylesheet containing [google-fonts]:
    > <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Anton%7CBaskervville%7CRaleway&display=swap">

    > This font stylesheet will load three separate fonts: [Anton], [Baskervville], and [Raleway].

2. ⭐
<section class="heading">
 <header class="hero">
    <img
    src="https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png"
    alt="freecodecamp logo"
    loading="lazy"
    class="hero-img"
    />
    <h1 class="hero-title">OUR NEW CURRICULUM</h1>
    <p class="hero-subtitle">Our efforts to restructure our curriculum with a more project-based focus</p>
 </header>
</section>

> Using the class name [hero], [hero-img], [hero-title], [hero-subtitle] is common practice.

3. ⭐ By setting an [html-selector] and giving it a [font-size] property set to [62.5%]. This will set the default font size for your web page to [10px].
    > (the browser default is 16px).
    > This will make it easier for you to work with [rem] units later, as 2rem would be 20px.

4. letter-spacing: 0.6px;

5. ⭐ column-width: 25rem;
    > you can create columns within an element without using Grid by using the [column-width] property.

6. ⭐ text-align: justify;

7. [::first-letter]

    > The [::first-letter] pseudo-selector allows you to target the first letter in the text content of an element.

    > .first-paragraph::first-letter {
        font-size: 6rem;
        color: orangered;
        float: left;
        margin-right: 1rem;
      }

8. list-style-type: none;
    > remove style form <li> elements


# ⭐⭐ CSS GRID:
_________________________
**The default settings for CSS Grid will create additional rows as needed, unlike Flexbox.** display: grid;

[parent] GRID

1. CSS Grid offers a two-dimensional grid-based layout

    > two-dimensional: horzontal and vertical axis.

    > allowing you to center items horizontally and vertically while still retaining control to do things like overlap elements.

2. CSS Grid is similar to Flexbox in that it has a special property for both the parent and child elements.

    > main {
        display: grid;
      }
    >> In this case, your parent element is the main element.

3. grid-template-columns: 1fr 94rem 1fr; 
    (refer to: # MIN MAX Function CSS)

    > used to create columns.

    > 1fr, fr: fraction.

    > This will create three columns where the middle column is 94rem wide, and the first and last columns are both 1 fraction of the remaining space in the grid container.

4. row-gap: 3rem;
    > To add space between rows in the grid layout

5. gap: 1rem;
    > The gap property is a shorthand way to set the value of column-gap and row-gap at the same time.


5. [grid-auto-flow] property.

    > If you wanted to add more social icons, but keep them on the same row, you would need to update grid-template-columns to create additional columns. As an alternative, you can use the [grid-auto-flow] property.

    > This property takes either [row] or [column] as the first value
    > with an optional second value of [dense].

    >> [grid-auto-flow] uses an auto-placement algorithm to adjust the grid layout.

    >> Setting it to [column] will tell the algorithm to create new columns for content as needed.

    >> The [dense] value allows the algorithm to backtrack and fill holes in the grid with smaller items, which can result in items appearing out of order.

    >> grid-template-columns: repeat(5, 1fr);
       grid-auto-flow: column;

    >>> Now the auto-placement algorithm will kick in when you add a new icon element. However, the algorithm defaults the new column width to be auto, which will not match your current columns.

    >>> You can override this with the grid-auto-columns property.

    >>>> grid-auto-columns: 1fr;


6. [align-items], [justify-items]

    > [align-items] will align child elements along the [column-axis],

    > [justify-items] will align child elements along the [row-axis].


7. ⭐ [place-items] : center;
    >The place-items property can be used to set the align-items and justify-items values at the same time.

    > The [place-items] property takes [one-or-two] values.

    >> If [one] value is provided, it is used for both the align-items and justify-items properties.

    >> If [two] values are provided, the first value is used for the align-items property and the second value is used for the justify-items property.


[child] GRID

1. [grid-column] property

    > shorthand for [grid-column-start] and [grid-column-end].

    > The grid-column property tells the grid item which grid line to start and end at.


2. .heading { grid-column: 2/3; }

    > This will tell the [.heading] element to start at grid line 2 and end at grid line 3.


3. ⭐ grid-column: 1/[-1]; **[Take full width of the column]**
    > This will tell the element to span the full width of the grid.

    > There may be times where you are unsure of how many columns your grid will have, but you want an element to stop at the last column.

    > To do this, you can use [-1] for the end column.




# ⭐ CSS repeat() funciton:
______________________________

1. The CSS [repeat()] function is used to repeat a value, rather than writing it out manually, and is helpful for grid layouts. 

2. For example, setting the:

    > grid-template-columns: repeat(20, 200px);    
    >> would create 20 columns each 200px wide.



# ⭐ MIN MAX Function CSS:
______________________________

1. The minmax function takes two arguments.

    > the first being the minimum value

    > and the second being the maximum

    > These values could be:
    >> lenght
    >> percentage
    >> fr
    >> max-content

2. grid-template-columns: minmax(2rem, 1fr) minmax([min-content], 94rem) minmax(2rem, 1fr);


# ⭐ fav icons:
___________________________

1. ⭐ To link a stylesheet contianing [icons]:
    > <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">

    > To access the icons: 
    >> <i class="fab fa-facebook-f"></i>




# ⭐ Loading Attribute in <img>:
_______________________________________

1. ⭐ The [loading] attribute on an img element can be set to [lazy] to tell the browser not to fetch the image resource until it is needed.
    >  (as in, when the user scrolls the image into view).

2. ⭐⭐ As an additional benefit, lazy loaded elements will not load until the non-lazy elements are loaded
    > This means users with slow internet connections can view the content of your page without having to wait for the images to load.

3. <img src="" alt="" loading="lazy">



# ⭐⭐ Referer:
______________________________

1. The [Referer] HTTP header contains information about the address or URL of a page that a user might be visiting from.

2. This information can be used in analytics to track how many users from your page visit freecodecamp.org

3. Setting the [rel] attribute to [noreferrer] omits this information from the HTTP request.

4. <a rel="noreferrer" href="https://freecodecamp.org" target="_blank">freeCodeCamp</a>



# ⭐ Block Quote Element HTML:
_______________________________________

1. <blockquote>
    <hr>
      <p class="quote">The entire curriculum should be a series of projects</p>
    <hr>
   </blockquote>

   **To give the hr a color, you need to adjust the border property.**

2. ⭐ The <blockquote> element in HTML is used to represent a [block-level] quotation.
    > typically a longer quote from an external source.

3. ⭐ What it does?
    > Displays quoted text with indentation by default.
    > Semantically signals that the content is a quotation, improving accessibility and SEO.

    > <blockquote cite="https://example.com">
        "This is a quote from another source."
      </blockquote>
    >> Attribute: [cite] Optional. Specifies the source URL of the quote.

4. ⭐⭐ Use <q> for short, inline quotes and <blockquote> for longer, standalone ones



# ⭐ Article Element HTML:
____________________________________

1. The <article> element in HTML is used to define independent, self-contained content like a blog post, news story, or forum entry.

2. <article>
    <h2>Breaking News</h2>
    <p>Humans have landed on planet Earth</p>
   </article>

3. It adds semantic meaning, helping search engines and screen readers understand the structure of your content.



# ⭐ Aside Element HTML:
_____________________________________

1. The <aside> element in HTML is used for content that’s indirectly related to the main content—think of it as a sidebar or a callout box.

2. It holds extra info, like tips, ads, related links, or author bios.

3. Often used for sidebars or notes that complement the main article.

4. <article>
    <h2>How to Bake Bread</h2>
    <p>Start by mixing flour, water, and yeast...</p>
    <aside>
        <p>Tip: Use warm water to activate the yeast faster.</p>
    </aside>
   </article>



# ⭐ Object fit CSS:
__________________________

1. object-fit: cover;

    > The [object-fit] property tells the browser how to position the element within its container. 

    > In this case, [cover] will set the image to fill the container, cropping as needed to avoid changing the aspect ratio.



# ⭐ @media only screen:
_______________________________

1. @media only screen and (max-width: 720px) {}

    > What does only screen mean?
    >> [screen]: This media type targets devices with screens—like desktops, laptops, tablets, and smartphones.

    >> [only]: This keyword is a safeguard. It prevents older browsers (especially pre-CSS3 ones) from applying styles they don’t fully understand.
    >>> Is ignored by older browsers that don’t support media queries properly.