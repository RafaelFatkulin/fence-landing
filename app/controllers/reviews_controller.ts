import { HttpContext } from '@adonisjs/core/http'
import ReviewService from '#services/review_service'
import { inject } from '@adonisjs/core'
import { reviewValidator } from '#validators/review'

@inject()
export default class ReviewsController {
  constructor(public reviewService: ReviewService) {}

  async index(ctx: HttpContext) {
    const reviews = await this.reviewService.getReviews({ ctx, paginate: true })
    return ctx.view.render('pages/dashboard/reviews/reviews', { reviews })
  }

  async new({ view }: HttpContext) {
    return view.render('pages/dashboard/reviews/new_review')
  }

  async create({ request, response, session }: HttpContext) {
    try {
      const { name, text } = await request.validateUsing(reviewValidator)

      await this.reviewService.createReview({ name, text })

      session.flash('notification', {
        type: 'success',
        message: 'Отзыв создан',
      })

      response.redirect().toRoute('reviews.index')
    } catch (e) {
      throw e
    }
  }

  async edit({ view, params }: HttpContext) {
    const review = await this.reviewService.getReviewById(params.id)
    return view.render('pages/dashboard/reviews/edit_review', { review })
  }

  async update({ request, response, session, params }: HttpContext) {
    try {
      const { id } = params
      const { name, text } = await request.validateUsing(reviewValidator)

      await this.reviewService.updateReview({ id, name, text })

      session.flash('notification', {
        type: 'success',
        message: 'Отзыв отредактирован',
      })

      response.redirect().back()
    } catch (e) {
      throw e
    }
  }

  async delete({ response, session, params }: HttpContext) {
    try {
      const { id } = params
      await this.reviewService.deleteReview(id)

      session.flash('notification', {
        type: 'success',
        message: 'Отзыв удален',
      })

      return response.redirect().toRoute('reviews.index')
    } catch (e) {
      throw e
    }
  }
}
