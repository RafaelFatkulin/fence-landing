import { HttpContext } from '@adonisjs/core/http'

export default class ReviewsController {
  async index({ view }: HttpContext) {
    return view.render('pages/dashboard/reviews')
  }
}
