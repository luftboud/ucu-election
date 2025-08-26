export interface VotingCandidate {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Position {
  id: string;
  specialty: string;
  course: number;
  candidates: VotingCandidate[];
}

export interface CandidatesFaculty {
  id: string;
  name: string;
  positions: Position[];
}

export const allCandidatesData: CandidatesFaculty[] = [
	{
	id: 'philosophy-theology',
	name: 'Філософсько-Богословський',
	positions: [
]},
{
	id: 'humanities',
	name: 'Гуманітарний',
	positions: [
		{
		id: 'humanities-philology-1',
		specialty: 'Філологія',
		course: 1,
		candidates: [
			{
			id: '1',
			name: 'Степан Бандера',
			description: 'текст дуже дуже довгий і мотиваційний',
			image: 'https://lh3.googleusercontent.com/d/1LpJIBhkpLfncXiHIIyEF5_4kKAISUkUT'
			},
		]},
		{
		id: 'humanities-future-heritage-1',
		specialty: 'Майбутнє спадщини',
		course: 1,
		candidates: [
			{
			id: '3',
			name: 'Лесь Танюк',
			description: 'філософія, психологія, головне - залишатись людиною і кричіть Я ЖИВИИИй',
			image: 'https://lh3.googleusercontent.com/d/1_grjWH0muFcvRE5blqxmQy8qaO-8LjyW'
			},
		]},
]},
{
	id: 'social-sciences',
	name: 'Суспільних Наук',
	positions: [
		{
		id: 'social-sciences-ethics-politics-economics-2',
		specialty: 'Етика-політика-економіка',
		course: 2,
		candidates: [
			{
			id: '2',
			name: 'Василь Стус',
			description: 'мотивація але епе',
			image: 'https://lh3.googleusercontent.com/d/12gbAE9pnbIoM39JfyPa9l-UZ1D3_pEts'
			},
		]},
]},
{
	id: 'health-sciences',
	name: 'Наук про Здоровʼя',
	positions: [
]},
{
	id: 'applied-sciences',
	name: 'Прикладних Наук',
	positions: [
]},
{
	id: 'law',
	name: 'Права',
	positions: [
]},
{
	id: 'business-school',
	name: 'Бізнес-школа',
	positions: [
]},

];

// Helper functions to extract data for different use cases
export const getCandidatesForPosition = (
  facultyId: string, 
  specialty: string, 
  course: number
): VotingCandidate[] => {
  const faculty = allCandidatesData.find(f => f.id === facultyId);
  if (!faculty) return [];
  
  const position = faculty.positions.find(p => 
    p.specialty === specialty && p.course === course
  );
  return position ? position.candidates : [];
};

export const getPositionsByFaculty = (facultyId: string): Position[] => {
  const faculty = allCandidatesData.find(f => f.id === facultyId);
  return faculty ? faculty.positions : [];
};
