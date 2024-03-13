import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import WorksService from '#services/works_service'
import { uploadWorksValidator } from '#validators/upload_works'

@inject()
export default class WorksController {
  constructor(public worksService: WorksService) {}

  async index({ view }: HttpContext) {
    const works = await this.worksService.getWorks({ all: true })
    return view.render('pages/dashboard/works/works', { works })
  }

  async create({ request, response, session }: HttpContext) {
    try {
      const { works } = await request.validateUsing(uploadWorksValidator)
      await this.worksService.createWorks(works)

      session.flash('notification', {
        type: 'success',
        message: 'Работы добавлены',
      })

      return response.redirect().back()
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  async deleteWorks({ request, response, session }: HttpContext) {
    try {
      const { worksToDelete } = request.only(['worksToDelete'])
      await this.worksService.deleteWorks(worksToDelete)
      session.flash('notification', {
        type: 'success',
        message: 'Выбранные работы удалены',
      })

      return response.redirect().back()
    } catch (e) {
      throw e
    }
  }
}
