@model dotnetapp.Models.Executive

<h2>Create Executive</h2>
<form asp-controller="Executive" asp-action="Create" method="post">
    <div class="form-group">
        <label asp-for="ExecutiveName"></label>
        <input asp-for="ExecutiveName" class="form-control" />
        <span asp-validation-for="ExecutiveName" class="text-danger"></span>
    </div>

    <div class="form-group">
        <label asp-for="ContactNumber"></label>
        <input asp-for="ContactNumber" class="form-control" />
        <span asp-validation-for="ContactNumber" class="text-danger"></span>
    </div>
    <!-- Other properties for creating executives -->

    @if (ViewBag.Complaints != null && ViewBag.Complaints.Count > 0)
    {
        <div class="form-group">
            <label>Select Complaints</label>
            <br />
            @foreach (var complaint in ViewBag.Complaints)
            {
                <input type="checkbox" asp-for="Complaints" value="@complaint.ComplaintID" />
                <label>@complaint.Description</label>
                <br />
            }
            <span asp-validation-for="Complaints" class="text-danger"></span>
        </div>
    }
    <button type="submit" class="btn btn-primary">Create</button>
</form>
The Complaints field is required.
The Complaints field is required.
The Complaints field is required.