using ChargesProject.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ChargesProject.Context
{
    public class SqlContext : DbContext
    {

        public SqlContext(DbContextOptions<SqlContext> options) : base(options) { }

        public DbSet<Charges> Charges { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            #region Charges
            var chargesBuilder = modelBuilder.Entity<Charges>();
            chargesBuilder.HasKey(h => h.Id);
            //userBuilder.Property(p => p.Email).IsRequired();
            //userBuilder.Property(p => p.Lastname).IsRequired();
            //userBuilder.Property(p => p.Name).IsRequired();
            #endregion

        }
    }
}
