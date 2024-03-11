import db from '@adonisjs/lucid/services/db'
import General from '#models/general'

class GeneralService {
  async getPhoneNumber(): Promise<General> {
    const phoneNumber = await db.from('generals').where({
      type: 'phone',
    })

    return phoneNumber[0]
  }

  async updatePhoneNumber(phoneNumber: string) {
    return General.query()
      .where('type', 'phone')
      .update({
        content: { phone: phoneNumber },
      })
  }

  async getSocials(): Promise<General[]> {
    return db.from('generals').where({
      type: 'social',
    })
  }

  async updateSocials(links: { name: string; url: string }[]) {
    const socials = await this.getSocials()
    console.log(links)
    for (const link of links) {
      const matchedSocial = socials.find((social) => social.content.name === link.name)

      if (matchedSocial) {
        const toUpdate = await General.findOrFail(matchedSocial.id)
        await toUpdate.merge({ content: { name: link.name, link: link.url } }).save()
      }
    }
  }
}

export default GeneralService
