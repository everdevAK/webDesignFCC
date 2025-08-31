1. In the CSS box model, every HTML element is treated as a box with four areas.

2. By adding padding of 1px to the .canvas element you give the .one element something solid to push off of.

	> .canvas { padding: 1px; } 
	> .one { margin: 20px auto; }
	> You can also solve this by using the [ overflow: hidden ] property & value.

3. margin: 0 auto 20px; 
	
	> 1st value 0 -> top
	> 2nd value auto -> left & right (horizontal)
	> 3rd value 20px -> bottom

4. Filter property is used to blur an element

	> p { filter: blur(3px); }

5. The border-radius property accepts up to four values to round the top-left, top-right, bottom-right, and bottom-left corners.

	> border-radius: top-left top-right bottom-right bottom-left;
	> border-radius: 30px 25px 60px 12px;

6. transform: rotate(-0.6deg); -> used to transform an element to rotate itself.