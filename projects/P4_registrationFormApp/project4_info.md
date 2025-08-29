1. The vh unit stands for viewport height, and is equal to 1% of the height of the viewport. This makes it relative to the viewport height.
	> height: 100vh;

2. The method attribute specifies how to send form-data to the URL specified in the action attribute.
	> The form-data can be sent via a GET request as URL parameters (with method="get") or
	> A POST request as data in the request body (with method="post").

3. The rem unit stands for root em, and is relative to the font size of the html element.
	> margin: 0.5rem 0;

4. It is best accessibility practice to link the label element with the input associated with it.
	> label for="first-name">Enter Your First Name: <input id="first-name" /></label>

5. Specifying the type attribute of an input element is important for the browser to know what kind of data it should expect. If the type is not specified, the browser will default to text.
	> Certain type attribute values come with built-in form validation. For example, type="email" requires that the value be a valid email address.
	> <input id="new-password" type="password" minlength="8" required />

6. The first input element with a type of submit is automatically set to submit its nearest parent form element.
	> <input type="submit" value="Submit" />

7. What if you wanted to allow a user to upload a profile picture?
	> The input type file allows just that.
	> <label>Upload a profile picture: <input type="file" /></label>

8. All [ <input type="file" />, <input type="number" />,  <select id="referrer"></select, <textarea></textarea> ]; can use the best practice of associating the related <label> element using the for="" and id="" attributes.

9. With form submissions, it is useful, and good practice, to provide each submittable element with a name attribute. This attribute is used to identify the element in the form submission.
 
10. font-family: Tahoma;

11. form {
  	margin: 0 auto;
  	max-width: 500px;
 	min-width: 300px;
 	width: 60vw;
     } 
 	> This is the way to make an element responsive between a specified range.

12. width: unset; -> This will remove the earlier rule 

13. vertical-align: middle; -> for radio inputs to vertically align to the middle.



# Input type




1. <input type="text" />

2. <input type="email" />

3. <input type="password" pattern="" />

4. <input type="file" />

5. <input type="number" min="" max=""/>

6. <input type="submit" />



# Password Input type



1. <input id="new-password" type="password" minlength="8" required />

2. With type="password" you can use the pattern attribute to define a regular expression that the password must match to be considered valid.
	> <input id="new-password" type="password" pattern="[a-z0-5]{8,}" required />
		> The above is a regular expression which matches eight or more lowercase letters or the digits 0 to 5.



# Dropdown 



1. Adding a dropdown to the form is easy with the select element. The select element is a container for a group of option elements, and the option element acts as a label for each dropdown option. Both elements require closing tags.

	> <label>How did you hear about us?
           <select>
            <option>(select one)</option>
            <option>freeCodeCamp News</option>
            <option>freeCodeCamp YouTube Channel</option>
            <option>freeCodeCamp Forum</option>
            <option>Other</option>
           </select>
          </label>

2. Submitting the form with an option selected would not send a useful value to the server. As such, each option needs to be given a value attribute. Without which, the text content of the option will be submitted to the server.

	> <select>
            <option value="">(select one)</option>
            <option value="1">freeCodeCamp News</option>
            <option value="2">freeCodeCamp YouTube Channel</option>
            <option value="3">freeCodeCamp Forum</option>
            <option value="4">Other</option>
          </select>




# Textarea




1. The textarea element acts like an input element of type text, but comes with the added benefit of being able to receive multi-line text, and an initial number of text rows and columns.
	> Note that the textarea requires a closing tag.
	> <label>Provide a bio: <textarea></textarea></label>

2. To give it an initial size, you can add the rows and cols attributes.




# CSS Pseudo-class:



1. You can select the last element of a specific type using the last-of-type CSS pseudo-class, like this: -> p:last-of-type { }




# Attribute selector:



1. It selects an element based on the given attribute value. Here is an example: -> input[name="password"]
	> The above selects input elements with a name attribute value of password.


