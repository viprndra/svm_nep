using ABDAL_REGISTRATION;
using Newtonsoft.Json;
using SVMST_PG_COLLEGE_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_Mvc.Controllers
{
    public class AdminController : Controller
    {

        public PropertyClass objP = new PropertyClass();
        public LogicClass objL = new LogicClass();
        clscnSetting dbCon = new clscnSetting();
        PropertyClass cls = new PropertyClass();
        LogicClass obj = new LogicClass();
        DataTable dt = new DataTable();


        // GET: Admin
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult Admin_Login()
        {

            return View();
        }
        [HttpPost]
        public ActionResult Admin_Login(string UserName, string UserPassword)

        {
            DataTable dt = new DataTable();
            try
            {
                SqlParameter[] param = new SqlParameter[3];
                param[0] = new SqlParameter("@Action", "admin_login");
                param[1] = new SqlParameter("@User_Name", UserName);
                param[2] = new SqlParameter("@Password", UserPassword);
                dt = dbCon.ExecProcDataTable("college_admin_login", param);
                if (dt != null && dt.Rows.Count > 0)
                {
                    if (dt.Rows[0]["username"].ToString().Trim() == UserName.Trim() && dt.Rows[0]["password"].ToString().Trim() == UserPassword.Trim())
                    {
                        ViewBag.sms = "Login";
                        Session["UserName"] = "success";
                        Session["UserType"] = dt.Rows[0]["username"].ToString();


                    }
                    else
                    {
                        ViewBag.sms = "NotLogin";
                    }

                }
                else
                {
                    ViewBag.sms = "NotLogin";
                }

            }
            catch (Exception ex)
            {
                ViewBag.sms = "NotLogin";
            }

            return View();
        }

        [HttpGet]
        public ActionResult Dashboard()
        {
            if (Session["UserName"] != null || Session["UserName"] == "success")
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }

        }

        public ActionResult Logout()
        {
            Session.Abandon();
            Session["UserName"] = "";
            return RedirectToAction("Admin_Login");

        }

        public ActionResult ViewFildform()
        {
            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }


        }
        public ActionResult VerifiedList()
        {


            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }



        }
        public JsonResult Bindstudent()
        {
            LogicClass obj = new LogicClass();
            cls.Action = "formstatus";
            dt = obj.Bind_Course_std_count(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }
        public JsonResult Verifystudent()
        {
            LogicClass obj = new LogicClass();
            cls.Action = "STUDENTSTATUS";
            dt = obj.veryfiedstudent(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }
        public ActionResult FeesInstallment(string formNumber)
        {

            if (Session["UserName"] != null)
            {
                feesinstalment objmain = new feesinstalment();
                if (formNumber != null && formNumber != "")
                {
                    objmain.FormNumber = formNumber;
                }
                else
                {
                    objmain.FormNumber = "";
                }

                DataTable dt = new DataTable();
                SqlParameter[] param = new SqlParameter[1];
                param[0] = new SqlParameter("@FormNumber", formNumber);
                dt = dbCon.ExecProcDataTable("Sp_feesinstalment", param);
                if (dt != null && dt.Rows.Count > 0)
                {
                    objmain.PaidFees = dt.Rows[0]["Paid_Fees"].ToString();
                    objmain.DueFees = dt.Rows[0]["Due_Fees"].ToString();
                    objmain.Student_Name_English = dt.Rows[0]["Student_Name_English"].ToString();
                    objmain.Father_Name_English = dt.Rows[0]["Father_Name_English"].ToString();
                    objmain.TotalFees = dt.Rows[0]["TotalFees"].ToString();
                    objmain.CourseName = dt.Rows[0]["CourseName"].ToString();

                }
                return View(objmain);
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }
        }

        [HttpPost]
        public ActionResult FeesInstallment(FeesDetails obj)
        {
            try
            {
                SqlParameter[] param = new SqlParameter[8];
                // param[0] = new SqlParameter("@FKCollege_StudentID", obj.co);
                param[0] = new SqlParameter("@DueFees", obj.DueFees);
                param[1] = new SqlParameter("@Form_No", obj.FormNumber);
                param[2] = new SqlParameter("@Student_Name_English", obj.StudentName);
                param[3] = new SqlParameter("@Father_Name_English", obj.FatherName);
                param[4] = new SqlParameter("@CourseName", obj.CourseName);
                param[5] = new SqlParameter("@TotalFees", obj.TotalFees);
                param[6] = new SqlParameter("@PaidFees", obj.PaidFees);
                param[7] = new SqlParameter("@PaidInstallment", obj.paidInstallment);
                int x = dbCon.ExecuteNonQueryProc("SP_SaveRegistration", param);
                if (x > 0)
                {

                }



            }
            catch (Exception ex)
            {

                throw;
            }
            return View();
        }

        public ActionResult Updatefees(string formNumber)
        {

            if (Session["UserName"] != null)
            {
                FeesDetails objmain = new FeesDetails();
                if (formNumber != null && formNumber != "")
                {
                    objmain.FormNumber = formNumber;
                }
                else
                {
                    objmain.FormNumber = "";
                }

                DataTable dt = new DataTable();
                SqlParameter[] param = new SqlParameter[1];
                param[0] = new SqlParameter("@FormNumber", formNumber);
                dt = dbCon.ExecProcDataTable("Sp_GetStudentFeesDetails", param);
                if (dt != null && dt.Rows.Count > 0)
                {
                    objmain.PaidFees = dt.Rows[0]["Paid_Fees"].ToString();
                    objmain.DueFees = dt.Rows[0]["Due_Fees"].ToString();
                    objmain.StudentName = dt.Rows[0]["Student_Name"].ToString();
                    objmain.FatherName = dt.Rows[0]["Father_Name"].ToString();
                    objmain.TotalFees = dt.Rows[0]["Total_Fees"].ToString();
                    objmain.CourseName = dt.Rows[0]["Course_Name"].ToString();

                }
                return View(objmain);
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }
        }

        [HttpPost]
        public ActionResult Updatefees(FeesDetails obj)
        {

            FeesDetails objmain = new FeesDetails();
            try
            {
                SqlParameter[] param = new SqlParameter[5];
                param[0] = new SqlParameter("@FormNumber", obj.FormNumber);
                param[1] = new SqlParameter("@Total_Fees", obj.TotalFees);
                param[2] = new SqlParameter("@Paid_Fees", obj.PaidFees);
                param[3] = new SqlParameter("@Due_Fees", obj.DueFees);
                param[4] = new SqlParameter("@userType", Session["UserType"]);

                int x = dbCon.ExecuteNonQueryProc("SP_UpdateFees", param);
                if (x > 0)
                {
                    Response.Write("<script>alert(' Successfully Update!');window.location.href='/Admin/Updatefees'</script>");
                }
                else
                {
                    Response.Write("<script>alert(' Not Saved Successfully !');window.location.href='/Admin/Updatefees'</script>");
                }
            }
            catch (Exception ex)
            {
                Response.Write("<script>alert('not Saved Successfully !');window.location.href='/Admin/Updatefees'</script>");
            }

            return View(obj);
        }
        public ActionResult VerifiedStudentList()
        {

            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }
        }
        public ActionResult Fees_Receipt()
        {
            return View();
        }
        public ActionResult multipleverification()
        {


            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }
        }
        public ActionResult Unverifiedlist()
        {
            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }

        }
        public JsonResult BINDSEM()
        {
            LogicClass obj = new LogicClass();
            cls.Action = "bind_course";


            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }

        public JsonResult BINDSES(string fk_id)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "bind_session";
            cls.Fk_Course_Id = fk_id;


            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }
        public JsonResult feessumary(string fk_id, string session, string trans1, string trans2)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "Feessummary";
            cls.Fk_Course_Id = fk_id;
            cls.Session = session;
            cls.TRANSACTIONDATE1 = trans1;
            cls.TRANSACTIONDATE2 = trans2;
            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }
        public JsonResult BIND_Data(string fk_id, string session)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "bind_Data";
            cls.Fk_Course_Id = fk_id;
            cls.Session = session;


            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }

        public JsonResult Bind_Data_unverify(string fk_id, string session)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "bind_Data_unverify";
            cls.Fk_Course_Id = fk_id;
            cls.Session = session;


            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }
        public JsonResult unverifydatastatus()
        {
            LogicClass obj = new LogicClass();
            cls.Action = "uverifystatus";
            dt = obj.unveryfystudentdata(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }

        public JsonResult BINDFormno(string fk_idd)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "studentverify";
            cls.Form_No = fk_idd;
            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }

        public JsonResult BIND_Data_Verify(string form)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "studentverifylist";
            cls.Form_No = form;
            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }

        public JsonResult Data_Verify(string form)
        {
            LogicClass obj = new LogicClass();
            cls.Action = "Verify_form";
            cls.Form_No = form;
            dt = obj.BINDSEM(cls);
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);

        }

        public ActionResult Veiw_Form()
        {
            return View();
        }

        public ActionResult Fees_Summary()
        {
            if (Session["UserName"] != null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("Admin_Login");
            }
        }
















    }
}