import Review from '#models/review'
import db from '@adonisjs/lucid/services/db'
import { HttpContext } from '@adonisjs/core/http'
import { SimplePaginatorContract } from '@adonisjs/lucid/types/querybuilder'

class ReviewService {
  async getReviews({
    ctx = null,
    paginate = false,
  }: {
    ctx?: HttpContext | null
    paginate?: boolean
  }): Promise<Review[] | { meta: any; data: Review[] }> {
    const LIMIT = 12
    const page = ctx?.request.input('page', 1)

    if (paginate) {
      const reviews: SimplePaginatorContract<Review> = await db
        .from('reviews')
        .paginate(page, LIMIT)
      reviews.baseUrl('/dashboard/reviews')
      console.log(typeof reviews)
      return reviews
    } else {
      return db.from('reviews').orderBy('created_at', 'desc').limit(LIMIT)
    }
  }

  async getReviewById(id: string): Promise<Review | null> {
    return await Review.findOrFail(+id)
  }

  async createReview({ name, text }: { name: string; text: string }): Promise<Review> {
    return await Review.create({ name, text })
  }

  async updateReview({
    id,
    name,
    text,
  }: {
    id: string
    name: string
    text: string
  }): Promise<Review> {
    const review = await Review.findOrFail(+id)
    return await review.merge({ name, text }).save()
  }

  async deleteReview(id: string): Promise<any> {
    const review = await Review.findOrFail(+id)
    return await review.delete()
  }
}

export default ReviewService
