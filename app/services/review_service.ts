import Review from "#models/review";
import db from "@adonisjs/lucid/services/db";
import { HttpContext } from "@adonisjs/core/http";
import { SimplePaginatorContract } from "@adonisjs/lucid/types/querybuilder";

class ReviewService {
  async getReviews({
    ctx = null,
    paginate = false,
  }: {
    ctx?: HttpContext | null
    paginate?: boolean
  }): Promise<Review[] | { meta: any; data: Review[] }> {
    const LIMIT = 10
    const page = ctx?.request.input('page', 1)

    if (paginate) {
      const reviews: SimplePaginatorContract<Review> = await db
        .from('reviews')
        .paginate(page, LIMIT)
      reviews.baseUrl('/dashboard/reviews')
      console.log(typeof reviews)
      return reviews
    } else {
      return db.from('reviews').orderBy('created_at', 'desc').limit(LIMIT);
    }
  }
}

export default ReviewService
