
$(window).on('load', function () {
    bind ();
});

function bind() {
 
    $.ajax({
        type: "POST",
        url: "/Admin/Bindstudent",
        data: JSON.stringify(),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
     
        success: function (r) {
            $('#tblform').empty();
            var trHTML = '';
            var index = '0';
            var obj = JSON.parse(r)
            //debugger;

            if (obj.length > 0) {
                for (var i = 0; i < obj.length; i++) {
                  ///debugger;
                    index = parseInt(i) + 1;

                    trHTML += "<tr><td><span>" + index + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["SEMESTER"] + "</span></td>";
                    trHTML += "<td><span>" + obj[i]["TOTALSTUDENT"] + "</span></td>";
                    
                   /// debugger;


                }
                trHTML += "</tr>";
                trHTML = '<tbody>' + trHTML + '</tbody>';
                var thead = "";

                thead += ' <tr><th>SNO</th> <th>SEMESTER</th><th>TOTALSTUDENT</th></tr> ';

                $('#tblform').append(thead);
                $('#tblform').append(trHTML);
            
            }
        },
        complete: function () {
        }
    });
}

