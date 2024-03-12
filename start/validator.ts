import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  required: 'Поле обязательно для заполнения',
  string: 'Значение поля должно быть строкой',
  email: 'Почтовый адрес имеет некорректный формат',
  regex: 'Поле имеент некорректный формат',
  url: 'Ссылка имеет некорректный формат',
  minLength: 'Минимальная длина текста - {{ min }} символов',
  maxLength: 'Максимальная длина текста - {{ max }} символов',
})
