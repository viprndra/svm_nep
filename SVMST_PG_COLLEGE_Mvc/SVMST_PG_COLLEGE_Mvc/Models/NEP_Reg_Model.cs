using SVMST_PG_COLLEGE_Mvc;
using SVMST_PG_COLLEGE_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;

namespace SVMST_PG_COLLEGE_Mvc.Models
{
    public class NEP_Reg_Model
    {
        Class1 objp = new Class1();
        clscnSetting objdb = new clscnSetting();


        public DataSet ds = new DataSet();
        public long PK_Registration_ID { get; set; }
        public string RefrenceID { get; set; }
        public string BankRefrenceNo { get; set; }
        public string TransactionID { get; set; }
        public Nullable<System.DateTime> TransactionDate { get; set; }
        public string ExamFee { get; set; }
        public Nullable<int> Fk_Academic_Year { get; set; }
        public string EnrollmentNo { get; set; }
        public string Course_Type { get; set; }
        public Nullable<int> Course_ID { get; set; }
        public string CourseName { get; set; }
        public long Fk_Course_Id { get; set; }
        public string FK_CourseType_ID { get; set; }
        public string Year_Part { get; set; }
        public Nullable<long> URN_No { get; set; }
        public string Form_No { get; set; }
        public string Student_Type { get; set; }
        public string Student_Name_English { get; set; }
        public string Student_Name_Hindi { get; set; }
        public string Father_Name_English { get; set; }
        public string Father_Name_Hindi { get; set; }
        public string Mother_Name_English { get; set; }
        public string Mother_Name_Hindi { get; set; }
        public Nullable<int> Univ_Code { get; set; }
        public string College_Code { get; set; }
        public string College_Name { get; set; }
        public string DOB { get; set; }
        public string Gender { get; set; }
        public string Aadhar { get; set; }
        public string Caste { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Religion { get; set; }
        public string MobileNo { get; set; }
        public string EmailID { get; set; }
        public string Examintion_Name { get; set; }
        public string Pass_Year { get; set; }
        public string Roll_No { get; set; }
        public string RollNo { get; set; }
        public string Pass_College_Name { get; set; }
        public string Marks_Obtained { get; set; }
        public string Total_Marks { get; set; }
        public string HouseNo { get; set; }
        public string StreetVillage { get; set; }
        public string PostOffice { get; set; }
        public string DistrictCity { get; set; }
        public string State { get; set; }
        public string PinCode { get; set; }
        public string Student_Address { get; set; }
        public string Student_Photo { get; set; }
        public string Student_Signature { get; set; }
        public string Examination_Garuav { get; set; }
        public string User_Name { get; set; }
        public string Password { get; set; }
        public Nullable<bool> College_Verify_Status { get; set; }
        public string Rejection_Reason { get; set; }
        public string Verfication_No { get; set; }
        public Nullable<int> VerficaNo { get; set; }
        public string VerifiedOn { get; set; }
        public string Care_of { get; set; }
        public Nullable<long> LateID { get; set; }
        public Nullable<int> LateFees { get; set; }
        public string Rejection_Reason1 { get; set; }
        public string OldFormNo { get; set; }
        public Nullable<long> OldPKRegID { get; set; }
        public string Old_Verification_No { get; set; }
        public string Student_Type_O { get; set; }
        public string GetPT { get; set; }
        public string Showlist { get; set; }
        public string Nationality { get; set; }
        public string FamilyIncome { get; set; }
        public string HS_Examintion_Name { get; set; }
        public string HS_Pass_Year { get; set; }
        public string HS_RollNo { get; set; }
        public string HS_Pass_College_Name { get; set; }
        public string HS_Marks_Obtained { get; set; }
        public string HS_Total_Marks { get; set; }
        public string Enviomental { get; set; }
        public string env_mark { get; set; }
        public string env_year { get; set; }
        public string env_rollno { get; set; }
        public string nation_garauv { get; set; }
        public string nation_mark { get; set; }
        public string nation_year { get; set; }
        public string nation_rollno { get; set; }
        public string NEW_FORM_NO { get; set; }
        public string phase { get; set; }
        public string Phrase { get; set; }
        public Nullable<bool> PgEnrollment { get; set; }
        public Nullable<bool> EditPhoto { get; set; }
        public string Session { get; set; }
        public string REMARK { get; set; }
        public Nullable<int> Del_temp_centre { get; set; }
        public string transaction_id { get; set; }
        public string active_status { get; set; }
        public string Central_Alotment_College { get; set; }
        public string Centre_Univ_code { get; set; }
        public string Enrollment_Fee { get; set; }
        public string Subject_Order { get; set; }
        public string FEE_TYPE { get; set; }
        public string Status_Chalna { get; set; }
        public Nullable<System.DateTime> CreateOn { get; set; }
        public Nullable<int> CreateBy { get; set; }
        public string Created_IP_Details { get; set; }
        public Nullable<System.DateTime> LastModifyOn { get; set; }
        public Nullable<int> LastModifyBy { get; set; }
        public string LastModify_IP_Details { get; set; }
        public string IsPrint { get; set; }
        public string QueryType { get; set; }
        public DataTable table { get; set; }
        public string SubjectCode { get; set; }
        public string SubjectName { get; set; }
        public string PaperType { get; set; }
        public string PK_SUB_Paper { get; set; }
        public string Paper { get; set; }
        public string PaperName { get; set; }

        public string Credit { get; set; }
        public string P_Type { get; set; }
        public string nation_status { get; set; }
        public string nation_marks { get; set; }
        public string ExamName_HS { get; set; }
        public string Teachers_Name { get; set; }
        public string Whatsapp_No { get; set; }
        public string EWS_No { get; set; }
        public string ABC_ID { get; set; }
        //10th
        public string ExamName_10th { get; set; }
        public string Board_10th { get; set; }
        public string PassingYear_10th { get; set; }
        public string RollNo_10th { get; set; }
        public string ObtMarks_10th { get; set; }
        public string MaxMarks_10th { get; set; }
        public string SUBJECT_10th { get; set; }

        public string ExamName_12th { get; set; }
        public string Board_12th { get; set; }
        public string PassingYear_12th { get; set; }
        public string RollNo_12th { get; set; }
        public string ObtMarks_12th { get; set; }
        public string MaxMarks_12th { get; set; }
        public string SUBJECT_12th { get; set; }

        public string ExamName_PG { get; set; }
        public string Board_PG { get; set; }
        public string PassingYear_PG { get; set; }
        public string College_PG { get; set; }//roll
        public string ObtMarks_PG { get; set; }
        public string MaxMarks_PG { get; set; }
        public string Percenatge_PG { get; set; }//sub

        public string ExamName_Other { get; set; }
        public string Board_Other { get; set; }
        public string PassingYear_Other { get; set; }
        public string College_Other { get; set; }//roll
        public string ObtMarks_Other { get; set; }
        public string MaxMarks_Other { get; set; }
        public string Percenatge_Other { get; set; }//sub
        public string Careof { get; set; }
        public string UploadDoc_10th { get; set; }
        public string UploadDoc_12th { get; set; }
        public string Upload_Adhaar { get; set; }
        public string Upload_TC { get; set; }
        public string Upload_CC { get; set; }
        public string Semester { get; set; }
        public string totel_fee { get; set; }
        public string ExamName_UG { get; set; }
         public string PassingYear_UG { get; set; }
         public string Board_UG { get; set; }
         public string RollNo_UG { get; set; }
         public string Subject_UG { get; set; }
         public string ObtMarks_UG { get; set; }
         public string MaxMarks_UG { get; set; }
         public string Form_No1 { get; set; }



        //public SqlDbType dob { get; private set; }
        
        private string ConnStr;
        clscnSetting clsObjSetting = new clscnSetting();

        public NEP_Reg_Model()
        {
            ConnStr = clsObjSetting.ConnectionStr;
            //string CS = System.Configuration.ConfigurationManager.ConnectionStrings["StudentConn"].ConnectionString;
        }

        public DateTime GetDateForDB(object obj)
        {
            DateTime objDate;
            if (!string.IsNullOrEmpty(obj.ToString()))
                obj = (object)GetDateInMMDDYYYY(obj);

            if (DateTime.TryParse(obj.ToString(), System.Globalization.CultureInfo.CurrentCulture, System.Globalization.DateTimeStyles.None, out objDate) && objDate.Year != 1)
                return objDate;
            else
                return objDate;

        }


        public String GetDateInMMDDYYYY(object obj)
        {
            String[] objDate = obj.ToString().Split('/');
            return objDate[1] + "/" + objDate[0] + "/" + objDate[2];
        }
        public string DataSetToJSON(DataSet dataset)
        {

            JavaScriptSerializer jsSerializer = new JavaScriptSerializer();



            Dictionary<string, object> ssvalue = new Dictionary<string, object>();

            foreach (DataTable table in dataset.Tables)
            {
                List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
                Dictionary<string, object> childRow;

                string tablename = table.TableName;
                foreach (DataRow row in table.Rows)
                {
                    childRow = new Dictionary<string, object>();
                    foreach (DataColumn col in table.Columns)
                    {
                        childRow.Add(col.ColumnName, row[col]);
                    }
                    parentRow.Add(childRow);
                }

                ssvalue.Add(tablename, parentRow);
            }

            return jsSerializer.Serialize(ssvalue);
        }
        //public string DataSetToJSON(DataSet dataset)
        //{

        //    JavaScriptSerializer jsSerializer = new JavaScriptSerializer();



        //    Dictionary<string, object> ssvalue = new Dictionary<string, object>();

        //    foreach (DataTable table in dataset.Tables)
        //    {
        //        List<Dictionary<string, object>> parentRow = new List<Dictionary<string, object>>();
        //        Dictionary<string, object> childRow;

        //        string tablename = table.TableName;
        //        foreach (DataRow row in table.Rows)
        //        {
        //            childRow = new Dictionary<string, object>();
        //            foreach (DataColumn col in table.Columns)
        //            {
        //                childRow.Add(col.ColumnName, row[col]);
        //            }
        //            parentRow.Add(childRow);
        //        }

        //        ssvalue.Add(tablename, parentRow);
        //    }

        //    return jsSerializer.Serialize(ssvalue);
        //}


        public DataSet Insert_Student_Registration(string QueryType, int PK_Registration_ID, string EnrollmentNo, string Course_Type, int Course_ID, string CourseName, string Year_Part, int Fk_Course_id, string Student_Type, string Student_Name_English,
string Student_Name_Hindi, string Father_Name_English, string Father_Name_Hindi, string Mother_Name_English, string Mother_Name_Hindi, string College_Code, string College_Name, string DOB, string Gender, string Category, string Examintion_Name, string Pass_Year,
   string RollNo, string Pass_College_Name,
string Marks_Obtained, string Total_Marks, string Student_Address, string Student_Photo, string Student_Signature, string Examination_Garuav, Int64 CreateBy,
string Created_IP_Details, Int64 LastModifyBy, string LastModify_IP_Details, List<NEP_Reg_Model> lstSubject, string MobileNo, string EmailID, string Religion, string SubCategory,

string HouseNo, string StreetVillage, string PostOffice, string DistrictCity, string State, string PinCode,
   string ExamName_10th, string Board_10th, string PassingYear_10th, string RollNo_10th, string ObtMarks_10th, string MaxMarks_10th, string SUBJECT_10th,
string ExamName_12th, string Board_12th, string PassingYear_12th, string RollNo_12th, string ObtMarks_12th, string MaxMarks_12th,
string SUBJECT_12th, string ExamName_PG, string Board_PG, string PassingYear_PG, string College_PG, string ObtMarks_PG, string MaxMarks_PG,
string Percenatge_PG, string ExamName_Other, string Board_Other, string PassingYear_Other, string College_Other, string ObtMarks_Other,
string MaxMarks_Other, string Percenatge_Other, string Careof, string pass_code, string ExamName_HS, string Board_HS, string PassingYear_HS, string College_HS, string ObtMarks_HS, string MaxMarks_HS,
string Nationality, string FamilyIncome, string Session, string Caste, string Aadhar, string Teachers_Name,string Whatsapp_No,string EWS_No,string Abc_Id, string UploadDoc_10th, string UploadDoc_12th,
string Upload_Adhaar, string Upload_TC,string Upload_CC,string totel_fee,string ExamName_UG, string PassingYear_UG,string Board_UG,string RollNo_UG,string Subject_UG, string ObtMarks_UG,string MaxMarks_UG, string Form_No1,string REMARK

)
        {
            DataSet ds = new DataSet();
            /// System.Collections.Generic.List<cls_Registartion> lstAllCon = new System.Collections.Generic.List<cls_Registartion>();

            DataTable table2 = new DataTable("articletable");

            table2.Columns.Add("SubjectCode");
            table2.Columns.Add("SubjectName");
            table2.Columns.Add("PaperType");
            table2.Columns.Add("PK_SUB_Paper");
            table2.Columns.Add("Paper");
            table2.Columns.Add("PaperName");
            table2.Columns.Add("P_Type");
            table2.Columns.Add("Credit");

            if (lstSubject != null && lstSubject.Count != 0)
            {
                for (int i = 0; i < lstSubject.Count - 1; i++)
                {
                    DataRow row = table2.NewRow();
                    row[0] = lstSubject[i].SubjectCode;
                    row[1] = lstSubject[i].SubjectName;
                    row[2] = lstSubject[i].PaperType;
                    row[3] = lstSubject[i].PK_SUB_Paper.ToString();
                    row[4] = lstSubject[i].Paper;
                    row[5] = lstSubject[i].PaperName;
                    row[6] = lstSubject[i].P_Type;
                    row[7] = lstSubject[i].Credit;
                    table2.Rows.Add(row);
                }
            }


            DataTable table21 = new DataTable("articletable");
            table21.Columns.Add("SubjectCode");
            table21.Columns.Add("SubjectName");


            DataRow row11 = table21.NewRow();
            row11[0] = "3434";
            row11[1] = "3434";
            table21.Rows.Add(row11);



            SqlParameter[] ParamList1 = new SqlParameter[114];
            ParamList1[0] = new SqlParameter("@QueryType", QueryType);
            ParamList1[1] = new SqlParameter("@PK_Registration_ID", PK_Registration_ID);
            ParamList1[2] = new SqlParameter("@EnrollmentNo", EnrollmentNo);
            ParamList1[3] = new SqlParameter("@Course_Type", Course_Type);
            ParamList1[4] = new SqlParameter("@Course_ID", Course_ID);
            ParamList1[5] = new SqlParameter("@CourseName", CourseName);
            ParamList1[6] = new SqlParameter("@Year_Part", Year_Part);

            ParamList1[7] = new SqlParameter("@Student_Type", Student_Type);
            ParamList1[8] = new SqlParameter("@Student_Name_English", Student_Name_English);
            ParamList1[9] = new SqlParameter("@Student_Name_Hindi", Student_Name_Hindi);
            ParamList1[10] = new SqlParameter("@Father_Name_English", Father_Name_English);
            ParamList1[11] = new SqlParameter("@Father_Name_Hindi", Father_Name_Hindi);
            ParamList1[12] = new SqlParameter("@Mother_Name_English", Mother_Name_English);
            ParamList1[13] = new SqlParameter("@Mother_Name_Hindi", Mother_Name_Hindi);
            ParamList1[14] = new SqlParameter("@College_Code", College_Code);
            ParamList1[15] = new SqlParameter("College_Name", College_Name);
            ParamList1[16] = new SqlParameter("@DOB", DOB);
            ParamList1[17] = new SqlParameter("@Gender", Gender);
            ParamList1[18] = new SqlParameter("@Category", Category);
            ParamList1[19] = new SqlParameter("@Examintion_Name", Examintion_Name);
            ParamList1[20] = new SqlParameter("@Pass_Year", Pass_Year);
            ParamList1[21] = new SqlParameter("@RollNo", RollNo);
            ParamList1[22] = new SqlParameter("@Pass_College_Name", Pass_College_Name);
            ParamList1[23] = new SqlParameter("@Marks_Obtained ", Marks_Obtained);
            ParamList1[24] = new SqlParameter("@Total_Marks ", Total_Marks);
            ParamList1[25] = new SqlParameter("@Student_Address", Student_Address);
            ParamList1[26] = new SqlParameter("@Student_Photo", Student_Photo);
            ParamList1[27] = new SqlParameter("@Student_Signature", Student_Signature);
            ParamList1[28] = new SqlParameter("@Examination_Garuav", Examination_Garuav);
            ParamList1[29] = new SqlParameter("@CreateBy", CreateBy);

            ParamList1[30] = new SqlParameter("@Created_IP_Details", Created_IP_Details);
            ParamList1[31] = new SqlParameter("@LastModifyBy", LastModifyBy);
            ParamList1[32] = new SqlParameter("@LastModify_IP_Details", LastModify_IP_Details);
            ParamList1[33] = new SqlParameter("@MobileNo", MobileNo);
            ParamList1[34] = new SqlParameter("@EmailID", EmailID);
            ParamList1[35] = new SqlParameter("@tbl_Student_Reg_PaperDetails", table21);
            ParamList1[36] = new SqlParameter("@tbl_Student_Reg_PaperDetails_Tepm_New", table2);
            ParamList1[37] = new SqlParameter("@Religion", Religion);
            ParamList1[38] = new SqlParameter("@SubCategory", SubCategory);

       //     ParamList1[39] = new SqlParameter("@HouseNo", HouseNo);
            ParamList1[39] = new SqlParameter("@HouseNo", HouseNo);
            ParamList1[40] = new SqlParameter("@StreetVillage", StreetVillage);
            ParamList1[41] = new SqlParameter("@PostOffice", PostOffice);
            ParamList1[42] = new SqlParameter("@DistrictCity", DistrictCity);
            ParamList1[43] = new SqlParameter("@State", State);
            ParamList1[44] = new SqlParameter("@PinCode", PinCode);

            ParamList1[45] = new SqlParameter("@ExamName_10th", ExamName_10th);
            ParamList1[46] = new SqlParameter("@Board_10th", Board_10th);
            ParamList1[47] = new SqlParameter("@PassingYear_10th", PassingYear_10th);
            ParamList1[48] = new SqlParameter("@RollNo_10th", RollNo_10th);
            ParamList1[49] = new SqlParameter("@ObtMarks_10th", ObtMarks_10th);
            ParamList1[50] = new SqlParameter("@MaxMarks_10th", MaxMarks_10th);
            ParamList1[51] = new SqlParameter("@SUBJECT_10th", SUBJECT_10th);

            ParamList1[52] = new SqlParameter("@ExamName_12th", ExamName_12th);
            ParamList1[53] = new SqlParameter("@Board_12th", Board_12th);
            ParamList1[54] = new SqlParameter("@PassingYear_12th", PassingYear_12th);
            ParamList1[55] = new SqlParameter("@RollNo_12th", RollNo_12th);
            ParamList1[56] = new SqlParameter("@ObtMarks_12th", ObtMarks_12th);
            ParamList1[57] = new SqlParameter("@MaxMarks_12th", MaxMarks_12th);
            ParamList1[58] = new SqlParameter("@Subject_12th", SUBJECT_12th);

            ParamList1[59] = new SqlParameter("@ExamName_PG", ExamName_PG);
            ParamList1[60] = new SqlParameter("@Board_PG", Board_PG);
            ParamList1[61] = new SqlParameter("@PassingYear_PG", PassingYear_PG);
            ParamList1[62] = new SqlParameter("@RollNo_PG", College_PG);
            ParamList1[63] = new SqlParameter("@ObtMarks_PG", ObtMarks_PG);
            ParamList1[64] = new SqlParameter("@MaxMarks_PG", MaxMarks_PG);
            ParamList1[65] = new SqlParameter("@Subject_PG ", Percenatge_PG);

            ParamList1[66] = new SqlParameter("@ExamName_Other", ExamName_Other);
            ParamList1[67] = new SqlParameter("@Board_Other", Board_Other);
            ParamList1[68] = new SqlParameter("@PassingYear_Other", PassingYear_Other);
            ParamList1[69] = new SqlParameter("@RollNo_Other", College_Other);
            ParamList1[70] = new SqlParameter("@ObtMarks_Other", ObtMarks_Other);
            ParamList1[71] = new SqlParameter("@MaxMarks_Other", MaxMarks_Other);
            ParamList1[72] = new SqlParameter("@Subject_Other", Percenatge_Other);
            //ug
            ParamList1[73] = new SqlParameter("@Care_of", Careof);
            ParamList1[74] = new SqlParameter("@Pass_word", pass_code);

            ParamList1[75] = new SqlParameter("@HS_Examintion_Name ", ExamName_HS);
            ParamList1[76] = new SqlParameter("@HS_Pass_Year", PassingYear_HS);
            ParamList1[77] = new SqlParameter("@HS_RollNo", HS_RollNo);
            ParamList1[78] = new SqlParameter("@HS_Pass_College_Name", College_HS);
         //
            ParamList1[79] = new SqlParameter("@HS_Marks_Obtained", ObtMarks_HS);
            ParamList1[80] = new SqlParameter("@HS_Total_Marks", MaxMarks_HS);

            ParamList1[81] = new SqlParameter("@Nationality", Nationality);
            ParamList1[82] = new SqlParameter("@FamilyIncome", FamilyIncome);
            ParamList1[83] = new SqlParameter("@Enviomental", Enviomental);
            ParamList1[84] = new SqlParameter("@env_mark", env_mark);
            ParamList1[85] = new SqlParameter("@env_year", env_year);
            ParamList1[86] = new SqlParameter("@env_rollno", env_rollno);
            ParamList1[87] = new SqlParameter("@nation_garauv", nation_status);
            ParamList1[88] = new SqlParameter("@nation_mark", nation_marks);
            ParamList1[89] = new SqlParameter("@nation_year", nation_year);
            ParamList1[90] = new SqlParameter("@nation_rollno", nation_rollno);
            ParamList1[91] = new SqlParameter("@Fk_Course_Id", Fk_Course_id);
            ParamList1[92] = new SqlParameter("@Session", Session);
            ParamList1[93] = new SqlParameter("@Caste", Caste);
            ParamList1[94] = new SqlParameter("@Aadhar", Aadhar);
            ParamList1[95] = new SqlParameter("@Teachers_Name", Teachers_Name);
            ParamList1[96] = new SqlParameter("@Whatsapp_No", Whatsapp_No);
            ParamList1[97] = new SqlParameter("@EWS_No", EWS_No);
            ParamList1[98] = new SqlParameter("@ABC_ID", Abc_Id);
            ParamList1[99] = new SqlParameter("@UploadDoc_10th", UploadDoc_10th);
            ParamList1[100] = new SqlParameter("@UploadDoc_12th", UploadDoc_12th);
            ParamList1[101] = new SqlParameter("@Upload_Adhaar", Upload_Adhaar);
            ParamList1[102] = new SqlParameter("@Upload_TC", Upload_TC);
            ParamList1[103] = new SqlParameter("@Upload_CC", Upload_CC);
            ParamList1[104] = new SqlParameter("@Total_Fees", totel_fee);

            ParamList1[105] = new SqlParameter("@ExamName_UG ", ExamName_UG);
            ParamList1[106] = new SqlParameter("@PassingYear_UG", PassingYear_UG);
            ParamList1[107] = new SqlParameter("@Board_UG", Board_UG);
            ParamList1[108] = new SqlParameter("@RollNo_UG", RollNo_UG);
            ParamList1[109] = new SqlParameter("@Subject_UG", Subject_UG);
            ParamList1[110] = new SqlParameter("@ObtMarks_UG", ObtMarks_UG);
            ParamList1[111] = new SqlParameter("@MaxMarks_UG", MaxMarks_UG);
            ParamList1[112] = new SqlParameter("@Form_No1", Form_No1);
            ParamList1[113] = new SqlParameter("@REMARK", REMARK);

            ds = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "proc_Registration_Form", ParamList1);
            return ds;
        }


