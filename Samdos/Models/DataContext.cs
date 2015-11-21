﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace Samdos.Models
{
    [DbConfigurationType(typeof(MySql.Data.Entity.MySqlEFConfiguration))]
    public class DataContext : DbContext
    {
        // You can add custom code to this file. Changes will not be overwritten.
        // 
        // If you want Entity Framework to drop and regenerate your database
        // automatically whenever you change your model schema, please use data migrations.
        // For more information refer to the documentation:
        // http://msdn.microsoft.com/en-us/data/jj591621.aspx


        public System.Data.Entity.DbSet<Testimonial> Testimonials { get; set; }
        public System.Data.Entity.DbSet<Special> Specials { get; set; }

        public class MyConfiguration : DbMigrationsConfiguration<DataContext>
        {

            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }
        }

    public DataContext(): base("name=DataContext")
    {
       if (!Database.Exists("DataContext"))
          {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<DataContext, MyConfiguration>());
          }
    }

        

    }
}