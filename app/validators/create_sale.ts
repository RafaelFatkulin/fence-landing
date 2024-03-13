import vine from '@vinejs/vine'

export const createSaleValidator = vine.compile(
  vine.object({
    image: vine.file({
      size: '10mb',
      extnames: ['jpg', 'png', 'webp'],
    }),
    title: vine.string().trim().minLength(8).maxLength(56),
    description: vine.string().trim().minLength(8).maxLength(1024),
  })
)