        public DataSet Printstudentdetails(string Action, string Form_No, string Session)
        {
            DataSet ds = new DataSet();
            try
            {
                SqlParameter[] paramList = {
                new SqlParameter("@QueryType", Action),
                new SqlParameter("@Form_No", Form_No),
                new SqlParameter("@dateofbirth", Session)};
                ds = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "proc_Registration_Form", paramList);
                return ds;
            }
            finally
            {
                if (ds != null)
                    ds.Dispose();
            }
        }


        public DataSet Bind_Course(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[2];
                paramlist[0] = new SqlParameter("@FK_CourseType_ID", nep.FK_CourseType_ID);
                paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
              //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);
            
                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "proc_Registration_Form", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }

        public DataSet Bind_YearPart(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[2];
                paramlist[0] = new SqlParameter("@Course_Code", nep.Fk_Course_Id);
                paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "proc_Registration_Form", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }


        public DataSet Bind_Teacher(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[1];
                paramlist[0] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindTeachers", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }


        public DataSet Bind_Fee(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[4];
                paramlist[0] = new SqlParameter("@QueryType", nep.QueryType);
                paramlist[1] = new SqlParameter("@Fk_Course_Id", nep.Fk_Course_Id);
                paramlist[2] = new SqlParameter("@student_type", nep.Student_Type);
                paramlist[3] = new SqlParameter("@Semester", nep.Semester);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_Bind_Fee", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }

        public DataSet Bind_State(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[1];
                paramlist[0] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindState", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }



        public DataSet Bind_District(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[2];
                paramlist[0] = new SqlParameter("@state", nep.State);
                paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindDistrict", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

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


        public DataSet Bind_Minor(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[2];
                paramlist[0] = new SqlParameter("@Fk_Course_Id", nep.Fk_Course_Id);
                paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindMinerSubject", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }


        public DataSet Bind_Vocation(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[1];
                paramlist[0] = new SqlParameter("@Fk_Course_Id", nep.Fk_Course_Id);
              //  paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindVocational", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }




        public DataSet Bind_Co_Curricular(NEP_Reg_Model nep)
        {
            DataSet DS = new DataSet();
            try
            {

                SqlParameter[] paramlist = new SqlParameter[1];
                paramlist[0] = new SqlParameter("@Fk_Course_Id", nep.Fk_Course_Id);
                //  paramlist[1] = new SqlParameter("@QueryType", nep.QueryType);
                //  paramlist[2] = new SqlParameter("@QueryType", nep.QueryType);

                DS = SqlHelper.ExecuteDataset(ConnStr, CommandType.StoredProcedure, "Proc_BindCo_Curricular", paramlist);
                return DS;
            }
            finally
            {
                if (DS != null)
                    DS.Dispose();
            }

        }











    }
}