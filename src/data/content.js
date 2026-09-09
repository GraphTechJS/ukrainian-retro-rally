import { asset } from '../utils/asset'

export const nav = [
  { to: '/novyny', label: 'Новини' },
  { to: '/podiyi', label: 'Події' },
  { to: '/ekipazhi', label: 'Екіпажі' },
  { to: '/galereya', label: 'Галерея' },
  { to: '/partnery', label: 'Партнери' },
]

export const event = {
  name: 'Ukrainian Retro Rally',
  short: 'URR',
  season: '2026',
  date: '15–17 серпня 2026',
  location: 'Київська область',
  tagline: 'Клубне ралі історичних авто · 30+ екіпажів · Київ',
  organizer: 'ГО «Український Автомобільний Клуб «Москвич Київ»',
}

export const timeline = [
  { n: '01', label: 'Реєстрація' },
  { n: '02', label: 'Дорожня секція' },
  { n: '03', label: 'Спеціальна ділянка' },
  { n: '04', label: 'Виставка' },
  { n: '05', label: 'Нетворкінг' },
]

export const quickLinks = [
  { to: '/ekipazhi', label: 'Список учасників' },
  { to: '/podiyi', label: 'Онлайн-хронометраж' },
  { to: '/podiyi', label: 'Маршрут' },
]

export const homeGallery = [
  {
    src: asset('images/gallery-moskvych.png'),
    alt: 'Ралійний Москвич на спеціальній ділянці',
  },
  {
    src: asset('images/gallery-lancia.png'),
    alt: 'Lancia Delta Integrale',
  },
  {
    src: asset('images/gallery-audi.png'),
    alt: 'Audi Quattro S1',
  },
  {
    src: asset('images/gallery-porsche.png'),
    alt: 'Porsche 911 Rally',
  },
]

export const news = [
  {
    id: 'n1',
    date: '2 вересня 2026',
    title: 'Відкрито реєстрацію екіпажів на URR 2026',
    excerpt:
      'Прийом заявок стартував. У пріоритеті історичні автомобілі до 1990 року з підтвердженою історією.',
    tag: 'Реєстрація',
  },
  {
    id: 'n2',
    date: '18 серпня 2026',
    title: 'Спеціальну ділянку узгоджено з місцевою владою',
    excerpt:
      'Швидкісний етап пройде на закритій ґрунтовій трасі Київської області. Деталі маршруту — ближче до старту.',
    tag: 'Маршрут',
  },
  {
    id: 'n3',
    date: '5 липня 2026',
    title: 'Партнерство з Українським Автомобільним Клубом',
    excerpt:
      'Подія отримала підтримку офіційного представника FIVA в Україні та музею «Колеса Історії».',
    tag: 'Партнери',
  },
  {
    id: 'n4',
    date: '20 червня 2026',
    title: 'Молодіжна школа відповідального водіння',
    excerpt:
      'У рамках URR пройдуть майстер-класи з контраварійної підготовки для молодих водіїв.',
    tag: 'Освіта',
  },
]

export const events = [
  {
    id: 'e1',
    title: 'Ukrainian Retro Rally 2026',
    date: '15–17 серпня 2026',
    place: 'Київська область',
    status: 'Головна подія',
    description:
      'Клубний авто-івент: маршрутне ралі, спеціальна ділянка, виставка та нетворкінг. 30+ екіпажів історичних авто.',
  },
  {
    id: 'e2',
    title: 'Передстартова зустріч клубу',
    date: '1 серпня 2026',
    place: 'Київ',
    status: 'Анонс',
    description:
      'Технічний брифінг, перевірка документів і знайомство екіпажів перед головним стартом сезону.',
  },
  {
    id: 'e3',
    title: 'Зимовий ретро-заїзд (архів 2025)',
    date: 'грудень 2025',
    place: 'Київська область',
    status: 'Архів',
    description:
      'Клубний заїзд Москвичів і класики на зимовій локації — атмосфера, фото та досвід для команди.',
  },
]

