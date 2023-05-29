using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebSiteTest.Data.Migrations
{
    public partial class testuserrole : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "testId",
                table: "AspNetUserRoles");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "testId",
                table: "AspNetUserRoles",
                type: "nvarchar(450)",
                nullable: true);
        }
    }
}
