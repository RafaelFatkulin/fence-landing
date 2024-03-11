import vine from '@vinejs/vine'

export const updatePhoneValidator = vine.compile(
  vine.object({
    phone: vine.string().regex(new RegExp('8\\d{10}$')),
  })
)