export const crews = [
  {
    id: 'c1',
    number: '03',
    car: 'Москвич 2140 SL Rally',
    driver: 'Олег Коваленко',
    codriver: 'Ірина Коваленко',
    class: 'Історичні / до 1990',
    city: 'Київ',
  },
  {
    id: 'c2',
    number: '07',
    car: 'Lancia Delta Integrale',
    driver: 'Андрій Мельник',
    codriver: 'Сергій Литвин',
    class: 'Group A Classic',
    city: 'Львів',
  },
  {
    id: 'c3',
    number: '11',
    car: 'Audi Quattro',
    driver: 'Марина Шевченко',
    codriver: 'Павло Бондар',
    class: 'Group B Tribute',
    city: 'Одеса',
  },
  {
    id: 'c4',
    number: '14',
    car: 'Porsche 911 Rally',
    driver: 'Дмитро Савчук',
    codriver: 'Олена Гнатюк',
    class: 'GT Historic',
    city: 'Харків',
  },
  {
    id: 'c5',
    number: '21',
    car: 'Москвич 412',
    driver: 'Василь Петренко',
    codriver: 'Наталія Петренко',
    class: 'Історичні / до 1980',
    city: 'Чернігів',
  },
  {
    id: 'c6',
    number: '28',
    car: 'ВАЗ-2101 Rally',
    driver: 'Юрій Ткаченко',
    codriver: 'Максим Орлов',
    class: 'Історичні / до 1990',
    city: 'Дніпро',
  },
]

export const gallery = [
  {
    src: asset('images/gallery-moskvych.png'),
    alt: 'Москвич на ґрунтовій ділянці',
    caption: 'Москвич Rally · SS',
  },
  {
    src: asset('images/gallery-lancia.png'),
    alt: 'Lancia Delta Integrale',
    caption: 'Lancia Delta Integrale',
  },
  {
    src: asset('images/gallery-audi.png'),
    alt: 'Audi Quattro',
    caption: 'Audi Quattro',
  },
  {
    src: asset('images/gallery-porsche.png'),
    alt: 'Porsche 911 Rally',
    caption: 'Porsche 911 Rally',
  },
  {
    src: asset('images/img_p6_10.jpg'),
    alt: 'Москвич на ґрунтовій ділянці',
    caption: 'URR · ґрунтова ділянка',
  },
  {
    src: asset('images/img_p7_11.jpg'),
    alt: 'Сервіс і екіпаж',
    caption: 'Сервіс екіпажу',
  },
  {
    src: asset('images/img_p8_10.jpg'),
    alt: 'Зимовий ретро-заїзд',
    caption: 'Зимовий заїзд',
  },
  {
    src: asset('images/img_p6_11.jpg'),
    alt: 'Учасники Ukrainian Retro Rally',
    caption: 'Учасники',
  },
  {
    src: asset('images/img_p7_15.jpg'),
    alt: 'Атмосфера клубу',
    caption: 'Атмосфера клубу',
  },
  {
    src: asset('images/img_p8_11.jpg'),
    alt: 'Ретро-техніка на старті',
    caption: 'На старті',
  },
]

export const partners = [
  {
    tier: 'Титульний спонсор',
    price: 'від 30 000 грн',
    motto: 'Разом творимо історію українського автоспорту!',
    perks: [
      'Ексклюзивний статус головного партнера',
      'Логотип на всіх офіційних матеріалах і медіа',
      'Бренд-зони на старті, фініші та ключових локаціях',
      'Інтеграція у медіакампанії',
    ],
  },
  {
    tier: 'Генеральний спонсор',
    price: '20 000 грн',
    motto: 'Ваша підтримка — наш шлях до перемоги!',
    perks: [
      'Статус головного спонсора події',
      'Логотип на офіційних матеріалах',
      'Банери та бренд-зони',
      'Участь у змаганнях',
    ],
  },
  {
    tier: 'Офіційний спонсор',
    price: '15 000 грн',
    motto: 'Разом створюємо майбутнє ретро-автоспорту!',
    perks: [
      'Логотип на офіційних матеріалах',
      'Інтеграція у медіакампанії',
      'Банери та бренд-зони',
    ],
  },
  {
    tier: 'Технічний спонсор',
    price: '10 000 грн',
    motto: 'Драйв у серці, підтримка у дії!',
    perks: [
      'Інтеграція у медіакампанії',
      'Логотип на офіційних матеріалах',
      'Банери та бренд-зони',
    ],
  },
]

export const contact = {
  phone: '+380 96 288 16 95',
  email: 'moskvichkiev@gmail.com',
  igClub: 'moskvych_kyiv',
  igEvent: 'ukrainian_retro_rally',
}
