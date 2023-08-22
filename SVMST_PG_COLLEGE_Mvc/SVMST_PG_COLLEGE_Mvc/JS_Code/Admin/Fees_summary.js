

$(document).ready(function () {

    bind_course();

    $("#ddlsem").change(function () {
        debugger
        bindsession();
    })



})


function bind_course() {

    //debugger
    $.ajax({
        type: "POST",
        url: "/Admin/BINDSEM",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (obj) {
            //console.log(obj);

            //var list = JSON.parse(obj.d);
            var list = JSON.parse(obj)
            //debugger;
            $('#ddlsem').empty().append('<option selected = "selected" value ="">SELECT</option > ');

            for (var i = 0; i < obj.length; i++) {

                $('#ddlsem').append('<option value="' + list[i]['Pk_Course_Id'] + '">' + list[i]['Course_Details'].toUpperCase() + '</option>');

            }
        },
        complete: function () {
        }
    });
};




function bindsession() {
    debugger;
    var ID = $('#ddlsem').val();
    $.ajax({
        type: "POST",
        url: "/Admin/BINDSES",
        data: "{fk_id: '" + ID + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (obj) {
            var list = JSON.parse(obj)
            //debugger;

            $('#session').empty().append('<option selected = "selected" value ="">SELECT</option > ');
            //debugger;

            for (var i = 0; i < obj.length; i++) {
                //debugger;
                $('#session').append($("<option></option > ").val(list[i]['Session']).html(list[i]['Session']));
            }
        },

        complete: function () {
        }
    });
}






