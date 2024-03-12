import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    await User.createMany([
      {
        fullName: 'Юнир Айдашев',
        email: 'admin@admin.com',
        password: 'password',
      },
    ])
  }
}
