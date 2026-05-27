export type Category = 'Overview' | 'Biological Factors' | 'Environmental Factors' | 'Life Experiences' | 'Analysis' | 'Conclusion';

export interface BaseBlock {
  id: string;
  category: Category;
}

export interface SectionData extends BaseBlock {
  title: string;
  content: string[];
  quote?: string;
  keyTakeaways?: string[];
  cards?: { title: string; subtitle?: string; content: string }[];
}

export const filters: Category[] = [
  'Overview',
  'Biological Factors',
  'Environmental Factors',
  'Life Experiences',
  'Analysis',
  'Conclusion'
];

export const timelineEvents = [
  { year: '1861', title: 'Birth', description: 'José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. He was raised in an educated and intellectually supportive family environment.' },
  { year: '1872', title: 'Execution of GOMBURZA', description: 'Fathers Mariano Gomes, José Burgos, and Jacinto Zamora were executed by Spanish colonial authorities. This became a lasting symbol of colonial injustice in Rizal’s political consciousness.' },
  { year: '1877', title: 'Ateneo & UST Studies', description: 'Earned his Bachelor of Arts at Ateneo Municipal de Manila, then pursued Medicine at the University of Santo Tomas to help treat his mother’s failing eyesight.' },
  { year: '1882', title: 'Departure for Spain', description: 'Travelled to Madrid to continue his medical studies, eventually training in ophthalmology in Paris and Heidelberg. This broad European exposure significantly developed his political and intellectual perspectives.' },
  { year: '1887', title: 'Publication of Noli Me Tangere', description: 'Published in Berlin, his first novel exposed the abuses, corruption, and oppression in colonial society through literature, making Filipino suffering visible.' },
  { year: '1891', title: 'Publication of El Filibusterismo', description: 'Published in Ghent, his second novel presented a much stronger critique of injustice and was famously dedicated to the memories of GOMBURZA.' },
  { year: '1892', title: 'La Liga Filipina & Exile', description: 'Organized La Liga Filipina, a civic association for unity, education, commerce, and reform in Manila. Shortly after, he was arrested and deported to Dapitan, where he practiced medicine and engaged in community service.' },
  { year: '1896', title: 'Execution at Bagumbayan', description: 'Following imprisonment at Fort Santiago and a brief, controversial trial linking him to the Philippine Revolution, Rizal was executed by firing squad on December 30, becoming an immortal symbol of patriotic sacrifice.' },
];

