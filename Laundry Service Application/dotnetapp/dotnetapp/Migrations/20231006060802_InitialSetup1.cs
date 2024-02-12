using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace dotnetapp.Migrations
{
    public partial class InitialSetup1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Packages",
                columns: new[] { "Id", "ClothesPerMonth", "Description", "Name", "PricePerKg" },
                values: new object[,]
                {
                    { 1, 70, "Per/kg", "Wash & Fold", 5.0m },
                    { 2, 65, "Per/kg", "Wash & Iron", 7.0m },
                    { 3, 60, "60 Clothes /month", "Individual Package", 4.0m },
                    { 4, 110, "110 Clothes /month", "Family Package", 10.0m },
                    { 5, 80, "Per cloth", "Pay Per Cloth", 11.5m },
                    { 6, 45, "Per saree", "Saree Polishing", 9.0m },
                    { 7, 50, "Per/kg", "DryCleaning", 8.0m },
                    { 8, 50, "Per/kg", "Premium Laundry", 10.0m }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Packages",
                keyColumn: "Id",
                keyValue: 8);
        }
    }
}
