
function readPhoto(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 2100000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            $('#photo_preview').show();
            reader.onload = function (e) {
                $('#photo_preview')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
    }
}

function readSign(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 2100000) {
            $("#file_Sign").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            $('#sign_preview').show();
            reader.onload = function (e) {
                $('#sign_preview')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
    else {
        $("#file_Sign").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
    }
}

function readPhoto1(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
            //$('#photo_preview').attr('src', '');
            //$('#photo_preview').hide();
            //$("#uplphoto").val('');
            //alertify.alert("Image size must be lesser than 20Kb!");
            //$('#photo_preview').show();
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            //$('#photo_preview1').show();
            reader.onload = function (e) {
                $('.photo_preview1')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
        //$("#file_Photo").val('');
        //$("#photo_preview").attr("src", "");
        //alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        //$(this).val("");
    }
}

function readPhoto2(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
            //$('#photo_preview').attr('src', '');
            //$('#photo_preview').hide();
            //$("#uplphoto").val('');
            //alertify.alert("Image size must be lesser than 20Kb!");
            //$('#photo_preview').show();
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            //$('#photo_preview1').show();
            reader.onload = function (e) {
                $('.photo_preview2')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
        //$("#file_Photo").val('');
        //$("#photo_preview").attr("src", "");
        //alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        //$(this).val("");
    }
}

function readPhoto3(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
            //$('#photo_preview').attr('src', '');
            //$('#photo_preview').hide();
            //$("#uplphoto").val('');
            //alertify.alert("Image size must be lesser than 20Kb!");
            //$('#photo_preview').show();
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            //$('#photo_preview1').show();
            reader.onload = function (e) {
                $('.photo_preview3')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
        //$("#file_Photo").val('');
        //$("#photo_preview").attr("src", "");
        //alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        //$(this).val("");
    }
}

function readPhoto4(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
            //$('#photo_preview').attr('src', '');
            //$('#photo_preview').hide();
            //$("#uplphoto").val('');
            //alertify.alert("Image size must be lesser than 20Kb!");
            //$('#photo_preview').show();
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            //$('#photo_preview1').show();
            reader.onload = function (e) {
                $('.photo_preview4')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
        //$("#file_Photo").val('');
        //$("#photo_preview").attr("src", "");
        //alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        //$(this).val("");
    }
}
function readPhoto5(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
            $("#file_Photo").val('');
            alertify.alert("Image size must be lesser than 20Kb!");
            return false;
            //$('#photo_preview').attr('src', '');
            //$('#photo_preview').hide();
            //$("#uplphoto").val('');
            //alertify.alert("Image size must be lesser than 20Kb!");
            //$('#photo_preview').show();
        } else if (input.files && input.files[0]) {
            var reader = new FileReader();
            //$('#photo_preview1').show();
            reader.onload = function (e) {
                $('.photo_preview5')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    } else {
        $("#file_Photo").val('');
        alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        return false;
        //$("#file_Photo").val('');
        //$("#photo_preview").attr("src", "");
        //alertify.alert("Photo only allows file types of JPG, JPEG and PNG.");
        //$(this).val("");
    }
}
//$("#highschooldownload").on("click", function (e) {
//    debugger
//    var photo_1 = $('#photo_preview1').attr('src');
//    $("#highschooldownload").href(photo_1);
//    //e.preventDefault();
//    //$.post(photo_1.href, function (data) {
//    //    $("#highschooldownload").href(data);
//    //})
//    });
//function show() {
//    debugger
//        /* Access image by id and change
//        the display property to block*/
//        document.getElementById('image')
//            .style.display = "block";
//        document.getElementById('highschooldownload')
//    .style.display = "none";
//        }




$("#ddl_CType").change(function () {
    var FK_CType = $("#ddl_CType").val();
    $("#ddlCourse").empty();
    $("#ddl_yearpart").empty();
    
    

    if (FK_CType == 1) {

        $("#divminor").show();
        $("#divSub3").show();
        $("#divSub4").show();
    }
    else {
      
        $("#divminor").hide();
        $("#divSub3").hide();
        $("#divSub4").hide();
    }
  
    $.ajax({
        type: "get",
        url: "/Home/BindCourse",
        data: { "FK_CType": FK_CType },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddlCourse").empty();
            $("#ddlCourse").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddlCourse").append('<option value="' + obj.Table[i]['Course_Code'] + '">' + obj.Table[i]['Course_Name'] + '</option>')
            }

        },
        complete: function () {

        }
    })
});



