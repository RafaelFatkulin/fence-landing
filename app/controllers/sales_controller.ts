import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import SaleService from '#services/sale_service'
import { createSaleValidator } from '#validators/create_sale'
import { updateSaleValidator } from '#validators/update_sale'

@inject()
export default class SalesController {
  constructor(public saleService: SaleService) {}

  async index({ view }: HttpContext) {
    const sales = await this.saleService.getSales()
    return view.render('pages/dashboard/sales/sales', { sales })
  }

  async new({ view }: HttpContext) {
    return view.render('pages/dashboard/sales/new_sale')
  }

  async create({ request, response, session }: HttpContext) {
    try {
      const { title, description, image } = await request.validateUsing(createSaleValidator)

      await this.saleService.createSale({ title, description, image })

      session.flash('notification', {
        type: 'success',
        message: 'Акция добавлена',
      })

      return response.redirect().toRoute('sales.index')
    } catch (e) {
      throw e
    }
  }

  async edit({ view, params, session }: HttpContext) {
    const sale = await this.saleService.getSaleById(params.id)

    session.flash('notification', {
      type: 'success',
      message: 'Акция редактирована',
    })

    return view.render('pages/dashboard/sales/edit_sale', { sale })
  }

  async update({ request, response, session, params }: HttpContext) {
    try {
      const { title, description, image } = await request.validateUsing(updateSaleValidator)

      await this.saleService.updateSale({ id: params.id, title, description, image })

      session.flash('notification', {
        type: 'success',
        message: 'Акция редактирована',
      })

      return response.redirect().toRoute('sales.index')
    } catch (e) {
      throw e
    }
  }

  async delete({ response, session, params }: HttpContext) {
    try {
      await this.saleService.deleteSale(params.id)

      session.flash('notification', {
        type: 'success',
        message: 'Акция удалена',
      })

      return response.redirect().toRoute('sales.index')
    } catch (e) {
      throw e
    }
  }
}
