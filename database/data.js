function renderStudent(student)
{
   $('ul').append('<li> Roll no-<span class="green">' + student.rollno + '</span>,<span class="green">'+ student.name +'</span> has scored<span class="green">'+ student.marks+'</span> marks</li>');
}
$("#button").click(function(e)
{
    e.preventDefault();
    console.log($("#rollno").val())
    console.log($("#name").val())
    console.log($("#marks").val())
    if($("#rollno").val()=="" || $("#name").val()==""|| $("#marks").val()=="")
    {
    alert("Details cannot be empty, fill complete data");
    }
    else{
   var student =
   {
    rollno : $("#rollno").val(),
    name: $("#name").val(),
    marks:$("#marks").val()
    
}
$("#rollno").val('');
$("#name").val('');
$("#marks").val('');
    renderStudent(student);
}
})