$("#ddlCourse").change(function () {
    var Fk_Id = $("#ddlCourse").val();
    $("#ddl_yearpart").empty();
    $("#tbl_sub_list_1").empty();
  //  alert(FK_CType)
    $.ajax({
        type: "get",
        url: "/Home/BindYearPart",
        data: { "Fk_Id": Fk_Id },
        dataType: "json",
        success: function (response) {
            debugger
            var obj = JSON.parse(response)
            $("#ddl_yearpart").empty();
            $("#ddl_yearpart").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddl_yearpart").append('<option value="' + obj.Table[i]['Pk_Course_Id'] + '"stu-type1="'+ obj.Table[i]['semester'] +'">' + obj.Table[i]['Course_Details'] + '</option>')
            }

        },
        complete: function () {

        }
    })
});

$("#ddl_yearpart").change(function () {
    debugger
    //  alert("hey")
    bind_Major_Subject();
    BindMinorSub();
    BindVocational();
    BindCoCurricular();
});

$("#ddlState").change(function () {
    var S_Id = $("#ddlState").val();
     //alert(S_Id)
    $.ajax({
        type: "get",
        url: "/Home/BindDistrict",
        data: { "S_Id": S_Id },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddlDistrict").empty();
            $("#ddlDistrict").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddlDistrict").append('<option value="' + obj.Table[i]['DistrictID'] + '">' + obj.Table[i]['Districts_Name'] + '</option>')
            }

        },
        complete: function () {

        }
    })
});







$(document).ready(function () {

    
    $.ajax({
        type: "get",
        url: "/Home/BindTeacher",
        //  data: { "Fk_Id": Fk_Id },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddlTeachers").empty();
            $("#ddlTeachers").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddlTeachers").append('<option value="' + obj.Table[i]['Teacher_name'] + '">' + obj.Table[i]['Teacher_name'] + '</option>')
            }

        },
        complete: function () {

        }
    });


    $.ajax({
        type: "get",
        url: "/Home/BindState",
        //  data: { "Fk_Id": Fk_Id },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddlState").empty();
            $("#ddlState").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddlState").append('<option value="' + obj.Table[i]['StateID'] + '">' + obj.Table[i]['State_Name'] + '</option>')
            }

        },
        complete: function () {

        }
    });

    //$(document).on("click", "INPUT[id^=chkpaper]", function (event) {
    //    debugger;
    //    //$(".test").val('true');
    //    var targetId = event.target.id;
    //    var res = targetId.split("_");

    //    var limit_id = "hfpaperlimit_" + res[1];
    //    var sub_id = "hfsubname_" + res[1];
    //    var paper_logic = "hfpaperlogic_" + res[1] + "_" + res[2];

    //    var sub_name = $('#' + sub_id).val();
    //    var paper_limit = $('#' + limit_id).val();
    //    var paper_logic_val = $('#' + paper_logic).val();
    //    var paper_select = "0";

    //    $("[name='" + targetId + "']").each(function (index, data) {
    //        if (data.checked) {
    //            paper_select = parseInt(paper_select) + 1;
    //        }
    //    });

    //    if (parseInt(paper_select) > parseInt(paper_limit)) {
    //        alertify.alert("Only " + paper_limit + " paper(s) allowed in !"); return false;
    //    }
    //    if (parseInt(paper_select) < parseInt(paper_limit)) {
    //        $('#' + targetId).checked();
    //    }

    //});
    
});

