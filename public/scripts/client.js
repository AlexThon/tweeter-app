/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};


const createTweetElement = (tweetObj) => {

  console.log("tweet object: ", tweetObj);
  return (
    `<article class="tweet-container">
            <section class="tweet-header">
              <img src=${tweetObj.user.avatars}><span>${tweetObj.user.name}</span>
              <div class="handle">${tweetObj.user.handle}</div>
            </section>
            <p>${tweetObj.content.text}</p>
            <div class="line"></div>
            <section class="days-container"><span>${tweetObj.created_at}</span>
              <div class="icons-container">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </div>
            </section>
    </article>`
  );
};


//const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  $('.tweets-outer-container').append($tweet);
});
