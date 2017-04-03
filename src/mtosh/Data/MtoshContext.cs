using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using mtosh.web.ViewModels;

namespace mtosh.web.Data
{
    public class MtoshContext : DbContext
    {
        public MtoshContext(DbContextOptions<MtoshContext> options) : base(options)
        {
        }

        public DbSet<TestData> TestData { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TestData>().ToTable("TestData");
        }
    }
}
