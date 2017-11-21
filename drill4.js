    /*
        Program Name: Recipe Display Application
            
        Author: Scott Wilson
        
        Date: 11/20/2017
            
        File Name: drill4.js
            
    */

/* global $ */
    
    //displays the next element after the current target
        function display(event) {

        $ (event.currentTarget).next().fadeIn("slow");
    
    }//end of display
    
//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);

//displays and animates the next element after the current target
function display2(event) {
$(event.currentTarget).next().animate( {height: "toggle"}, "slow");
}//end of display2

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display2);

//change the background color h3 element when mouse hovers over it
$("h3").hover(function(){
 $(this).css("background-color", "red");
 }, function(){
 $(this).css("background-color", "gold");
});

//hover() will trigger display2 method each time mouse hovers over header
$("h3").hover(display2);



    
    