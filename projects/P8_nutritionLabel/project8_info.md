# Google fonts
__________________

1. <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800">	
	> This will import the Open Sans font family, with the font weight values 400, 700, and 800
	> Then you can use this font -> body { font-family: Open Sans, sans-serfi; }

2. You can link google fonts in the form of stylesheet using link tag.

3. Make sure that the link with google font is at the top.



# :not Pseudo-selector  ⭐
________________________

1. The :not pseudo-selector can be used to select all elements that do not match the given CSS rule.
	> div:not(#example) { color: red; }
	> The above selects all div elements without an id of example.



# General Info
___________________

1. Use of h1, h2, and similar tags determine the semantic structure of your HTML.

2. font-weight: 800; -> to turn the text bold;

3. ⭐ Lines can help separate and group important content, especially when space is limited.
	> <div class="divider"></div> -> you can create space using this.
	> <div class="divider medium"></div>
	> <div class="divider large"></div>
	> .divider {
  		border-bottom: 1px solid #888989;
  		margin: 2px 0;
	  }

	> The advantage to creating these dividers is that you can apply specific classes to style them individually.
		> <div class="divider double-indent"></div>

4. Horizontal spacing between equally important elements can increase the readability of your text.
	> <p class="bold">Serving size <span>2/3 cup (55g)</span></p>
	> p {
  		margin: 0;
  		display: flex;
  		justify-content: space-between;
	  }
	> This is one way to do it 👆

5. The rem unit stands for [ root em ], and is relative to the font size of the html element.
	> font-size: 0.85rem; -> which would calculate to roughly 13.6px

6. align-items: flex-end;

7. Typography is often more art than science. You may have to tweak things like alignment until it looks correct.

8. <p><span><span class="bold">Total Fat</span> 8g</span> <span class="bold">10%</span></p>

9. ⭐ text-indent: -8px;



# Letter Spacing
____________________

1. The letter-spacing property can be used to adjust the space between each character of text in an element.
	> h1 { letter-spacing: 0.15px; }