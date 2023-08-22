using ABDAL_REGISTRATION;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Web.Mvc;
using System.Configuration;
using System.Web.Script.Serialization;

namespace ABDAL_REGISTRATION
{
   public class Property_Dropdown
    {
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

        public Property_Dropdown()
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
