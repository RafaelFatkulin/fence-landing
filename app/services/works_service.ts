import { cuid } from '@adonisjs/core/helpers'
import app from '@adonisjs/core/services/app'
import Work from '#models/work'
import fs from 'node:fs'
import db from '@adonisjs/lucid/services/db'
import sharp from 'sharp'

class WorksService {
  dirPath = 'uploads/works/'
  limit = 10

  async getWorks({ all = false }: { all: boolean }): Promise<Work[]> {
    if (all) {
      return await Work.all()
    }
    return db.from('works').orderBy('created_at', 'desc').limit(this.limit)
  }

  async getWork(id: string): Promise<Work> {
    return await Work.findOrFail(+id)
  }

  async createWorks(works: any[] | null) {
    if (works) {
      for (const work of works) {
        try {
          const webpBuffer = await sharp(work.tmpPath)
            .rotate()
            .resize(1920, 1080)
            .webp({
              quality: 70,
              lossless: false,
              nearLossless: false,
              smartSubsample: false,
              loop: 0,
              force: true,
              effort: 0,
            })
            .toBuffer()

          const name = `${cuid()}.webp`
          const path = `${this.dirPath}${name}`

          if (!fs.existsSync(this.dirPath)) {
            await fs.promises.mkdir(app.makePath(this.dirPath), { recursive: true })
          }
          await fs.promises.writeFile(path, webpBuffer)
          await Work.create({ image: { path } })
        } catch (e) {
          throw e
        }
      }
    }
  }

  async deleteWorks(ids: string[]) {
    const worksToDelete = await Work.findMany(ids)
    for (const work of worksToDelete) {
      await work.delete()

      if (work.image.path) {
        fs.unlink(work.image.path, (e) => {
          return e
        })
      }
    }
  }
}

export default WorksService
