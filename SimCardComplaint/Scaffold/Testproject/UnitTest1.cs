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
        public void Complaint_ClassExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";
            Assembly assembly = Assembly.Load(assemblyName);
            Type foodType = assembly.GetType(typeName);
            Assert.IsNotNull(foodType);
            var food = Activator.CreateInstance(foodType);
            Assert.IsNotNull(food);
        }
    [Test]
        public void Executive_ClassExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Executive";
            Assembly assembly = Assembly.Load(assemblyName);
            Type foodType = assembly.GetType(typeName);
            Assert.IsNotNull(foodType);
            var food = Activator.CreateInstance(foodType);
            Assert.IsNotNull(food);
        }

    [Test]
        public void Test_Complaint_ControllerExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.ComplaintController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type complaintControllerType = assembly.GetType(typeName);

            Assert.IsNotNull(complaintControllerType, "ComplaintController does not exist in the assembly.");
        }
        [Test]
        public void Test_Executive_ControllerExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.ExecutiveController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type executiveControllerType = assembly.GetType(typeName);

            Assert.IsNotNull(executiveControllerType, "ExecutiveController does not exist in the assembly.");
        }

        [Test]
        public void Complaint_Class_Has_ComplaintID_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ComplaintID");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(int), propertyInfo.PropertyType);
        }

         [Test]
         public void Complaint_Class_Has_CustomerName_Property()
         {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

             Assembly assembly = Assembly.Load(assemblyName);
             Type foodOrderType = assembly.GetType(typeName);

             PropertyInfo propertyInfo = foodOrderType.GetProperty("CustomerName");

             Assert.IsNotNull(propertyInfo);
             Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
         }

        [Test]
        public void Complaint_Class_Has_ContactNumber_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ContactNumber");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }

        [Test]
        public void Complaint_Class_Has_SIMCardNumber_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("SIMCardNumber");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }

        [Test]
        public void Complaint_Class_Has_Description_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Description");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }
            [Test]
        public void Complaint_Class_Has_Status_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Status");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }
    [Test]
        public void Complaint_Class_Has_ExecutiveID_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ExecutiveID");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(int), propertyInfo.PropertyType);
        }
    [Test]
        public void Complaint_Class_Has_Executive_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Complaint";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("Executive");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(Executive), propertyInfo.PropertyType);
        }
        [Test]
        public void Executive_Class_Has_ExecutiveID_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Executive";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ExecutiveID");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(int), propertyInfo.PropertyType);
        }
        [Test]
        public void Executive_Class_Has_ExecutiveName_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Executive";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ExecutiveName");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }
        [Test]
        public void Executive_Class_Has_ContactNumber_Property()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Models.Executive";

            Assembly assembly = Assembly.Load(assemblyName);
            Type foodOrderType = assembly.GetType(typeName);

            PropertyInfo propertyInfo = foodOrderType.GetProperty("ContactNumber");

            Assert.IsNotNull(propertyInfo);
            Assert.AreEqual(typeof(string), propertyInfo.PropertyType);
        }


        [Test]
        public void ComplaintController_CreateMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.ComplaintController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            // Get the Create method with the expected parameters
            MethodInfo createMethod = controllerType.GetMethod("Create", new[] { typeof(Complaint) });

            Assert.IsNotNull(createMethod);
            Assert.IsTrue(typeof(IActionResult).IsAssignableFrom(createMethod.ReturnType));
        }


            [Test]
        public void ComplaintController_CreatePostMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.ComplaintController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            // Get the Create (POST) method
            MethodInfo createPostMethod = controllerType.GetMethod("Create", new[] { typeof(Complaint) });
            var postAttributes = createPostMethod?.GetCustomAttributes(typeof(HttpPostAttribute), true);

            Assert.IsNotNull(createPostMethod);
            Assert.IsNotNull(postAttributes);
        }

        [Test]
        public void ComplaintController_DashboardMethodExists()
        {
            string assemblyName = "dotnetapp";
            string typeName = "dotnetapp.Controllers.ComplaintController";

            Assembly assembly = Assembly.Load(assemblyName);
            Type controllerType = assembly.GetType(typeName);

            // Get the Dashboard method
            MethodInfo dashboardMethod = controllerType.GetMethod("Dashboard");

            Assert.IsNotNull(dashboardMethod);
        }



   [Test]
