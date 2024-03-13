import vine from '@vinejs/vine'

export const uploadWorksValidator = vine.compile(
  vine.object({
    works: vine
      .array(
        vine.file({
          size: '10mb',
          extnames: ['jpg', 'png', 'webp'],
        })
      )
      .nullable(),
  })
)
