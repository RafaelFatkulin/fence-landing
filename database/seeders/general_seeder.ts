import { BaseSeeder } from '@adonisjs/lucid/seeders'
import General from '#models/general'

export default class extends BaseSeeder {
  async run() {
    await General.createMany([
      {
        id: 1,
        type: 'phone',
        content: {
          phone: '89996228168',
        },
      },
      { id: 2, type: 'social', content: { name: 'vk', link: 'https://google.com' } },
      { id: 3, type: 'social', content: { name: 'whatsupp', link: 'https://google.com' } },
      { id: 4, type: 'social', content: { name: 'telegram', link: 'https://google.com' } },
    ])
  }
}
