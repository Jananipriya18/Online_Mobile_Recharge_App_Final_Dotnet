using dotnetapp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetapp.Repositories;

namespace dotnetapp.Services
{
    public interface IReviewService
    {
        Task<List<Review>> GetAllReviewsAsync();
        Task<Review> AddReviewAsync(Review review);
    }
}