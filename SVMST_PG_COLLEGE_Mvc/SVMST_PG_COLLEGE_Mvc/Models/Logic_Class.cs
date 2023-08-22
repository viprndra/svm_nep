using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_Mvc.Models
{
    public class Logic_Class
    {
         
            Class1 objp = new Class1();
            clscnSetting objdb = new clscnSetting();
            public DataTable BindCourseType()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_Get_Course_Type";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }


            public DataTable BindCourses()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindCourses";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }

            public DataTable Bind_Courses(string FK_CType)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindCourses'" + FK_CType + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }

            public DataTable BindTeachers()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindTeachers";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable Bind_State()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindState";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable BindDistrict()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindDistrict";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable Bind_District(string state)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindDistrict '" + state + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }



            public DataTable Bind_Semester(string SEM)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindSemester '" + SEM + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable BindSemester()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindSemester";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable BindVocatioanl()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindVocational";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable Bind_Vocatioanl(string fk_course_id)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindVocational '" + fk_course_id + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable BindCoCurricular()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindCo_Curricular";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable Bind_CoCurricular(string fk_course_id)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindCo_Curricular '" + fk_course_id + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }

            public DataTable BindMinorSub()
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindMinerSubject";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable Bind_Minor_Sub(string Fk_Course_Id)
            {
                DataTable dt = new DataTable();
                string Query = "exec Proc_BindMinerSubject 'MinerPaper_Bind','" + Fk_Course_Id + "'";
                dt = objdb.ExecAdaptorDataTable(Query);
                return dt;
            }
            public DataTable BindMajorPaperbyProgram(string course_id, string ProcName)
            {
                DataTable dtt = new DataTable();
                SqlParameter[] param = new SqlParameter[]
                {
               new SqlParameter("@FK_Course_ID",course_id),
                };
                dtt = objdb.ExecProcDataTable(ProcName, param);
                return dtt;
            }

            //public DataTable BindVocationalPaperbyProgram(string course_id, string ProcName)
            //{
            //    DataTable dtt = new DataTable();
            //    SqlParameter[] param = new SqlParameter[]
            //    {
            //       new SqlParameter("@FK_Course_ID",course_id),
            //    };
            //    dtt = objdb.ExecProcDataTable(ProcName, param);
            //    return dtt;
            //}

            public DataTable BindMinerPaperbyProgramId(string fkcourseid)
            {
                DataTable dtt = new DataTable();
                SqlParameter[] param = new SqlParameter[]
                {
                new SqlParameter("@ActionType","MinerPaper_Bind"),
                new SqlParameter("@Fk_Course_Id",fkcourseid),
                };
                dtt = objdb.ExecProcDataTable("Proc_BindPapers", param);
                return dtt;
            }






        #region Variables
        public string Action { get; set; }
        public DataTable dt { get; set; }
        public List<SelectListItem> DistrictList { get; set; }
        public List<SelectListItem> CourseList { get; set; }
        public List<SelectListItem> CourseTypeList { get; set; }
        public List<SelectListItem> SemesterList { get; set; }
        public List<SelectListItem> MinorsubList { get; set; }
        public List<SelectListItem> vocationalList { get; set; }
        public List<SelectListItem> CoCurricularList { get; set; }
        #endregion

        public Logic_Class()
        {
            this.DistrictList = new List<SelectListItem>();
            this.CourseList = new List<SelectListItem>();
            this.SemesterList = new List<SelectListItem>();
            this.MinorsubList = new List<SelectListItem>();
            this.vocationalList = new List<SelectListItem>();
            this.CoCurricularList = new List<SelectListItem>();
            this.CourseTypeList = new List<SelectListItem>();
        }




    }
}