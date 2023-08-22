using SVMST_PG_COLLEGE_Mvc;
using SVMST_PG_COLLEGE_Mvc.Models;
using System.Data;
using System.Data.SqlClient;

namespace ABDAL_REGISTRATION
{
    public class LogicClass
    {
        PropertyClass objp = new PropertyClass();
        clscnSetting objdb = new clscnSetting();
        public DataTable BindCourses()
        {
            DataTable dt = new DataTable();
            string Query = "exec Proc_BindCourses";
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
        public DataTable Bind_Course_std_count(PropertyClass cls)
        {
            DataTable dtt = new DataTable();
            SqlParameter[] param = new SqlParameter[]
            {
                new SqlParameter("@QueryType","formstatus"),
                
            };
            dtt = objdb.ExecProcDataTable("STUDENTSTATUS", param);
            return dtt;
        }
        public DataTable veryfiedstudent(PropertyClass cls)
        {
            DataTable dtt = new DataTable();
            SqlParameter[] param = new SqlParameter[]
            {
                new SqlParameter("@QueryType","verifystatus"),

            };
            dtt = objdb.ExecProcDataTable("STUDENTSTATUS", param);
            return dtt;
        }

        public DataTable BINDSEM(PropertyClass cls)
        {
            DataTable dtt = new DataTable();
            SqlParameter[] param = new SqlParameter[]
            {
                new SqlParameter("@QueryType",cls.Action),
                new SqlParameter("@fk_course_id",cls.Fk_Course_Id),
                new SqlParameter("@SESSION",cls.Session),
                new SqlParameter("@formno",cls.Form_No),
                  new SqlParameter("@transactiondate1",cls.TRANSACTIONDATE1),
                    new SqlParameter("@transactiondate2",cls.TRANSACTIONDATE2),

            };
            dtt = objdb.ExecProcDataTable("PRAC_SEM_BIND", param);
            return dtt;
        }
        public DataTable unveryfystudentdata(PropertyClass cls)
        {
            DataTable dtt = new DataTable();
            SqlParameter[] param = new SqlParameter[]
            {
                new SqlParameter("@stu","uverifystatus"),

            };
            dtt = objdb.ExecProcDataTable("unveryfydata", param);
            return dtt;
        }





    }
}