 
$(document).ready(function () {
 
    bind_course();


  

})

$("#ddlbtn").click(function () {
    var ID = $('#ddlsem').val();
    var session = $('#session').val();

    $.ajax({
        type: "POST",
        url: "/Admin/BIND_Data",
        data: "{fk_id: '" + ID + "',session: '" + session + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (res) {
             var obj = JSON.parse(res)
            ///debugger;
     
           
                
            $('#tbldata').find('thead').remove();
            $('#tbldata').find('tbody').remove();
                var table_length = obj.length;
                if (table_length == "0") { alertify.alert("Please select Valid Date or Shift !"); return false; }
                else {

                    var index = "";
                    var trHTML = '';
                    ///debugger;

                    for (var i = 0; i < table_length; i++) {
                        index = parseInt(i) + 1;

                        trHTML += "<td><span>" + index + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Form_No"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["EnrollmentNo"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["CourseName"] + "</span>";
                        trHTML += "<td><span>" + obj[i]["Year_Part"] + "</span>"
                        trHTML += "<td><span>" + obj[i]["Student_Name_English"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Father_Name_English"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Mother_Name_English"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Gender"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["MobileNo"] + "</span></td>"; 
                       
                        trHTML += "</tr>";
                    }



                    trHTML = '<tbody>' + trHTML + '</tbody>'; 
                    var thead = '<thead><tr><th>Sno</th><th>Form no</th><th>Enrollment</th> ';
                    thead += ' <th>Course name </th> <th>Year part</th><th>Student name</th> <th>Father name</th> ';
                       thead += '<th>Mother name</th> <th>Gender</th><th>Mobile</th></tr></thead >';
                    $('#tbldata').append(thead);
                    $('#tbldata').append(trHTML);

                    $('#tbldata').DataTable({
                        dom: 'Bfrtip', // Show the export buttons
                        buttons: [
                            'excelHtml5' // Add the Excel export button
                            , 'print'// Add the Excel export button
                        ]
                    });
                    

                }
          
       
        },

        complete: function () {
        }
    });
   
})




$("#ddlsem").change(function () {
    bindsession()
})

function bindsession() {
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
    });}

 
$("#ddlbtnn").click(function () {
    var ID = $('#ddlsem').val();
    var session = $('#session').val();

    $.ajax({
        type: "POST",
        url: "/Admin/Bind_Data_unverify",
        data: "{fk_id: '" + ID + "',session: '" + session + "'}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function () {
        },
        success: function (res) {
            var obj = JSON.parse(res)
           ///debugger;
            
            $('#tbldata').find('thead').remove();
            $('#tbldata').find('tbody').remove();
            var table_length = obj.length;
            if (table_length == "0") { alertify.alert("Please select Valid Date or Shift !"); return false; }
            else {

                var index = "";
                var trHTML = '';
                ///debugger;

                for (var i = 0; i < table_length; i++) {
                    index = parseInt(i) + 1;

                    trHTML += "<td><span>" + index + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Form_No"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["EnrollmentNo"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["CourseName"] + "</span>";
                    trHTML += "<td><span>" + obj[i]["Year_Part"] + "</span>"
                    trHTML += "<td><span>" + obj[i]["Student_Name_English"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Father_Name_English"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Mother_Name_English"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Gender"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["MobileNo"] + "</span></td>";

                    trHTML += "</tr>";
                }



                trHTML = '<tbody>' + trHTML + '</tbody>';
                var thead = '<thead><tr><th>#</th><th>Form no</th><th>Enrollment</th> ';
                thead += ' <th>Course name </th> <th>Year part</th><th>Studentname</th> <th>Father name</th> ';
                thead += '<th>Mother name</th> <th>Gender</th><th>Mobile</th></tr></thead >';
                $('#tbldata').append(thead);
                $('#tbldata').append(trHTML);
                $('#tbldata').DataTable({
                    dom: 'Bfrtip', // Show the export buttons
                    buttons: [
                        'excelHtml5'
                        , 'print'// Add the Excel export button
                    ]
                });
                
            }


        },

        complete: function () {
        }
    });

})


 
function bind_course() {

   debugger
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
       debugger;
            $('#ddlsem').empty().append('<option selected = "selected" value ="">SELECT</option > ');
       
            for (var i = 0; i < obj.length; i++) {
              
                $('#ddlsem').append('<option value="' + list[i]['Pk_Course_Id'] + '">' + list[i]['Course_Details']+ '</option>');

            }
        },
        complete: function () {
        }
    });
};



