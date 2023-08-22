$("#ddl_CType").change(function () {

    Bindcourse();

    //var ct = $("#ddl_CType")
    //if (ct == 2) {
    //    alert("aaa")
    //    $("#divminor").hide();
    //    $("#divSub3").hide();
    //    $("#divSub4").hide();
    //}
    //else {

    //    $("#divminor").show();
    //    $("#divSub3").show();
    //    $("#divSub4").show();
    //}
});


$('#ddlCourse').change(function () {
    bind_subjectVocational();
    BindSemester();
    BindMinorSub();
});

$("#ddl_yearpart").change(function () {
    bind_subjectMajor();
});

Shikha
$(document).ready(function () {
    $('.allow-file-preview td a').attr('disabled', true);
    $('.allow-file-preview td input[type="file"]').change(function (ev) {
        const input = ev.currentTarget
        const tr = input.closest('tr')
        const a = $(tr).find('td a')
        if (input.files.length > 0) {
            a.removeAttr('disabled')
        } else {
            a.attr('disabled', true)
        }
    })

    $('.allow-file-preview td a').click(function (ev) {
        debugger;
        ev.originalEvent.preventDefault();
        const target = ev.currentTarget
        const tr = target.closest('tr')
        const input = $(tr).find('td input[type="file"]')[0];

        openFilePreview(input.files[0])
    })
})
End


function openFilePreview(file) {
    if (file == null) return;

    const url = URL.createObjectURL(file)
    const a = document.createElement('a')
    a.href = url;
    a.setAttribute('target', '_blank')
    a.click();

}


//function showpreview(input) {
//    if (input.files && input.files[0]) {
//        var reader = new FileReader();
//        reader.onload = function (e) {
//            $('#photo').attr('src', e.target.result);
//        }
//        reader.readAsDataURL(input.files[0]);
//    }
//}

