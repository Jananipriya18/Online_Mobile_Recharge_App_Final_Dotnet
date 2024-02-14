using dotnetapp.Models;
using dotnetapp.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace dotnetapp.Services
{
    public class ReviewServiceImpl : IReviewService
    {
        private readonly IReviewRepository _reviewRepository;

        public ReviewServiceImpl(IReviewRepository reviewRepository)
        {
            _reviewRepository = reviewRepository;
        }

        public async Task<List<Review>> GetAllReviewsAsync()
        {
            return await _reviewRepository.GetAllReviewsAsync();
        }

        public async Task<Review> AddReviewAsync(Review review)
        {
            return await _reviewRepository.AddReviewAsync(review);
        }
    }
}
