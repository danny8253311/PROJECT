using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebSiteTest.Data.Migrations
{
    public partial class picturetypechangeimage1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Picture",
                table: "AspNetUsers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
    name: "Picture",
    table: "TableName",
    type: "varbinary(max)",
    nullable: true,
    oldClrType: typeof(string),
    oldType: "nvarchar(max)",
    oldNullable: true);
        }
    }
}
