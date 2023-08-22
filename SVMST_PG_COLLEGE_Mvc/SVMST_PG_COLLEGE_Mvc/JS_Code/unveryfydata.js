


$(window).on('load', function () {
    binddd();
});

function binddd() {

    $.ajax({
        type: "POST",
        url: "/Admin/unverifydatastatus",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (r) {
            $('#tblkdata').empty();
            var trHTML = '';
            var index = '0';
            var obj = JSON.parse(r)

            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                  // debugger;
                    index = parseInt(i) + 1;

                    trHTML += "<tr><td><span>" + index + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Year_Part"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Form_No"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["MobileNo"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Student_Name_English"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["Father_Name_English"] + "</span></td>";
                    trHTML += "<td><span>" + ["Verify form"] + "</span></td>";
                    trHTML = trHTML + "<td><a href='http://localhost:49202/Admin/Veiw_Form/id='" + obj[i]["Form_No"] + ">Show</a></td>";

                    //trHTML += "<td><span>" + obj[i]["TOTALSTUDENT"] + "</span></td>";

                    ///debugger;

                }
                trHTML += "</tr>";
                trHTML = '<tbody>' + trHTML + '</tbody>';
                var thead = "";

                /*thead += ' <tr><thead><th>#</th> <th>Exam</th>Subject_code<th></tr>  ';*/
                thead += ' <tr><th>SNO</th> <th>Course</th><th>Form No</th><th>Mobile No</th><th>Student Name</th><th>Father Name</th><th>Verify form</th><th>Show</th></tr> ';

                $('#tblkdata').append(thead);
                $('#tblkdata').append(trHTML);

            }
        },
        complete: function () {
        }
    });
}