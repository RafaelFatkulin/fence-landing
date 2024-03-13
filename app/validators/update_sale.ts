import vine from '@vinejs/vine'

export const updateSaleValidator = vine.compile(
  vine.object({
    image: vine
      .file({
        size: '10mb',
        extnames: ['jpg', 'png', 'webp'],
      })
      .optional(),
    title: vine.string().trim().minLength(8).maxLength(56),
    description: vine.string().trim().minLength(8).maxLength(1024),
  })
)
