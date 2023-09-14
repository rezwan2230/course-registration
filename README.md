## Three project Feature..

. student can take any course by their needs.

. Student can not take upto 20 credits

. student can add their courses and view the total course fee.


## Discuss about how I managed the state in my assignment project.
I am using 4 states of useState hook in my assignment, I am creating these 4 states in Apps.jsx file. Using Selects state to see the names of the courses, this is sent from the App.jsx file to the Courses.jsx file and then to the Course file.

Then onclick on the Select button of the Course.jsx file and handle that state

I have received the data for each course through onclick, I am keeping that data in the select state then running various functionalities with the data from the select state and adding the results to credit, remaining and totalPrice. Then I am setting it dynamically by sending credit, remaining and totalPrice to Sidebar.jsx