public void ExecutiveController_IndexMethodExists()
{
    string assemblyName = "dotnetapp";
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Index";

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the Index method
    MethodInfo indexMethod = controllerType.GetMethod(methodName);

    Assert.IsNotNull(indexMethod);
}

// [Test]
// public void ExecutiveController_CreateMethodExists()
// {
//     string assemblyName = "dotnetapp"; // Replace with your assembly name
//     string typeName = "dotnetapp.Controllers.ExecutiveController";
//     string methodName = "Create";

//     Assembly assembly = Assembly.Load(assemblyName);
//     Type controllerType = assembly.GetType(typeName);

//     // Get the Create method
//     MethodInfo createMethod = controllerType.GetMethod(methodName);

//     Assert.IsNotNull(createMethod);
// }

[Test]
public void ExecutiveController_CreatePostMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Create"; // Assuming the HTTP POST method has the same name as Create

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the HTTP POST Create method
    MethodInfo createPostMethod = controllerType.GetMethods().FirstOrDefault(m => m.Name == methodName && m.GetCustomAttributes(typeof(HttpPostAttribute), true).Length > 0);

    Assert.IsNotNull(createPostMethod);
}
[Test]
public void ExecutiveController_EditMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Edit";

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the Edit method
    MethodInfo editMethod = controllerType.GetMethod(methodName, new[] { typeof(int) });

    Assert.IsNotNull(editMethod);
}

[Test]
public void ExecutiveController_EditPostMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Edit"; // Assuming the HTTP POST method has the same name as Edit

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the HTTP POST Edit method
    MethodInfo editPostMethod = controllerType.GetMethods().FirstOrDefault(m => m.Name == methodName && m.GetCustomAttributes(typeof(HttpPostAttribute), true).Length > 0);

    Assert.IsNotNull(editPostMethod);
}



[Test]
public void ExecutiveController_DeleteMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Delete";

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the Delete method
    MethodInfo deleteMethod = controllerType.GetMethod(methodName, new[] { typeof(int?) });

    Assert.IsNotNull(deleteMethod);
}

[Test]
public void ExecutiveController_DeleteConfirmedMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "DeleteConfirmed";

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the DeleteConfirmed method
    MethodInfo deleteConfirmedMethod = controllerType.GetMethod(methodName, new[] { typeof(int) });

    Assert.IsNotNull(deleteConfirmedMethod);
}

[Test]
public void ExecutiveController_CreateMethodExists()
{
    string assemblyName = "dotnetapp"; // Replace with your assembly name
    string typeName = "dotnetapp.Controllers.ExecutiveController";
    string methodName = "Create";

    Assembly assembly = Assembly.Load(assemblyName);
    Type controllerType = assembly.GetType(typeName);

    // Get the Create method that does not accept any parameters
    MethodInfo createMethod = controllerType.GetMethod(methodName, Type.EmptyTypes);

    Assert.IsNotNull(createMethod);
}

        [Test]
        public void Test_Create_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/SimCardComplaint/dotnetapp/Views/Executive/"; // Replace with the folder path you want to check
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
            string folderPath = @"/home/coder/project/workspace/SimCardComplaint/dotnetapp/Views/Executive/"; // Replace with the folder path you want to check
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
        public void Test_Complaint_Create_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/SimCardComplaint/dotnetapp/Views/Complaint/"; // Replace with the folder path you want to check
            string desiredFiles = "Create.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }    
        [Test]
        public void Test_Dashboard_Views_File_Exists()
        {
            string folderPath = @"/home/coder/project/workspace/SimCardComplaint/dotnetapp/Views/Complaint/"; // Replace with the folder path you want to check
            string desiredFiles = "Dashboard.cshtml"; // Replace with the names of the files you want to check

            bool folderExists = Directory.Exists(folderPath);

            Assert.IsTrue(folderExists, "The folder does not exist.");
            string filePath = Path.Combine(folderPath, desiredFiles);
            bool fileExists = File.Exists(filePath);
            Assert.IsTrue(fileExists, $"File '{desiredFiles}' does not exist.");
        }        
}