/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from initial-tweets.json


$(document).ready(function() {
  $('.error-message').hide();
  const renderTweets = function(tweets) {
  // loops through tweets
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-outer-container').prepend($tweet);
    }
  };
  // helper function that provides time
  


  const createTweetElement = (tweetObj) => {
    const time = (obj) => timeago.format(obj.created_at);
    return (
      `<article class="tweet-container">
            <section class="tweet-header">
              <img src=${tweetObj.user.avatars}><span>${tweetObj.user.name}</span>
              <div class="handle">${tweetObj.user.handle}</div>
            </section>
            <p>${tweetObj.content.text}</p>
            <div class="line"></div>
            <section class="days-container"><span>${timeago.format(new Date())}</span>
              <div class="icons-container">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </div>
            </section>
    </article>`
    );
  };

  // add an event listener that listens for the submit event
  $('form').on('submit', function(evt) {
    // prevent the default behaviour of the submit event (data submission and page refresh)
    evt.preventDefault();
    
    const $data = $(this).serialize();

    const $content = $('#tweet-text');
    const $contentVal = $content.val();
    


    if ($contentVal === "" || $contentVal === null) {
      $('.error-message').text("Add some content");
      $('.error-message').show();

    } else if (evt.target[0].value.length > 140) {
      $('.error-message').show();
      $('.error-message').text("Too many characters typed!");
      
    } else {
     
      $.post('/tweets', $data).done((response)=> {
        $('textarea').val('');
        $('.counter').text(140);
        $('.tweets-outer-container').empty();
        loadTweets();
      });
    }

  });
  
  const loadTweets = () => {
    $('.error-message').hide();
    $.get('/tweets').done(data => {
      console.log("sucess: ", data);
      renderTweets(data);
    });
  };

  loadTweets();

});



