import { HttpContext } from '@adonisjs/core/http'

export default class WorksController {
  async index({ view }: HttpContext) {
    return view.render('pages/dashboard/works')
  }
}
