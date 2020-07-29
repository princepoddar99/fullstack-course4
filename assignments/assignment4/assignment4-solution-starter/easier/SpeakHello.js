 
// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
(function(window){
  var speakWord = "Hello";
  var helloSpeaker = {
    var speak= function(name){
      console.log(speakWord +" "+name);
    }
  };
  window.helloSpeaker = helloSpeaker;
})(window);
