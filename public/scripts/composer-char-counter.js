/* eslint-disable no-undef */
// eslint-disable-next-line no-undef

$(document).ready(() => {
  // eslint-disable-next-line no-undef
  $('#tweet-text').on('keydown', function() {
    
    // keydown event for textarea
    // count the length of characters typed
    let $tweets = this.value.length;
  
    const $currenTweetsNumber = $('.counter');
    const $charactersLeft = 140 - $tweets;

    // update the counter value. Change color for negative values
    // but retain the original color for positive values
    $charactersLeft > -1 ? $currenTweetsNumber.text($charactersLeft) : $currenTweetsNumber.text($charactersLeft).css("color", "red");

    
    
   
    
    
    
    
    

  });
});