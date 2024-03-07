import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
  // Applicable for all fields
  required: 'Поле обязательно для заполнения',
  string: 'Значение поля должно быть строкой',
  email: 'Почтовый адрес имеет некорректный формат',
})
