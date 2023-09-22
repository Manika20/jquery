var toggleView = false;
if(toggleView===false)
{
   $("#ball").addClass('ball1');
}
$("#ball").click(function()
{
    if(toggleView==false)
    {
        toggleView=true;
        $("#ball").removeClass('ball1');
        $("#ball").addClass('ball2');
        $("body").css({"background-color":'black',"color":"white"});
        $("#scroll").css("border-color","white");
    }
    else{
        toggleView = false;
        $("#ball").removeClass('ball2');
        $("#ball").addClass('ball1');
        $("body").css({"background-color":'white',"color":"black"});
        $("#scroll").css("border-color","black");
    }
})