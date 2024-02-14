using dotnetapp.Data;
using dotnetapp.Models;
public interface IPlanService
{
    Plan AddPlan(Plan plan);
    Plan DeletePlan(long planId);
    List<Plan> GetAllPlans();
    Plan GetPlanById(long planId);
    Plan UpdatePlan(Plan updatedPlan, long planId);
}
