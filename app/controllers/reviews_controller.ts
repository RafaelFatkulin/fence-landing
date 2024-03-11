import { HttpContext } from '@adonisjs/core/http'
import ReviewService from '#services/review_service'
import { inject } from '@adonisjs/core'

@inject()
export default class ReviewsController {
  constructor(public reviewService: ReviewService) {}

  async index(ctx: HttpContext) {
    const reviews = await this.reviewService.getReviews({ ctx, paginate: true })
    console.log(reviews)
    return ctx.view.render('pages/dashboard/reviews/reviews', { reviews })
  }

  async new({ view }: HttpContext) {
    return view.render('pages/dashboard/reviews/new_review')
  }

  async edit({ view }: HttpContext) {
    return view.render('pages/dashboard/reviews/edit_review')
  }
}
