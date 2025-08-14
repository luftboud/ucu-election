export interface Representative {
  id: string;
  name: string;
  specialty: string;
  course: number;
  photo?: string;
}

export interface Faculty {
  id: string;
  name: string;
  representatives: Representative[];
}

export const electedRepresentatives: Faculty[] = [
  {
    id: 'humanities',
    name: 'Гуманітарний',
    representatives: [
      {
        id: '1',
        name: 'Анна Петренко',
        specialty: 'Українська мова та література',
        course: 3
      },
      {
        id: '2',
        name: 'Михайло Коваленко',
        specialty: 'Історія',
        course: 2
      },
      {
        id: '3',
        name: 'Софія Іваненко',
        specialty: 'Журналістика',
        course: 4
      },
      {
        id: '4',
        name: 'Олександр Мельник',
        specialty: 'Англійська мова та література',
        course: 1
      }
    ]
  },
  {
    id: 'health-sciences',
    name: 'Наук про Здоров\'я',
    representatives: [
      {
        id: '5',
        name: 'Марія Шевченко',
        specialty: 'Медицина',
        course: 4
      },
      {
        id: '6',
        name: 'Іван Бондаренко',
        specialty: 'Стоматологія',
        course: 3
      },
      {
        id: '7',
        name: 'Катерина Левченко',
        specialty: 'Фізична терапія',
        course: 2
      }
    ]
  },
  {
    id: 'social-sciences',
    name: 'Суспільних Наук',
    representatives: [
      {
        id: '8',
        name: 'Андрій Ткаченко',
        specialty: 'Політологія',
        course: 3
      },
      {
        id: '9',
        name: 'Юлія Гриценко',
        specialty: 'Соціологія',
        course: 4
      },
      {
        id: '10',
        name: 'Дмитро Федоренко',
        specialty: 'Міжнародні відносини',
        course: 2
      },
      {
        id: '11',
        name: 'Ольга Савченко',
        specialty: 'Соціальна робота',
        course: 1
      }
    ]
  },
  {
    id: 'applied-sciences',
    name: 'Прикладних Наук',
    representatives: [
      {
        id: '12',
        name: 'Віталій Морозенко',
        specialty: 'Інформаційні технології',
        course: 3
      },
      {
        id: '13',
        name: 'Тетяна Лисенко',
        specialty: 'Кібербезпека',
        course: 4
      },
      {
        id: '14',
        name: 'Роман Кузьменко',
        specialty: 'Математика',
        course: 2
      }
    ]
  },
  {
    id: 'law',
    name: 'Факультет Права',
    representatives: [
      {
        id: '15',
        name: 'Владислав Петров',
        specialty: 'Право',
        course: 4
      },
      {
        id: '16',
        name: 'Наталія Степаненко',
        specialty: 'Міжнародне право',
        course: 3
      },
      {
        id: '17',
        name: 'Максим Волошин',
        specialty: 'Європейське право',
        course: 2
      }
    ]
  },
  {
    id: 'philosophy-theology',
    name: 'Філософсько-Богословський',
    representatives: [
      {
        id: '18',
        name: 'Богдан Кравченко',
        specialty: 'Богослов\'я',
        course: 4
      },
      {
        id: '19',
        name: 'Ірина Данилюк',
        specialty: 'Філософія',
        course: 3
      },
      {
        id: '20',
        name: 'Павло Гончаренко',
        specialty: 'Релігієзнавство',
        course: 1
      }
    ]
  }
];
