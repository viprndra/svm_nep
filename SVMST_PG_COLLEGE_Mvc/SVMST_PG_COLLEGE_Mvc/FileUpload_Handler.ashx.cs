using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace SVMST_PG_COLLEGE_Mvc
{
   
    public class FileUpload_Handler : IHttpHandler
    {
        public void ProcessRequest(HttpContext context)
        {
            HttpFileCollection files = context.Request.Files;
            if (files.Count > 0)
            {
                HttpPostedFile file = context.Request.Files["File"];

                string File_Name = context.Request.Form["File_Name"].Trim();
                string File_Server_Path = context.Request.Form["File_Server_Path"].Trim();

                string File_Upload_Path = Path.Combine(context.Server.MapPath(File_Server_Path), File_Name);
                file.SaveAs(File_Upload_Path);
            }

        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}