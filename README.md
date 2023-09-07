# TheBlog

## Description

This application is a blog website where a user can add, edit and delete blog posts as well as comment on posts. The technologies used for this application were:
- mysql
- sequelize
- bcrypt
- dotenv
- node.js
- handlebars.js

The most challenging part of this project was getting the delete routes and delete buttons to work if multiple posts were displayed on screen. Another challenge faced was implementing modals when a user wants to edit their post and prefilling the modal with the previous post content.

## Usage

To use this application you can go to this url: https://theblog-6a0d8237522e.herokuapp.com/
You will be brought to the following landing page:
![Landing Page](/public/images/landing.png)
Once in the landing page you will be able to sign up if you don't have an account or log in if you already have an account and start posting.
The profile page will look like this:
![Profile](/public/images/profile.png)
And if you click on a specific blog post you will be able to see all the comments for that post as well as adding your own comments:
![Comments](/public/images/comment.png)