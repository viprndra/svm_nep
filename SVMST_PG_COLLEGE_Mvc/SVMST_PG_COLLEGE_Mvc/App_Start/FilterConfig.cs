﻿using System.Web;
using System.Web.Mvc;

namespace SVMST_PG_COLLEGE_Mvc
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
