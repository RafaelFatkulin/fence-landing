import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import WorksService from '#services/works_service'
import { uploadWorksValidator } from '#validators/upload_works'
import app from '@adonisjs/core/services/app'
import { cuid } from '@adonisjs/core/helpers'
import Work from '#models/work'
import * as fs from 'node:fs'

@inject()
export default class WorksController {
  constructor(public worksService: WorksService) {}

  async index({ view }: HttpContext) {
    const works = await this.worksService.getWorks({ all: true })
    return view.render('pages/dashboard/works/works', { works })
  }

  async create({ request, response }: HttpContext) {
    try {
      const { works } = await request.validateUsing(uploadWorksValidator)
      await this.worksService.createWorks(works)
      return response.redirect().back()
    } catch (e) {
      throw e
    }
  }

  async delete({ params, request, response }: HttpContext) {
    try {
      const { id } = params
      const work = await this.worksService.getWork(id)

      await this.worksService.deleteWork(work)

      return response.redirect().back()
    } catch (e) {
      throw e
    }
  }
}