export const sectionsData: SectionData[] = [
  {
    id: 'intro',
    category: 'Overview',
    title: 'Introduction',
    content: [
      "José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. He became known as a physician, novelist, intellectual, artist, educator, and patriot whose writings helped inspire the Philippine struggle against Spanish colonial rule.",
      "Rizal is most widely remembered for his novels Noli Me Tangere (1887) and El Filibusterismo (1891), portraying oppression, corruption, and Filipino suffering. Beyond writing, he founded La Liga Filipina in 1892 to promote Filipino unity, protection against injustice, education, and social reform.",
      "His life is historically important because it demonstrates how personal ability becomes meaningful when directed toward the welfare of others."
    ],
    quote: "José Rizal’s character and heroism were shaped by the interaction of his intellectual and artistic abilities, family upbringing, educational formation, exposure to colonial injustice, experiences abroad, and deliberate commitment to use writing, medicine, civic action, and personal sacrifice in defending Filipino dignity.",
  },
  {
    id: 'bio',
    category: 'Biological Factors',
    title: 'Biological Factors',
    content: [
      "Historical sources describe Rizal as a gifted student, poet, painter, sculptor, physician, and political thinker. While historical sources do not establish that these abilities were biologically inherited, they document artistic and intellectual capacities that became important foundations.",
      "These inherited traits and capacities became historically important solely because Rizal chose to direct them toward public concerns. His literary skill enabled him to portray suffering; his medical education to treat patients; and his analytical capacity to understand the social problems of colonial society.",
      "Rizal’s physical appearance does not provide a valid explanation for his heroism. A more historically supported physical influence in his life was his mother’s failing eyesight, which drove him to pursue medicine and specialize in ophthalmology."
    ],
    keyTakeaways: [
      "Inherited intellect and artistic skills provided the foundational tools for his writing and analysis.",
      "His mother's failing eyesight directly influenced his choice of medical specialization.",
      "Rizal’s abilities were directed towards a public purpose, demonstrating responsibility over mere talent."
    ]
  },
  {
    id: 'env',
    category: 'Environmental Factors',
    title: 'Environmental Factors',
    content: [
      "Rizal's family environment encouraged intellectual discipline, responsibility, and an appreciation for education. His mother, Teodora Alonso, was his first teacher, introducing him to learning before private tutors were hired.",
      "Education was among the strongest influences on his growth, shaping him into a scholar capable of examining Philippine society critically. He studied in Biñan, the Ateneo Municipal de Manila, the University of Santo Tomas, and later the Universidad Central de Madrid.",
      "His understanding of injustice was profoundly influenced by his family’s experiences and the broader colonial context. Teodora Alonso's unjust imprisonment and the traumatic execution of the GOMBURZA priests in 1872 cemented his awareness of systemic corruption and abuse under Spanish rule."
    ],
    cards: [
      { title: "Teodora Alonso", subtitle: "Mother & First Teacher", content: "Formed his early education. Her imprisonment exposed Rizal to colonial injustice early on." },
      { title: "GOMBURZA", subtitle: "Executed Priests (1872)", content: "Became enduring symbols of colonial injustice, deeply influencing his mature political consciousness." },
      { title: "Educational Institutions", subtitle: "Ateneo, UST, Madrid", content: "Strengthened his academic formation, directed him toward medicine, and expanded his intellectual perspective." }
    ]
  },
  {
    id: 'exp',
    category: 'Life Experiences',
    title: 'Life Experiences',
    content: [
      "Rizal's departure for Spain in 1882 exposed him to wider European academic environments. This broader basis for comparison strengthened his ability to evaluate colonial inequality back home.",
      "His writings, particularly Noli Me Tangere and El Filibusterismo, marked his emergence as a public critic. The novels made the suffering of Filipinos visible and impossible to ignore.",
      "Returning to the Philippines, he founded La Liga Filipina, shifting from written criticism to organized civic action. This led to his immediate arrest and exile to Dapitan.",
      "In Dapitan, Rizal demonstrated incredible resilience, practicing medicine, establishing a school, and building community infrastructure like a waterworks system. Even in isolation, he expressed patriotism through sustained service to ordinary people.",
      "His final imprisonment at Fort Santiago and subsequent execution at Bagumbayan represented the ultimate test of his character, turning his life into an enduring national symbol that the colonial government could not suppress."
    ],
    cards: [
      { title: "Experiences Abroad", subtitle: "1882-1887", content: "Broadened his political perspective and allowed him to write works portraying colonial abuses." },
      { title: "Exile in Dapitan", subtitle: "1892-1896", content: "Demonstrated resilience through practical public service: medicine, education, and civic projects." },
      { title: "Arrest & Execution", subtitle: "1896", content: "Faced martyrdom, permanently establishing him as an enduring symbol of national sacrifice." }
    ]
  },
  {
    id: 'character',
    category: 'Analysis',
    title: 'Character Analysis & Heroism',
    content: [
      "Rizal's character was defined by intellectual discipline, courage, compassion, resilience, and patriotism. He treated education as preparation for meaningful service, and used his professional skills to help others.",
      "He confronted injustice despite severe political danger, publishing subversive novels and founding a civic organization when reform was heavily restricted.",
      "He was not without limitations. His reformist strategy did not secure immediate political change, and his cautious position toward immediate armed revolution (as seen when Pio Valenzuela visited him) showed a concern for human life and preparation, though some viewed it as a limitation.",
      "His heroism lay in his sustained use of intellect, conscience, professional skill, civic action, and personal sacrifice to defend the dignity and welfare of Filipinos."
    ],
    keyTakeaways: [
      "Intellectual Discipline: Sustained commitment to learning and societal application.",
      "Courage & Resilience: Facing hostility, imprisonment, and exile while remaining productive.",
      "Calculated Restraint: Opposed immediate armed uprising due to concern for widespread destruction."
    ]
  },
  {
    id: 'conclusion',
    category: 'Conclusion',
    title: 'Conclusion & Legacy',
    content: [
      "José Rizal’s development as a patriot and hero resulted from the interaction of personal ability and environmental influence. His character was formed through family guidance, formal education, encounters with injustice, and moral choices in moments of danger.",
      "His legacy remains vital today. The values connected with his life—critical thinking, professional responsibility, compassion, resistance to injustice, and civic participation—continue to be relevant.",
      "For modern generations, Rizal’s life offers a continuing challenge: Intelligence becomes valuable when used responsibly, and patriotism becomes genuine when expressed through integrity, service, and courage."
    ],
    quote: "José Rizal became a hero because he transformed knowledge into conscience, conscience into service, and service into a lasting commitment to the dignity and freedom of the Filipino nation."
  }
];

export const references = [
  "Intramuros Administration. (n.d.). Museo ni Rizal.",
  "National Historical Commission of the Philippines. (n.d.). Various historical markers and registry entries (Dapitan, Ateneo, Gomburza, Execution site).",
  "Ravin, T. B. (2001). José Rizal: Philippine national hero and ophthalmologist. Archives of Ophthalmology, 119(2), 280–284.",
  "Republic of the Philippines. (1956). Republic Act No. 1425 (Rizal Law).",
  "Rizal, J. (1912). The reign of greed: A complete English version of El Filibusterismo. Philippine Education Company.",
  "Sutherland, D. (2025). José Rizal. Singapore Infopedia, National Library Board."
];
