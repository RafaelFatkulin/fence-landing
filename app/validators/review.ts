import vine from '@vinejs/vine'

export const reviewValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(8).maxLength(56),
    text: vine.string().trim().minLength(8).maxLength(1024),
  })
)
