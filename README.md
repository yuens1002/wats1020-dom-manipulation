# wats1020-dom-manipulation
An assignment designed to demonstrate the ability to manipulate the DOM by creating, removing and modifying elements.

THIS ASSIGNMENT IS NOT YET COMPLETED. PLEASE DO NOT BEGIN WORK ON IT YET.

In order to practice DOM manipulation with the help of jQuery, we will fill in information and interactive actions on a page just as we would on a regular website. We will use a Javascript Object called `userProfile` to provide imaginary user profile information, as if that had been delivered via an Ajax (XHR) request or some other server mechanism. We will also improve the interactivity of the content by providing some show/hide features and style updating.

You will use many of the core features discussed in the tutorials at [learn.jQuery](http://learn.jquery.com). That site is a great resource to help you fulfill the following requirements.

## Basic Requirements
In order to successfully complete this assignment, you need to fulfill these goals:

* Create a pseudo-login effect by replacing the login form with some mock user data when the user clicks the "login" button.
* Activate all the "view details" buttons so that they show the appropriate hidden content (marked with the `details` class) when clicked.
* Activate the vote buttons so they properly register, count, and display voting activity. (NOTE: For the basic requirements, these votes do not need to persist across page refreshes, and each user should be able to vote multiple times.)

## Stretch Requirements
If you feel up to a larger challenge, try to hit these goals:

* Add fancier animations to your content transitions.
* Add an element on the page that is displayed for a short period of time (see `setTimeout`) to let the user know their vote has been counted after they click one of the vote buttons. 
* Remove the style that hides the `.details` elements and hide them with Javascript when the DOM is ready. This should allow you to support better accessibility because that content will be shown to screen readers, search engine spiders, and more.
* Make votes persistent by saving the `voteCounts` object to `localStorage` (NOTE: LocalStorage is a native Javascript feature, so you will need to consult a more general Javascript resource to learn about it.)
