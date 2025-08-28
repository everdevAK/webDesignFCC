1. If you add multiple classes to an HTML element, the styles of the first classes you list may be overridden by later classes. <div class="animal dog"> 





# Different Color Models



1. There are two main color models: the additive RGB (red, green, blue) model used in electronic devices, and the subtractive CMYK (cyan, magenta, yellow, black) model used in print.
   
2. RGB model -> colors begin as black, and change at different levels of red, green, and blue.
   
3. In CSS -> you can use \[ rgb function ] -> background-color: rgb(0,0,0);
   
4. A function is a piece of code that can take an input and perform a specific action. The CSS rgb function accepts values, or arguments, for red, green, and blue, and produces a color -> rgb(red, green, blue);
   
5. Each red, green, and blue value is a number from 0 to 255. 0 means that there's 0% of that color, and is black. 255 means that there's 100% of that color.
   
6. In the additive RGB color model, primary colors are colors that, when combined, create pure white. But for this to happen, each color needs to be at its highest intensity. rgb(255,255,255);
   
7. Secondary colors are the colors you get when you combine primary colors.
   
8. background-color: rgb(255, 255, 0); -> yellow.
   
9. background-color: rgb(0, 255, 255); -> cyan.
   
10. background-color: rgb(255, 0, 255); -> magenta.

11. Tertiary colors are created by combining a primary with a nearby secondary color.

	> background-color: rgb(255, 127, 0); -> orange
	> background-color: rgb(0, 255, 127); -> spring green
	> background-color: rgb(127, 0, 255); -> violet

	a. There are three more tertiary colors: chartreuse green (green + yellow), azure (blue + cyan), and rose (red + magenta).

	> background-color: rgb(127, 255, 0); -> chartreuse green
	> background-color: rgb(0, 127, 255); -> azure
	> background-color: rgb(255, 0, 127); -> rose

12. The rgb function uses the additive color model, where colors start as black and change as the values of red, green, and blue increase.

13. A color wheel is a circle where similar colors, or hues, are near each other, and different ones are further apart. For example, pure red is between the hues rose and orange.

14. Two colors that are opposite from each other on the color wheel are called complementary colors. If two complementary colors are combined, they produce gray. But when they are placed side-by-side, these colors produce strong visual contrast and appear brighter.

15. It's better practice to choose one color as the dominant color, and use its complementary color as an accent to bring attention to certain content on the page.

16. All HTML elements have borders, though they're usually set to none by default. With CSS, you can control all aspects of an element's border, and set the border on all sides, or just one side at a time. For a border to be visible, you need to set its width and style.

	> border-left: 10px double black;


# Hexadecimal or hex values Color Model



1. A very common way to apply color to an element with CSS is with hexadecimal or hex values. While hex values sound complicated, they're really just another form of RGB values.

2. Hex color values start with a # character and take six characters from 0-9 and A-F. The first pair of characters represent red, the second pair represent green, and the third pair represent blue. For example, #4B5320.

3. Base 10 values, go from 0 - 9. Hexadecimal, or base 16 values, go from 0 - 9, then A - F:

	> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F

4. With hex colors, 00 is 0% of that color, and FF is 100%. So #00FF00 translates to 0% red, 100% green, and 0% blue, and is the same as rgb(0, 255, 0).

	> background-color: #007F00; -> darker shade of green


# HSL Color Model



1. The HSL color model, or hue, saturation, and lightness, is another way to represent colors.

2. The CSS hsl function accepts 3 values: a number from 0 to 360 for hue, a percentage from 0 to 100 for saturation, and a percentage from 0 to 100 for lightness.

 	> If you imagine a color wheel, the hue red is at 0 degrees, green is at 120 degrees, and blue is at 240 degrees.
	> Saturation is the intensity of a color from 0%, or gray, to 100% for pure color. You must add the percent sign % to the saturation and lightness values.
	> Lightness is how bright a color appears, from 0%, or complete black, to 100%, complete white, with 50% being neutral.

	> background-color: hsl(240, 100%, 50%); -> blue




# Linear Gradient




1. A gradient is when one color transitions into another. The CSS linear-gradient function lets you control the direction of the transition along a line, and which colors are used.

2. One thing to remember is that the linear-gradient function actually creates an image element, and is usually paired with the background property which can accept an image as a value.

3. linear-gradient(gradientDirection, color1, color2, ...); 

	> gradientDirection is the direction of the line used for the transition.
	> color1 and color2 are color arguments, which are the colors that will be used in the transition itself.
	> These can be any type of color, including color keywords, hex, rgb, or hsl.

	> background: linear-gradient(90deg, rgb(255, 0, 0), rgb(0, 255, 0), rgb(0, 0, 255));

4. Color-stops allow you to fine-tune where colors are placed along the gradient line. They are a length unit like px or percentages that follow a color in the linear-gradient function.

5. linear-gradient(90deg, red 90%, black);
	
	> For example, in this red-black gradient, the transition from red to black takes place at the 90% point along the gradient line, so red takes up most of the available space:

6. The first color is at the start (0%), the second is in the middle (50%), and the last is at the end (100%) of the gradient line.
	
	> The linear-gradient function automatically calculates these values for you, and places colors evenly along the gradient line by default.

7. If no gradientDirection argument is provided to the linear-gradient function, it arranges colors from top to bottom, or along a 180 degree line, by default.





# Opacity




1. Opacity describes how opaque, or non-transparent, something is. For example, a solid wall is opaque, and no light can pass through. But a drinking glass is much more transparent, and you can see through the glass to the other side.

2. With the CSS opacity property, you can control how opaque or transparent an element is. With the value 0, or 0%, the element will be completely transparent, and at 1.0, or 100%, the element will be completely opaque like it is by default.

	> opacity: 0.5;

3. Another way to set the opacity for an element is with the alpha channel. Similar to the opacity property, the alpha channel controls how transparent or opaque a color is.

3. Alpha channel can be added to all other color models: rgb, hsl and hex;

	> rgba(redValue, greenValue, blueValue, alphaValue);
	> background-color: rgba(255,255,255,50%);





# Box Shadow




1. The box-shadow property lets you apply one or more shadows around an element. Here is basic syntax:
 
	> box-shadow: offsetX offsetY color;

	> Here's how the offsetX and offsetY values work:
		> Both offsetX and offsetY accept number values in px and other CSS units
		> A positive offsetX value moves the shadow right and a negative value moves it left
		> A positive offsetY value moves the shadow down and a negative value moves it up
		> If you want a value of zero (0) for any or both offsetX and offsetY, you don't need to add a unit. Every browser understands that zero means no change.

2. There is an optional blurRadius value for the box-shadow property:

	> box-shadow: offsetX offsetY blurRadius color;
	> If a blurRadius value isn't included, it defaults to 0 and produces sharp edges. The higher the value of blurRadius, the greater the blurring effect is.

3. The height and width of the shadow is determined by the height and width of the element it's applied to. You can also use an optional spreadRadius value to spread out the reach of the shadow.

	> box-shadow: offsetX offsetY blurRadius spreadRadius color;
	> If you wanted to expand the shadow out further? You can do that with the optional spreadRadius value