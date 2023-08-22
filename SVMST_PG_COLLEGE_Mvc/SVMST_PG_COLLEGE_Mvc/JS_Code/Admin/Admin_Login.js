


//function btnupdate(obj) {
//        debugger;
//        var namee = $("#Form_number").val();

//        if (namee == null || namee == undefined || namee == '') {
//        alert('Please fill User Name')
//            return false;

//        }

//    else {

//        $("#btnupdate").trigger('click');
//        }
//    }





 
$('#btnupdate').click(function () {

    var qual = $("#Form_number").val();
    if (qual == " " || qual == undefined || qual == null) {
        alert("Please Enter User Name!!!");
        $("#Form_number").focus(); return false;
    }

    else {
        alert('Login Not Successfully ');

    }




});
 
