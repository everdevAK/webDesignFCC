# SEO Optimizing Tags:



1. HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.
   
2. The main element is used to represent the main content of the body of an HTML document. Content inside the main element should be unique to the document and should not be repeated in other parts of the document.
   
3. The section element is used to define sections in a document, such as chapters, headers, footers, or any other sections of the document. It is a semantic element that helps with SEO and accessibility.



# HTML Forms:



1. The form element is used to get information from a user like their name, email, and other details.
   
2. The action attribute indicates where form data should be sent. <form action="/submit-url"></form>
   
3. In order for a form's data to be accessed by the location specified in the action attribute, you must give the text field a name attribute and assign it a value to represent the data being submitted. <input type="text" name="name">
   
4. To prevent a user from submitting your form when required information is missing, you need to add the required attribute to an input element. <input type="text" name="firstName" required>
   
5. The default behavior of clicking a form button without any attributes submits the form to the location specified in the form's action attribute.
   
6. Relying on default behavior may cause confusion. Add the type attribute with the value submit to the button to make it clear that it is a submit button.
   
7. You can use radio buttons for questions where you want only one answer out of multiple options. <input type="radio"> \[option]
   
8. label elements are used to help associate the text for an input element with the input element itself (especially for assistive technologies like screen readers). <label><input type="radio"> cat</label>
   
9. To make it so selecting one radio button automatically deselects the other, both buttons must have a name attribute with the same value.
   <input type="radio" name="meal"> Breakfast; <input type="radio" name="meal"> Lunch
   
10. If you select the Indoor radio button and submit the form, the form data for the button is based on its name and value attributes. Since your radio buttons do not have a value attribute, the form data will include indoor-outdoor=on, which is not useful when you have multiple buttons.
    
11. Add a value attribute to both radio buttons. For convenience, set the button's value attribute to the same value as its id attribute.
    
12. The fieldset element is used to group related inputs and labels together in a web form. fieldset elements are block-level elements, meaning that they appear on a new line.
    
13. The legend element acts as a caption for the content in the fieldset element. It gives users context about what they should enter into that part of the form.
    
14. Forms commonly use checkboxes for questions that may have more than one answer. The input element with a type attribute set to checkbox creates a checkbox.
    
15. There's another way to associate an input element's text with the element itself. You can nest the text within a label element and add a for attribute with the same value as the input element's id attribute. <input id="breakfast" type="radio" name="meal" value="breakfast">; <label for="breakfast">Breakfast</label>
    
16. In order to make a checkbox checked or radio button selected by default, you need to add the checked attribute to it.



# Inline Elements:



1. input and button elements are inline elements, which don't appear on new lines.



# Void Elements:



1. <img> elements have an opening tag without a closing tag. An element without a closing tag is known as a void element.
   
2. input elements are a void element and do not need closing tags.
   
3. There are many kinds of inputs you can create using the type attribute. You can easily create a password field, reset button, or a control to let users select a file from their computer.



Other New Learnings:


1. HTML attributes are special words used inside the opening tag of an element to control the element's behavior.
   
2. To open links in a new tab, you can use the ***target attribute*** on the anchor (a) element.
   
3. The target attribute specifies where to open the linked document. ***target="\_blank"*** opens the linked document in a new tab or window.
   
4. When you add a lower rank heading element to the page, it's implied that you're starting a new subsection.
   
5. The figure element represents self-contained content and will allow you to associate an image with a caption.
   
6. A figure caption (figcaption) element is used to add a caption to describe the image contained within the figure element.
   <figure>
     	  <img src="image.jpg" alt="A description of the image">
     	  <figcaption>A cute cat</figcaption>
   </figure>
   
7. To place emphasis on a specific word or phrase, you can use the em element.
   
8. The strong element is used to indicate that some text is of strong importance or urgent.
   
9. The footer element is used to define a footer for a document or section. A footer typically contains information about the author of the document, copyright data, links to terms of use, contact information, and more.
   
10. All pages should begin with <!DOCTYPE html>. This special string is known as a declaration and ensures the browser tries to meet industry-wide specifications.
    
11. <!DOCTYPE html> tells browsers that the document is an HTML5 document which is the latest version of HTML.





&nbsp;	

&nbsp;	

