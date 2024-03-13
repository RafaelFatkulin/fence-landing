import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import CatalogService from '#services/catalog_service'

@inject()
export default class CatalogController {
  constructor(public catalogService: CatalogService) {}

  async index({ view }: HttpContext) {
    const catalogItems = await this.catalogService.getCatalogItems()
    return view.render('pages/dashboard/catalog/catalog', { catalogItems })
  }

  async new({ view }: HttpContext) {
    return view.render('pages/dashboard/catalog/new_catalog')
  }

  async create({ request, response }: HttpContext) {}

  async edit({ view, params }: HttpContext) {
    return view.render('pages/dashboard/catalog/edit_catalog', { id: params.id })
  }

  async update({ request, response, session, params }: HttpContext) {}

  async delete({ request, response, params }: HttpContext) {}
}
