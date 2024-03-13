import Sale from '#models/sale'
import sharp from 'sharp'
import { cuid } from '@adonisjs/core/helpers'
import fs from 'node:fs'
import app from '@adonisjs/core/services/app'

class SaleService {
  dirPath = 'uploads/sales/'

  async createWebpBuffet(image: any) {
    return await sharp(image.tmpPath)
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
  }

  async getSales(): Promise<Sale[]> {
    return await Sale.all()
  }

  async getSaleById(id: string): Promise<Sale | null> {
    return await Sale.findOrFail(+id)
  }

  async createSale({
    title,
    description,
    image,
  }: {
    title: string
    description: string
    image: any
  }): Promise<Sale> {
    const webpBuffer = await this.createWebpBuffet(image)

    const name = `${cuid()}.webp`

    if (!fs.existsSync(this.dirPath)) {
      await fs.promises.mkdir(app.makePath(this.dirPath), { recursive: true })
    }

    await fs.promises.writeFile(`${this.dirPath}${name}`, webpBuffer)

    return await Sale.create({ title, description, image: { name } })
  }

  async updateSale({
    id,
    title,
    description,
    image,
  }: {
    id: string
    title?: string
    description?: string
    image?: any
  }): Promise<Sale> {
    const sale = await Sale.findOrFail(+id)

    if (image) {
      const saleImagePath = app.makePath(this.dirPath, sale.image.name)
      fs.unlink(saleImagePath, (e) => e)

      const webpBuffer = await this.createWebpBuffet(image)

      const name = `${cuid()}.webp`

      if (!fs.existsSync(this.dirPath)) {
        await fs.promises.mkdir(app.makePath(this.dirPath), { recursive: true })
      }

      await fs.promises.writeFile(`${this.dirPath}${name}`, webpBuffer)

      return await sale.merge({ title, description, image: { name } }).save()
    }

    return await sale.merge({ title, description }).save()
  }

  async deleteSale(id: string): Promise<any> {
    const sale = await Sale.findOrFail(+id)

    const saleImagePath = app.makePath(this.dirPath, sale.image.name)
    fs.unlink(saleImagePath, (e) => e)
    return await sale.delete()
  }
}

export default SaleService
