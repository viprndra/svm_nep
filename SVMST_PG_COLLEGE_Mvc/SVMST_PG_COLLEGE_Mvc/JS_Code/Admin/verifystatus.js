

$(window).on('load', function () {
    bindd();
});

function bindd() {

    $.ajax({
        type: "POST",
        url: "/Admin/Verifystudent",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",

        success: function (r) {
            $('#tblverify').empty();
            var trHTML = '';
            var index = '0';
            var obj = JSON.parse(r)

            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                    //debugger;
                    index = parseInt(i) + 1;

                    trHTML += "<tr><td><span>" + index + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["SEMESTER"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["TOTALSTUDENT"] + "</span></td>";



                }
                trHTML += "</tr>";
                trHTML = '<tbody>' + trHTML + '</tbody>';
                var thead = "";

                /*thead += ' <tr><thead><th>#</th> <th>Exam</th>Subject_code<th></tr>  ';*/
                thead += ' <tr><th>SNO</th> <th>Year_Part</th><th>TOTALSTUDENT</th></tr> ';

                $('#tblverify').append(thead);
                $('#tblverify').append(trHTML);

            }
        },
        complete: function () {
        }
    });
}





