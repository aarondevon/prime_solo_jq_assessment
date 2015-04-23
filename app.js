/**
 * Created by aaronsawyer on 4/23/15.
 */
var i = 0;
$(document).ready(function() {
    $("#btnGen").on("click", function(){
        i++
        $("#gen").append("<div class='change'>Line # " + i +"<button id='changeToggle'>Change Color</button> <button id='remove'>Remove</button></div>")
    });

    $("#gen").on("click", "#changeToggle", function() {
       $(this).parent().addClass("green");
    });
    $("#gen").on("click", "#remove", function() {
        $(this).parent().remove();
    });
});