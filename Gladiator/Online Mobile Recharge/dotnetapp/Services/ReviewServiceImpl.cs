using dotnetapp.Models;
using dotnetapp.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;
 
namespace dotnetapp.Service
{
    public class ReviewServiceImpl : ReviewService
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