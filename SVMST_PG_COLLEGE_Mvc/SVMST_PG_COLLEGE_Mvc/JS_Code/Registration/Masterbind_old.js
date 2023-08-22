$('#ddlCourse').change(function () {
    bind_subjectMajor();
    bind_subjectVocational();
    BindSemester();
    BindMinorSub();
});

function BindSemester() {
    debugger;
    $("#ddl_yearpart").empty();
    var dataobject = {
        SEM: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/Bind_Semester",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''>Please Select Semester</option>";
            if (r != null) {
                var arraycourse = r;
                for (var i = 0; i < arraycourse.length; i++) {
                    options += '<option value="' + arraycourse[i].Value + '">' + arraycourse[i].Text + '</option>';
                }
                $('#ddl_yearpart').html(options);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Please Check values Entered by you !!!');

        }
    });
}

function BindMinorSub() {
    debugger;
    $("#ddl_Minor").empty();
    var dataobject = {
        Fk_Course_Id: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/Bind_Minor_Sub",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''> Select Minor Subject </option>";
            if (r != null) {
                var arraycourse = r;
                for (var i = 0; i < arraycourse.length; i++) {
                    options += '<option value="' + arraycourse[i].Value + '">' + arraycourse[i].Text + '</option>';
                }
                $('#ddl_Minor').html(options);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Please Check values Entered by you !!!');

        }
    });
}

function bind_subjectVocational() {
    debugger;
    $("#ddl_Vocational").empty();
    var dataobject = {
        Fk_Course_Id: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/Bind_Minor_Sub",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''> Select Minor Subject </option>";
            if (r != null) {
                var arraycourse = r;
                for (var i = 0; i < arraycourse.length; i++) {
                    options += '<option value="' + arraycourse[i].Value + '">' + arraycourse[i].Text + '</option>';
                }
                $('#ddl_Vocational').html(options);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Please Check values Entered by you !!!');

        }
    });
}

function bind_subjectMajor() {
    var course = $('#ddlCourse').val();
    $.get("/Master/Select_college_subject",
        {course_id: course },
        function (response) {
            $('#tbl_sub_list_1').empty();
            var tbody = '';
            $.each(JSON.parse(response), function () {
                $("#max_subject").val(this['Subject_count']);
                var Subject_count = this['Subject_count'];
                var hash = this['subject_code'];

                var name = this['Subject_Name'];

                if (this['Is_Active'] == true) {
                //    tbody += '<div class="col-md-4" style="font-weight:bold;"><label id = "lbl-' + hash + '" for= "checkbox-' + hash + '" "#Major' +'"> ' + name + '</label ></div>';
                //    tbody += '<div class="custom-control custom-checkbox col-md-1">' + '<input type="checkbox" name="chksub_' + Subject_count + '" id="chksub_' + Subject_count + '" value="' + this['subject_code'] + '"  />' + '</div>';
                //    tbody += '<td><input name="Subject_count" type="hidden" id="hfSubject_countlogic_' + Subject_count + '" value="' + Subject_count + '" /><input type="hidden" id="hfsublimit_' + Subject_count + '" value="' + Subject_count + '" /></td>';
                    tbody = tbody + `<tr class="item-model-number row-select"><td align="left" style="width:80px;"><span>${hash}</span> </td>`;
                    tbody = tbody + `<td align="left" style="display:none;" id="item0" Subject_Code="${Subject_count}">${Subject_count}<input id=" " name="subject_code" type="hidden" value="${Subject_count}" /></td>`;
                    tbody = tbody + `<td align="left" valign="middle" style="width:280px;" id="item1" Subject_Name=" ${name} "> ${name}</td>`;
                    tbody = tbody + `<td align="left" id="item0" Subject_Code="">${name} <input id=" " name="subject_code" type="hidden" value="${name}"/>${Subject_count}</td>`;

                    tbody = tbody + `<td align="left" valign="middle" style="width:400px;" id="item3"> ${name}</td>`;
                    tbody = tbody + `<td align="left" valign="middle" style="width:30px;">`
                    tbody = tbody + `<input type="checkbox" value=" ${name} " name = "chkpaper_${name}" id = "chkpaper_${name}" class="test0" PaperOptionalcount = "${name}" />
                                         <input type="hidden" id="hfpaperlimit_${name}" value = "${name}" papertype = "" class="asd" />
                                         <input type="hidden" name="paper_type" id="papertype" value="${name}" /><tr>`

                }
                else {
                    tbody += '<td></td>';
                }

            });
            $('#tbl_sub_list_1').append(tbody);
        });
}

$(document).on("click", "INPUT[id^=chksub]", function (event) {
    var targetId = event.target.id;
    var res = targetId.split("_");
    var limit_id = "hfsublimit_" + res[1];
    var Subject_count = "hfSubject_countlogic_" + res[1];
    var sub_limit = $('#' + limit_id).val();
    var Subject_count = $('#' + Subject_count).val();
    var sub_select = "0";

    $("[name='" + targetId + "']").each(function (index, data) {
        if (data.checked) {
            sub_select = parseInt(sub_select) + 1;
        }
    });
    if (parseInt(sub_select) > parseInt(sub_limit)) {
        alert("Only " + sub_limit + " subject(s) allowed in " + $("#ddlCourse option:selected").text() + " !"); return false;
        $("chksub_" + res[1]).prop("checked", false);
    }
});

//var sub_list = "";
//var grp_a_item = "0";
//var grp_a_limit = $('#group_a_limit').val();
//$("#tbl_sub_list_1 :input:checkbox").each(function (index, data) {
//    if (data.checked) {
//        var deny = "hfdeny-" + data.value;
//        var Subject_Name = "lbl-" + data.value;
//        sub_list += $('#' + Subject_Name).text() + "#" + data.value + "#" + fk_course_id + "$";
//        grp_a_item = parseInt(grp_a_item) + 1;
//    }
//});
//var max_sub = $("#max_subject").val();

//if (parseInt(grp_a_item) != parseInt(max_sub)) {
//    alertify.alert(max_sub + ' subject require to continue!'); return false;
//}

//else if (grp_a_limit < grp_a_item) { alertify.alert('Only ' + grp_a_limit + ' subject allow from Major Subject!'); return false; }
