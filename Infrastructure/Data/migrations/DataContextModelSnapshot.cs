﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Infrastructure.Data;

#nullable disable

namespace Infrastructure.data.migrations
{
  [DbContext(typeof(DataContext))]
  partial class DataContextModelSnapshot : ModelSnapshot
  {
    protected override void BuildModel(ModelBuilder modelBuilder)
    {
#pragma warning disable 612, 618
      modelBuilder.HasAnnotation("ProductVersion", "6.0.1");

      modelBuilder.Entity("character_creator.Entities.Character", b =>
          {
            b.Property<int>("Id")
                      .ValueGeneratedOnAdd()
                      .HasColumnType("INTEGER");

            b.Property<int?>("ClassId")
                      .HasColumnType("INTEGER");

            b.Property<int>("Level")
                      .HasColumnType("INTEGER");

            b.Property<string>("Name")
                      .HasColumnType("TEXT");

            b.Property<int?>("RaceId")
                      .HasColumnType("INTEGER");

            b.HasKey("Id");

            b.HasIndex("ClassId");

            b.HasIndex("RaceId");

            b.ToTable("Characters");
          });

      modelBuilder.Entity("character_creator.Entities.Class", b =>
          {
            b.Property<int>("Id")
                      .ValueGeneratedOnAdd()
                      .HasColumnType("INTEGER");

            b.Property<string>("Name")
                      .HasColumnType("TEXT");

            b.HasKey("Id");

            b.ToTable("Class");
          });

      modelBuilder.Entity("character_creator.Entities.Race", b =>
          {
            b.Property<int>("Id")
                      .ValueGeneratedOnAdd()
                      .HasColumnType("INTEGER");

            b.Property<string>("Name")
                      .HasColumnType("TEXT");

            b.HasKey("Id");

            b.ToTable("Race");
          });

      modelBuilder.Entity("character_creator.Entities.Character", b =>
          {
            b.HasOne("character_creator.Entities.Class", "Class")
                      .WithMany()
                      .HasForeignKey("ClassId");

            b.HasOne("character_creator.Entities.Race", "Race")
                      .WithMany()
                      .HasForeignKey("RaceId");

            b.Navigation("Class");

            b.Navigation("Race");
          });
#pragma warning restore 612, 618
    }
  }
}
