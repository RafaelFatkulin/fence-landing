import sharp from 'sharp'
import { cuid } from '@adonisjs/core/helpers'
import fs from 'node:fs'
import app from '@adonisjs/core/services/app'
import Catalog from '#models/catalog'

type DetailItem = { title: string; text: string }
type Details = { data: DetailItem[] }

class CatalogService {
  dirPath = 'uploads/catalog/'

  async createWebpBuffet(image: any) {
    return await sharp(image.tmpPath)
      .rotate()
      .resize(1920, 1080)
      .webp({
        quality: 90,
        lossless: false,
        nearLossless: false,
        smartSubsample: false,
        loop: 0,
        force: true,
        effort: 0,
      })
      .toBuffer()
  }

  async getCatalogItems(): Promise<Catalog[]> {
    return await Catalog.all()
  }

  async getCatalogById(id: string): Promise<Catalog | null> {
    return await Catalog.findOrFail(+id)
  }

  async createCatalog({
    title,
    price,
    keyPrice,
    image,
    detailTitles,
    detailTexts,
  }: {
    title: string
    price: string
    keyPrice: string
    image: any
    detailTitles: string[]
    detailTexts: string[]
  }) {
    const webpBuffer = await this.createWebpBuffet(image)

    const details: Details = { data: [] }
    const detailItems: DetailItem[] = []

    for (const [i, detailTitle] of detailTitles.entries()) {
      if (detailTitle && detailTexts[i]) {
        detailItems.push({ title: detailTitle, text: detailTexts[i] })
      }
    }
    details.data = detailItems

    const name = `${cuid()}.webp`
    const path = `${this.dirPath}${name}`

    if (!fs.existsSync(this.dirPath)) {
      await fs.promises.mkdir(app.makePath(this.dirPath), { recursive: true })
    }

    await fs.promises.writeFile(path, webpBuffer)

    return await Catalog.create({
      title,
      price: +price,
      keyPrice: +keyPrice,
      image: { path },
      details,
    })
  }

  async updateCatalog({
    id,
    title,
    price,
    keyPrice,
    image,
    detailTitles,
    detailTexts,
  }: {
    id: string
    title: string
    price: string
    keyPrice: string
    image?: any
    detailTitles: string[]
    detailTexts: string[]
  }): Promise<Catalog> {
    const catalog = await Catalog.findOrFail(+id)

    const details: Details = { data: [] }
    const detailItems: DetailItem[] = []

    if (detailTitles && detailTexts) {
      for (const [i, detailTitle] of detailTitles.entries()) {
        if (detailTitle && detailTexts[i]) {
          detailItems.push({ title: detailTitle, text: detailTexts[i] })
        }
      }
      details.data = detailItems
    }

    if (image) {
      fs.unlink(catalog.image.path, (e) => e)

      const webpBuffer = await this.createWebpBuffet(image)

      const name = `${cuid()}.webp`
      const path = `${this.dirPath}${name}`

      if (!fs.existsSync(this.dirPath)) {
        await fs.promises.mkdir(app.makePath(this.dirPath), { recursive: true })
      }

      await fs.promises.writeFile(path, webpBuffer)

      return await catalog
        .merge({ title, price: +price, keyPrice: +keyPrice, image: { path }, details })
        .save()
    }

    return await catalog.merge({ title, price: +price, keyPrice: +keyPrice, details }).save()
  }

  async deleteCatalog(id: string): Promise<any> {
    const catalog = await Catalog.findOrFail(+id)
    fs.unlink(catalog.image.path, (e) => e)
    return await catalog.delete()
  }
}

export default CatalogService