function bind_Major_Subject() {
    debugger
    //$('#tbl_sub_list_1').empty();
    var course = $('#ddl_yearpart').val();
  
    $.get("/Home/BindMajorSubject",
        { course_id: course },
        function (response) {
            $('#tbl_sub_list_1').empty();
            var tbody = '';
            var h = 1;
            var ID = "";
            var str = "";
            $.each(JSON.parse(response), function () {
                debugger
                $("#max_subject").val(this['Subject_count']);
                var Subject_count = this['Subject_count'];
                var hash = this['subject_code'];
                var subject_code = this['subject_code']
                var name = this['Subject_Name'];
                var practical_fee = this['practical_fees'];

                if (name == str) {
                    str = name;
                    name = "";
                    ID = "";
                }
                else {
                    str = name;

                    ID = h.toString();
                    h += 1;

                }
                if (practical_fee =="200") {
                    //tbody += '<div class="col-md-4" style="font-weight:bold;"><label id = "lbl-' + hash + '" for= "checkbox-' + hash + '" "#Major' + '"> ' + name + '</label ></div>';
                    //tbody += '<div class="custom-control custom-checkbox col-md-1">' + '<input type="checkbox" name="chksub_' + Subject_count + '" id="chksub_' + Subject_count + '" value="' + this['subject_code'] + '"  />' + '</div>';
                    //tbody += '<td><input name="Subject_count" type="hidden" id="hfSubject_countlogic_' + Subject_count + '" value="' + Subject_count + '" /><input type="hidden" id="hfsublimit_' + Subject_count + '" value="' + Subject_count + '" /></td>';

                    tbody = tbody + `<tr class="item-model-number row-select"><td align="left" style="width:80px;">${ID}</td>`;
                    tbody = tbody + `<td align="left" style="display:none;" id="item0" Subject_Code="${Subject_count}">${Subject_count}<input id=" " name="subject_code" type="hidden" value="${Subject_count}" /></td>`;
                    tbody = tbody + `<td align="left" valign="middle" style="width:280px" id="item1" Subject_Name=" ${name} "> ${name}</td>`;
                    tbody = tbody + `<td align="left" style="display:none; id="item0" Subject_Code=""> <input id=" " name="subject_code" type="hidden" value="${name}"/>${Subject_count}</td>`;

                    tbody = tbody + `<td align="left"style="display:none; valign="middle" style="width:400px;" id="item3"> ${name}</td>`;
                    tbody = tbody + `<td align="center" valign="middle" style="width:30px;">`
                    tbody = tbody + `<input type="checkbox" value=" ${subject_code} " name = "chksub_${Subject_count}" id = "chksub_${Subject_count}" class="test0" practical_fee= "${practical_fee}"onchange="CheckChecked(this)" />
                                         <input type="hidden" id="hfSubject_countlogic_${Subject_count}" value = "${Subject_count}" papertype = "" class="asd" />
                                         <input type="hidden" id="hfsublimit_${Subject_count}" value="${Subject_count}" /><tr>`

                }
                else {
                    tbody = tbody + `<tr class="item-model-number row-select"><td align="left" style="width:80px;">${ID} </td>`;
                    tbody = tbody + `<td align="left" style="display:none;" id="item0" Subject_Code="${Subject_count}">${Subject_count}<input id=" " name="subject_code" type="hidden" value="${Subject_count}" /></td>`;
                    tbody = tbody + `<td align="left" valign="middle" style="width:280px" id="item1" Subject_Name=" ${name} "> ${name}</td>`;
                    tbody = tbody + `<td align="left" style="display:none; id="item0" Subject_Code=""> <input id=" " name="subject_code" type="hidden" value="${name}"/>${Subject_count}</td>`;

                    tbody = tbody + `<td align="left"style="display:none; valign="middle" style="width:400px;" id="item3"> ${name}</td>`;
                    tbody = tbody + `<td align="center" valign="middle" style="width:30px;">`
                    tbody = tbody + `<input type="checkbox" value=" ${subject_code} " name = "chksub_${Subject_count}" id = "chksub_${Subject_count}" class="fee"/>
                                         <input type="hidden" id="hfSubject_countlogic_${Subject_count}" value = "${Subject_count}" papertype = "" class="asd" />
                                         <input type="hidden" id="hfsublimit_${Subject_count}" value="${Subject_count}" /><tr>`
                    //tbody += '<td></td>';
                }

            });
            $('#tbl_sub_list_1').append(tbody);
        });
    
}
$(document).on("click", "INPUT[id^=chksub]", function (event) {
    debugger
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

MajorSubject = () => {
    debugger
    const Chklength = $('#divmajor input[type="checkbox"]').length;

    for (var ii = 0; ii < Chklength; ii++) {
        Chkval = $($('#divmajor input[type="checkbox"]:checked')[ii]).val();
        $("#ddl_Minor option[value='" + Chkval + "']").remove();
    }
}
function CheckChecked() {
    debugger;
    var StdCategory = $("select#ddl_StdCategory option:selected").text().trim().replace(/\n/g, " ");
    //var paper_fee = $('.test0').filter(':checked').val();
    //var paper_fee = $('.test0:checked').val();
    var paper_fee = $('.test0:checked').attr('practical_fee');
    if (StdCategory =='Direct Admission') {
        var countCheckedCheckboxes = $('.test0').filter(':checked').length;
        $('.amount').text(countCheckedCheckboxes * paper_fee);
        if (countCheckedCheckboxes > 0) {
            $('.select_papers_error').text("")
            // $('button[type="submit"]').removeAttr("disabled");
        } else {
            $('.select_papers_error').text("Select Papers to proceed.");
            $('button[type="submit"]').attr("disabled", "disabled");
        }

    }
}
$('#ddl_StdCategory').on('change', function () {
    debugger
    var Semester = $("select#ddl_yearpart option:selected").attr('stu-type1');
    var student_type = $("#ddl_StdCategory").val().trim().replace(/\n/g, " ");
    var Fk_Course_Id = $("#ddl_yearpart").val().trim().replace(/\n/g, " ");
    $.ajax({
        type: "get",
        url: "/Home/Bind_Fee",
        data: { "Fk_Id": Fk_Course_Id, "student_type": student_type, "Semester": Semester },
        dataType: "json",
        success: function (response) {
            debugger
            var obj = JSON.parse(response)
            
            //$("#ddlTeachers").append('<option value="">SELECT</option>')
            
            $("#fee_view").append('<input type="hidden" value="' + obj.Table[0]['dddd'] + '" id="hidden_fee" />')
            

        },
        complete: function () {

        }
    });
});

function Convert_Hindi(EnglishText) {
    $.ajax({
        type: "POST",
        url: 'https://www.google.com/inputtools/request?ime=transliteration_en_hi&text=' + EnglishText.value,
        dataType: "json",
        success: function (data) {
            if (EnglishText.id == "txtStudentName") { document.getElementById("txtStudentNameHindi").value = data[1][0][1]; }
            if (EnglishText.id == "txtFatherName") { document.getElementById("txtFatherName_hindi").value = data[1][0][1]; }
            if (EnglishText.id == "txtMotherName") { document.getElementById("txtMotherName_hindi").value = data[1][0][1]; }
        },
        error: function () {
            return true; console.log("Hindi Translation cannot be done.");
        }
    });

}
//**//**//
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

function BindMinorSub() {
    $("#ddl_Minor").empty();
    debugger;
    $("#ddl_Minor").empty();
    var Fk_Course_ID = $("#ddl_yearpart").val();

    $.ajax({
        type: "get",
        url: "/Home/BindMinorSubject",
        data: { "Fk_Id": Fk_Course_ID },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddl_Minor").empty();
            $("#ddl_Minor").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddl_Minor").append('<option value="' + obj.Table[i]['subject_code'] + '">' + obj.Table[i]['Subject_Name'] + '</option>')
            }

        },
        complete: function () {

        }
    })
}


