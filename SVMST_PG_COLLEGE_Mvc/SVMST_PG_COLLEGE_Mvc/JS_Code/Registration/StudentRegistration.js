
$("#btnsubmit").click(function () {
    debugger;
    var hidden_fee = parseInt($("#hidden_fee").val());
    var fee_amount = parseInt($("#amount").text());
    if (fee_amount = 'NaN') {
        var fee_amount1 = parseInt('0');
    }
    else {
        var fee_amount1 = parseInt($("#amount").text());
    }
    var totel_fee = hidden_fee + fee_amount1;
    //alert(totel_fee)
    var Fk_Course_Id = $("#ddl_yearpart").val();
    var Course = $("select#ddlCourse option:selected").text();
    var Course_Type = $("select#ddl_CType option:selected").text();
    var Course_ID = $("select#ddlCourse option:selected").val();
    var Yearpart = $("select#ddl_yearpart option:selected").text();
    var Category = $("select#ddl_Category option:selected").text();
    var StdCategory = $("select#ddl_StdCategory option:selected").text()
    var Teachers = $("select#ddlTeachers option:selected").text();
    var StudentName = $("#txtStudentName").val();
    var StudentName_Hindi = $("#txtStudentNameHindi").val();
    var FatherName = $("#txtFatherName").val();
    var FatherName_Hindi = $("#txtFatherName_hindi").val();
    var MotherName = $("#txtMotherName").val();
    var MotherName_Hindi = $("#txtMotherName_hindi").val();
    var gender = $("#ddl_Gender").val();
    //  var Religion = $("#ddlReligion").val().trim().replace(/\n/g, " ");
    var Religion = $("#ddl_Religion").val();
    var MobileNo = $("#txtMobileNo").val();
    var AadharNo = $("#txtAadharNo").val();
    var userinput = $("#txtEmailID").val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if (!pattern.test(userinput)) {
        alertify.alert('not a valid e-mail address');
        return false;
    }
    else {
        // var EmailID = $("#txtEmailID").val().trim().replace(/\n/g, " ");
        var EmailID = $("#txtEmailID").val();
    }
    // var Nationality = $("#txtNationality").val().trim().replace(/\n/g, " ");
    var Nationality = $("#ddl_Nationality").val();
    var FamilyIncome = $("#txtFamilyIncome").val();
    var Whatsapp_no = $("#txtwpno").val();
    var EWS_No = $("#txtewsno").val();
    var Abc_id = $("#txtabcid").val();
    var dob = $('#txtDob').text();
    //var dob = $().datepicker()
    //var txtMarks = $("#txtMarks").val();
    //10th
    var HSExamination = $("#txtHSExamination").val();
    var HSYear = $("#txtHSYear").val();
    var HSRollNo = $("#txtHSRollNo").val();
    var HSCollege = $("#txtHSCollege").val();
    var HSSub = $("#txtHSSub").val();
    var HSObtain = $("#txtHSObtain").val();
    var HSTotalMarks = $("#txtHSTotalMarks").val();
    //12th
    var IMExamination1 = $("#txtIMExamination").val();
    var IMYear = $("#txtIMYear").val();
    var IMRollNo = $("#txtIMRollNo").val();
    var IMCollege = $("#txtIMCollegeName").val();
    var IMSub = $("#txtIMSub").val();
    var IMObtain = $("#txtIMObtained").val();
    var IMTotalMarks = $("#txtIMMarks").val();

    var ExamName_PG = $("#txtPGExamination").val();
    var PassingYear_PG = $("#txtPGYear").val();
    var College_PG = $("#txtPGRollNo").val();//roll
    var Board_PG = $("#txtPGCollege").val();
    var Percenatge_PG = $("#txtPGTotalMarks").val();//sub
    var ObtMarks_PG = $("#txtPGObtain").val();
    var MaxMarks_PG = $("#txtPGTotalMarks").val();
    // UG OtherExamName
    var ExamName_UG = $("#txtOtherExamName").val();
    var PassingYear_UG = $("#txtOtherPassYear").val();
    var RollNo_UG = $("#txtOtherRollno").val();
    var Board_UG = $("#txtOtherCollegeName").val();
    var Subject_UG = $("#txtGDSub").val();
    var ObtMarks_UG = $("#txtOtherMarksObtain").val();
    var MaxMarks_UG = $("#txtOtherMaxMarks").val();
    //Other1ExamName
    var Other1ExamName = $("#txtOther1ExamName").val();
    var Other1PassYear = $("#txtOther1PassYear").val();
    var Other1RollNo = $("#txtOther1RollNo").val();
    var Other1College = $("#txtOther1PassCollegeName").val();
    var Other1Sub = $("#txtOTSub").val();
    var Other1Obtain = $("#other1obtainmarks").val();
    var Other1TotalMarks = $("#txtOther1TotalMarks").val();

    var HouseNo = $("#txtHouseNo").val();
    var PostOffice = $("#txtPostOffice").val();
    var State = $("select#ddlState option:selected").text();
    var District = $("select#ddlDistrict option:selected").text();
    var Pin = $("#txtPin").val();



    var strsub;
    //alert(data);
    //var id;
    $('.row-select input:checked').each(function () {

        //strsub = strsub +
        strsub = strsub + $(this).closest('tr').find('td:eq(1)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(2)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(3)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(4)').text().trim() + '#';
        strsub = strsub + 'Major#';
        strsub = strsub + $(this).closest('tr').find('td:eq(6)').text().trim() + '@';
    })
    if (Course_Type == 'Under Graduate' & $("#ddl_Minor option:selected").val() != "") {
        strsub = strsub + '0' + '#' + $("#ddl_Minor option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_Minor option:selected").text().trim()
            + '#' + 'Minor' + '#' + $("#ddl_Minor").val() + '#' + '@';

        strsub = strsub + '0' + '#' + $("#ddl_CoCurricular option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_CoCurricular option:selected").text().trim()
            + '#' + 'Co-Carricular' + '#' + $("#ddl_CoCurricular").val() + '#' + '@';

        strsub = strsub + '0' + '#' + $("#ddl_Vocational option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_Vocational option:selected").text().trim()
            + '#' + 'Vocational' + '#' + $("#ddl_Vocational").val().trim().replace(/\n/g, " ") + '#' + '@';
    }

    file_Upload("file_Photo", "hidden_Photo_Path", GetUniqueFileName() + ".jpg", "/Student_Photo/Photo/");
    file_Upload("file_Sign", "hidden_Sign_Path", GetUniqueFileName() + ".jpg", "/Student_Photo/Sign/");
    if ($("#hidden_Photo_Path").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    if ($("#hidden_Sign_Path").val() == "") { $("#file_Sign").focus(); alertify.alert("Please upload Signature!"); return false; }
    var photo = $('#hidden_Photo_Path').val();
    var sign = $('#hidden_Sign_Path').val();
    //  var photo = 'https://Svm..com' + $('#hidden_Photo_Path').val().replace('~', "");
    //  var sign = 'https://Svm..com' + $('#hidden_Sign_Path').val().replace('~', "");
    file_Upload("file_Photo", "hidden_Photo_Path1", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/10th");
    if ($("#hidden_Photo_Path1").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    var photo10 = $('#hidden_Photo_Path1').val();

    file_Upload("file_Photo", "hidden_Photo_Path2", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/12th");
    if ($("#hidden_Photo_Path2").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    var photo12 = $('#hidden_Photo_Path2').val();
    file_Upload("file_Photo", "hidden_Photo_Path3", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/Aadhar");
    if ($("#hidden_Photo_Path3").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    var Aadhar_Photo = $('#hidden_Photo_Path3').val();
    file_Upload("file_Photo", "hidden_Photo_Path4", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/Cast_Certificate");
    if ($("#hidden_Photo_Path4").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    var Cast_Certificate = $('#hidden_Photo_Path4').val();
    file_Upload("file_Photo", "hidden_Photo_Path5", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/TC_Documents");
    if ($("#hidden_Photo_Path5").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    var TC_Documents = $('#hidden_Photo_Path5').val();

    if (Course == null || Course == "" || Course == undefined) {
        alertify.alert("Please select Course Name");
        $("#ddlcourse").focus();
        return false;
    }

    if (Yearpart == null || Yearpart == "" || Yearpart == undefined) {
        alertify.alert("Please Select Year/SEM ");
        $('#ddl_yearpart').focus();
        return false;
    }
    if (Category == null || Category == "" || Category == undefined) {
        alertify.alert("Please Select Category ");
        $('#ddl_Category').focus();
        return false;
    }
    
    if (StudentName == null || StudentName == "" || StudentName == undefined) {
        alertify.alert("Please Enter Student Name");
        $("#txtStudentName").focus();
        return false;
    }
    //if (studentname.length <= 3) {
    //    alertify.alert("Studentname should be at least three");
    //    $("#txtStudentName").focus();
    //    return false;
    //}
    if (FatherName == null || FatherName == "" || FatherName == undefined) {
        alertify.alert("Please Enter Father Name");
        $("#txtFatherName").focus();
        return false;
    }
    //if (Fathername.length <= 3) {
    //    alertify.alert("FatherName should be at least three");
    //    $("#txtFatherName").focus();
    //    return false;
    //}
    if (MotherName == null || MotherName == "" || MotherName == undefined) {
        alert("Please Enter Mother's Name");
        $("#txtMotherName").focus();
        return false;
        }
        //if (mname.length <= 3) {
        //    alert("Mothername should be at least three");
        //    $("#txtMotherName").focus();
        //    return false;
        //}
        if (gender == null || gender == "" || gender == undefined) {
            alert("Please select Gender");
            $("#ddl_Gender").focus();
            return false;
        }
        if (Religion == null || Religion == "" || Religion == undefined) {
            alert("Please select Religion");
            $("#ddl_Religion").focus();
            return false;
        }
        if (MobileNo == null || MobileNo == "" || MobileNo == undefined) {
            alert("Please fill mobile  number");
            $("#txtMobileNo").focus();
            return false;
        }
        //if (mobile[0] < 6) {
        //    alert("Mobile start greater than five ");
        //    $("#txtMobileNo").focus();
        //    return false;
        //}
        if (MobileNo.length != 10) {
            alert("Mobile should 10 digit only");
            $("#txtMobileNo").focus();
            return false;
        }
        if (AadharNo == null || AadharNo == "" || AadharNo == undefined) {
            alert("Please fill Aadhar  number");
            $("#txtAadharNo").focus();
            return false;
        }
        if (AadharNo.length != 12) {
            alert("Aadhar should 12 digit only");
            $("#txtAadharNo").focus();
            return false;
        }

        if (EmailID == "") {
            alert("Email fill properly ");
            $("#txtEmailID").focus();
            return false;
        }


        //if (dob == null || dob == "" || dob == undefined) {
        //    alert("Please fill Date of Birth");
        //    $("#txtDob").focus();
        //    return false;
        //}




        if (Nationality == null || Nationality == "" || Nationality == undefined) {
            alert("Please select Nationality");
            $("#ddl_Nationality").focus();
            return false;
        }
   
    $.ajax({
        type: "Post",
        url: "/Home/InsertStudentRegistration",
        data: {
            "Course_Type": Course_Type.trim(),
            "CourseName": Course.trim(),
            "Course_ID": Course_ID,
            "Next_Course_Details": Yearpart,
            "Fk_Course_Id": Fk_Course_Id,
            "Student_Type": StdCategory,
            "EnrollmentNo": Fk_Course_Id,
            "RollNo": Fk_Course_Id,
            "Student_Name_English": StudentName,
            "Student_Name_Hindi": StudentName_Hindi,
            "Teachers_Name": Teachers,
            "Father_Name_English": FatherName,
            "Father_Name_Hindi": FatherName_Hindi,
            "Mother_Name_English": MotherName,
            "Mother_Name_Hindi": MotherName_Hindi,
            "DOB": dob,
            "Gender": gender,
            "Category": Category,
            "SubCategory": StdCategory,
            "Religion": Religion,
            "MobileNo": MobileNo,
            "EmailID": EmailID.trim(),
            "Aadhar": AadharNo,
            "FamilyIncome": FamilyIncome,
            "Whatsapp_No": Whatsapp_no,
            "EWS_No": EWS_No,
            "ExamName_10th": HSExamination,
            "PassingYear_10th": HSYear,
            "RollNo_10th": HSRollNo,
            "Board_10th": HSCollege,
            "SUBJECT_10th": HSSub,
            "ObtMarks_10th": HSObtain,
            "MaxMarks_10th": HSTotalMarks,
            "ExamName_12th": IMExamination1,
            "PassingYear_12th": IMYear,
            "RollNo_12th": IMRollNo,
            "Board_12th": IMCollege,
            "SUBJECT_12th": IMSub,
            "ObtMarks_12th": IMObtain,
            "MaxMarks_12th": IMTotalMarks,
            "ExamName_PG": ExamName_PG,
            "PassingYear_PG": PassingYear_PG,
            "College_PG": College_PG,//roll
            "Board_PG": Board_PG,
            "Percenatge_PG": Percenatge_PG,//sub
            "ObtMarks_PG": ObtMarks_PG,
            "MaxMarks_PG": MaxMarks_PG,
            "ExamName_Other": Other1ExamName,
            "PassingYear_Other": Other1PassYear,
            "College_Other": Other1RollNo,//roll
            "Board_Other": Other1College,
            "Percenatge_Other": Other1Sub,//sub
            "ObtMarks_Other": Other1Obtain,
            "MaxMarks_Other": Other1TotalMarks,
            "State": State,
            "ExamName_UG": ExamName_UG ,
            "PassingYear_UG": PassingYear_UG,
            "RollNo_UG": RollNo_UG,
            "Board_UG": Board_UG,
            "Subject_UG": Subject_UG,
            "ObtMarks_UG": ObtMarks_UG,
            "MaxMarks_UG": MaxMarks_UG,

            "Nationality": Nationality,
            "College_Name": FamilyIncome,
            "PK_SUB_Paper": strsub,
            "Form_No": FamilyIncome.trim(),

            "Student_Address": HouseNo.trim().replace(/\n/g, " "),
            "DistrictCity": District,
            "PinCode": Pin,
            "College_Code": PostOffice,
            //"Examintion_Name": IMExamination.trim().replace(/\n/g, " "),
            "Student_Photo": photo,
            "Student_Signature": sign,
            "UploadDoc_10th": photo10,
            "UploadDoc_12th": photo12,
            "Upload_Adhaar": Aadhar_Photo,
            "Upload_TC": TC_Documents,
            "Upload_CC": Cast_Certificate,
            "totel_fee": totel_fee,
            "Abc_id": Abc_id,

        },
        dataType: "json",
        success: function (response) {

            debugger;

            //alert('Form have been Submitted.Candidate Form No: -' + obj.Table[0]['Column2'] + '' + ' Print & Submit it into College...')

            //window.location = ('/Home/Student_Print?Form_No=' + obj.Table[0]['Column2'] + "&Session=" + Session + "")
            var obj = JSON.parse(response)
            var Session = "2022-2023"
            alert('Form have been Submitted.Candidate Form No: -' + obj.Table[0]['Form_No'] + '' + ' Print & Submit it into College...')
            //  alert('Form have been Submitted.Candidate')
            //alert('Form have been Submitted.')

            window.location = ('/Home/Student_Print?Form_No=' + obj.Table[0]['Form_No'] + "&Session=" + Session + "")

        }
    });

});

$("#Edit_submit").click(function () {
    debugger;
    var hidden_fee = parseInt($("#hidden_fee").val());
    var fee_amount2 = parseInt($("#amount").text());
    if (fee_amount2 = 'NaN') {
        var fee_amount1 = parseInt('0');
    }
    else {
        var fee_amount1 = parseInt($("#amount").text());
    }
    var totel_fee = hidden_fee + fee_amount1;
    //alert(totel_fee)
    var Fk_Course_Id = $("#ddl_yearpart").val();
    var Course = $("select#ddlCourse option:selected").text();
    var Course_Type = $("select#ddl_CType option:selected").text();
    var Course_ID = $("select#ddlCourse option:selected").val();
    var Yearpart = $("select#ddl_yearpart option:selected").text();
    var Category = $("select#ddl_Category option:selected").text();
    var StdCategory = $("select#ddl_StdCategory option:selected").text()
    var Teachers = $("select#ddlTeachers option:selected").text();
    var StudentName = $("#txtStudentName").val();
    var StudentName_Hindi = $("#txtStudentNameHindi").val();
    var FatherName = $("#txtFatherName").val();
    var FatherName_Hindi = $("#txtFatherName_hindi").val();
    var MotherName = $("#txtMotherName").val();
    var MotherName_Hindi = $("#txtMotherName_hindi").val();
    var gender = $("#ddl_Gender").val();
    //  var Religion = $("#ddlReligion").val().trim().replace(/\n/g, " ");
    var Religion = $("#ddl_Religion").val();
    var MobileNo = $("#txtMobileNo").val();
    var AadharNo = $("#txtAadharNo").val();
    var userinput = $("#txtEmailID").val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

    if (!pattern.test(userinput)) {
        alertify.alert('not a valid e-mail address');
        return false;
    }
    else {
        // var EmailID = $("#txtEmailID").val().trim().replace(/\n/g, " ");
        var EmailID = $("#txtEmailID").val();
    }
    // var Nationality = $("#txtNationality").val().trim().replace(/\n/g, " ");
    var Nationality = $("#ddl_Nationality").val();
    var FamilyIncome = $("#txtFamilyIncome").val();
    var Whatsapp_no = $("#txtwpno").val();
    var EWS_No = $("#txtewsno").val();
    var Abc_id = $("#txtabcid").val();
    var dob = $('#txtDob').text();
    //var dob = $().datepicker()
    //var txtMarks = $("#txtMarks").val();
    //10th
    var HSExamination = $("#txtHSExamination").val();
    var HSYear = $("#txtHSYear").val();
    var HSRollNo = $("#txtHSRollNo").val();
    var HSCollege = $("#txtHSCollege").val();
    var HSSub = $("#txtHSSub").val();
    var HSObtain = $("#txtHSObtain").val();
    var HSTotalMarks = $("#txtHSTotalMarks").val();
    //12th
    var IMExamination1 = $("#txtIMExamination").val();
    var IMYear = $("#txtIMYear").val();
    var IMRollNo = $("#txtIMRollNo").val();
    var IMCollege = $("#txtIMCollegeName").val();
    var IMSub = $("#txtIMSub").val();
    var IMObtain = $("#txtIMObtained").val();
    var IMTotalMarks = $("#txtIMMarks").val();

    var ExamName_PG = $("#txtPGExamination").val();
    var PassingYear_PG = $("#txtPGYear").val();
    var College_PG = $("#txtPGRollNo").val();//roll
    var Board_PG = $("#txtPGCollege").val();
    var Percenatge_PG = $("#txtPGTotalMarks").val();//sub
    var ObtMarks_PG = $("#txtPGObtain").val();
    var MaxMarks_PG = $("#txtPGTotalMarks").val();
    // UG OtherExamName
    var ExamName_UG = $("#txtOtherExamName").val();
    var PassingYear_UG = $("#txtOtherPassYear").val();
    var RollNo_UG = $("#txtOtherRollno").val();
    var Board_UG = $("#txtOtherCollegeName").val();
    var Subject_UG = $("#txtGDSub").val();
    var ObtMarks_UG = $("#txtOtherMarksObtain").val();
    var MaxMarks_UG = $("#txtOtherMaxMarks").val();
    //Other1ExamName
    var Other1ExamName = $("#txtOther1ExamName").val();
    var Other1PassYear = $("#txtOther1PassYear").val();
    var Other1RollNo = $("#txtOther1RollNo").val();
    var Other1College = $("#txtOther1PassCollegeName").val();
    var Other1Sub = $("#txtOTSub").val();
    var Other1Obtain = $("#other1obtainmarks").val();
    var Other1TotalMarks = $("#txtOther1TotalMarks").val();

    var HouseNo = $("#txtHouseNo").val();
    var PostOffice = $("#txtPostOffice").val();
    var State = $("select#ddlState option:selected").text();
    var District = $("select#ddlDistrict option:selected").text();
    var Pin = $("#txtPin").val();
    var Form_No1 = $("#form_hiden").val();
    var getuser_ses = $(".getuser_ses").val();
    //alert(getuser_ses)



    var strsub;
    //alert(data);
    //var id;
    $('.row-select input:checked').each(function () {

        //strsub = strsub +
        strsub = strsub + $(this).closest('tr').find('td:eq(1)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(2)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(3)').text().trim() + '#';
        strsub = strsub + $(this).closest('tr').find('td:eq(4)').text().trim() + '#';
        strsub = strsub + 'Major#';
        strsub = strsub + $(this).closest('tr').find('td:eq(6)').text().trim() + '@';
    })
    if (Course_Type == 'Under Graduate' & $("#ddl_Minor option:selected").val() != "") {

        strsub = strsub + '0' + '#' + $("#ddl_Minor option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_Minor option:selected").text().trim()
            + '#' + 'Minor' + '#' + $("#ddl_Minor").val() + '#' + '@';

        strsub = strsub + '0' + '#' + $("#ddl_CoCurricular option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_CoCurricular option:selected").text().trim()
            + '#' + 'Co-Carricular' + '#' + $("#ddl_CoCurricular").val() + '#' + '@';

        strsub = strsub + '0' + '#' + $("#ddl_Vocational option:selected").text().trim().replace(/\n/g, " ") + '#' + $("").text() + '#' + $("#ddl_Vocational option:selected").text().trim()
            + '#' + 'Vocational' + '#' + $("#ddl_Vocational").val().trim().replace(/\n/g, " ") + '#' + '@';
    }

    file_Upload("file_Photo", "hidden_Photo_Path", GetUniqueFileName() + ".jpg", "/Student_Photo/Photo/");
    file_Upload("file_Sign", "hidden_Sign_Path", GetUniqueFileName() + ".jpg", "/Student_Photo/Sign/");
    if ($("#hidden_Photo_Path").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    if ($("#hidden_Sign_Path").val() == "") { $("#file_Sign").focus(); alertify.alert("Please upload Signature!"); return false; }
    var photo = $('#hidden_Photo_Path').val();
    var sign = $('#hidden_Sign_Path').val();
    //  var photo = 'https://Svm..com' + $('#hidden_Photo_Path').val().replace('~', "");
    //  var sign = 'https://Svm..com' + $('#hidden_Sign_Path').val().replace('~', "");
    //file_Upload("file_Photo", "hidden_Photo_Path1", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/10th");
    //if ($("#hidden_Photo_Path1").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    //var photo10 = $('#hidden_Photo_Path1').val();

    //file_Upload("file_Photo", "hidden_Photo_Path2", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/12th");
    //if ($("#hidden_Photo_Path2").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    //var photo12 = $('#hidden_Photo_Path2').val();
    //file_Upload("file_Photo", "hidden_Photo_Path3", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/Aadhar");
    //if ($("#hidden_Photo_Path3").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    //var Aadhar_Photo = $('#hidden_Photo_Path3').val();
    //file_Upload("file_Photo", "hidden_Photo_Path4", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/Cast_Certificate");
    //if ($("#hidden_Photo_Path4").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    //var Cast_Certificate = $('#hidden_Photo_Path4').val();
    //file_Upload("file_Photo", "hidden_Photo_Path5", GetUniqueFileName() + ".jpg", "~/Student_Photo/Student_Document/TC_Documents");
    //if ($("#hidden_Photo_Path5").val() == "") { $("#file_Photo").focus(); alertify.alert("Please upload Photo!"); return false; }
    //var TC_Documents = $('#hidden_Photo_Path5').val();

    if (Course == null || Course == "" || Course == undefined) {
        alertify.alert("Please select Course Name");
        $("#ddlcourse").focus();
        return false;
    }

    if (Yearpart == null || Yearpart == "" || Yearpart == undefined) {
        alertify.alert("Please Select Year/SEM ");
        $('#ddl_yearpart').focus();
        return false;
    }
    if (Category == null || Category == "" || Category == undefined) {
        alertify.alert("Please Select Category ");
        $('#ddl_Category').focus();
        return false;
    }

    if (StudentName == null || StudentName == "" || StudentName == undefined) {
        alertify.alert("Please Enter Student Name");
        $("#txtStudentName").focus();
        return false;
    }
    //if (studentname.length <= 3) {
    //    alertify.alert("Studentname should be at least three");
    //    $("#txtStudentName").focus();
    //    return false;
    //}
    if (FatherName == null || FatherName == "" || FatherName == undefined) {
        alertify.alert("Please Enter Father Name");
        $("#txtFatherName").focus();
        return false;
    }
    //if (Fathername.length <= 3) {
    //    alertify.alert("FatherName should be at least three");
    //    $("#txtFatherName").focus();
    //    return false;
    //}
    if (MotherName == null || MotherName == "" || MotherName == undefined) {
        alert("Please Enter Mother's Name");
        $("#txtMotherName").focus();
        return false;
    }
    //if (mname.length <= 3) {
    //    alert("Mothername should be at least three");
    //    $("#txtMotherName").focus();
    //    return false;
    //}
    if (gender == null || gender == "" || gender == undefined) {
        alert("Please select Gender");
        $("#ddl_Gender").focus();
        return false;
    }
    if (Religion == null || Religion == "" || Religion == undefined) {
        alert("Please select Religion");
        $("#ddl_Religion").focus();
        return false;
    }
    if (MobileNo == null || MobileNo == "" || MobileNo == undefined) {
        alert("Please fill mobile  number");
        $("#txtMobileNo").focus();
        return false;
    }
    //if (mobile[0] < 6) {
    //    alert("Mobile start greater than five ");
    //    $("#txtMobileNo").focus();
    //    return false;
    //}
    if (MobileNo.length != 10) {
        alert("Mobile should 10 digit only");
        $("#txtMobileNo").focus();
        return false;
    }
    if (AadharNo == null || AadharNo == "" || AadharNo == undefined) {
        alert("Please fill Aadhar  number");
        $("#txtAadharNo").focus();
        return false;
    }
    if (AadharNo.length != 12) {
        alert("Aadhar should 12 digit only");
        $("#txtAadharNo").focus();
        return false;
    }

    if (EmailID == "") {
        alert("Email fill properly ");
        $("#txtEmailID").focus();
        return false;
    }


    //if (dob == null || dob == "" || dob == undefined) {
    //    alert("Please fill Date of Birth");
    //    $("#txtDob").focus();
    //    return false;
    //}




    if (Nationality == null || Nationality == "" || Nationality == undefined) {
        alert("Please select Nationality");
        $("#ddl_Nationality").focus();
        return false;
    }

    $.ajax({
        type: "Post",
        url: "/Home/UpdateStudentRegistration",
        data: {
            "Course_Type": Course_Type.trim(),
            "CourseName": Course.trim(),
            "Course_ID": Course_ID,
            "Next_Course_Details": Yearpart,
            "Fk_Course_Id": Fk_Course_Id,
            "Student_Type": StdCategory,
            "EnrollmentNo": Fk_Course_Id,
            "RollNo": Fk_Course_Id,
            "Student_Name_English": StudentName,
            "Student_Name_Hindi": StudentName_Hindi,
            "Teachers_Name": Teachers,
            "Father_Name_English": FatherName,
            "Father_Name_Hindi": FatherName_Hindi,
            "Mother_Name_English": MotherName,
            "Mother_Name_Hindi": MotherName_Hindi,
            "DOB": dob,
            "Gender": gender,
            "Category": Category,
            "SubCategory": StdCategory,
            "Religion": Religion,
            "MobileNo": MobileNo,
            "EmailID": EmailID.trim(),
            "Aadhar": AadharNo,
            "FamilyIncome": FamilyIncome,
            "Whatsapp_No": Whatsapp_no,
            "EWS_No": EWS_No,
            "ExamName_10th": HSExamination,
            "PassingYear_10th": HSYear,
            "RollNo_10th": HSRollNo,
            "Board_10th": HSCollege,
            "SUBJECT_10th": HSSub,
            "ObtMarks_10th": HSObtain,
            "MaxMarks_10th": HSTotalMarks,
            "ExamName_12th": IMExamination1,
            "PassingYear_12th": IMYear,
            "RollNo_12th": IMRollNo,
            "Board_12th": IMCollege,
            "SUBJECT_12th": IMSub,
            "ObtMarks_12th": IMObtain,
            "MaxMarks_12th": IMTotalMarks,
            "ExamName_PG": ExamName_PG,
            "PassingYear_PG": PassingYear_PG,
            "College_PG": College_PG,//roll
            "Board_PG": Board_PG,
            "Percenatge_PG": Percenatge_PG,//sub
            "ObtMarks_PG": ObtMarks_PG,
            "MaxMarks_PG": MaxMarks_PG,
            "ExamName_Other": Other1ExamName,
            "PassingYear_Other": Other1PassYear,
            "College_Other": Other1RollNo,//roll
            "Board_Other": Other1College,
            "Percenatge_Other": Other1Sub,//sub
            "ObtMarks_Other": Other1Obtain,
            "MaxMarks_Other": Other1TotalMarks,
            "State": State,
            "ExamName_UG": ExamName_UG,
            "PassingYear_UG": PassingYear_UG,
            "RollNo_UG": RollNo_UG,
            "Board_UG": Board_UG,
            "Subject_UG": Subject_UG,
            "ObtMarks_UG": ObtMarks_UG,
            "MaxMarks_UG": MaxMarks_UG,

            "Nationality": Nationality,
            "College_Name": FamilyIncome,
            "PK_SUB_Paper": strsub,
            "Form_No": FamilyIncome.trim(),

            "Student_Address": HouseNo.trim().replace(/\n/g, " "),
            "DistrictCity": District,
            "PinCode": Pin,
            "College_Code": PostOffice,
            //"Examintion_Name": IMExamination.trim().replace(/\n/g, " "),
            "Student_Photo": photo,
            "Student_Signature": sign,
            //"UploadDoc_10th": photo10,
            //"UploadDoc_12th": photo12,
            //"Upload_Adhaar": Aadhar_Photo,
            //"Upload_TC": TC_Documents,
            //"Upload_CC": Cast_Certificate,
            "totel_fee": totel_fee,
            "Abc_id": Abc_id,
            "Form_No1": Form_No1,
            "REMARK": getuser_ses

        },
        dataType: "json",
        success: function (response) {

            debugger;

            //alert('Form have been Submitted.Candidate Form No: -' + obj.Table[0]['Column2'] + '' + ' Print & Submit it into College...')

            //window.location = ('/Home/Student_Print?Form_No=' + obj.Table[0]['Column2'] + "&Session=" + Session + "")
            var obj = JSON.parse(response)
            var Session = "2022-2023"
            alert('Form have been Submitted.Candidate Form No: -' + obj.Table[0]['Form_No'] + '' + ' Print & Submit it into College...')
            //  alert('Form have been Submitted.Candidate')
            //alert('Form have been Submitted.')

            window.location = ('/Home/Student_Print?Form_No=' + obj.Table[0]['Form_No'] + "&Session=" + Session + "")

        }
    });

});



function GetUniqueFileName() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

function file_Upload(File_ID, hf_name, File_Name, File_Server_Path) {
    if ($('#' + File_ID + '').length != 0) {
        var File = $('#' + File_ID + '')[0].files;
        if (File.length > 0) {
            $('#' + hf_name + '').val(File_Server_Path + File_Name);
            //Declaring new Form Data Instance  
            var formData = new FormData();
            formData.append("File", File[0]);
            formData.append("File_Name", File_Name);
            formData.append("File_Server_Path", File_Server_Path);

            $.ajax({
                type: "POST",
                url: "/FileUpload_Handler.ashx",
                data: formData,
                async: false,
                contentType: false,
                processData: false,
                beforeSend: function () {
                },
                success: function (response) {
                },
                complete: function () {

                }
            });
        }
    }
}


