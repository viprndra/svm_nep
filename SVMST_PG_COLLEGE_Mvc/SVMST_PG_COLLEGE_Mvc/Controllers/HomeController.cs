using Newtonsoft.Json;
using SVMST_PG_COLLEGE_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_Mvc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Student_Registration()
        {
           // ViewBag.Message = "Your application description page.";

            return View();
        }

        public JsonResult InsertStudentRegistration(NEP_Reg_Model nep, string PK_SUB_Paper, string[] SubjectName1)
        {
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            try
            {

                //C.RegistrationNo = Request.QueryString["regno"].ToString();
                DataTable dtqual = new DataTable();
                dtqual.Columns.Add("SubjectCode");//0
                dtqual.Columns.Add("SubjectName");//1
                dtqual.Columns.Add("PaperType");//2
                dtqual.Columns.Add("PK_SUB_Paper");//3
                dtqual.Columns.Add("Paper");//4
                dtqual.Columns.Add("PaperName");//5
                dtqual.Columns.Add("P_Type");//6
                dtqual.Columns.Add("Credit");//7
                string[] papers = PK_SUB_Paper.Replace("undefined", "").Split(new char[] { '@' });
                foreach (var paper in papers)
                {
                    DataRow row = dtqual.NewRow();
                    string[] pap_dtl = paper.Split(new char[] { '#' });
                    if (pap_dtl.Length > 1)
                    {
                        row[0] = pap_dtl[0];
                        row[1] = pap_dtl[1];
                        row[2] = "";
                        row[3] = pap_dtl[5];
                        row[4] = pap_dtl[2];
                        row[5] = pap_dtl[3];
                        row[6] = pap_dtl[4];
                        row[7] = "";
                    }
                    dtqual.Rows.Add(row);
                }

                dt = dtqual;

                nep.RollNo = Request["rollno"].ToString();

                NEP_Reg_Model db = new NEP_Reg_Model();

                ///////////////////
                string EnrollmentNo = Request.Form["EnrollmentNo"];
                string Course_Type = Request.Form["Course_Type"];
                int Course_ID = Convert.ToInt16(Request.Form["Course_ID"]);
                string CourseName = Request.Form["CourseName"];
                string Year_Part = Request.Form["Next_Course_Details"];
                int Fk_Course_Id = Convert.ToInt32(nep.Fk_Course_Id);
                string Student_Type = Request.Form["Student_Type"];
                string Student_Name_English = Request.Form["Student_Name_English"];
                string Student_Name_Hindi = Request.Form["Student_Name_Hindi"];
                string Father_Name_English = Request.Form["Father_Name_English"];
                string Father_Name_Hindi = Request.Form["Father_Name_Hindi"];
                string Mother_Name_English = Request.Form["Mother_Name_English"];
                string Mother_Name_Hindi = Request.Form["Mother_Name_Hindi"];
                string College_Code = Request.Form["College_Code"];
                string College_Name = Request.Form["College_Name"];
                //DateTime DOB = db.GetDateForDB(Request.Form["DOB"]);
                string DOB = Request.Form["DOB"];
                string Gender = Request.Form["Gender"];
                string Category = Request.Form["Category"];
                string Examintion_Name = Request.Form["Examintion_Name"];
                string RollNo = Request.Form["RollNo"];
                string Student_Address = Request.Form["Student_Address"];
                string Student_Photo = Request.Form["Student_Photo"];
                string Student_Signature = Request.Form["Student_Signature"];
                string MobileNo = Request.Form["MobileNo"];
                string EmailID = Request.Form["EmailID"];
                string Religion = Request.Form["Religion"];
                string SubCategory = Request.Form["SubCategory"];
                //string HouseNo = Request.Form["HouseNo"];
                //string StreetVillage = Request.Form["StreetVillage"];
                string PostOffice = Request.Form["PostOffice"];
                string DistrictCity = Request.Form["DistrictCity"];
                string State = Request.Form["State"];
                string PinCode = Request.Form["PinCode"];
                string Form_No = Request.Form["Form_No"];
                string Nationality = Request.Form["Nationality"];
                string Aadhar = Request.Form["Aadhar"];
                string Teachers_Name = Request.Form["Teachers_Name"];
                string FamilyIncome = Request.Form["FamilyIncome"];
                string Whatsapp_No = Request.Form["Whatsapp_No"];
                string EWS_No = Request.Form["EWS_No"];
                string Abc_Id = Request.Form["ABC_ID"];
                /////////

                string ExamName_10th = Request.Form["ExamName_10th"];
                string Board_10th = Request.Form["Board_10th"];
                string PassingYear_10th = Request.Form["PassingYear_10th"];
                string College_10th = Request.Form["RollNo_10th"];
                string ObtMarks_10th = Request.Form["ObtMarks_10th"];
                string MaxMarks_10th = Request.Form["MaxMarks_10th"];
                string Percenatge_10th = Request.Form["SUBJECT_10th"];

                string ExamName_12th = Request.Form["ExamName_12th"]; ;
                string Board_12th = Request.Form["Board_12th"]; 
                string PassingYear_12th = Request.Form["PassingYear_12th"]; 
                string College_12th = Request.Form["RollNo_12th"]; ;
                string ObtMarks_12th = Request.Form["ObtMarks_12th"]; 
                string MaxMarks_12th = Request.Form["MaxMarks_12th"]; 
                string Percenatge_12th = Request.Form["SUBJECT_12th"]; 

                string ExamName_PG = Request.Form["ExamName_PG"];
                string Board_PG = Request.Form["Board_PG"];
                string PassingYear_PG = Request.Form["PassingYear_PG"];
                string College_PG = Request.Form["College_PG"];
                string ObtMarks_PG = Request.Form["ObtMarks_PG"];
                string MaxMarks_PG = Request.Form["MaxMarks_PG"];
                string Percenatge_PG = Request.Form["Percenatge_PG"];

                string ExamName_Other = Request.Form["ExamName_Other"];
                string Board_Other = Request.Form["Board_Other"];
                string PassingYear_Other = Request.Form["PassingYear_Other"];
                string College_Other = Request.Form["College_Other"];
                string ObtMarks_Other = Request.Form["ObtMarks_Other"];
                string MaxMarks_Other = Request.Form["MaxMarks_Other"];
                string Percenatge_Other = Request.Form["Percenatge_Other"];
                string UploadDoc_10th = Request.Form["UploadDoc_10th"];
                string UploadDoc_12th = Request.Form["UploadDoc_12th"];
                string Upload_Adhaar = Request.Form["Upload_Adhaar"];
                string Upload_TC = Request.Form["Upload_TC"];
                string Upload_CC = Request.Form["Upload_CC"];
                string Code = "";

                nep.Enviomental = "No";
                nep.env_year = "";
                nep.env_rollno = "";
                nep.env_mark = "";

                nep.nation_status = "No";
                nep.nation_year = "";
                nep.nation_rollno = "";
                nep.nation_marks = "";
                /////////
                ///
                nep.EnrollmentNo = EnrollmentNo;
                nep.Course_Type = Course_Type;
                nep.Course_ID = Course_ID;
                nep.CourseName = CourseName;
                nep.Year_Part = Year_Part;
                nep.Fk_Course_Id = Fk_Course_Id;
                nep.Student_Type = Student_Type;
                nep.Student_Name_English = Student_Name_English;
                nep.Student_Name_Hindi = Student_Name_Hindi;
                nep.Father_Name_English = Father_Name_English;
                nep.Father_Name_Hindi = Father_Name_Hindi;
                nep.Mother_Name_English = Mother_Name_English;
                nep.Mother_Name_Hindi = Mother_Name_Hindi;
                nep.College_Code = College_Code;
                nep.College_Name = College_Name;
                nep.DOB = DOB;
                //nep.DOB = Convert.ToDateTime(DOB);
                nep.Gender = Gender;
                nep.Category = Category;
                nep.Examintion_Name = Examintion_Name;

                nep.RollNo = RollNo;
                nep.College_Name = College_Name;
                nep.Total_Marks = MaxMarks_Other;
                nep.Marks_Obtained = ObtMarks_Other;
                nep.Student_Address = Student_Address;
                nep.Student_Photo = Student_Photo;
                nep.Student_Signature = Student_Signature;
                nep.MobileNo = MobileNo;
                nep.EmailID = EmailID;
                nep.Religion = Religion;
                nep.SubCategory = SubCategory;
                //nep.StreetVillage = StreetVillage;
                nep.PostOffice = "";
                nep.DistrictCity = DistrictCity;
                nep.State = State;
                nep.PinCode = PinCode;
                nep.Form_No = Form_No;
                //nep.RollNo = RollNo;
                nep.Nationality = Nationality;
                nep.Aadhar = Aadhar;
                nep.Teachers_Name = Teachers_Name;
                nep.Whatsapp_No = Whatsapp_No;
                nep.EWS_No = EWS_No;
                nep.ABC_ID = Abc_Id;





                //DataSet ds = new DataSet();
                List<NEP_Reg_Model> lstSubject = new List<NEP_Reg_Model>();
                lstSubject = (from DataRow dr in dt.Rows
                              select new NEP_Reg_Model()
                              {
                                  SubjectCode = dr["SubjectCode"].ToString(),
                                  SubjectName = dr["SubjectName"].ToString(),
                                  PaperType = dr["PaperType"].ToString(),
                                  PK_SUB_Paper = dr["PK_SUB_Paper"].ToString(),
                                  Paper = dr["Paper"].ToString(),
                                  PaperName = dr["PaperName"].ToString(),
                                  P_Type = dr["P_Type"].ToString(),
                                  Credit = ""
                              }).ToList();


                ds = db.Insert_Student_Registration
                        ("Insert_Student_Registration", 0,
                        nep.EnrollmentNo,
                        nep.Course_Type,
                       Convert.ToInt32(nep.Course_ID),
                        nep.CourseName,
                         nep.Year_Part,
                       Convert.ToInt32(nep.Fk_Course_Id),
                        nep.Student_Type,
                        nep.Student_Name_English,
                         nep.Student_Name_Hindi,
                        nep.Father_Name_English,
                         nep.Father_Name_Hindi,
                        nep.Mother_Name_English,
                        nep.Mother_Name_Hindi,
                        nep.College_Code,
                        nep.College_Name,
                        nep.DOB,
                        nep.Gender,
                        nep.Category,
                        nep.Examintion_Name,
                        "",
                        nep.RollNo,
                        nep.College_Name,
                        nep.Total_Marks,
                        nep.Marks_Obtained,
                        nep.Student_Address,
                        nep.Student_Photo,
                        nep.Student_Signature,
                        "No",
                        1,
                        Request.UserHostAddress.ToString(),
                        1,
                        Request.UserHostAddress.ToString(),
                        lstSubject,
                        nep.MobileNo,
                        nep.EmailID,
                        nep.Religion,
                        nep.SubCategory,
                        "",
                        "",
                        nep.PostOffice,
                        nep.DistrictCity,
                        nep.State,
                        nep.PinCode,

                     ExamName_10th,
                     Board_10th,
                     PassingYear_10th,
                     College_10th,
                     ObtMarks_10th,
                     MaxMarks_10th,
                     Percenatge_10th,

                     ExamName_12th,
                     Board_12th,
                     PassingYear_12th,
                     College_12th,
                     ObtMarks_12th,
                     MaxMarks_12th,
                     Percenatge_12th,

                     ExamName_PG,
                     Board_PG,
                     PassingYear_PG,
                     College_PG,
                     ObtMarks_PG,
                     MaxMarks_PG,
                     Percenatge_PG,

                     ExamName_Other,
                     Board_Other,
                     PassingYear_Other,
                     College_Other,
                     ObtMarks_Other,
                     MaxMarks_Other,
                     Percenatge_Other,
                     "", Code.ToString(),

                         "", "", "", "", nep.Form_No, "mvc 02062023", "Indian", nep.FamilyIncome, nep.RollNo, 
                   //      nep.Caste.ToLower().Trim() != "other" ? nep.Caste : nep.Caste,
                         nep.Nationality,nep.Aadhar,nep.Teachers_Name,nep.Whatsapp_No,nep.EWS_No,nep.ABC_ID,nep.UploadDoc_10th,nep.UploadDoc_12th,nep.Upload_Adhaar,nep.Upload_TC,nep.Upload_CC, 
                         nep.totel_fee,nep.ExamName_UG, nep.PassingYear_UG, nep.Board_UG,nep.RollNo_UG,nep.Subject_UG,nep.ObtMarks_UG,nep.MaxMarks_UG,nep.Form_No1,nep.REMARK
                        );
            }
            catch
            {
                Exception ex;
            }
            return Json(nep.DataSetToJSON(ds), JsonRequestBehavior.AllowGet);
        }



        public ActionResult Student_Print(NEP_Reg_Model obj)
        {
            obj.QueryType = "Get_Student_ProfileByFormNo";
            ViewBag.test = obj.Session;
            DataSet ds = obj.Printstudentdetails(obj.QueryType, obj.Form_No, obj.Session);
            TempData["TotalStudents1"] = ds;
            return View();
        }

        public ActionResult Get_Student_Dtl(NEP_Reg_Model obj)
        {
            obj.QueryType = "Get_Student_ProfileByFormNo";
            ViewBag.test = obj.Session;
            DataSet ds = obj.Printstudentdetails(obj.QueryType, obj.Form_No, obj.Session);
            TempData["TotalStudents"] = ds;
            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }



        public JsonResult BindCourse(string FK_CType)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.FK_CourseType_ID = FK_CType;
            obj.QueryType = "Get_Course_Particular";
            var item = obj.Bind_Course(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindYearPart(int Fk_Id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.Fk_Course_Id = Fk_Id;
            obj.QueryType = "Get_Course_Details_List";
            var item = obj.Bind_YearPart(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }


        public JsonResult BindTeacher()
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            //  obj.Fk_Course_Id = Fk_Id;
            obj.QueryType = "Bind_Teacher";
            var item = obj.Bind_Teacher(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult Bind_Fee(int Fk_Id, string student_type, string Semester)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.Fk_Course_Id = Fk_Id;
            obj.Student_Type = student_type;
            obj.Semester = Semester;
            obj.QueryType = "Bind_Fee";
            var item = obj.Bind_Fee(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindState()
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            //  obj.Fk_Course_Id = Fk_Id;
            obj.QueryType = "Bind_State";
            var item = obj.Bind_State(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }


      
        public JsonResult BindDistrict(string S_Id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.State = S_Id;
            obj.QueryType = "Bind_District";
            var item = obj.Bind_District(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindMajorSubject(string course_id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            DataTable dt = new DataTable();
            dt = obj.BindMajorPaperbyProgram(course_id, "Proc_Bind_CollegeSubject");
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindMinorSubject(int Fk_Id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.Fk_Course_Id = Fk_Id;
            obj.QueryType = "MinerPaper_Bind";
            var item = obj.Bind_Minor(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindVocational(int Fk_Id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.Fk_Course_Id = Fk_Id;
         //   obj.QueryType = "MinerPaper_Bind";
            var item = obj.Bind_Vocation(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }

        public JsonResult BindCoCurricular(int Fk_Id)
        {
            NEP_Reg_Model obj = new NEP_Reg_Model();
            obj.Fk_Course_Id = Fk_Id;
          //  obj.QueryType = "MinerPaper_Bind";
            var item = obj.Bind_Vocation(obj);
            DataSet DS = new DataSet();
            return Json(obj.DataSetToJSON(item), JsonRequestBehavior.AllowGet);
        }
        public ActionResult UpdateStudentRegistration()
        {
            return View();
        }

        [HttpPost]
            public JsonResult UpdateStudentRegistration(NEP_Reg_Model nep, string PK_SUB_Paper, string[] SubjectName1)
        {
            DataSet ds = new DataSet();
            DataTable dt = new DataTable();
            try
            {

                //C.RegistrationNo = Request.QueryString["regno"].ToString();
                DataTable dtqual = new DataTable();
                dtqual.Columns.Add("SubjectCode");//0
                dtqual.Columns.Add("SubjectName");//1
                dtqual.Columns.Add("PaperType");//2
                dtqual.Columns.Add("PK_SUB_Paper");//3
                dtqual.Columns.Add("Paper");//4
                dtqual.Columns.Add("PaperName");//5
                dtqual.Columns.Add("P_Type");//6
                dtqual.Columns.Add("Credit");//7
                string[] papers = PK_SUB_Paper.Replace("undefined", "").Split(new char[] { '@' });
                foreach (var paper in papers)
                {
                    DataRow row = dtqual.NewRow();
                    string[] pap_dtl = paper.Split(new char[] { '#' });
                    if (pap_dtl.Length > 1)
                    {
                        row[0] = pap_dtl[0];
                        row[1] = pap_dtl[1];
                        row[2] = "";
                        row[3] = pap_dtl[5];
                        row[4] = pap_dtl[2];
                        row[5] = pap_dtl[3];
                        row[6] = pap_dtl[4];
                        row[7] = "";
                    }
                    dtqual.Rows.Add(row);
                }

                dt = dtqual;

                nep.RollNo = Request["rollno"].ToString();

                NEP_Reg_Model db = new NEP_Reg_Model();

                ///////////////////
                string EnrollmentNo = Request.Form["EnrollmentNo"];
                string Course_Type = Request.Form["Course_Type"];
                int Course_ID = Convert.ToInt16(Request.Form["Course_ID"]);
                string CourseName = Request.Form["CourseName"];
                string Year_Part = Request.Form["Next_Course_Details"];
                int Fk_Course_Id = Convert.ToInt32(nep.Fk_Course_Id);
                string Student_Type = Request.Form["Student_Type"];
                string Student_Name_English = Request.Form["Student_Name_English"];
                string Student_Name_Hindi = Request.Form["Student_Name_Hindi"];
                string Father_Name_English = Request.Form["Father_Name_English"];
                string Father_Name_Hindi = Request.Form["Father_Name_Hindi"];
                string Mother_Name_English = Request.Form["Mother_Name_English"];
                string Mother_Name_Hindi = Request.Form["Mother_Name_Hindi"];
                string College_Code = Request.Form["College_Code"];
                string College_Name = Request.Form["College_Name"];
                //DateTime DOB = db.GetDateForDB(Request.Form["DOB"]);
                string DOB = Request.Form["DOB"];
                string Gender = Request.Form["Gender"];
                string Category = Request.Form["Category"];
                string Examintion_Name = Request.Form["Examintion_Name"];
                string RollNo = Request.Form["RollNo"];
                string Student_Address = Request.Form["Student_Address"];
                string Student_Photo = Request.Form["Student_Photo"];
                string Student_Signature = Request.Form["Student_Signature"];
                string MobileNo = Request.Form["MobileNo"];
                string EmailID = Request.Form["EmailID"];
                string Religion = Request.Form["Religion"];
                string SubCategory = Request.Form["SubCategory"];
                //string HouseNo = Request.Form["HouseNo"];
                //string StreetVillage = Request.Form["StreetVillage"];
                string PostOffice = Request.Form["PostOffice"];
                string DistrictCity = Request.Form["DistrictCity"];
                string State = Request.Form["State"];
                string PinCode = Request.Form["PinCode"];
                string Form_No = Request.Form["Form_No"];
                string Nationality = Request.Form["Nationality"];
                string Aadhar = Request.Form["Aadhar"];
                string Teachers_Name = Request.Form["Teachers_Name"];
                string FamilyIncome = Request.Form["FamilyIncome"];
                string Whatsapp_No = Request.Form["Whatsapp_No"];
                string EWS_No = Request.Form["EWS_No"];
                string Abc_Id = Request.Form["ABC_ID"];
                /////////

                string ExamName_10th = Request.Form["ExamName_10th"];
                string Board_10th = Request.Form["Board_10th"];
                string PassingYear_10th = Request.Form["PassingYear_10th"];
                string College_10th = Request.Form["RollNo_10th"];
                string ObtMarks_10th = Request.Form["ObtMarks_10th"];
                string MaxMarks_10th = Request.Form["MaxMarks_10th"];
                string Percenatge_10th = Request.Form["SUBJECT_10th"];

                string ExamName_12th = Request.Form["ExamName_12th"]; ;
                string Board_12th = Request.Form["Board_12th"];
                string PassingYear_12th = Request.Form["PassingYear_12th"];
                string College_12th = Request.Form["RollNo_12th"]; ;
                string ObtMarks_12th = Request.Form["ObtMarks_12th"];
                string MaxMarks_12th = Request.Form["MaxMarks_12th"];
                string Percenatge_12th = Request.Form["SUBJECT_12th"];

                string ExamName_PG = Request.Form["ExamName_PG"];
                string Board_PG = Request.Form["Board_PG"];
                string PassingYear_PG = Request.Form["PassingYear_PG"];
                string College_PG = Request.Form["College_PG"];
                string ObtMarks_PG = Request.Form["ObtMarks_PG"];
                string MaxMarks_PG = Request.Form["MaxMarks_PG"];
                string Percenatge_PG = Request.Form["Percenatge_PG"];

                string ExamName_Other = Request.Form["ExamName_Other"];
                string Board_Other = Request.Form["Board_Other"];
                string PassingYear_Other = Request.Form["PassingYear_Other"];
                string College_Other = Request.Form["College_Other"];
                string ObtMarks_Other = Request.Form["ObtMarks_Other"];
                string MaxMarks_Other = Request.Form["MaxMarks_Other"];
                string Percenatge_Other = Request.Form["Percenatge_Other"];
                string UploadDoc_10th = Request.Form["UploadDoc_10th"];
                string UploadDoc_12th = Request.Form["UploadDoc_12th"];
                string Upload_Adhaar = Request.Form["Upload_Adhaar"];
                string Upload_TC = Request.Form["Upload_TC"];
                string Upload_CC = Request.Form["Upload_CC"];
                string Code = "";

                nep.Enviomental = "No";
                nep.env_year = "";
                nep.env_rollno = "";
                nep.env_mark = "";

                nep.nation_status = "No";
                nep.nation_year = "";
                nep.nation_rollno = "";
                nep.nation_marks = "";
                /////////
                ///
                nep.EnrollmentNo = EnrollmentNo;
                nep.Course_Type = Course_Type;
                nep.Course_ID = Course_ID;
                nep.CourseName = CourseName;
                nep.Year_Part = Year_Part;
                nep.Fk_Course_Id = Fk_Course_Id;
                nep.Student_Type = Student_Type;
                nep.Student_Name_English = Student_Name_English;
                nep.Student_Name_Hindi = Student_Name_Hindi;
                nep.Father_Name_English = Father_Name_English;
                nep.Father_Name_Hindi = Father_Name_Hindi;
                nep.Mother_Name_English = Mother_Name_English;
                nep.Mother_Name_Hindi = Mother_Name_Hindi;
                nep.College_Code = College_Code;
                nep.College_Name = College_Name;
                nep.DOB = DOB;
                //nep.DOB = Convert.ToDateTime(DOB);
                nep.Gender = Gender;
                nep.Category = Category;
                nep.Examintion_Name = Examintion_Name;

                nep.RollNo = RollNo;
                nep.College_Name = College_Name;
                nep.Total_Marks = MaxMarks_Other;
                nep.Marks_Obtained = ObtMarks_Other;
                nep.Student_Address = Student_Address;
                nep.Student_Photo = Student_Photo;
                nep.Student_Signature = Student_Signature;
                nep.MobileNo = MobileNo;
                nep.EmailID = EmailID;
                nep.Religion = Religion;
                nep.SubCategory = SubCategory;
                //nep.StreetVillage = StreetVillage;
                nep.PostOffice = "";
                nep.DistrictCity = DistrictCity;
                nep.State = State;
                nep.PinCode = PinCode;
                nep.Form_No = Form_No;
                //nep.RollNo = RollNo;
                nep.Nationality = Nationality;
                nep.Aadhar = Aadhar;
                nep.Teachers_Name = Teachers_Name;
                nep.Whatsapp_No = Whatsapp_No;
                nep.EWS_No = EWS_No;
                nep.ABC_ID = Abc_Id;





                //DataSet ds = new DataSet();
                List<NEP_Reg_Model> lstSubject = new List<NEP_Reg_Model>();
                lstSubject = (from DataRow dr in dt.Rows
                              select new NEP_Reg_Model()
                              {
                                  SubjectCode = dr["SubjectCode"].ToString(),
                                  SubjectName = dr["SubjectName"].ToString(),
                                  PaperType = dr["PaperType"].ToString(),
                                  PK_SUB_Paper = dr["PK_SUB_Paper"].ToString(),
                                  Paper = dr["Paper"].ToString(),
                                  PaperName = dr["PaperName"].ToString(),
                                  P_Type = dr["P_Type"].ToString(),
                                  Credit = ""
                              }).ToList();


                ds = db.Insert_Student_Registration
                        ("UpdateStudentRegistration", 0,
                        nep.EnrollmentNo,
                        nep.Course_Type,
                       Convert.ToInt32(nep.Course_ID),
                        nep.CourseName,
                         nep.Year_Part,
                       Convert.ToInt32(nep.Fk_Course_Id),
                        nep.Student_Type,
                        nep.Student_Name_English,
                         nep.Student_Name_Hindi,
                        nep.Father_Name_English,
                         nep.Father_Name_Hindi,
                        nep.Mother_Name_English,
                        nep.Mother_Name_Hindi,
                        nep.College_Code,
                        nep.College_Name,
                        nep.DOB,
                        nep.Gender,
                        nep.Category,
                        nep.Examintion_Name,
                        "",
                        nep.RollNo,
                        nep.College_Name,
                        nep.Total_Marks,
                        nep.Marks_Obtained,
                        nep.Student_Address,
                        nep.Student_Photo,
                        nep.Student_Signature,
                        "No",
                        1,
                        Request.UserHostAddress.ToString(),
                        1,
                        Request.UserHostAddress.ToString(),
                        lstSubject,
                        nep.MobileNo,
                        nep.EmailID,
                        nep.Religion,
                        nep.SubCategory,
                        "",
                        "",
                        nep.PostOffice,
                        nep.DistrictCity,
                        nep.State,
                        nep.PinCode,

                     ExamName_10th,
                     Board_10th,
                     PassingYear_10th,
                     College_10th,
                     ObtMarks_10th,
                     MaxMarks_10th,
                     Percenatge_10th,

                     ExamName_12th,
                     Board_12th,
                     PassingYear_12th,
                     College_12th,
                     ObtMarks_12th,
                     MaxMarks_12th,
                     Percenatge_12th,

                     ExamName_PG,
                     Board_PG,
                     PassingYear_PG,
                     College_PG,
                     ObtMarks_PG,
                     MaxMarks_PG,
                     Percenatge_PG,

                     ExamName_Other,
                     Board_Other,
                     PassingYear_Other,
                     College_Other,
                     ObtMarks_Other,
                     MaxMarks_Other,
                     Percenatge_Other,
                     "", Code.ToString(),

                         "", "", "", "", nep.Form_No, "mvc 02062023", "Indian", nep.FamilyIncome, nep.RollNo,
                         //      nep.Caste.ToLower().Trim() != "other" ? nep.Caste : nep.Caste,
                         nep.Nationality, nep.Aadhar, nep.Teachers_Name, nep.Whatsapp_No, nep.EWS_No, nep.ABC_ID, nep.UploadDoc_10th, nep.UploadDoc_12th, nep.Upload_Adhaar, nep.Upload_TC, nep.Upload_CC,
                         nep.totel_fee, nep.ExamName_UG, nep.PassingYear_UG, nep.Board_UG, nep.RollNo_UG, nep.Subject_UG, nep.ObtMarks_UG, nep.MaxMarks_UG,nep.Form_No1,nep.REMARK
                        );
            }
            catch
            {
                Exception ex;
            }
            return Json(nep.DataSetToJSON(ds), JsonRequestBehavior.AllowGet);
        }


    }
}