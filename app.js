/**
 * Created by aaronsawyer on 4/23/15.
 */
var i = 0;
$(document).ready(function() {
    $("#btnGen").on("click", function(){
        i++
        $("#gen").append("<div>Line # " + i +"<button id='changeToggle'>Change Color</button> <button id='remove'>Remove</button></div>")
    });

    $(#"gen").on("click", function(){

    });
    $("#gen").on("click", "#remove", function() {
        $(this).parent().slideUp("slow", function () {
        });
        $(this).remove();
    });
});