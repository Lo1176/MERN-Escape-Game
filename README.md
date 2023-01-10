# 🪜MERN-Escape-Game

In this project, you will implement a booking platform for escape game. What is an escape game ? [See this](https://fr.wikipedia.org/wiki/Jeu_d%27%C3%A9vasion)

The client give you the technical documentation and a list of tickets below.

Your team have only a few days. The client's request may be too ambitious so you will have to use agility to do the maximum without wasting time.
We strongly recommend the use of a kanban.

You will push on your Git repository:

 * the code
 * a screenshot of your kanban
 * a README.md file with the info to access the data in MongoDB Atlas and the 'getting started' section

## Features 

   All the first features are listed in the technical documentation: [Document_technique-V2.0-24102022.pdf](https://github.com/Matrice-io/MERN-Escape-Game/blob/main/Document_technique-V2.0-24102022.png)
  
## List of tickets (version alpha)

 - Don't display expired slots when listing slots in a room page
 - Check the age of participants when creating a new booking. If a participant is under the room's age limit, booking should not be possible.
 - Add a checkbox on the booking page, to automatically fill in the info of the logged in user
 - A user should be able to cancel an upcoming booking on the page that sums up their bookings

## List of tickets (version beta) (Bonus)

 - On the homepage, display all existing rooms as a list of cards instead of displaying them in a table. The list must be responsive.
 - Add the possibility for a different group to book the same slot if there are spots left in a room after a booking. The first user to book the slot will have to check an option to specify that they accept new players to fill the remaining seats in their slot.
 - When the number of players in modified in the booking page, any supplied information disappears. We want to be able to keep filled in fields.
 - Add a page only available to admin users, where the admin can modify the details of existing rooms
