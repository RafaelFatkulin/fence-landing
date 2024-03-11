import { HttpContext } from '@adonisjs/core/http'
import GeneralService from '#services/general_service'
import { inject } from '@adonisjs/core'

@inject()
export default class LandingController {
  constructor(public generalService: GeneralService) {}

  async index({ view }: HttpContext) {
    const phoneNumber = await this.generalService.getPhoneNumber()
    const socials = await this.generalService.getSocials()

    return view.render('pages/home', {
      phoneNumber,
      socials,
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
