using NUnit.Framework;
using System;
using System.Reflection;
using System.Linq;
using dotnetapp.Controllers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using dotnetapp.Models;
using dotnetapp.Data;

namespace TestProject;

public class Tests
{
    [SetUp]
    public void Setup()
    {
        // assembly = typeof(FoodOrderController).Assembly;
    }

    [Test]
        public void FoodOrder_ClassExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";
            Assembly assembly = Assembly.Load(assemblyName);
            Type foodType = assembly.GetType(typeName);
            Assert.IsNotNull(foodType);
            var food = Activator.CreateInstance(foodType);
            Assert.IsNotNull(food);
        }

    [Test]
        public void Test_FoodOrder_ControllerExists()
        {
            // Replace "YourProjectNamespace" with the actual namespace of your project
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodorderControllerType = assembly.GetType(typeName);

            Assert.IsNotNull(foodorderControllerType, "FoodOrderController does not exist in the assembly.");
        }

        [Test]
        public void FoodOrder_Class_Has_Id_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Id");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(int), propertyInfo.PropertyType);
        }

        [Test]
        public void FoodOrder_Class_Has_Date_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Date");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(DateTime), propertyInfo.PropertyType);
        }

        [Test]
        public void FoodOrder_Class_Has_FoodName_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("FoodName");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }

        [Test]
        public void FoodOrder_Class_Has_Price_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Price");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(decimal), propertyInfo.PropertyType);
        }

        [Test]
        public void FoodOrder_Class_Has_Rating_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.FoodOrder";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Rating");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(decimal), propertyInfo.PropertyType);
        }


        [Test]
        public void FoodOrderController_IndexMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo indexMethod = controllerType.GetMethod("Index");

            Assert.IsNotNull(indexMethod);
            Assert.IsTrue(typeof(Task<IActionResult>).IsAssignableFrom(indexMethod.ReturnType));
        }

        [Test]
        public void FoodOrderController_CreateGetMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo createGetMethod = controllerType.GetMethod("Create", new Type[] { });

            Assert.IsNotNull(createGetMethod);
            Assert.IsTrue(typeof(IActionResult).IsAssignableFrom(createGetMethod.ReturnType));
        }

        [Test]
        public void FoodOrderController_CreatePostMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo createPostMethod = controllerType.GetMethod("Create", new[] { typeof(FoodOrder) });

            Assert.IsNotNull(createPostMethod);
            Assert.IsTrue(typeof(Task<IActionResult>).IsAssignableFrom(createPostMethod.ReturnType));
        }

        [Test]
        public void FoodOrderController_EditGetMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo editGetMethod = controllerType.GetMethod("Edit", new[] { typeof(int?) });

            Assert.IsNotNull(editGetMethod);
            Assert.IsTrue(typeof(Task<IActionResult>).IsAssignableFrom(editGetMethod.ReturnType));
        }

        [Test]
        public void FoodOrderController_EditPostMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo editPostMethod = controllerType.GetMethod("Edit", new[] { typeof(int), typeof(FoodOrder) });

            Assert.IsNotNull(editPostMethod);
            Assert.IsTrue(typeof(Task<IActionResult>).IsAssignableFrom(editPostMethod.ReturnType));
        }

        [Test]
        public void FoodOrderController_DeleteMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.FoodOrderController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            MethodInfo deleteMethod = controllerType.GetMethod("Delete", new[] { typeof(int) });

            Assert.IsNotNull(deleteMethod);
            Assert.IsTrue(typeof(Task<IActionResult>).IsAssignableFrom(deleteMethod.ReturnType));
        }
        
        [Test]
        public void Test_Create_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/FoodOrder/dotnetapp/Views/FoodOrder/"; // Replace with the folder path you want to check
            string desiredFiles = "Create.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }

         [Test]
        public void Test_Delete_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/FoodOrder/dotnetapp/Views/FoodOrder/"; // Replace with the folder path you want to check
            string desiredFiles = "Delete.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }

         [Test]
        public void Test_Edit_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/FoodOrder/dotnetapp/Views/FoodOrder/"; // Replace with the folder path you want to check
            string desiredFiles = "Edit.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }

         [Test]
        public void Test_Index_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/FoodOrder/dotnetapp/Views/FoodOrder/"; // Replace with the folder path you want to check
            string desiredFiles = "Index.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }
        

        
}