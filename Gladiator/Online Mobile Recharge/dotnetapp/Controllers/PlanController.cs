// [Route("api/admin")]
// [ApiController]
// public class AdminController : ControllerBase
// {
//     private readonly ApplicationDbContext _context;

//     public AdminController(ApplicationDbContext context)
//     {
//         _context = context;
//     }

//     // POST: api/admin/addPlan
//     [HttpPost("addPlan")]
//     public IActionResult AddPlan([FromBody] Plan plan)
//     {
//         if (plan == null)
//         {
//             return BadRequest("Invalid data");
//         }

//         _context.Plans.Add(plan);
//         _context.SaveChanges();

//         return Ok("Plan added successfully");
//     }

//     // GET: api/admin/getAllPlan
//     [HttpGet("getAllPlan")]
//     public IActionResult GetAllPlans()
//     {
//         var plans = _context.Plans.ToList();
//         return Ok(plans);
//     }

//     // PUT: api/admin/editPlan/{planId}
//     [HttpPut("editPlan/{planId}")]
//     public IActionResult EditPlan(long planId, [FromBody] Plan updatedPlan)
//     {
//         var existingPlan = _context.Plans.Find(planId);

//         if (existingPlan == null)
//         {
//             return NotFound("Plan not found");
//         }

//         // Update properties based on your requirements
//         existingPlan.PlanType = updatedPlan.PlanType;
//         existingPlan.PlanName = updatedPlan.PlanName;
//         existingPlan.PlanValidity = updatedPlan.PlanValidity;
//         existingPlan.PlanDetails = updatedPlan.PlanDetails;
//         existingPlan.PlanPrice = updatedPlan.PlanPrice;

//         _context.SaveChanges();

//         return Ok("Plan updated successfully");
//     }

//     // DELETE: api/admin/deletePlan/{planId}
//     [HttpDelete("deletePlan/{planId}")]
//     public IActionResult DeletePlan(long planId)
//     {
//         var plan = _context.Plans.Find(planId);

//         if (plan == null)
//         {
//             return NotFound("Plan not found");
//         }

//         _context.Plans.Remove(plan);
//         _context.SaveChanges();

//         return Ok("Plan deleted successfully");
//     }
// }
