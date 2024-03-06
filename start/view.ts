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
      title: 'Контакты',
      path: '#contacts',
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
  prices: [
    {
      title: 'Забор из профнастила',
      details: [
        { title: 'Высота', text: 'от 1.5м до 3м' },
        { title: 'Толщина листа', text: 'от 0.4мм до 0.7мм' },
        { title: 'Профиль', text: 'C8/C10' },
        { title: 'Покрытие', text: 'оцинкованое/полимерное' },
        { title: 'Столбы', text: 'металл/кирпич/бетон' },
        { title: 'Входная группа', text: 'откатные ворота/распашные ворота/калитка' },
      ],
      price: 1000,
      keyPrice: 2300,
      image: 'fence-1.png',
    },
    {
      title: 'Забор из сетки рабица',
      details: [
        { title: 'Высота', text: 'от 1.5м до 3м' },
        { title: 'Покрытие', text: 'оцинкованое/полимерное' },
        { title: 'Столбы', text: 'металл/кирпич/бетон' },
        { title: 'Входная группа', text: 'откатные ворота/распашные ворота/калитка' },
      ],
      price: 300,
      keyPrice: 450,
      image: 'fence-2.png',
    },
    {
      title: 'Забор из металлического штакетника',
      details: [
        { title: 'Высота', text: 'от 1.5м до 3м' },
        { title: 'Толщина листа', text: 'от 0.4мм до 0.7мм' },
        { title: 'Профиль', text: 'C8/C10' },
        { title: 'Столбы', text: 'металл/кирпич/бетон' },
      ],
      price: 2000,
      keyPrice: 3600,
      image: 'fence-3.png',
    },
  ],
  sales: [
    {
      title: 'Sale 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'fence-1.png',
    },
    {
      title: 'Sale 2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'fence-2.png',
    },
    {
      title: 'Sale 3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'fence-3.png',
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
  works: ['fence-1.png', 'fence-2.png', 'fence-3.png'],
  reviews: [
    {
      name: 'Иванов Иван',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Александр Козлов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      name: 'Михаил Деревянко',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ],
})
