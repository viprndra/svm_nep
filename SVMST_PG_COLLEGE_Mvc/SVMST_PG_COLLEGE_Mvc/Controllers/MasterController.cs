using ABDAL_REGISTRATION;
using Newtonsoft.Json;
using SVMST_PG_COLLEGE_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_MVC.Controllers
{
    public class MasterController : Controller
    {
        // GET: Master
        public Class1 objP = new Class1();
     //   public Property_Dropdown  objP = new Property_Dropdown();
        public Logic_Class objL = new Logic_Class();
        DataTable dt = new DataTable();
        public ActionResult Index()
        {
            return View();
        }
        

        public JsonResult Bind_District(string state)
        {

            try
            {
                DataTable dt = objL.Bind_District(state);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.DistrictList.Add(new SelectListItem { Text = Convert.ToString(dr["Districts_Name"].ToString()), Value = Convert.ToString(dr["DistrictID"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return Json(new SelectList(objP.DistrictList, "Value", "Text"));
        }

        public JsonResult Bind_Course(string FK_CType)
        {
            try
            {
                DataTable dt = objL.Bind_Courses(FK_CType);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.CourseList.Add(new SelectListItem { Text = Convert.ToString(dr["Course_Name"].ToString()), Value = Convert.ToString(dr["Course_Code"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            };
            return Json(new SelectList(objP.CourseList, "Value", "Text"));
        }

        public JsonResult Bind_Semester(string SEM)
        {

            try
            {
                DataTable dt = objL.Bind_Semester(SEM);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.SemesterList.Add(new SelectListItem { Text = Convert.ToString(dr["Course_Details"].ToString()), Value = Convert.ToString(dr["PK_Course_ID"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return Json(new SelectList(objP.SemesterList, "Value", "Text"));
        }
        public JsonResult Bind_Minor_Sub(string Fk_Course_Id)
        {

            try 
            {
                DataTable dt = objL.Bind_Minor_Sub(Fk_Course_Id);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.MinorsubList.Add(new SelectListItem { Text = Convert.ToString(dr["Subject_Name"].ToString()), Value = Convert.ToString(dr["subject_code"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return Json(new SelectList(objP.MinorsubList, "Value", "Text"));
        }
        public JsonResult Select_college_subject(string course_id)
        {
            DataTable dt = new DataTable();
            dt = objL.BindMajorPaperbyProgram(course_id, "Proc_Bind_CollegeSubject");
            string json = JsonConvert.SerializeObject(dt, Formatting.None);
            return Json(json, JsonRequestBehavior.AllowGet);
        }

       
        public JsonResult Bind_Vocatioanl(string fk_course_id)
        {

            try
            {
                DataTable dt = objL.Bind_Vocatioanl(fk_course_id);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.vocationalList.Add(new SelectListItem { Text = Convert.ToString(dr["SUBJECT_NAME"].ToString()), Value = Convert.ToString(dr["SUBJECT_CODE"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return Json(new SelectList(objP.vocationalList, "Value", "Text"));
        }
        public JsonResult Bind_CoCurricular(string fk_course_id)
        {

            try
            {
                DataTable dt = objL.Bind_CoCurricular(fk_course_id);
                if (dt != null && dt.Rows.Count > 0)
                {
                    foreach (DataRow dr in dt.Rows)
                    {
                        objP.CoCurricularList.Add(new SelectListItem { Text = Convert.ToString(dr["SUBJECT_NAME"].ToString()), Value = Convert.ToString(dr["SUBJECT_CODE"].ToString()) });
                    }
                }
            }
            catch (Exception ex)
            {

            }

            return Json(new SelectList(objP.CoCurricularList, "Value", "Text"));
        }

       

    }
}