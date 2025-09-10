1. * { border: 1px solid black; }
    > This is a trick that helps visualize where elements are and their size.
    > This is removed when the intended purpose is met.

2. * {
        border: 1px solid black;
        box-sizing: border-box;
    }
    >  [border-box] will make it so the border you added doesn't add any size to your elements.

3. { width: 100%;
     height: 100%;
     position: absolute;
     top: 0; }
    > You can use this trick to bring an element on top of something.

4. .bb2a {
        margin: auto;
        width: 5vw;
        height: 5vw;
        border-top: 1vw solid #000;
        border-bottom: 1vw solid #000;
        border-left: 1vw solid #999;
        border-right: 1vw solid #999;
    }
    > .bb2a {
        margin: auto;
        border-top: 1vw solid #000;
        border-bottom: 1vw solid #000;
        border-left: 5vw solid #999;
        border-right: 5vw solid #999;
      }
    > .bb2a {
        margin: auto;
        border-top: 1vw solid #000;
        border-bottom: 1vw solid #000;
        border-left: 5vw solid transparent;
        border-right: 5vw solid transparent;
      }
    > .bb2a {
        border-bottom: 1vw solid #000;
        border-left: 5vw solid transparent;
        border-right: 5vw solid transparent;
      }
    > .bb2a {
        border-bottom: 5vh solid var(--building-color2);
        border-left: 5vw solid transparent;
        border-right: 5vw solid transparent;
      }
    
    > ⭐ Above are the steps showing how to create a triangle using CSS borders

    > ⭐ When you increase the size of the left and right borders, the border on the bottom will expand to be the width of the combined left and right border widths.

5. .sky {
        background: radial-gradient(
            closest-corner circle at 15% 15%,
            #ccc,
            #ccc 20%,
            #445 21%,
            #223 100%
        );
    }
    > Night effect.

# Variable Declaration CSS:
_______________________________

1. Variable declarations begin with two dashes (-) and are given a name and a value like this:
    > --variable-name: value;

2. To use a variable, put the variable name in parentheses with var in front of them like this: 
    > var(--variable-name);

    > Whatever value you gave the variable will be applied to whatever property you use it on.
    >> background-color: var(--building-color1);

3. One of the biggest benefits of using [css-variables] is:
    > being able to quickly change many values in your stylesheet by just changing the value of a variable.

4. ⭐ You can add a fallback value to a variable by putting it as the second value of where you use the variable like this:
    > var(--variable-name, fallback-value).
    > background-color: var(--building-color2, green);

5. ⭐ Variables are often declared in the [:root] selector.
    > because of how cascading works in CSS.

6. [:root{}] 
    > ⭐ This is the highest level selector in CSS; putting your variables there will make them usable everywhere. 


# CSS Gradients:
___________________

1. Gradients in CSS are a way to transition between colors across the distance of an element.

2. They are applied to the background property and the syntax looks like this:
    > gradient-type(color1, color2);
    > In the example, color1 is solid at the top, color2 is solid at the bottom, and in between it transitions evenly from one to the next. 

    >> linear-gradient(blue, red);

3. ⭐ CSS Variables can be used for color values:
    > background: linear-gradient(var(--building-color1), var(--window-color1));

4. Gradients can use as many colors as you want like this:
    > gradient-type(c1, c2, c3...)

5. Gradient transitions often gradually change from one color to another. When a more abrupt change is required, the transition can be made with a hard stop like this:

    > linear-gradient(
        var(--first-color) 0%,
        var(--first-color) 40%,
        var(--second-color) 40%,
        var(--second-color) 80%
      );


# ⭐ CSS Gradients Types: 
____________________________

1. linear-gradient();

2. ⭐ repeating-linear-gradient();

3. ⭐ radial-gradient(); 
    > background: radial-gradient(
            circle closest-corner at 15% 15%,
            #ffcf33,
            #ffcf33 20%,
            #ffff66 21%,
            #bbeeff 100%
        );

    > go to heading "# CSS Gradient [ Radial-Gradient() ]:" bellow for more info.


# CSS Gradient direction: 
______________________________

1. By default gradients got from top to bottom.

2. You can specify another direction by adding it before your colors like this:
    > gradient-type([direction], color1, color2)


# ⭐ CSS Gradient Stop: 
__________________________

1. ⭐ You can specify where you want a gradient transition to complete by adding it to the color like this:

    > gradient-type(c1, c2 [20%], c3);
    > Here, it will transition from color1 to color2 between 0% and 20% of the element and then transition to color3 for the rest.

2. ⭐ When you don't specify a distance for a color, it will use the values that makes sense.

    > background: repeating-linear-gradient(90deg, var(--building-color3), var(--building-color3), var(--window-color3) 15%);

    > In this case, the first two colors will default to 0% and 7.5% because it starts at 0%, and 7.5% is half of the 15%, so you do not need to set them.


# ⭐ CSS Gradient (Adding multiple gradients):
________________________________________________

1. You can add multiple gradients to an element by separating them with a comma (,) like this:

    > gradient1(colors), gradient2(colors); 

    > .fb1c {
        width: 100%;
        height: 80%;
        background: repeating-linear-gradient(
            90deg,
            var(--building-color4),
            var(--building-color4) 10%,
            transparent 10%,
            transparent 15%
            ), 
            repeating-linear-gradient(var(--building-color4) 0%, var(--building-color4) 10%, var(--window-color4) 10%, var(--window-color4) 90%);
      }

      > eg 2:
        >> background: repeating-linear-gradient(
            var(--building-color2),
            var(--building-color2) 5%,
            transparent 5%,
            transparent 10%
            ),
            repeating-linear-gradient(
            90deg,
            var(--building-color2),
            var(--building-color2) 12%,
            var(--window-color2) 12%,
            var(--window-color2) 44%
          );


# ⭐ CSS Gradient [ Radial-Gradient() ]:
___________________________________________

1. background: radial-gradient(
        circle closest-corner at 15% 15%,
        #ffcf33,
        #ffcf33 20%,
        #ffff66 21%,
        #bbeeff 100%
   );

   > Creates a sun-like gradient background for elements with the class .sky.

   > [radial-gradient(...):] Makes a gradient that spreads out from a center point.

   > circle closest-corner at 15% 15%:
   >> [circle]: The gradient will be perfectly round, not stretched into an oval.

   >> [closest-corner]
   >>> The gradient will end at the nearest corner of the element from the starting point.
   >>> This controls how big the gradient is. It stops when it reaches the closest corner at 15% 15%.

   >> [15% 15%]:
   >>> This sets the starting point of the gradient:
   >>> 15% from the left
   >>> 15% from the top

2. ⭐ background: radial-gradient(
        shape size at position, 
        color-stop1, 
        color-stop2, ...);

    > [shape]
    >> circle or ellipse

    > [size]
    >> closest-side
    >> closest-corner
    >> farthest-side
    >> farthest-corner (default)

    > [position]
    >> Where the gradient starts (e.g., center, top left, or 15% 15%)

    > [color-stops]
    >> color-stops: Colors and optional stop points (e.g., red, blue 50%, green 100%)
