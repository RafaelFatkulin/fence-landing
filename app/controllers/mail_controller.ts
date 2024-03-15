import { HttpContext } from '@adonisjs/core/http'
import mail from '@adonisjs/mail/services/main'
import { mailValidator } from '#validators/mail'

export default class MailController {
  async sendMail({ request, response }: HttpContext) {
    try {
      const { name, email, phone } = await request.validateUsing(mailValidator)

      await mail.send((message) => {
        message
          .to('ufa.zabor@mail.ru')
          .from('ufa.zabor@mail.ru')
          .subject(`Заявка на звонок от ${name}`)
          .htmlView('emails/contact', {
            name,
            email,
            phone,
          })
      })

      return response.status(200).json({
        success: true,
        message: 'Письмо отправлено, в ближайшее время с вами свяжутся',
      })
    } catch (error) {
      return response.status(500).json({ error })
    }
  }
}
