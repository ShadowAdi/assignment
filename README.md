# API Chaining Dashboard
This is a responsive web application that demonstrates API chaining by fetching users, creating posts, and fetching comments based on the created post. The project uses React.js, Tailwind CSS, and performs both GET and POST requests to chain multiple APIs together.

## Setup Instructions
To set up the project locally:

## Clone the repository:
git clone https://github.com/ShadowAdi/assignment.git

## Install dependencies:
npm install

## Start the app:
npm start
Open the app in your browser:

### Visit http://localhost:3000.

### Demo
A recording of the application demonstrating its functionality can be found here:
[Application Demo](https://drive.google.com/file/d/1HRycj5iHFPi2yJ8IcYjGgWiBnP4kFCAA/view?usp=drive_link)

## Features

### API Chaining:

* Fetch users, create posts for a specific user,Fetch Posts ,and fetch comments for a post.
* Data from one API response is used as input for the next API call.
* 
### User Interface:

The interface allows users to:
* View a list of users.
* View a list of Posts
* Select a user and create a new post.
* View comments associated with the post.
  
### Responsive Design:
* The UI is responsive and adjusts to different screen sizes.

### Error Handling and Loading States:
* Loading indicators during API calls.
* Error messages for failed API requests.

## Appraoch
This project follows a modular approach where components handle specific tasks such as fetching user data, creating posts, and fetching comments. The key focus is on managing state and handling asynchronous API calls effectively.

1) API Chaining:

* Fetched users data via a GET request.
* On creating a post, the response (userId, postId) is used to fetch comments for that post.

2) State Management:
* Used React's useState and useEffect for managing component states like loading, errors, and API data.

3) Error Handling:
* Error boundaries were added for failed API calls and are handled gracefully with user feedback.

4)Tailwind CSS:
* Tailwind CSS was used for a clean and responsive design across multiple screen sizes.


### Assumptions and Decisions
* **API chaining:** Assumed that the user will first create a post before viewing comments.
* **Data flow:** Designed the app such that a post can only be created for an existing user.
* **Error handling:** Included basic error handling but did not cover network failure scenarios extensively.
