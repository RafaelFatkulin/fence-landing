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
    console.log(works)

    if (works) {
      for (const work of works) {
        const webpBuffer = await sharp(work.tmpPath)
          .rotate()
          .webp({
            quality: 5,
            effort: 0,
          })
          .toBuffer()
        console.log(app.makePath(this.dirPath))
        const name = `${cuid()}.webp`
        await fs.promises.writeFile(`${this.dirPath}${name}`, webpBuffer)
        await Work.create({ image: { name } })
      }
    }
  }

  async deleteWork(work: Work) {
    const workImagePath = app.makePath(this.dirPath, work.image.name)
    await work.delete()
    fs.unlink(workImagePath, (e) => {
      console.log(e)
    })
  }
}

export default WorksService
