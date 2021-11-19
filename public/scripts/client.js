/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];



const renderTweets = function(tweets) {
  // loops through tweets
  for (let tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-outer-container').append($tweet);
  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
};
// helper function that provides time
const time = (obj) => timeago.format(obj.created_at);


const createTweetElement = (tweetObj) => {
  return (
    `<article class="tweet-container">
            <section class="tweet-header">
              <img src=${tweetObj.user.avatars}><span>${tweetObj.user.name}</span>
              <div class="handle">${tweetObj.user.handle}</div>
            </section>
            <p>${tweetObj.content.text}</p>
            <div class="line"></div>
            <section class="days-container"><span>${time(tweetObj.created_at)}</span>
              <div class="icons-container">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </div>
            </section>
    </article>`
  );
};


// $('#tweet-text').on('keydown', function() {
    
//   // keydown event for textarea
//   // count the length of characters typed
//   let $tweets = this.value.length;

//   const $currenTweetsNumber = $('.counter');
//   const $charactersLeft = 140 - $tweets;

//   // update the counter value. Change color for negative values
//   // but retain the original color for positive values
//   $charactersLeft > -1 ? $currenTweetsNumber.text($charactersLeft) : $currenTweetsNumber.text($charactersLeft).css("color", "red");

// });

// $.ajax({
//   type: "POST",
//   url: url,
//   data: data,
//   success: success,
//   dataType: dataType
// });

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like
//$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



$(document).ready(function() {
  renderTweets(data);
  // add an event listener that listens for the submit event
  $('form').on('submit', function(evt) {
    // prevent the default behaviour of the submit event (data submission and page refresh)
    evt.preventDefault();

  
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: {$('#tweet-text').val()},
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      encode: true,
    }).done(data => console.log(data));
      
   
  });
});


// }).done(function (data) {
  //       console.log(data);
  //     });

