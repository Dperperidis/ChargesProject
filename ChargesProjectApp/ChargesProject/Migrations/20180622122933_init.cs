using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace ChargesProject.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Charges",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Food = table.Column<string>(nullable: true),
                    Gas = table.Column<string>(nullable: true),
                    LoansInstall = table.Column<string>(nullable: true),
                    PhoneBill = table.Column<string>(nullable: true),
                    Rent = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Charges", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Charges");
        }
    }
}