$('#find_stu_dtl').click(function () {
    debugger
    var Form_No = $('#Form_number').val();
    debugger;

    var Session = $('#ddl_Session').val();

    window.location = "/Home/Get_Student_Dtl?Form_No=" + Form_No + "";
    });






function BindVocational() {
    debugger;
    $("#ddl_Vocational").empty();
    var Fk_Course_ID = $("#ddl_yearpart").val();

    $.ajax({
        type: "get",
        url: "/Home/BindVocational",
        data: { "Fk_Id": Fk_Course_ID },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddl_Vocational").empty();
            $("#ddl_Vocational").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddl_Vocational").append('<option value="' + obj.Table[i]['SUBJECT_CODE'] + '">' + obj.Table[i]['SUBJECT_NAME'] + '</option>')
            }

        },
        complete: function () {

        }
    })
}





function BindCoCurricular() {
    debugger;
    $("#ddl_CoCurricular").empty();
    var Fk_Course_ID = $("#ddl_yearpart").val();

    $.ajax({
        type: "get",
        url: "/Home/BindCoCurricular",
        data: { "Fk_Id": Fk_Course_ID },
        dataType: "json",
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddl_CoCurricular").empty();
            $("#ddl_CoCurricular").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddl_CoCurricular").append('<option value="' + obj.Table[i]['SUBJECT_CODE'] + '">' + obj.Table[i]['SUBJECT_NAME'] + '</option>')
            }

        },
        complete: function () {

        }
    })
}







