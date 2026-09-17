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
        id: 'tsarenko-sofiia',
        name: 'Царенко Софія',
        specialty: 'Філологія',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/16XyZfWDT_YJQz7PmzBYoiQhFhuiVsMmj',
        votingData: {
          candidates: [
            { name: 'Царенко Софія', votes: 13 },
            { name: 'Хандон Зоряна', votes: 6 },
          ]
        }
      },
      {
        id: 'dovzhenko-rostislav',
        name: 'Довженко Ростислав',
        specialty: 'Історія',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1P--jem_RuizAew3XOtNyI7W0A-pQBPgF',
        votingData: {
          candidates: [
            { name: 'Довженко Ростислав', votes: 8 },
            { name: 'Шумейко Михайло', votes: 1 },
            { name: 'Макогоненко Анна-Марія', votes: 0 },
          ]
        }
      },
      {
        id: 'tsarelunga-anna',
        name: 'Царелунга Анна',
        specialty: 'Історія',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1MUmzbSPXMN_IngLc8cMNtYetpeaNSdGw',
        votingData: {
          candidates: [
            { name: 'Царелунга Анна', votes: 13 },
          ]
        }
      },
      {
        id: 'chub-illia',
        name: 'Чуб Ілля',
        specialty: 'Історія',
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/1O_Xeb4ubtuvs0ih_80GAmmuSd6O1kM1k',
        votingData: {
          candidates: [
            { name: 'Чуб Ілля', votes: 3 },
          ]
        }
      },
      {
        id: 'stemkovs-kii-marko',
        name: 'Стемковський Марко',
        specialty: 'Історія',
        course: 4,
        photo: 'https://lh3.googleusercontent.com/d/1DmQQFshPY3sG1g87ppFri4n0gnnlW8CE',
        votingData: {
          candidates: [
            { name: 'Стемковський Марко', votes: 2 },
          ]
        }
      },
      {
        id: 'siniuta-uliana',
        name: 'Синюта Уляна',
        specialty: 'Культурологія',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1IWHU6riRG8LvdFju8LvgxWZ5zcGNxtuC',
        votingData: {
          candidates: [
            { name: 'Синюта Уляна', votes: 9 },
            { name: 'Фомінська Тетяна', votes: 4 },
          ]
        }
      },
      {
        id: 'kaleniuk-iarina',
        name: 'Каленюк Ярина',
        specialty: 'Культурологія',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1bRr3DMDKUIT0xHhKItrlmyGRXJ3yp2E1',
        votingData: {
          candidates: [
            { name: 'Каленюк Ярина', votes: 2 },
          ]
        }
      },
      {
        id: 'govorun-valeriia',
        name: 'Говорун Валерія',
        specialty: 'Культурологія',
        course: 4,
        photo: 'https://lh3.googleusercontent.com/d/1qYd7FLmJIr0ClbOIdAxrPvs_24AZehib',
        votingData: {
          candidates: [
            { name: 'Говорун Валерія', votes: 4 },
          ]
        }
      },
      {
        id: 'muzika-bogdana',
        name: 'Музика Богдана',
        specialty: 'Майбутнє спадщини',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1heYNlfFVPuc4FqFinFgUzkKsHBdPUor-',
        votingData: {
          candidates: [
            { name: 'Музика Богдана', votes: 11 },
          ]
        }
      },
    ]
  },
  {
    id: 'health-sciences',
    name: 'Наук про Здоров\'я',
    representatives: [
      {
        id: 'volik-irina',
        name: 'Волик Ірина',
        specialty: 'Соціальна робота',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1B5hLFQBRYCFXNC9oaKt-4NErERkIwnZ5',
        votingData: {
          candidates: [
            { name: 'Волик Ірина', votes: 12 },
            { name: 'Олещук Анастасія', votes: 4 },
            { name: 'Оленчук Яна', votes: 3 },
          ]
        }
      },
      {
        id: 'shlapak-oleksandra',
        name: 'Шлапак Олександра',
        specialty: 'Соціальна робота',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1bR6biIkWXmczEwlHgAxLCSDSAClbfjw4',
        votingData: {
          candidates: [
            { name: 'Шлапак Олександра', votes: 2 },
          ]
        }
      },
      {
        id: 'iefimenko-rusana',
        name: 'Єфіменко Русана',
        specialty: 'Соціальна робота',
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/17eGt4kdzvjjgllgPKXDtAtN7B9H8ZWxd',
        votingData: {
          candidates: [
            { name: 'Єфіменко Русана', votes: 14 },
          ]
        }
      },
      {
        id: 'klimus-marta',
        name: 'Климус Марта',
        specialty: 'Соціальна робота',
        course: 4,
        photo: 'https://lh3.googleusercontent.com/d/1TD3k6We147qxQDH70Sqenu7qLXjfeaE3',
        votingData: {
          candidates: [
            { name: 'Климус Марта', votes: 5 },
          ]
        }
      },
      {
        id: 'diakiv-vlada',
        name: 'Дяків Влада',
        specialty: 'Психологія',
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/1wRJkesAoqDZM9tbPzWmpjbBEGT7zd2V3',
        votingData: {
          candidates: [
            { name: 'Дяків Влада', votes: 3 },
          ]
        }
      },
      {
        id: 'khomich-anna',
        name: 'Хомич Анна',
        specialty: 'Психологія',
        course: 4,
        photo: 'https://lh3.googleusercontent.com/d/18gpVMkzGvjfNm006qWyF0CGG31TSm7G1',
        votingData: {
          candidates: [
            { name: 'Хомич Анна', votes: 7 },
          ]
        }
      },
      {
        id: 'koval-anastasiia',
        name: 'Коваль Анастасія',
        specialty: 'Клінічна психологія (психодинамічна терапія)',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1tEFDm_dzELB-Pip2iyuHSq-G9VYvKpo_',
        votingData: {
          candidates: [
            { name: 'Коваль Анастасія', votes: 2 },
          ]
        }
      },
    ]
  },
  {
    id: 'social-sciences',
    name: 'Суспільних Наук',
    representatives: [
      {
        id: 'smetana-iuliana',
        name: 'Сметана Юліана',
        specialty: 'Етика-політика-економіка',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1aI1JcbGZiQgl4koaowgiAhz-WaRTDq2a',
        votingData: {
          candidates: [
            { name: 'Сметана Юліана', votes: 23 },
            { name: 'Григоровський Юрій', votes: 10 },
            { name: 'Камілла Монастирська', votes: 6 },
            { name: 'Петрова Вікторія', votes: 3 },
          ]
        }
      },
      {
        id: 'il-chishin-viktoriia',
        name: 'Ільчишин Вікторія',
        specialty: 'Етика-політика-економіка',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1q8R8H_EjGnnUoVyJjrSILupLfgiAbbYy',
        votingData: {
          candidates: [
            { name: 'Ільчишин Вікторія', votes: 11 },
          ]
        }
      },
      {
        id: 'german-ol-ga',
        name: 'Герман Ольга',
        specialty: 'Етика-політика-економіка',
        course: 4,
        photo: 'https://lh3.googleusercontent.com/d/1sS2NZAr8WCRao5LibtBLBRhQDAk4oynn',
        votingData: {
          candidates: [
            { name: 'Герман Ольга', votes: 7 },
          ]
        }
      },
      {
        id: 'kachur-andrii',
        name: 'Качур Андрій',
        specialty: 'Соціологія',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1hpw1LIAATsvwxS_-OZutz9bo8EDRj0xg',
        votingData: {
          candidates: [
            { name: 'Качур Андрій', votes: 23 },
            { name: 'Ревега Анастасія', votes: 5 },
          ]
        }
      },
      {
        id: 'remizova-anastasiia',
        name: 'Ремізова Анастасія',
        specialty: 'Соціологія',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/10Jv88yqPm-KW5Zvkj3slHJmTD2Fq0BRi',
        votingData: {
          candidates: [
            { name: 'Ремізова Анастасія', votes: 14 },
          ]
        }
      },
      {
        id: 'koziatins-kii-dmitro',
        name: 'Козятинський Дмитро',
        specialty: 'Публічне управління та адміністрування',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1w2dQJhWrGIHnDDDjsS-k4ULqgdekVxXH',
        votingData: {
          candidates: [
            { name: 'Козятинський Дмитро', votes: 0 },
          ]
        }
      },
      {
        id: 'manuilenko-danilo',
        name: 'Мануйленко Данило',
        specialty: 'Публічне управління та адміністрування',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/10Z_6X_UbJXWbtr89t1MXrZOs_YT42uCZ',
        votingData: {
          candidates: [
            { name: 'Мануйленко Данило', votes: 0 },
          ]
        }
      },
    ]
  },
  {
    id: 'applied-sciences',
    name: 'Прикладних Наук',
    representatives: [
      {
        id: 'knish-sofiia',
        name: 'Книш Софія',
        specialty: "Комп'ютерні науки",
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1-2CVzsZ5qibqjYelrbtwMh389sthdFO5',
        votingData: {
          candidates: [
            { name: 'Книш Софія', votes: 12 },
            { name: 'Гридова Катерина', votes: 6 },
          ]
        }
      },
      {
        id: 'shimushovs-ka-khristina',
        name: 'Шимушовська Христина',
        specialty: "Комп'ютерні науки",
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1zsAbG75rr5OpY-QVm1hx9hIyb9JtLYB1',
        votingData: {
          candidates: [
            { name: 'Шимушовська Христина', votes: 6 },
          ]
        }
      },
      {
        id: 'magarita-iia',
        name: 'Магарита Ія',
        specialty: "Комп'ютерні науки",
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/136RNxhl3MOGT3PjyR23intKRacTwlN-U',
        votingData: {
          candidates: [
            { name: 'Магарита Ія', votes: 6 },
          ]
        }
      },
      {
        id: 'sabadakh-roman',
        name: 'Сабадах Роман',
        specialty: 'ІТ та аналітика рішень',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1BjeSzQ24vVKrT7mHcwt0f27DcjvsjDOl',
        votingData: {
          candidates: [
            { name: 'Сабадах Роман', votes: 9 },
            { name: 'Бондаренко Владислава', votes: 7 },
            { name: 'Бартошук Даніела', votes: 0 },
          ]
        }
      },
      {
        id: 'lem-anastasiia',
        name: 'Лем Анастасія',
        specialty: 'ІТ та аналітика рішень',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1j6jMsHfhdSkW4zVbOJpDjSGB1mh64L15',
        votingData: {
          candidates: [
            { name: 'Лем Анастасія', votes: 3 },
          ]
        }
      },
      {
        id: 'berezniuk-darina',
        name: 'Березнюк Дарина',
        specialty: 'Робототехніка',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1oKwcsCPTiRxE7faydmm5rW5OfaHgKZsl',
        votingData: {
          candidates: [
            { name: 'Березнюк Дарина', votes: 5 },
          ]
        }
      },
    ]
  },
  {
    id: 'law',
    name: 'Факультет Права',
    representatives: [
      {
        id: 'gritsik-solomiia',
        name: 'Грицик Соломія',
        specialty: 'Право',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/17NyMhqi-b4tOI17fdEJl88GzT95tAWWM',
        votingData: {
          candidates: [
            { name: 'Грицик Соломія', votes: 20 },
            { name: 'Макух Денис', votes: 9 },
            { name: 'Мищишин Ярина', votes: 3 },
            { name: 'Яковчук Евеліна', votes: 2 },
          ]
        }
      },
      {
        id: 'muriniuk-nataliia',
        name: 'Муринюк Наталія',
        specialty: 'Право',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1lqsWV-rXqXCcUxIGB4D8SIlxzuKoR28I',
        votingData: {
          candidates: [
            { name: 'Муринюк Наталія', votes: 16 },
          ]
        }
      },
      {
        id: 'levchuk-mariia',
        name: 'Левчук Марія',
        specialty: 'Право',
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/1HTzcQulv8lqdUQ7Ai5kwNNOWOcgH5_HA',
        votingData: {
          candidates: [
            { name: 'Левчук Марія', votes: 15 },
            { name: 'Лєсьо Софія', votes: 7 },
          ]
        }
      },
      {
        id: 'babliak-olena',
        name: 'Бабляк Олена',
        specialty: 'Право (магістратура)',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1jKWMp1SAE6LEm5DMPCHc6AScJztFzSal',
        votingData: {
          candidates: [
            { name: 'Бабляк Олена', votes: 5 },
          ]
        }
      },
      {
        id: 'dovhun-ivan',
        name: 'Довгун Іван',
        specialty: 'Право (магістратура)',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1Jhlmt1tCmE1LSRfIPwfb3wXWUUU791UA',
        votingData: {
          candidates: [
            { name: 'Довгун Іван', votes: 6 },
          ]
        }
      },
    ]
  },
  {
    id: 'philosophy-theology',
    name: 'Філософсько-Богословський',
    representatives: [
      {
        id: 'korotushak-sofiia',
        name: 'Коротушак Софія',
        specialty: "Богослов'я",
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1juGB2as_fkYofeh0wrnqdi2JBlo1JLp8',
        votingData: {
          candidates: [
            { name: 'Коротушак Софія', votes: 1 },
          ]
        }
      },
      {
        id: 'shutka-ivan-rostislav',
        name: 'Шутка Іван-Ростислав',
        specialty: 'Християнська педагогіка',
        course: 2,
        photo: 'https://lh3.googleusercontent.com/d/1yFORVKGO4eTL0r91QEo6Gr9LOB8e2lb9',
        votingData: {
          candidates: [
            { name: 'Шутка Іван-Ростислав', votes: 2 },
          ]
        }
      },
    ]
  },
  {
    id: 'business-school',
    name: 'Бізнес-школа',
    representatives: [
      {
        id: 'savruk-olena',
        name: 'Саврук Олена',
        specialty: 'Менеджмент маркетингової діяльності',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1mZJQW3vDzPs8OuwOok3H3da0swmB1Nfw',
        votingData: {
          candidates: [
            { name: 'Саврук Олена', votes: 1 },
          ]
        }
      },
      {
        id: 'lipins-kii-oleksandr',
        name: 'Липинський Олександр',
        specialty: 'Управління організаціями які впливають',
        course: 1,
        photo: 'https://lh3.googleusercontent.com/d/1n2n5k6XOKd10fsh37XLT1r6qZ8jaqMmc',
        votingData: {
          candidates: [
            { name: 'Липинський Олександр', votes: 1 },
            { name: 'Решетков Олександр', votes: 0 },
          ]
        }
      },
    ]
  }
];
