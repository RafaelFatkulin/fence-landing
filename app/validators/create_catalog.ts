import vine from '@vinejs/vine'

export const createCatalogValidator = vine.compile(
  vine.object({
    image: vine.file({
      size: '10mb',
      extnames: ['jpg', 'png', 'webp'],
    }),
    title: vine.string().trim().minLength(8).maxLength(56),
    price: vine.string().trim(),
    key_price: vine.string().trim(),
    detail_title: vine.any(),
    detail_text: vine.any(),
  })
)
