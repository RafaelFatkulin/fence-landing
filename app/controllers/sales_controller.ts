import { HttpContext } from '@adonisjs/core/http'

export default class SalesController {
  async index({ view }: HttpContext) {
    return view.render('pages/dashboard/sales')
  }
}
