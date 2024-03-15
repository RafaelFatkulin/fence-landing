import vine from '@vinejs/vine'

export const mailValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(8).maxLength(56),
    email: vine.string().email().trim(),
    phone: vine.string().mobile(),
  })
)
