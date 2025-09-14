1. cursor: not-allowed;

2. transition: 1s ease-in-out 0ms;
    > duration, timing function, delay.



# Transform Function [Skew]:
____________________________________

1. The **transform: skew()** function in CSS is used to distort an element along the X and Y axes, creating a slanted or sheared effect.

2. It’s part of the CSS 2D transform functions and can add dynamic visual interest to your layout.

3. transform: skew(x-angle, y-angle);
    > x-angle: Angle to skew along the X-axis (e.g., 20deg)
    > y-angle: Angle to skew along the Y-axis (optional; defaults to 0)


4. Skew only on X-axis:
    > transform: skewX(20deg);


5. Skew only on Y-axis:
    > transform: skewY(15deg);


6. Skew on both axes:
    > transform: skew(20deg, 15deg);


7. Easy way to visualize how this works is: 
    > Imagine grabbing the top corners of a rectangle and pulling them sideways — that’s the kind of distortion skewing creates.

    > It’s especially useful for stylized text, dynamic UI elements, or creative hover effects.



# How stacking works using z-index:
___________________________________________

1. Elements with higher z-index values appear in front of those with lower values.

2. z-index only works on positioned elements (relative, absolute, fixed, sticky) or flex/grid items.

.element {
  position: absolute;
  z-index: 10;
}

4. **Stacking Contexts**
    > A stacking context is like a mini universe where elements are layered independently. It’s created when an element has:
    >> A position other than [static] and a [z-index] other than [auto]

    >> opacity less than 1

    >> transform, filter, perspective, or other 3D/visual effects

    >> isolation: isolate

    >> will-change or contain properties that affect layout or paint


    > Once a stacking context is formed:
    >> Its children stack within it, based on their own z-index

    >> The entire context stacks as a single unit in its parent context.


5. <div class="parent">
    <div class="child1">Behind</div>
    <div class="child2">Front</div>
   </div>

.parent {
  position: relative;
  z-index: 1;
}

.child1 {
  position: absolute;
  z-index: 1;
}

.child2 {
  position: absolute;
  z-index: 2;
}

> Here, .child2 will appear in front of .child1, and the whole .parent block will stack based on its own z-index.



# ⭐ Transform ScaleX() Tech:
______________________________________

1. scaleX() is typically used to stretch or shrink an element horizontally.

2. But when you pass a negative value, like -1, it does something clever—it flips the element horizontally, like a mirror image.

3. ⭐ transform: rotate(130deg) scaleX(-1);
    > rotate(130deg): Rotates the element 130 degrees clockwise.
    > scaleX(-1): Flips the element horizontally across its vertical axis.
    >> So instead of just resizing, scaleX(-1) inverts the X-axis, making the left side become the right and vice versa. It’s a neat trick for flipping images, icons, or even entire layouts.

4. Imagine holding a photo and flipping it over like a playing card—scaleX(-1) does that, but digitally. Combine it with rotation, and you get some wild visual effects, especially in animations or interactive UI elements.

5. Common Use Cases:
    > Mirroring avatars or icons
    > Creating flip animations
    > Reversing layout direction without changing content