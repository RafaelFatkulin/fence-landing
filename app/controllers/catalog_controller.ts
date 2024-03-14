import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import CatalogService from '#services/catalog_service'
import { createCatalogValidator } from '#validators/create_catalog'
import { updateCatalogValidator } from '#validators/update_catalog'

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

  async create({ request, response, session }: HttpContext) {
    try {
      const {
        title,
        price,
        key_price: keyPrice,
        image,
        detail_title: detailTitles,
        detail_text: detailTexts,
      } = await request.validateUsing(createCatalogValidator)

      await this.catalogService.createCatalog({
        title,
        price,
        keyPrice,
        image,
        detailTitles,
        detailTexts,
      })

      session.flash('notification', {
        type: 'success',
        message: 'Акция добавлена',
      })
      return response.redirect().toRoute('catalog.index')
    } catch (e) {
      throw e
    }
  }

  async edit({ view, params }: HttpContext) {
    const catalog = await this.catalogService.getCatalogById(params.id)
    return view.render('pages/dashboard/catalog/edit_catalog', { catalog })
  }

  async update({ request, response, session, params }: HttpContext) {
    try {
      const {
        title,
        price,
        key_price: keyPrice,
        image,
        detail_title: detailTitles,
        detail_text: detailTexts,
      } = await request.validateUsing(updateCatalogValidator)

      await this.catalogService.updateCatalog({
        id: params.id,
        title,
        price,
        keyPrice,
        image,
        detailTitles,
        detailTexts,
      })

      session.flash('notification', {
        type: 'success',
        message: 'Вид работы редактирован',
      })

      return response.redirect().toRoute('catalog.index')
    } catch (e) {
      throw e
    }
  }

  async delete({ response, params, session }: HttpContext) {
    try {
      await this.catalogService.deleteCatalog(params.id)

      session.flash('notification', {
        type: 'success',
        message: 'Вид работы удален',
      })

      return response.redirect().toRoute('catalog.index')
    } catch (e) {
      throw e
    }
  }
}
