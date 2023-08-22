using System;
using System.Data;
using System.Configuration;
using System.Data.SqlClient;

/// <summary>
/// Summary description for clscnSetting
/// </summary>
/// 
namespace SVMST_PG_COLLEGE_Mvc
{
    public class clscnSetting
    {
        public clscnSetting()
        {
            //
            // TODO: Add constructor logic here
            //
        }

        public static string _connectionStr = ConfigurationManager.ConnectionStrings["FaizabadConnectionString"].ConnectionString;
        //  public static string _connectionStr1 = ConfigurationManager.ConnectionStrings["FaizabadConnectionString18"].ConnectionString;
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["FaizabadConnectionString18"].ConnectionString);

        public string ConnectionStr
        {

            get { return _connectionStr; }
            set { _connectionStr = value; }
        }
        //public string ConnectionStr1
        //{
        //    get { return con; }
        //    set { _connectionStr1 = value; }
        //}
        //public string ConnectionStr2
        //{
        //    get { return _connectionStr1; }
        //    set { _connectionStr1 = value; }
        //}


        public int ExecuteNonQueryProc(string cmdText, SqlParameter[] prms)
        {
            int r = 0;
            try
            {
                using (SqlConnection conn = new SqlConnection(_connectionStr))
                {
                    using (SqlCommand cmd = new SqlCommand(cmdText, conn))
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Clear();
                        if (prms != null)
                        {
                            foreach (SqlParameter p in prms)
                            {
                                cmd.Parameters.Add(p);
                            }
                        }
                        conn.Open();
                        try
                        {
                            r = cmd.ExecuteNonQuery();
                        }
                        catch (Exception ex)
                        {
                            r = 0;
                        }
                        finally
                        {
                            conn.Close();
                        }
                    }
                }
            }
            catch (Exception ex)
            {

            }
            return r;

        }
        public DataTable ExecProcDataTable(string ProName, SqlParameter[] Param)
        {
            DataTable dt = new DataTable();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand(ProName, con);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.CommandTimeout = 0;
                foreach (SqlParameter prm in Param)
                {
                    cmd.Parameters.Add(prm);
                }
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
                adp.Fill(dt);
            }
            catch (Exception ex)
            {

            }
            finally
            {
                con.Close();
            }
            return dt;
        }
        public DataSet ExecProcDataSet(string ProName, SqlParameter[] Param)
        {
            DataSet ds = new DataSet();
            try
            {
                con.Open();
                SqlCommand cmd = new SqlCommand(ProName, con);
                cmd.CommandType = CommandType.StoredProcedure;
                foreach (SqlParameter prm in Param)
                {
                    cmd.Parameters.Add(prm);
                }
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
                adp.Fill(ds);
            }
            catch (Exception ex)
            {

            }
            finally
            {
                con.Close();
            }
            return ds;
        }
        public DataTable ExecAdaptorDataTable(string Query)
        {
            DataTable dt = new DataTable();
            try
            {
                SqlCommand cmd = new SqlCommand(Query, con);
                cmd.CommandType = CommandType.Text;
                SqlDataAdapter adp = new SqlDataAdapter(cmd);
                adp.Fill(dt);
            }
            catch (Exception ex)
            {

            }
            return dt;
        }
        public DataTable Execute(string procedure, SqlParameter[] parameter)
        {
            SqlCommand Command = new SqlCommand(procedure, con);
            Command.CommandType = CommandType.StoredProcedure;
            foreach (SqlParameter param in parameter)
            {
                Command.Parameters.Add(param);
            }
            DataTable data = new DataTable();
            SqlDataAdapter adapter = new SqlDataAdapter(Command);
            adapter.Fill(data);
            return data;
        }

    }
}