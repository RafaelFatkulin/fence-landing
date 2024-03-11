import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class General extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare type: 'phone' | 'social' | 'email'

  @column({})
  declare content: any

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime | null
}
