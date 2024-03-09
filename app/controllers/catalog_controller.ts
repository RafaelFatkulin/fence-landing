import { HttpContext } from '@adonisjs/core/http'

export default class CatalogController {
  async index({ view }: HttpContext) {
    return view.render('pages/dashboard/catalog')
  }
}
