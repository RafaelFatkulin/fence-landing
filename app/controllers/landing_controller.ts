import { HttpContext } from '@adonisjs/core/http'
import GeneralService from '#services/general_service'
import { inject } from '@adonisjs/core'
import ReviewService from '#services/review_service'
import WorksService from '#services/works_service'

@inject()
export default class LandingController {
  constructor(
    public generalService: GeneralService,
    public reviewService: ReviewService,
    public worksService: WorksService
  ) {}

  async index({ view }: HttpContext) {
    const phoneNumber = await this.generalService.getPhoneNumber()
    const socials = await this.generalService.getSocials()
    const reviews = await this.reviewService.getReviews({})
    const works = await this.worksService.getWorks({ all: false })

    return view.render('pages/home', {
      phoneNumber,
      socials,
      reviews,
      works,
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
