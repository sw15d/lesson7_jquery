    /*
        Program Name: Recipe Display Application (Extra Credit)
            
        Author: Scott Wilson
        
        Date: 11/20/2017
            
        File Name: myRecipe.js
            
    */

/* global $ */
    
    //displays the next element after the current target
        function display(event) {

        $ (event.currentTarget).next().fadeIn("fast");
    
    }//end of display
    
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
$(event.currentTarget).next().animate( {width: "toggle"}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "green");
 }, function(){
 $(this).css("background-color", "red");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);
