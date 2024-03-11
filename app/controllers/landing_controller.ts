import { HttpContext } from '@adonisjs/core/http'
import GeneralService from '#services/general_service'
import { inject } from '@adonisjs/core'
import ReviewService from '#services/review_service'

@inject()
export default class LandingController {
  constructor(
    public generalService: GeneralService,
    public reviewService: ReviewService
  ) {}

  async index({ view }: HttpContext) {
    const phoneNumber = await this.generalService.getPhoneNumber()
    const socials = await this.generalService.getSocials()
    const reviews = await this.reviewService.getReviews({})

    return view.render('pages/home', {
      phoneNumber,
      socials,
      reviews,
    })
  }

  async agreement({ view }: HttpContext) {
    const phoneNumber = await this.generalService.getPhoneNumber()
    const socials = await this.generalService.getSocials()

    return view.render('pages/agreement', {
      phoneNumber,
      socials,
    })
  }
}
