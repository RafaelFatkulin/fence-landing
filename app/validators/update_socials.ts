import vine from '@vinejs/vine'

export const updateSocialsValidator = vine.compile(
  vine.object({
    vk: vine.string().url(),
    telegram: vine.string().url(),
    whatsapp: vine.string().url(),
  })
)
