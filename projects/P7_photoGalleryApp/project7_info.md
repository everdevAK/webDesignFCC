1. text-transform: uppercase;

2. Images have different aspect ratios. 
	> Rather than setting each aspect ratio individually, you can use the object-fit property to determine how images should behave. 
	> object-fit: cover;





# Box-sizing -----------------------




1. When the child element goes outside of the of parent element when adding padding and border to it.

	> This is due to the way browsers calculate the size of container elements.


2. The box-sizing property is used to set this behavior. By default, the content-box model is used. With this model, when an element has a specific width, that width is calculated based only on the element's content. Padding and border values get added to the total width, so the element grows to accommodate these values.


3. * <- this is the global selector

	> Selects all the elements in the body element.


4. The border-box sizing model does the opposite of content-box. The total width of the element, including padding and border, will be the explicit width set. The content of the element will shrink to make room for the padding and border.

	> * { box-sizing: border-box; }




# CSS Flex Box --------------------




1. Flexbox is a one-dimensional CSS layout that can control the way items are spaced out and aligned within a container.


2. To use it, give an element a display property of flex. This will make the element a flex container. Any direct children of a flex container are called flex items. -> display: flex;


3. Flexbox has a main and cross axis. The main axis is defined by the flex-direction property, which has four possible values:
	
	> row (default): horizontal axis with flex items from left to right.
	> row-reverse: horizontal axis with flex items from right to left.
	> column: vertical axis with flex items from top to bottom.
	> column-reverse: vertical axis with flex items from bottom to top.

	> Note: The axes and directions will be different depending on the text direction. The values shown are for a left-to-right text direction.


4. The [ flex-wrap ] property determines how your flex items behave when the flex container is too small. Setting it to wrap will allow the items to wrap to the next row or column. nowrap (default) will prevent your items from wrapping and shrink them if needed. 
	> flex-wrap: wrap;


5. The [ justify-content ] property determines how the items inside a flex container are positioned along the main axis, affecting their position and the space around them. 
	
	> justify-content: center;


6. The [ align-items ] property positions the flex content along the cross axis. In this case, with your flex-direction set to row, your cross axis would be vertical.

	> align-items: center;


7. The [ gap ] CSS shorthand property sets the gaps, also known as gutters, between rows and columns.

	> The gap property and its row-gap and column-gap sub-properties provide this functionality for flex, grid, and multi-column layout. You apply the property to the container element.




# ::after Pseudo-element



1. The ::after pseudo-element creates an element that is the last child of the selected element.

⭐ If you give it the same width as the images it will push the last image to the left when the gallery is in a two-column layout. Right now, it is in the center because you set justify-content: center on the flex container.

	> .container::after {
  		content: "";
  		width: 860px;
	  }

