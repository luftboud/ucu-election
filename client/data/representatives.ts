export interface Candidate {
  name: string;
  votes: number;
}

export interface VotingData {
  candidates: Candidate[];
}

export interface Representative {
  id: string;
  name: string;
  specialty: string;
  course: number;
  photo?: string;
  votingData?: VotingData;
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
        specialty: 'Філологія',
        course: 3,
        votingData: {
          candidates: [
            { name: 'Анна Петренко', votes: 156 },
            { name: 'Катерина Сидоренко', votes: 89 },
            { name: 'Максим Левченко', votes: 42 },
            { name: 'Степан Бандера', votes: 100 },
            { name: 'Андрій Любка', votes: 10 },
            { name: 'Адольф Гітлер', votes: 88 }
          ]
        }
      },
      {
        id: '2',
        name: 'Михайло Коваленко',
        specialty: 'Історія',
        course: 2,
        votingData: {
          candidates: [
            { name: 'Михайло Коваленко', votes: 118 },
            { name: 'Ольга Мельник', votes: 52 },
            { name: 'Іван Кравчук', votes: 33 }
          ]
        }
      },
      {
        id: '3',
        name: 'Софія Іваненко',
        specialty: 'Журналістика',
        course: 4,
        votingData: {
          candidates: [
            { name: 'Софія Іваненко', votes: 97 },
            { name: 'Андрій Білий', votes: 58 },
            { name: 'Марія Зубенко', votes: 40 }
          ]
        }
      },
      {
        id: '4',
        name: 'Олександр Мельник',
        specialty: 'Англійська мова та література',
        course: 1,
        votingData: {
          candidates: [
            { name: 'Олександр Мельник', votes: 78 },
            { name: 'Вікторія Савченко', votes: 45 },
            { name: 'Дмитро Коваль', votes: 33 }
          ]
        }
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
        course: 4,
        votingData: {
          candidates: [
            { name: 'Марія Шевченко', votes: 178 },
            { name: 'Олег Петренко', votes: 102 },
            { name: 'Анастасія Ткач', votes: 62 }
          ]
        }
      },
      {
        id: '6',
        name: 'Іван Бондаренко',
        specialty: 'Стоматологія',
        course: 3,
        votingData: {
          candidates: [
            { name: 'Іван Бондаренко', votes: 71 },
            { name: 'Світлана Кравець', votes: 37 },
            { name: 'Роман Гончар', votes: 20 }
          ]
        }
      },
      {
        id: '7',
        name: 'Катерина Левченко',
        specialty: 'Фізична терапія',
        course: 2,
        votingData: {
          candidates: [
            { name: 'Катерина Левченко', votes: 52 },
            { name: 'Тарас Шевчук', votes: 26 },
            { name: 'Юлія Морозова', votes: 16 }
          ]
        }
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
        course: 3,
        votingData: {
          candidates: [
            { name: 'Андрій Ткаченко', votes: 145 },
            { name: 'Ольга Романенко', votes: 78 },
            { name: 'Віктор Мазур', votes: 44 }
          ]
        }
      },
      {
        id: '9',
        name: 'Юлія Гриценко',
        specialty: 'Соціологія',
        course: 4,
        votingData: {
          candidates: [
            { name: 'Юлія Гриценко', votes: 98 },
            { name: 'Сергій Кузьмін', votes: 56 },
            { name: 'Інна Левицька', votes: 35 }
          ]
        }
      },
      {
        id: '10',
        name: 'Дмитро Федоренко',
        specialty: 'Міжнародні відносини',
        course: 2,
        votingData: {
          candidates: [
            { name: 'Дмитро Федоренко', votes: 73 },
            { name: 'Марина Павленко', votes: 39 },
            { name: 'Артем Волков', votes: 22 }
          ]
        }
      },
      {
        id: '11',
        name: 'Ольга Савченко',
        specialty: 'Соціальна робота',
        course: 1,
        votingData: {
          candidates: [
            { name: 'Ольга Савченко', votes: 49 },
            { name: 'Микола Бойко', votes: 23 },
            { name: 'Лідія Крупа', votes: 15 }
          ]
        }
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
        course: 3,
        votingData: {
          candidates: [
            { name: 'Віталій Морозенко', votes: 167 },
            { name: 'Олександра Петрова', votes: 86 },
            { name: 'Данило Литвин', votes: 45 }
          ]
        }
      },
      {
        id: '13',
        name: 'Тетяна Лисенко',
        specialty: 'Кібербезпека',
        course: 4,
        votingData: {
          candidates: [
            { name: 'Тетяна Лисенко', votes: 89 },
            { name: 'Ігор Семенов', votes: 42 },
            { name: 'Анна Горобець', votes: 25 }
          ]
        }
      },
      {
        id: '14',
        name: 'Роман Кузьменко',
        specialty: 'Математика',
        course: 2,
        votingData: {
          candidates: [
            { name: 'Роман Кузьменко', votes: 64 },
            { name: 'Валентина Дмитренко', votes: 31 },
            { name: 'Михайло Стеценко', votes: 17 }
          ]
        }
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
        course: 4,
        votingData: {
          candidates: [
            { name: 'Владислав Петров', votes: 132 },
            { name: 'Катерина Науменко', votes: 73 },
            { name: 'Олексій Рибак', votes: 40 }
          ]
        }
      },
      {
        id: '16',
        name: 'Наталія Степаненко',
        specialty: 'Міжнародне право',
        course: 3,
        votingData: {
          candidates: [
            { name: 'Наталія Степаненко', votes: 91 },
            { name: 'Сергій Полтавець', votes: 48 },
            { name: 'Лариса Зінченко', votes: 28 }
          ]
        }
      },
      {
        id: '17',
        name: 'Максим Волошин',
        specialty: 'Європейське право',
        course: 2,
        votingData: {
          candidates: [
            { name: 'Максим Волошин', votes: 48 },
            { name: 'Ірина Костенко', votes: 25 },
            { name: 'Артур Гайдук', votes: 16 }
          ]
        }
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
        course: 4,
        votingData: {
          candidates: [
            { name: 'Богдан Кравченко', votes: 87 },
            { name: 'Василь Іваненко', votes: 43 },
            { name: 'Мирослава Онищенко', votes: 26 }
          ]
        }
      },
      {
        id: '19',
        name: 'Ірина Данилюк',
        specialty: 'Філософія',
        course: 3,
        votingData: {
          candidates: [
            { name: 'Ірина Данилюк', votes: 69 },
            { name: 'Остап Мельничук', votes: 35 },
            { name: 'Софія Горбань', votes: 19 }
          ]
        }
      },
      {
        id: '20',
        name: 'Павло Гончаренко',
        specialty: 'Релігієзнавство',
        course: 1,
        votingData: {
          candidates: [
            { name: 'Павло Гончаренко', votes: 43 },
            { name: 'Анжела Ткаченко', votes: 22 },
            { name: 'Тарас Козак', votes: 13 }
          ]
        }
      }
    ]
  }
];
