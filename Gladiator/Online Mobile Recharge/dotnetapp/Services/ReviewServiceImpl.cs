using dotnetapp.Models;
using dotnetapp.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
using dotnetapp.Data;

namespace dotnetapp.Services
{
    public class ReviewServiceImpl : IReviewService
    {
        private readonly ReviewRepository _reviewRepo;
 
        public ReviewServiceImpl(ReviewRepository reviewRepo)
        {
            _reviewRepo = reviewRepo;
        }
 
        public async Task<List<Review>> GetAllReviewsAsync()
        {
            return await _reviewRepo.GetAllReviewsAsync();
        }
 
        public async Task<Review> AddReviewAsync(Review review)
        {
            return await _reviewRepo.AddReviewAsync(review);
        }
    }
}