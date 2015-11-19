using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Data.Entity.Migrations;
using Samdos.Models;

namespace Samdos.Models
{
    public class DataContext : DbContext
    {

        public DataContext() : base("name=DataContext")
        {
            if (!Database.Exists("DataContext"))
            {
                // Need to initialize database with configuration 
                Database.SetInitializer(new MigrateDatabaseToLatestVersion<DataContext, MyConfiguration>());
            }
         }


        public class MyConfiguration : DbMigrationsConfiguration<DataContext>
        {

            public MyConfiguration()
            {
                this.AutomaticMigrationsEnabled = true;
            }
        }


        public DbSet<Testimonial> Testimonials { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}