function readPhoto(input) {
    var imageDate = input;
    var FileUploadPath = imageDate.value;
    var Extension = FileUploadPath.substring(FileUploadPath.lastIndexOf('.') + 1).toLowerCase();
    if (Extension == "jpeg" || Extension == "jpg" || Extension == "png") {
        if (input.files[0].size > 21000) {
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


function showpreview1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#ImgCard1').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function () {
    var nowY = new Date().getFullYear(),
        options = "";

    for (var Y = nowY; Y >= 1980; Y--) {
    for (var Y = 2005; Y <= nowY; Y++) {
        options += "<option>" + Y + "</option>";
    }
    $("#ddlSecYear").html(options);
    $("#txtHSYear").append(options);
    alert("hellooo");
});


$("#txtHSYear, #txtIMYear").on("keyup", function () {
    var _txt1 = $('#txtHSYear').val();
    var _txt2 = $('#txtIMYear').val();
    if (_txt2 < _txt1) {
        alert('Passing year not correct!');
        $('#txtHSYear').val("");
        $('#txtIMYear').val("");
        return true;
    }
});



$(function () {
    $("#txtIMObtained, #txtIMMarks").on("keyup", function () {
        var max = $("#txtIMObtained").val();
        var min = $("#txtIMMarks").val();
        if (Number(min) > Number(max)) {
            alert("12th Obtain Marks should be less than Total Marks");
            $('#txtIMObtained').val("");
            $('#txtIMMarks').val("");
            return true;
        }
    })
});

$(function () {
    $("#txtOtherMarksObtain, #txtOtherMaxMarks").on("keyup", function () {
        var max = $("#txtOtherMarksObtain").val();
        var min = $("#txtOtherMaxMarks").val();
        if (Number(min) > Number(max)) {
            alert("Graduation Obtain Marks should be less than Total Marks");
            $('#txtOtherMarksObtain').val("");
            $('#txtOtherMaxMarks').val("");
            return true;
        }
    })
});
$(function () {
    $("#other1obtainmarks, #txtOther1TotalMarks").on("keyup", function () {
        var max = $("#other1obtainmarks").val();
        var min = $("#txtOther1TotalMarks").val();
        if (Number(min) > Number(max)) {
            alert("Other Obtain Marks should be less than Total Marks");
            $('#other1obtainmarks').val("");
            $('#txtOther1TotalMarks').val("");
            return true;
        }
    })
});

function interyear() {
     alert(1)
    var nowY = new Date().getFullYear(),
        options = "";
    $('#txtIMYear').empty();
    var backyearval = parseInt($("#txtHSYear").val()) + 2;
     alert(backyearval);
    for (var t = backyearval; t <= nowY; t++) {
        options += "<option>" + t + "</option>";
    }
     $("#ddlSRSecYear").html(options);
    $("#txtIMYear").append(options);
}

function Graduationyear() {
     alert(1)
    var nowY = new Date().getFullYear(),
        options = "";
    $('#txtOtherPassYear').empty();
    var backyearval = parseInt($("#txtIMYear").val()) + 3;
     alert(backyearval);
    for (var t = backyearval; t <= nowY; t++) {
        options += "<option>" + t + "</option>";
    }
    $("#txtOtherPassYear").append(options);
}

function PostGraduationyear() {
     alert(1)
    var nowY = new Date().getFullYear(),
        options = "";
    $('#txtOther1PassYear').empty();
    var backyearval = parseInt($("#txtOtherPassYear").val()) + 3;
     alert(backyearval);
    for (var t = backyearval; t <= nowY; t++) {
        options += "<option>" + t + "</option>";
    }
    $("#txtOther1PassYear").append(options);
}

function BindDistrict() {
    debugger;
    $("#ddlDistrict").empty();
    var dataobject = {
        state: $("#ddlState").val(),
    };
    $.ajax({
        url: "/Master/Bind_District",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''>Please Select District</option>";
            if (r != null) {
                var arraycourse = r;
                for (var i = 0; i < arraycourse.length; i++) {
                    options += '<option value="' + arraycourse[i].Value + '">' + arraycourse[i].Text + '</option>';
                }
                $('#ddlDistrict').html(options);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Please Check values Entered by you !!!');

        }
    });
}


function Bindcourse() {
    debugger;
    $("#ddlCourse").empty();   
    var FK_CType = $("#ddl_CType").val();
        $.ajax({
        url: "/home/Bind_Course",
        type: "POST",
        contentType: false,
        processData: false,
     //   data: JSON.stringify(dataobject),
            data: { "FK_CType": FK_CType },
        success: function (response) {
            var obj = JSON.parse(response)
            $("#ddl_Course").empty();
            $("#ddl_Course").append('<option value="">SELECT</option>')
            for (var i = 0; i < obj.Table.length; i++) {
                $("#ddl_Course").append('<option value="' + obj.Table[i]['course_code'] + '">' + obj.Table[i]['Course_Name'] + '</option>')
            }

        },
        complete: function () {

        }
    })
};




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
};

function BindMajorMinerPaper() {
    $("#ddl_Minor").empty();
    var dataobject = {
        courseid: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/getMinerpaperByProgramId",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value =''>Please Select Miner Papers *</option>";
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

function BindVocatioanl() {
    debugger;
    $("#ddl_Vocational").empty();
    var dataobject = {
        fk_course_id: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/Bind_Vocatioanl",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''> Select Vocational Subject </option>";
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

function BindCoCurricular() {
    debugger;
    $("#ddl_CoCurricular").empty();
    var dataobject = {
        fk_course_id: $("#ddlCourse").val(),
    };
    $.ajax({
        url: "/Master/Bind_CoCurricular",
        type: "POST",
        contentType: false,
        processData: false,
        data: JSON.stringify(dataobject),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (r) {
            var options = "";
            options = options + "<option value=''> Select Co-Curricular Subject </option>";
            if (r != null) {
                var arraycourse = r;
                for (var i = 0; i < arraycourse.length; i++) {
                    options += '<option value="' + arraycourse[i].Value + '">' + arraycourse[i].Text + '</option>';
                }
                $('#ddl_CoCurricular').html(options);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert('Please Check values Entered by you !!!');

        }
    });
}

function bind_subjectMajor() {
    $('#tbl_sub_list_1').empty();
    var course = $('#ddl_yearpart').val();
    $.get("/Master/Select_college_subject",
        { course_id: course },
        function (response) {
            $('#tbl_sub_list_1').empty();
            var tbody = '';
            $.each(JSON.parse(response), function () {
                $("#max_subject").val(this['Subject_count']);
                var Subject_count = this['Subject_count'];
                var hash = this['subject_code'];

                var name = this['Subject_Name'];

                if (this['Is_Active'] == true) {
                    tbody += '<div class="col-md-4" style="font-weight:bold;"><label id = "lbl-' + hash + '" for= "checkbox-' + hash + '" "#Major' + '"> ' + name + '</label ></div>';
                    tbody += '<div class="custom-control custom-checkbox col-md-1">' + '<input type="checkbox" name="chksub_' + Subject_count + '" id="chksub_' + Subject_count + '" value="' + this['subject_code'] + '"  />' + '</div>';
                    tbody += '<td><input name="Subject_count" type="hidden" id="hfSubject_countlogic_' + Subject_count + '" value="' + Subject_count + '" /><input type="hidden" id="hfsublimit_' + Subject_count + '" value="' + Subject_count + '" /></td>';
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

MajorSubject = () => {
    debugger
    const Chklength = $('#divmajor input[type="checkbox"]').length;

    for (var ii = 0; ii < Chklength; ii++) {
        Chkval = $($('#divmajor input[type="checkbox"]:checked')[ii]).val();
        $("#ddl_Minor option[value='" + Chkval + "']").remove();
    }
}
















if (CourseName == null || CourseName == "" || CourseName == undefined) {
        alertify.alert("Please select Course Name");
        $("#ddlcourse").focus();
        return false;
    }

    if (yearpart == null || yearpart == "" || yearpart == undefined) {
        alertify.alert("Please Select Year/SEM ");
        $('#ddl_yearpart').focus();
        return false;
    }
    if (Category == null || Category == "" || Category == undefined) {
        alertify.alert("Please Select Category ");
        $('#ddl_Category').focus();
        return false;
    }
    if (StudentCategory == null || StudentCategory == "" || StudentCategory == undefined) {
        alertify.alert("Please Select StudentCategory ");
        $('#ddl_StdCategory').focus();
        return false;
    }
    if (studentname == null || studentname == "" || studentname == undefined) {
        alertify.alert("Please Enter Student Name");
        $("#txtStudentName").focus();
        return false;
    }
    if (studentname.length <= 3) {
        alertify.alert("Studentname should be at least three");
        $("#txtStudentName").focus();
        return false;
    }
    if (Fathername == null || Fathername == "" || Fathername == undefined) {
        alertify.alert("Please Enter Father Name");
        $("#txtFatherName").focus();
        return false;
    }
    if (Fathername.length <= 3) {
        alertify.alert("FatherName should be at least three");
        $("#txtFatherName").focus();
        return false;
    }
    if (mname == null || mname == "" || mname == undefined) {
        alert("Please Enter Mother's Name");
        $("#txtMotherName").focus();
        return false;
    }
    if (mname.length <= 3) {
        alert("Mothername should be at least three");
        $("#txtMotherName").focus();
        return false;
    }
    if (gender == null || gender == "" || gender == undefined) {
        alert("Please select Gender");
        $("#ddl_Gender").focus();
        return false;
    }
    if (religion == null || religion == "" || religion == undefined) {
        alert("Please select Religion");
        $("#ddlReligion").focus();
        return false;
    }
    if (mobile == null || mobile == "" || mobile == undefined) {
        alert("Please fill mobile  number");
        $("#txtMobileNo").focus();
        return false;
    }
    if (mobile[0] < 6) {
        alert("Mobile start greater than five ");
        $("#txtMobileNo").focus();
        return false;
    }
    if (mobile.length != 10) {
        alert("Mobile should 10 digit only");
        $("#txtMobileNo").focus();
        return false;
    }
    if (aadhar == null || aadhar == "" || aadhar == undefined) {
        alert("Please fill Aadhar  number");
        $("#txtAadharNo").focus();
        return false;
    }
    if (aadhar.length != 12) {
        alert("Aadhar should 12 digit only");
        $("#txtAadharNo").focus();
        return false;
    }
    if (email == "") {
        alert("Email fill properly ");
        $("#txtEmailID").focus();
        return false;
    }
    if (dob == null || dob == "" || dob == undefined) {
        alert("Please fill Date of Birth");
        $("#txtDob").focus();
        return false;
    }
    if (nationality == null || nationality == "" || nationality == undefined) {
        alert("Please select Nationality");
        $("#txtNationality").focus();
        return false;
    }  
    