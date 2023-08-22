

$(document).ready(function () {
    $("#btnverify").hide()
})


$("#Form_No").click(function () {
         debugger;
    alert("The paragraph was clicked.");
});

$("#btnverifysearch").click(function () {
    
    var form = $("#txtform_no").val()
    if (form == "") {
        alert("Enter form no")
    }
    if (form != "") {
        //alert(form )

        $.ajax({
            type: "POST",
            url: "/Admin/BIND_Data_Verify",
            data: "{form: '" + form  + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (res) {
                var obj = JSON.parse(res)
               //debugger;


                $('#tbl_Verifydata').find('thead').remove();
                $('#tbl_Verifydata').find('tbody').remove();
                var table_length = obj.length;
                if (table_length == "0") { alertify.alert("Enter valid Form no!"); return false; }
                else {

                    var index = "";
                    var trHTML = '';
                  ///debugger;

                    for (var i = 0; i < table_length; i++) {
                        index = parseInt(i) + 1;

                        trHTML += "<td><span>" + index + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Year_Part"] + "</span></td>";
                       
                        trHTML += "<td><span>" + obj[i]["Form_No"] + "</span>";
                        trHTML += "<td><span>" + obj[i]["MobileNo"] + "</span></td>";

                        trHTML += "<td><span>" + obj[i]["Student_Name_English"] + "</span></td>";
                        trHTML += "<td><span>" + obj[i]["Father_Name_English"] + "</span></td>";
                       
                        trHTML = trHTML + "<td><input type='checkbox' id='" + obj[i]["Form_No"] + "'/></td>";
                        debugger
                       // trHTML = trHTML + "<td><input type='button' id=" + obj[i]["Form_No"] + "'/></td>";
                       // trHTML = trHTML + "<td><a href='http://localhost:49202/Admin/Veiw_Form/id='"+obj[i]["Form_No"]+">Show</a></td>";
                        trHTML = trHTML + "<td><a href='localhost:49202/Admin/Veiw_Form?id='"+obj[i]["Form_No"]+">Show</a></td>";
                        debugger
                        trHTML += "</tr>";
                    }



                    trHTML = '<tbody>' + trHTML + '</tbody>';
                    var thead = '<thead><tr><th>#</th><th>Course name</th> ';
                    thead += ' <th>Form no </th><th>Mobile No</th> <th>Student name</th> ';
                    thead += '<th>Father name</th><th>Verify</th><th>Show</th></tr></thead >';
                    $('#tbl_Verifydata').append(thead);
                    $('#tbl_Verifydata').append(trHTML);



 
                }


            },

            complete: function () {
                $("#btnverify").show()
            }
        });




    }
})


$("#btnverify").click(function () {
    var form_list = '';
    var joiner = '';
    var i = 0;
    $("#tbl_Verifydata input[type=checkbox]:checked").each(function () {

        form_list = form_list + joiner + this.id; joiner = ',';

        i = i + 1;

    });
    ///alert(form_list)



    if (form_list == "") {
        alert("check form no to verify")
    }
    if (form_list != "") {
        //alert(form )

        $.ajax({
            type: "POST",
            url: "/Admin/Data_Verify",
            data: "{form: '" + form_list + "'}",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            beforeSend: function () {
            },
            success: function (res) {
                var obj = JSON.parse(res)
                //debugger;
                var table_length = obj.length;
                 
                if (table_length == "0") { alert("Enter valid Form no!"); return false; }
                else {


                    alert("form verified successfully!"); location.reload();
                }

                


            },

            complete: function () {
                 
            }
        });




    }
})