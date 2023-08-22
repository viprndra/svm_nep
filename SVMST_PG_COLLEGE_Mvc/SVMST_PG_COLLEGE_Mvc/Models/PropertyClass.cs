using SVMST_PG_COLLEGE_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_Mvc.Models
{
    public class PropertyClass
    {
        public PropertyClass()
        {
            this.DistrictList = new List<SelectListItem>();
            this.SemesterList = new List<SelectListItem>();
            this.MinorsubList = new List<SelectListItem>();
            this.vocationalList = new List<SelectListItem>();
            this.CoCurricularList = new List<SelectListItem>();
        }
       
        #region Variables
        public string Action { get; set; }    
        public DataTable dt { get; set; }
        public List<SelectListItem> DistrictList { get; set; }
        public List<SelectListItem> SemesterList { get; set; }
        public List<SelectListItem> MinorsubList { get; set; }
        public List<SelectListItem> vocationalList { get; set; }
        public List<SelectListItem> CoCurricularList { get; set; }
        #endregion

        public static List<SelectListItem> BindDDL(DataTable dt)
        {
            List<SelectListItem> lst = new List<SelectListItem>();
            if (dt != null && dt.Rows.Count > 0)
            {
                foreach (DataRow item in dt.Rows)
                {
                    lst.Add(new SelectListItem()
                    {
                        Text = Convert.ToString(item[1]),
                        Value = Convert.ToString(item[0])
                    });
                }
            }
            else
            {
                lst.Add(new SelectListItem() { Text = "--none--", Value = "" });
            }
            return lst;
        }



        public string Pk_Registration_Id { get; set; }
        public string Form_No { get; set; }
        public string Enrollment_No { get; set; }
        public string Fk_Course_Id { get; set; }
        public string Course_Name { get; set; }
        public string year_sem { get; set; }
        public string Student_Category { get; set; }
        public string teacher_name { get; set; }
        public string Student_Name { get; set; }
        public string Father_Name { get; set; }
        public string Mother_Name { get; set; }
        public string Gender { get; set; }
        public string DOB { get; set; }
        public string Religion { get; set; }
        public string Mobile_No { get; set; }
        public string Whatsapp_No { get; set; }
        public string Category { get; set; }
        public string Aadhar { get; set; }
        public string Email_id { get; set; }
        public string Nationality { get; set; }
        public string Family_Income { get; set; }
        public string Student_Source { get; set; }
        public string College_Code { get; set; }
        public string College_Name { get; set; }
        public string College_Verify { get; set; }
        public string Exam_10th { get; set; }
        public string Rollno_10th { get; set; }
        public string Passyear_10th { get; set; }
        public string Marksobt_10th { get; set; }
        public string Maxmarks_10th { get; set; }
        public string Subject_10th { get; set; }
        public string Percentage_10th { get; set; }
        public string Exam_12th { get; set; }
        public string Rollno_12th { get; set; }
        public string Passyear_12th { get; set; }
        public string Marksobt_12th { get; set; }
        public string Maxmarks_12th { get; set; }
        public string Subject_12th { get; set; }
        public string Percentage_12th { get; set; }
        public string Exam_UG { get; set; }
        public string Rollno_UG { get; set; }
        public string Passyear_UG { get; set; }
        public string Marksobt_UG { get; set; }
        public string Maxmarks_UG { get; set; }
        public string Subject_UG { get; set; }
        public string Percentage_UG { get; set; }
        public string Exam_PG { get; set; }
        public string Rollno_PG { get; set; }
        public string Passyear_PG { get; set; }
        public string Marksobt_PG { get; set; }
        public string Maxmarks_PG { get; set; }
        public string Subject_PG { get; set; }
        public string Percentage_PG { get; set; }
        public string Exam_OT { get; set; }
        public string Rollno_OT { get; set; }
        public string Passyear_OT { get; set; }
        public string Marksobt_OT { get; set; }
        public string Maxmarks_OT { get; set; }
        public string Subject_OT { get; set; }
        public string Percentage_OT { get; set; }
        public string Address { get; set; }
        public string Post { get; set; }
        public string State { get; set; }
        public string District { get; set; }
        public string Pincode { get; set; }
        public string Student_Photo { get; set; }
        public string Student_Signature { get; set; }
        public string Subject_Id { get; set; }
        public string Subject_Name { get; set; }
        public string Total_Fees { get; set; }
        public string Paid_Fees { get; set; }
        public string Due_Fees { get; set; }
        public string Admission_Fees { get; set; }
        public string Session { get; set; } 
        public string TRANSACTIONDATE1 { get; set; }    
        public string TRANSACTIONDATE2 { get; set; }
        public string Marksheet_10th { get; set; }
        public string Marksheet_12th { get; set; }
        public string Aadhar_Document { get; set; }
        public string Cast_Certificate { get; set; }
        public string Tc_document_10th { get; set; }
        public string Remarks { get; set; }
        public string SubjectCode { get; set; }
        public string SubjectName { get; set; }
        public string PaperType { get; set; }
        public string PK_SUB_Paper { get; set; }
        public string Paper { get; set; }
        public string PaperName { get; set; }
        public string Credit { get; set; }
        public string P_Type { get; set; }

        public string Created_DateTime { get; set; }
        public string Is_Active { get; set; }


    }
    
}