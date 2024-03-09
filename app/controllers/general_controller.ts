import { HttpContext } from '@adonisjs/core/http'

export default class GeneralController {
  async index({ view }: HttpContext) {
    return view.render('pages/dashboard/general')
  }
}
