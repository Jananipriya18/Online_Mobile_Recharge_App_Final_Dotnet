using dotnetapp.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetapp.Data;

namespace dotnetapp.Repositories
{
    public interface IReviewRepository
    {
        Task<List<Review>> GetAllReviewsAsync();
        Task<Review> AddReviewAsync(Review review);
    }

    public class ReviewRepository : IReviewRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public ReviewRepository(ApplicationDbContext dbContext) // Corrected the constructor name
        {
            _dbContext = dbContext;
        }

        public async Task<List<Review>> GetAllReviewsAsync()
        {
            return await _dbContext.Reviews.ToListAsync();
        }

        public async Task<Review> AddReviewAsync(Review review)
        {
            _dbContext.Reviews.Add(review);
            await _dbContext.SaveChangesAsync();
            return review;
        }
    }
}
