public interface IPlanRepository
{
    Plan Add(Plan plan);
    Plan Delete(long planId);
    List<Plan> GetAll();
    Plan GetById(long planId);
    Plan Update(Plan updatedPlan, long planId);
}

public class PlanRepository : IPlanRepository
{
    private readonly ApplicationDbContext _context;

    public PlanRepository(ApplicationDbContext context)
    {
        _context = context;
    }

    public Plan Add(Plan plan)
    {
        _context.Plans.Add(plan);
        _context.SaveChanges();
        return plan;
    }

    public Plan Delete(long planId)
    {
        var plan = _context.Plans.Find(planId);
        if (plan != null)
        {
            _context.Plans.Remove(plan);
            _context.SaveChanges();
        }
        return plan;
    }

    public List<Plan> GetAll()
    {
        return _context.Plans.ToList();
    }

    public Plan GetById(long planId)
    {
        return _context.Plans.Find(planId);
    }

    public Plan Update(Plan updatedPlan, long planId)
    {
        var existingPlan = _context.Plans.Find(planId);

        if (existingPlan != null)
        {
            existingPlan.PlanType = updatedPlan.PlanType;
            existingPlan.PlanName = updatedPlan.PlanName;
            existingPlan.PlanValidity = updatedPlan.PlanValidity;
            existingPlan.PlanOffer = updatedPlan.PlanOffer;
            existingPlan.Price = updatedPlan.Price;
            existingPlan.Description = updatedPlan.Description;

            _context.SaveChanges();
        }

        return existingPlan;
    }
}
