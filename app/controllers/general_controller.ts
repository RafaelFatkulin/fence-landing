import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import GeneralService from '#services/general_service'
import { updatePhoneValidator } from '#validators/update_phone'
import { updateSocialsValidator } from '#validators/update_socials'

@inject()
export default class GeneralController {
  constructor(public generalService: GeneralService) {}

  async index({ view }: HttpContext) {
    const phoneNumber = await this.generalService.getPhoneNumber()
    const socials = await this.generalService.getSocials()

    return view.render('pages/dashboard/general', {
      phoneNumber,
      socials,
    })
  }

  async updatePhone({ session, request, response }: HttpContext) {
    try {
      const { phone } = await request.validateUsing(updatePhoneValidator)
      await this.generalService.updatePhoneNumber(phone)

      session.flash('notification', {
        type: 'success',
        message: 'Номер телефона изменен',
      })

      response.redirect().back()
    } catch (e) {
      throw e
    }
  }

  async updateSocials({ session, request, response }: HttpContext) {
    try {
      const { vk, telegram, whatsapp } = await request.validateUsing(updateSocialsValidator)
      console.log(vk)
      const links = [
        { name: 'vk', url: vk },
        { name: 'telegram', url: telegram },
        { name: 'whatsapp', url: whatsapp },
      ]

      await this.generalService.updateSocials(links)

      session.flash('notification', {
        type: 'success',
        message: 'Ссылки на соцсети обновлены',
      })

      response.redirect().back()
    } catch (e) {
      throw e
    }
  }
}
