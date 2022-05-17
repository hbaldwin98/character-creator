using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.data.migrations
{
    public partial class changedtablename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Character_Class_ClassId",
                table: "Character");

            migrationBuilder.DropForeignKey(
                name: "FK_Character_Race_RaceId",
                table: "Character");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Character",
                table: "Character");

            migrationBuilder.RenameTable(
                name: "Character",
                newName: "Characters");

            migrationBuilder.RenameIndex(
                name: "IX_Character_RaceId",
                table: "Characters",
                newName: "IX_Characters_RaceId");

            migrationBuilder.RenameIndex(
                name: "IX_Character_ClassId",
                table: "Characters",
                newName: "IX_Characters_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Characters",
                table: "Characters",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Class_ClassId",
                table: "Characters",
                column: "ClassId",
                principalTable: "Class",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Characters_Race_RaceId",
                table: "Characters",
                column: "RaceId",
                principalTable: "Race",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Class_ClassId",
                table: "Characters");

            migrationBuilder.DropForeignKey(
                name: "FK_Characters_Race_RaceId",
                table: "Characters");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Characters",
                table: "Characters");

            migrationBuilder.RenameTable(
                name: "Characters",
                newName: "Character");

            migrationBuilder.RenameIndex(
                name: "IX_Characters_RaceId",
                table: "Character",
                newName: "IX_Character_RaceId");

            migrationBuilder.RenameIndex(
                name: "IX_Characters_ClassId",
                table: "Character",
                newName: "IX_Character_ClassId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Character",
                table: "Character",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Class_ClassId",
                table: "Character",
                column: "ClassId",
                principalTable: "Class",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Character_Race_RaceId",
                table: "Character",
                column: "RaceId",
                principalTable: "Race",
                principalColumn: "Id");
        }
    }
}
