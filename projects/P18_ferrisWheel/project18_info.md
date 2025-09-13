# ⭐ Transform Origin Property CSS:
__________________________________________

1. The [transform-origin] property is used to set the point around which a CSS transformation is applied.
    > For example, when performing a rotate, the [transform-origin] determines around which point the element is rotated.

    > [transform-origin]: 0% 0%;
    >> This will offset the origin point by 0% from the left and 0% from the top, setting it to the top left corner of the element.

    > transform-origin: 50% 0%;
    >> This will set the origin point to be offset 50% from the left and 0% from the top, placing it in the middle of the top edge of the element.



# Transform CSS:
____________________________________

1. [transform] property allows you to manipulate the shape of an element.

    > transform: rotate(60deg);
    >> In this case, using the [rotate(60deg)] value will rotate the element around its [transform-origin] point by 60 degrees clockwise.


# ⭐ @keyframes CSS:
_____________________________________

1. The [@keyframes] at-rule is used to define the flow of a CSS [animation].

2. Within the [@keyframes] rule, you can create selectors for specific points in the animation sequence
    > such as [0%] or [25%], or use [from] and [to] to define the start and end of the sequence.


3. [@keyframes] rules require a [name] to be assigned to them, which you use in other rules to reference.
    > For example, the **@keyframes freeCodeCamp { }** rule would be named **freeCodeCamp**.

    > @keyframes freecodecamp {
        12% {
            color: green;
        }
      }


4. ⭐ The [animation-name] property is used to link a @keyframes rule to a CSS selector.
    > The value of this property should match the name of the @keyframes rule.

@keyframes wheel { <------------- 
   0% {                         |
     transform: rotate(0deg);   |
   }                            |
   100% {                       |
     transform: rotate(360deg); |
   }                            |
}                               |
                                |
.wheel {                        |
  border: 2px solid black;      |
  border-radius: 50%;           |
  margin-left: 50px;            |
  position: absolute;           |
  height: 55vw;                 |
  width: 55vw;                  |
  max-width: 500px;             |
  max-height: 500px;            |
  animation-name: wheel; <-------
}


5. ⭐ he [animation-duration] property is used to set how long the animation should sequence to complete.
    > The [time] should be specified in either seconds (s) or milliseconds (ms).
    > animation-duration: 10s;


6. ⭐ The [animation-iteration-count] property sets how many times your animation should repeat.
    > This can be set to a [number], or to [infinite] to indefinitely repeat the animation.
    > animation-iteration-count: infinite;


7. ⭐ The [animation-timing-function] property sets how the animation should progress over time.
    > There are a few different values for this property:
    >> [ease] – Starts slow, speeds up, then slows down (default)
    >> [linear] – Constant speed throughout
    >> [ease-in] – Starts slow, then speeds up
    >> [ease-out] – Starts fast, then slows down
    >> [ease-in-out] – Slow start and end
    >> [step-start] – Jumps immediately to the end of each step
    >> [step-end] – Waits until the end of each step to jump


    > **Function Values:**
    >> These give you more control:
    >>> steps(n, start|end) – Divides the animation into n steps
    >>>> Example: steps(5, end)

    >>> cubic-bezier(x1, y1, x2, y2) – Custom easing curve 
    >>>> Example: cubic-bezier(0.42, 0, 0.58, 1) (ease-in-out)

    >>> linear() – Advanced linear interpolation
    >>>> Example: linear(0, 0.25 50%, 1)


    > **Global Values**
    >> inherit – Inherits from parent
    >> initial – Resets to default (ease)
    >> unset – Removes the value
    >> revert / revert-layer – Reverts to user-agent or stylesheet value


    > You can also combine multiple values for different animations:
    >> animation-timing-function: ease, steps(4, start), cubic-bezier(0.1, 0.7, 1, 0.1);


8. you can use the [animation] property to set these all at once.
    > animation: cabins 10s linear infinite;
    >> This will set the [animation-name], [animation-duration], [animation-timing-function], and [animation-iteration-count] properties in that order.


@keyframes cabins {
  0% {
    transform: rotate(0deg);
  }
  25% {
    background-color: yellow;
  }
  50% {
    background-color: purple;
  }
  75% {
    background-color: yellow;
  }
  100% {
    transform: rotate(-360deg);
  }
}