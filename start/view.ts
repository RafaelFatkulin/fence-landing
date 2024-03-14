import edge from 'edge.js'

edge.global('config', {
  menu: [
    {
      title: 'Главная',
      path: '#',
    },
    {
      title: 'Каталог',
      path: '#catalog',
    },
    {
      title: 'Акции',
      path: '#sales',
    },
    {
      title: 'Работы',
      path: '#works',
    },
    {
      title: 'Отзывы',
      path: '#reviews',
    },
    {
      title: 'Оставить заявку',
      path: '#contacts',
    },
  ],
  adminMenu: [
    {
      title: 'Информация',
      path: '/dashboard/general',
      icon: '#info',
    },
    {
      title: 'Виды работ',
      path: '/dashboard/catalog',
      icon: '#catalog',
    },
    {
      title: 'Акции',
      path: '/dashboard/sales',
      icon: '#sale',
    },
    {
      title: 'Примеры работ',
      path: '/dashboard/works',
      icon: '#works',
    },
    {
      title: 'Отзывы',
      path: '/dashboard/reviews',
      icon: '#review',
    },
    {
      title: 'На сайт',
      path: '/',
      icon: '#back',
    },
  ],
  features: [
    {
      title: 'Опыт',
      text: 'У нас опытные мастера с большим стажем работы',
      icon: '#work',
    },
    {
      title: 'Материалы',
      text: 'Мы используем только качественные материалы для заборов и ворот',
      icon: '#materials',
    },
    {
      title: 'Цены',
      text: 'Наши услуги оптимальны в отношении цены и качества',
      icon: '#prices',
    },
  ],
  stages: [
    {
      title: 'Замер',
      icon: '#ruler',
      text: 'Наш сотрудник приезжает к вам на участок после получения заявки и использует специализированное оборудование для проведения всех необходимых замеров.',
    },
    {
      title: 'Установка столбов',
      icon: '#column',
      text: 'Этот этап представляет собой начало непосредственного строительства, и его сроки и технология зависят от материала, выбранного для строительства, а также от характеристик грунта на участке.',
    },
    {
      title: 'Сварка лаг',
      icon: '#lag',
      text: 'Мы свариваем металлические лаги на уже установленные опоры, на которые затем крепится профилированный лист.',
    },
    {
      title: 'Крепление материала',
      icon: '#drill',
      text: 'Мастер закрепляет профнастил на каркасе.',
    },
    {
      title: 'Финишные работы',
      icon: '#finish',
      text: 'Мы производим уборку строительного мусора и передаем ограду заказчику. После этого клиент подписывает акт выполненных работ.',
    },
  ],
})
