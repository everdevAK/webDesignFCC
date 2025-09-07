# CSS Positioning
______________________

1. CSS positioning lets you set how you want an element to be positioned in the browser.

2. It has a position property you can set to:
    > static, absolute, relative, sticky or fixed.

3. Once you set the position property of the element, you can move the element around by setting a pixel or a percentage value for one or more of the top, right, left, or bottom properties.

4. ⭐ [static] is the default positioning for all elements.
    > If you assign it to an element, you won't be able to move it around with top, right, left, or bottom.

5. [relative] value:
    > The element is still positioned according to the normal flow of the document, but the top, left, bottom, and right values become active.

6. [absolute] value:
    > When you use the absolute value for your position property, the element is taken out of the normal flow of the document,
    > Then its position is determined by the top, right, bottom, and left properties.

7. [fixed] value:
    > fixed is a position property value that lets you make an element fixed to the page no matter where the user scrolls to on the page.

8. [sticky] value:
    > sticky positioning is a hybrid of relative and fixed positioning.
    > It allows an element to stick to a specific position within its containing element or viewport, based on the scroll position.

9.  position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto; 
        -> This is one way u can center an element.


# CSS Triangle trick:
_________________________

1. .cat-right-ear {
        height: 0;
        width: 0;
        border-left: 35px solid transparent;
        border-right: 35px solid transparent;
        border-top: 35px solid transparent;
        border-bottom: 35px solid red;
    }

2. .cat-left-ear {
        position: absolute;
        top: -26px;
        left: -31px;
        border-top-left-radius: 90px;
        border-top-right-radius: 10px;
        transform: rotate(-45deg);
        border-left: 35px solid transparent;
        border-right: 35px solid transparent;
        border-bottom: 70px solid #5e5e5e;
    }



# CSS Transform: 
________________________

1. The transform property allows you to modify:
    > shape, position, and size of an element without changing the layout or affecting the surrounding elements.

    > It has functions such as [translate()], [rotate(--deg)], [scale()], [skew()], and [matrix()].

    > transform: rotate(-45deg);



# z-index
_________________________

1. z-index is a property you can use to define the order of overlapping HTML elements.

    > Any element with a higher z-index will always be positioned over an element with a lower z-index.

    > z-index: 1; z-index: -1; z-index: 999.......



# Eliptical shape:
__________________________

1. .cat-mouth div {
        width: 30px;
        height: 50px;
        border: 2px solid #000;
        border-radius: 190%/190px 150px 0 0;
        border-color: black transparent transparent transparent;
    }