## Sources and Readings

    1.https://stackoverflow.com/questions/52669596/promise-all-with-axios - Promise All with Axios
    2.https://www.storyblok.com/tp/how-to-send-multiple-requests-using-axios -How to send multiple requests using axios
    3.https://gomakethings.com/waiting-for-multiple-all-api-responses-to-complete-with-the-vanilla-js-promise.all-method/ - Waiting for multiple all API responses to complete with the vanilla JS Promise.all() method
    4.https://www.freecodecamp.org/news/promise-all-in-javascript-with-example-6c8c5aea3e32/ - All you need to know about Promise.all
    5.https://www.npmjs.com/package/axios -Axios


    function nullCheck() was discussed on April 1 during office Hours as well as async and await so I included them in my code

## Pseudocode

create a separate components for first 5 questions first; in the APP.js create state and use axios.all to set states for first 5 answers, so those states will hold the information the particular topic; then use separate functions to answer questions 6 and 7; also render all the components; each component js will use the nullCheck() function to make sure to receive a data. and will return the answer for the partiqular question