# Accessibility and SEO
___________________________

1. Providing a  [ lang attribute ] to your html element, This will assist screen readers in identifying the language of the page.

2. <meta>, it is used to specify information about the page, such as the title, description, keywords, and author.

3. <meta charset="UTF-8"> 
    > The charset attribute specifies the character encoding of the page, and, nowadays, UTF-8 is the only encoding supported by most browsers.

4. <meta name="viewport" content="width=device-width, initial-scale=1">
    > This HTML tag tells the browser how to scale and display a webpage on different devices—especially mobile.
    > width=device-width: Sets the page width to match the screen’s width.
    > initial-scale=1: Sets the zoom level to 100% when the page loads.

5. <meta name="description" content="freeCodeCamp Accessibility Quiz practice project">
    > This HTML tag provides a short summary of the webpage’s content for search engines and social media previews.
    > name="description": Specifies that this is the page’s description.
    > content="...": Contains the actual description text.

6. <title>Accessibility Quiz</title>
    > The <title> tag sets the name of the webpage shown in:
        > Browser tabs 
        > Search engine results 
        > Bookmarks and history listings 

7. You can semantically separate the content within the form using section elements.

8. It is important to link each input to the corresponding label element. This provides assistive technology users with a visual reference to the input.
    > This is done by giving the label a for attribute, which contains the id of the input.

9. best-practices for form inputs, give each input an appropriate type and name attribute.

10. ⭐ <input type="date">

11. Even though you added a placeholder to the first input element in the previous lesson, this is actually not a best-practice for accessibility; too often, users confuse the placeholder text with an actual input value - they think there is already a value in the input.

12. <h3><span class="sr-only">Question</span>1</h3>
    > The .sr-only text is still visible. There is a common pattern to visually hide text for only screen readers to read.

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        overflow: hidden;
        ⭐clip: rect(0,0,0,0);
        ⭐clip-path: inset(50%);
        ⭐white-space: nowrap;
    }

    > clip: rect(0, 0, 0, 0);
        > This is a legacy method that clips the element to a 0×0 rectangle, effectively hiding it from view.

    > clip-path: inset(50%);
        > A modern alternative to clip, this clips the element to a box inset by 50% from each edge—also making it invisible.

    > white-space: nowrap;
        > Prevents the content from wrapping, which helps ensure hidden text doesn’t accidentally spill into view.

13. ⭐ To prevent uneccessory repetition, you can use this trick to add text before or after the content.

    h3::before {
        content: "Question #";
    }

14. The [ footer ] element is a container for a collection of content that is related to the page, and the [ address ] element is a container for contact information for the author of the page.
    > The address element does not have to contain a physical geographical location. It can be used to provide a link to the subject.

15. The contrast between the text and the background of a heading should be at least 4.5:1.

16. ⭐ scroll-behavior: smooth;

# Semantic HTML elements
___________________________

1. Navigation is a core part of accessibility, and screen readers rely on you to provide the structure of your page. This is accomplished with semantic HTML elements.

2. The <header> tag in HTML defines a top section of a page or section. It usually contains:
    > A logo or site name
    > Navigation links
    > Page or section titles

3. The <main> tag defines the central content of a webpage—the part that’s unique and directly related to the page’s purpose.
    > It excludes headers, footers, sidebars, and repeated navigation.
    > Helps screen readers and search engines focus on the core content.
    > ✅ Use it once per page to improve accessibility and semantic structure. Think of it as the heart of your webpage!


# CSS 
________

1.  The max() function in CSS picks the largest value from a list of options and uses it as the final value for a property. 
    > width: max(250px, 25vw);
        > In the above example, the width of the image will be 250px if the viewport width is less than 1000 pixels. If the viewport width is greater than 1000 pixels, the width of the image will be 25vw. This is because 25vw is equal to 25% of the viewport width.

    > Use Cases:
        > Responsive layouts that never shrink below a minimum size
        > Dynamic sizing with fallback values
        > Combine fixed and flexible units
        > width: max(60vw, 500px);
            > This ensures the container is at least 500px wide, but can grow with the viewport.

2. CSS min(5vw, 1.2em)
    > This ensures the font size doesn’t get too large on wide screens, but still stays readable on smaller ones.
    > This expression uses the min() function to choose the smaller value between:
        > 5vw: 5% of the viewport width (responsive to screen size)
        > 1.2em: 1.2 times the current font size (relative to parent or inherited font)      

3. The aspect-ratio property in CSS lets you control the proportional relationship between an element’s width and height.
    > aspect-ratio: width / height;
    > div { aspect-ratio: 16 / 9; }
        > This keeps the element in a 16:9 ratio, like a widescreen video, no matter how it resizes.
    
    > Why Use It:
        > Ensures consistent layout across devices
        > Great for responsive design (videos, images, cards)
        > Avoids using padding hacks or JavaScript for sizing

4. ⭐ The [ child combinator selector > ] is used between selectors to target only elements that match the second selector and are a direct child of the first selector.
    > This can be helpful when you have deeply nested elements and want to control the scope of your styling.
    > .sec2 > ul { background-color: grey; }


# ARIA (Accessible Rich Internet Applications)
____________________________________________________

1. ⭐ To increase the page accessibility, the [ role ] attribute can be used to indicate the purpose behind an element on the page to assistive technologies.
    > The role attribute is a part of the Web Accessibility Initiative (WAI), and accepts preset values.
    > <section role="region"></section>...
        > <section> defines a standalone block of content, typically with a heading.
        > [ role="region" ] is an ARIA (Accessible Rich Internet Applications) role that signals to assistive technologies (like screen readers) that this section is a significant landmark users might want to navigate to.

    > Best Practice: Use role="region" only when the section has a label or heading to help users identify it.

    <section role="region" aria-label="News Updates">
      <h2>News Updates</h2> 
      <!-- content --> 
    </section>

2. Every region role requires a label, which helps screen reader users understand the purpose of the region. One method for adding a label is to add a heading element inside the region and then reference it with the aria-labelledby attribute.
    > How it works:
        > It links the current element to one or more other elements whose text should be read by assistive technologies (like screen readers).
        > Takes one or more space-separated IDs.

    <h2 id="sectionTitle">User Settings</h2>
    <section role="region" aria-labelledby="sectionTitle">
      <!-- content -->
    </section>

3. aria-labelledby vs aria-label:
    > aria-labelledby references existing elements.

    <h2 id="sectionTitle">User Settings</h2>
    <section role="region" aria-labelledby="sectionTitle">
      <!-- content -->
    </section>

    ________________________________________________________

    > aria-label provides a custom string directly.
    
    <section role="region" aria-label="News Updates">
      <!-- content --> 
    </section>

    >  So even when there is no visible heading on the screen, the screen reader will read aloud the string "News Updates"


# @media
__________

1. The @media at-rule has a media feature called [ prefers-reduced-motion ] to set CSS based on the user's preferences. It can take one of the following values:
    > reduce
    > no-preference 

    @media (feature: value) {
        selector {
            styles
        }
    }

2. ⭐ @media (prefers-reduced-motion: no-preference) {
        * {
            scroll-behavior: smooth;
        }
   }

   > @media (prefers-reduced-motion: no-preference): This checks if the user has not requested reduced motion in their system settings. It's a way to respect accessibility preferences—some users experience motion sickness or discomfort from animations.

   > * { scroll-behavior: smooth; }: Applies smooth scrolling to all elements on the page, but only if the user hasn't opted out of motion effects.