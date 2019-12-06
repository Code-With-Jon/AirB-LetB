# AirB-LetB

### Description
<br>


Air B & Let B was developed as an example of a basic CRUD application built with Express, Node JS, Mongo, Mongoose, and ejs. The concept was built off of an exsisting concept known to the public as Air B and B. The platform allows users to be either a host or a renter of properties for short term rentals.

------------

### Users

1. Users will land on a home page that initially introduces them to the app by displaying a list of available homes for rent, but a user can't click on/view any of the homes until they are signed in.
2. Users will initially be signed out and must use the nav bar at the top in order to sign in via google Auth.
3. Once signed in, a user will be redirected to the 'Homes' screen, and will be interacting with the app as either a 'Renter' or a 'Rentee'

    #### Renter
1. A renter will search for a property by scrolling through the list of posted properties located on the left of the 'Homes' screen.
2. Once the rentor finds a property they might be interested in, they will click on the property to view additional information
3. If they want to finalize the rental, they will select the dates they would like to rent through, and confirm the rental.
4. If a user would like to view a list of current or previous rentals, they may do so by clicking "My Stays" via the nav bar.
   #### Rentee
1. A Rentee may post a home that they have a avialable for rent. 
2. In order to Post:
    * Click on "Become a Host" via the nav bar
    * Fill out basic home information
    * Confirm posting by clicking the "Post Home" button
3. A Rentee may see a list of the properties they have posted for rent by clicking on "My Homes" link via the nav bar.
4. If a Rentee would like to edit the information about the home, they may do so by finding the property they want to edit, and then clicking the aqua colored button with the pencil and paper icon
    * They will be redirected to a form with all previous information pre-filled
    * Once complete, they may confirm the updated information by clicking the "Save and Continue" button
5. If a Rentee would like to remove/delete a home listed for rent, they may do so by:
 * Searching for the home they would like to remove on the "My Homes page"
 * Click the "X" Icon will perminantly delete that posting and can not revert back
 * If a user deletes a posting and would like to post the same home again, they may do so by creating a new posting. 
------------

### Link
#### [AIRB&LETB](https://airbletb.herokuapp.com/ "Link To AIRB&LETB")
------------

### Wireframe
Landing Page (Unauthorized): ![Landing Page (Unauthorized)](https://i.imgur.com/W8flhqq.png))
Landing Page (Authorized): ![Landing Page (Authorized)](https://i.imgur.com/9m8Z1Yu.png)
Adding a Home (Rentee): ![Adding a Home (Rentee)](https://i.imgur.com/5V876x3.png)
View all homes listed (Rentee): ![View all homes listed (Rentee)](https://i.imgur.com/wQkBhBW.png)

View all homes Rented (Renter): ![View all homes Rented (Renter)](https://i.imgur.com/pDWcfIq.png)

------------

#### Languages/Frameworks
HTML, CSS, Express, JS, Mongo, Mongoose, ES6, EJS
 * Deployed on heroku

 #### Next Steps:
  * Add search filter
  * Date validation
  * Total cost of stay
