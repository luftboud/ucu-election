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
	id: "kaleniuk-iarina", 
	name: 'Каленюк Ярина', 
	specialty: 'Філологія', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1K58Qv8QPgTIQO9bCPSVv6wWopAvfLSKE', 
	votingData: {
		candidates: [
			{ name: "Каленюк Ярина", votes: 19},
			{ name: "Хандон Зоряна", votes: 6},
			{ name: "Харко Юлія", votes: 3},
		]
	}
},
{
	id: "slotsiak-anna", 
	name: 'Слоцяк Анна', 
	specialty: 'Філологія', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/13t50tCyAdjMpUVc0g4RM-m21ACOHopie', 
	votingData: {
		candidates: [
			{ name: "Слоцяк Анна", votes: 3},
		]
	}
},
      {
        id: "kuzishin-iuliana",
        name: 'Кузишин Юліана',
        specialty: 'Філологія',
        course: 3,
        photo: 'https://lh3.googleusercontent.com/d/136ZGAqmXZGpwihCeBdyJeIaG7EBT69wI',
        votingData: {
          candidates: [
            { name: "Кузишин Юліана", votes: 3 },
          ]
        }
      },
  {
	id: "tsarelunga-anna", 
	name: 'Царелунга Анна', 
	specialty: 'Історія', 
	course: 1,
	photo: 'https://lh3.googleusercontent.com/d/1DXH5GrPgcBNUNLYGr-MWIqYpktyDxn5G', 
	votingData: {
		candidates: [
			{ name: "Царелунга Анна", votes: 12},
			{ name: "Пославська Яна", votes: 6},
			{ name: "Куракіна Єлизавета", votes: 3},
		]
	}
},
{
	id: "mikhailets-mariia", 
	name: 'Михайлець Марія', 
	specialty: 'Історія', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1NeaId7xAVLPReXD70TCnYOCYW5JG8boi', 
	votingData: {
		candidates: [
			{ name: "Михайлець Марія", votes: 9},
		]
	}
},
{
	id: "stemkovs-kii-marko", 
	name: 'Стемковський Марко', 
	specialty: 'Історія', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/1ukc5MsZN2l0ApiDUypAO9B7PZ4vb9D19', 
	votingData: {
		candidates: [
			{ name: "Стемковський Марко", votes: 4},
		]
	}
},
{
	id: "shchurko-nazar-teodor", 
	name: 'Щурко Назар-Теодор', 
	specialty: 'Історія', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1LQPoFmX_JMYRggHae3TkWJYALJz6JYkP', 
	votingData: {
		candidates: [
			{ name: "Щурко Назар-Теодор", votes: 9},
			{ name: "Кондратюк Марта", votes: 5},
		]
	}
},
{
	id: "iakobshe-sofiia", 
	name: 'Якобше Софія', 
	specialty: 'Культурологія', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1EutWxi95_GQlar6FvSe4eo4GnpEPwW_l', 
	votingData: {
		candidates: [
			{ name: "Якобше Софія", votes: 13},
		]
	}
},
{
	id: "zakharchuk-darina", 
	name: 'Захарчук Дарина', 
	specialty: 'Культурологія', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1uSBDx_o4wj2FdKsXNJw5YW8oZ-xhblth', 
	votingData: {
		candidates: [
			{ name: "Захарчук Дарина", votes: 14},
			{ name: "Мельник Анна", votes: 2},
		]
	}
},
{
	id: "grishuk-marko", 
	name: 'Гришук Марко', 
	specialty: 'Культурологія', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/1x6GR9jdVaHrgwXekomFcA2JVTfSpTcL7', 
	votingData: {
		candidates: [
			{ name: "Гришук Марко", votes: 8},
		]
	}
},
{
	id: "ful-mes-miroslava", 
	name: 'Фульмес Мирослава', 
	specialty: 'Культурологія', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1QfSGTZUvQDNaFCTfi5enGoeuB8LOX617', 
	votingData: {
		candidates: [
			{ name: "Фульмес Мирослава", votes: 2},
		]
	}
      },
      {
	id: "birulia-maria", 
	name: 'Біруля Марія', 
	specialty: 'Майбутнє Спадщини', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1roFfw_9spOjgzghRM-RYa69Ocvh1MZYg', 
	votingData: {
		candidates: [
			{ name: "Біруля Марія", votes: 0},
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
	id: "shlapak-oleksandra", 
	name: 'Шлапак Олександра', 
	specialty: 'Соціальна робота', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1RzR4eAZX7rEIy2ACfkASt3NzadmYOFl1', 
	votingData: {
		candidates: [
			{ name: "Шлапак Олександра", votes: 3},
		]
	}
},
{
	id: "klimus-marta", 
	name: 'Климус Марта', 
	specialty: 'Соціальна робота', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/1ReObJ1NHSeDmKpFkICJvvoiQIPf0aLVb', 
	votingData: {
		candidates: [
			{ name: "Климус Марта", votes: 4},
		]
	}
},
{
	id: "biliak-liliia", 
	name: 'Біляк Лілія', 
	specialty: 'Соціальна робота', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1jNQbxYqqHd1ysh-EVdrsGmnVO-ENHgan', 
	votingData: {
		candidates: [
			{ name: "Біляк Лілія", votes: 5},
		]
	}
},
{
	id: "zolotoverkha-polina", 
	name: 'Золотоверха Поліна', 
	specialty: 'Психологія', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1dLRwCA4ZZ_e2GU1txdnOFaMQQ5P68hDT', 
	votingData: {
		candidates: [
			{ name: "Золотоверха Поліна", votes: 7},
		]
	}
},
{
	id: "khomich-anna", 
	name: 'Хомич Анна', 
	specialty: 'Психологія', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/12iZpClb1XBgUSNbv0N43Zd_8yseGGvT6', 
	votingData: {
		candidates: [
			{ name: "Хомич Анна", votes: 13},
			{ name: "Кароліна Мировська", votes: 2},
		]
	}
},
{
	id: "kozak-sofiia-ieva", 
	name: 'Козак Софія-Єва', 
	specialty: 'Психологія', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1M8e_zS2VFtj20OYWCJ7wVoOvjJRA0obi', 
	votingData: {
		candidates: [
			{ name: "Козак Софія-Єва", votes: 3},
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
	id: "burilo-nataliia", 
	name: 'Бурило Наталія', 
	specialty: 'Етика-Політика-Економіка', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1yFE8QpxnSnQry9xX1iqswZoikLPm996n', 
	votingData: {
		candidates: [
			{ name: "Бурило Наталія", votes: 21},
			{ name: "Боднар Арсеній", votes: 10},
			{ name: "Колодій Таїсія", votes: 5},
			{ name: "Ільчишин Вікторія", votes: 2},
			{ name: "Паньків Ольга", votes: 1},
		]
	}
},
{
	id: "pakosh-nataliia", 
	name: 'Пакош Наталія', 
	specialty: 'Етика-Політика-Економіка', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1iISBLd0KXdOab_EZXYuDoE79QfDVxIyi', 
	votingData: {
		candidates: [
			{ name: "Пакош Наталія", votes: 17},
			{ name: "Лучишин Анастасія", votes: 15},
		]
	}
},
{
	id: "teglivets-dmitro", 
	name: 'Теглівець Дмитро', 
	specialty: 'Етика-Політика-Економіка', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/1zotnY-2e2z52pKkOoBWIboPxx8DZZScO', 
	votingData: {
		candidates: [
			{ name: "Теглівець Дмитро", votes: 25},
		]
	}
},
{
	id: "podola-ustim", 
	name: 'Подола Устим', 
	specialty: 'Етика-Політика-Економіка', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1Q5fj9FBDDmzoCt9pbvwAs_DqopG1QvzQ', 
	votingData: {
		candidates: [
			{ name: "Подола Устим", votes: 8},
		]
	}
      },
{
	id: "liubchenko-sofiia", 
	name: 'Любченко Софія', 
	specialty: 'Соціологія', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1gO_zdM8n_mRQFkKBXKLc0zDgDaG5Jnli', 
	votingData: {
		candidates: [
			{ name: "Любченко Софія", votes: 20},
		]
	}
},
{
	id: "khmel-nik-sofiia", 
	name: 'Хмельник Софія', 
	specialty: 'Соціологія', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1yg_pZCibrx_cVhPLfo4BFqluH2EpjKfZ', 
	votingData: {
		candidates: [
			{ name: "Хмельник Софія", votes: 11},
		]
	}
},
{
	id: "khmel-nik-sofiia", 
	name: 'Дубік Софія', 
	specialty: 'Журналістика', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/17xaP7KlBC8tNVzXERfQOaxr6CWo41Nzj', 
	votingData: {
		candidates: [
			{ name: "Дубік Софія", votes: 0},
		]
	}
      },
{
	id: "manuilenko-danilo", 
	name: 'Мануйленко Данило', 
	specialty: 'Публічне управління та адміністрування', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1hn-FRfgQqCvD1yYc_jjdIf64-yt5fiHX', 
	votingData: {
		candidates: [
			{ name: "Мануйленко Данило", votes: 4},
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
	id: "shimushovs-ka-khristina", 
	name: 'Шимушовська Христина', 
	specialty: "Комп'ютерні науки", 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1bi7HKzv_4G2udrRbtFZMhK4ETSjk_iDd', 
	votingData: {
		candidates: [
			{ name: "Шимушовська Христина", votes: 8},
			{ name: "Леськів Злата-Антоніна", votes: 7},
			{ name: "Якимащенко Артем", votes: 3},
		]
	}
},
{
	id: "magarita-iia", 
	name: 'Магарита Ія', 
	specialty: "Комп'ютерні науки", 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/19-ANtn2iZ-oHYI5olloWy8FnDHhsBMZa', 
	votingData: {
		candidates: [
			{ name: "Магарита Ія", votes: 11},
		]
	}
      },
{
	id: "lem-anastasiia", 
	name: 'Лем Анастасія', 
	specialty: 'ІТ та аналітика рішень', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1CNDpANet3HiGCuBXrr_oO133_cRje-_3', 
	votingData: {
		candidates: [
			{ name: "Лем Анастасія", votes: 9},
		]
	}
      },
      {
	id: "berezniuk-darina", 
	name: 'Березнюк Дарина', 
	specialty: 'Робототехніка', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1vsqiswTzB8xMhN0TGLpK11r8NpTiIQSO', 
	votingData: {
		candidates: [
			{ name: "Березнюк Дарина", votes: 10},
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
	id: "lutsik-vasil", 
	name: 'Луцик Василь', 
	specialty: 'Право', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1e7OfDmosJki5CGuQfuohHmVuQAcTb5Zg', 
	votingData: {
		candidates: [
			{ name: "Луцик Василь", votes: 28},
			{ name: "Муринюк Наталія", votes: 17},
		]
	}
},
{
	id: "lies-o-sofiia", 
	name: 'Лєсьо Софія', 
	specialty: 'Право', 
	course: 2, 
	photo: 'https://lh3.googleusercontent.com/d/1MYMvYe_ux1oILMXCuQMk88GEBT-Pvkue', 
	votingData: {
		candidates: [
			{ name: "Лєсьо Софія", votes: 9},
			{ name: "Качмар Марія Ігорівна", votes: 8},
			{ name: "Зохнюк Сабіна", votes: 4},
		]
	}
},
{
	id: "sierova-solomiia", 
	name: 'Сєрова Соломія', 
	specialty: 'Право', 
	course: 3, 
	photo: 'https://lh3.googleusercontent.com/d/1Ydg9hq-6cr9nglpLraGuU5LnMthmxjs6', 
	votingData: {
		candidates: [
			{ name: "Сєрова Соломія", votes: 15},
		]
	}
},
{
	id: "kavin-oleksii", 
	name: 'Кавин Олексій', 
	specialty: 'Право', 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1P4I_zTN3VTHrw6O4l_7Pyzpofu4_Gk_I', 
	votingData: {
		candidates: [
			{ name: "Кавин Олексій", votes: 5},
		]
	}
},
{
	id: "dovgun-ivan", 
	name: 'Довгун Іван', 
	specialty: 'Право (магістратура)', 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1FcjJkjWMeyiZA9zXXeD7rTT_x-0Xee5X', 
	votingData: {
		candidates: [
      { name: "Довгун Іван", votes: 6 },
      { name: "Дзядик Віталій", votes: 0 },
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
	id: "veronika-zakrevs-ka", 
	name: 'Вероніка Закревська', 
	specialty: "Богослов'я", 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/18qF3rn5whjYoWRuiCmZCtt3gnGVTGCGP', 
	votingData: {
		candidates: [
			{ name: "Вероніка Закревська", votes: 3},
		]
	}
},
{
	id: "pelin-o-valentina", 
	name: 'Пелиньо Валентина', 
	specialty: "Богослов'я", 
	course: 4, 
	photo: 'https://lh3.googleusercontent.com/d/1XMAJjiLQNiVvzgKmefW8SBgoWhBAkKok', 
	votingData: {
		candidates: [
			{ name: "Пелиньо Валентина", votes: 5},
		]
	}
      },
{
	id: "pelin-o-valentina", 
	name: 'Шутка Іван-Ростислав', 
	specialty: "Християнська педагогіка", 
	course: 1, 
	photo: 'https://lh3.googleusercontent.com/d/1vGb60nb0y8KNFevURf7ZDJeNHyECEOTg', 
	votingData: {
		candidates: [
			{ name: "Шутка Іван-Ростислав", votes: 0},
		]
	}
},

    ]
  }
];
