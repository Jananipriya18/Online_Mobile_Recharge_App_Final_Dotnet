using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class InitialSetup4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "LaundryStatuses",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Scheduled" },
                    { 2, "PickedUp" },
                    { 3, "UnderLaundry" },
                    { 4, "QualityCheck" },
                    { 5, "Delivered" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "LaundryStatuses",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "LaundryStatuses",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "LaundryStatuses",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "LaundryStatuses",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "LaundryStatuses",
                keyColumn: "Id",
                keyValue: 5);
        }
    }
}
